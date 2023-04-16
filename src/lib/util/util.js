import { ethers } from "ethers";
import { create } from "ipfs-http-client";
import parseMD from 'parse-md';

export const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
}

export const fetchMarkdownPostsFromIPFS = async () => {
    const cid = await getCurrentCID();

    let ipfs = create({ url: "https://dweb.link" });

    let files = [];
    let resp = await ipfs.ls(cid);
    for await (const file of resp) {
        let content = [];
        
        const resp2 = await ipfs.cat(file.cid);
        for await (const chunk of resp2) {
            content = [...content, ...chunk];
        }

        const buffer = Buffer.from(content).toString('utf8');
        const { metadata } = parseMD(buffer);

        const postPath = "/blog/" + (file.name).split(".")[0];

        files.push({ 
            meta: metadata,
            path: postPath
        });
    }

    return files;
}

export const getCurrentCID = async () => {
    const address = "0x70aa59bD0643097D60E0770c7d203dD0d8CdB36E";
    const abi = ["function cid() public view returns (string)"];
    const iface = new ethers.Interface(abi);
    const provider = new ethers.JsonRpcProvider("https://rpc.tomochain.com/");
    const contract = new ethers.Contract(address, iface, provider);

    const cid = await contract.cid();

    return cid;
}