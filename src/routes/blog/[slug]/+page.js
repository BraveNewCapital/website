import parseMD from 'parse-md';
import { getCurrentCID } from '$lib/util/util';

export async function load({ params, fetch }) {
    const cid = await getCurrentCID();
    const file = await fetch(`https://dweb.link/ipfs/${cid}/${params.slug}.md`);
    const post = parseMD(await file.text());

    const { title, brief, date, author, image } = post.metadata;
    const content = post.content;

    const response = await fetch(`/api/posts`);
    const posts = await response.json();

    const related = posts.filter(post => post && post.meta.title !== title).slice(0, 3);

    return {
        content,
        title,
        brief,
        date,
        author,
        image,
        related
    }
}