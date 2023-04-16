import { fetchMarkdownPostsFromIPFS } from "$lib/util/util.js";
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const allPosts = await fetchMarkdownPostsFromIPFS();

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    return json(sortedPosts);
}