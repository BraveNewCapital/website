export async function load({ params, fetch }){
    const post = await import(`../posts/${params.slug}.md`);
    const { title, date, author, image } = post.metadata;
    const content = post.default;

    const response = await fetch(`/api/posts`);
    const posts = await response.json();

    const related = posts.filter(post => post && post.meta.title !== title).slice(0, 3);

    return {
        content,
        title,
        date,
        author,
        image,
        related
    }
}