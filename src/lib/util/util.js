export const clamp = (num, min, max) => {
    return num <= min ? min : num >= max ? max : num;
}

export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);
    
    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();

            let splitPath = path.split("/");
            const postPath = "/blog/" + splitPath[splitPath.length - 1].split(".")[0];

            return {
                meta: metadata,
                path: postPath,
            }
        })
    );
  
    return allPosts;
}