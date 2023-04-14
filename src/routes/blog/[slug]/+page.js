// src/routes/blog/[slug]/+page.js
export async function load({ params }){
    const post = await import(`../posts/${params.slug}.md`);
    const { title, date, author, image } = post.metadata;
    const content = post.default;
  
    return {
        content,
        title,
        date,
        author,
        image
    }
}