<script>
    export let data;
</script>

<div class="w-full text-white mt-32 w-full">
    <div class="mt-8 flex flex-col w-full max-w-[1024px] mx-auto space-y-12">
        {#each data.posts as post}
            <a href="{post.path}" class="flex flex-col bg-gray-700/30 rounded-lg p-8 md:p-12">
                <h2 class="monument-extended text-3xl xs:text-5xl md:text-7xl line-clamp-2">{post.meta.title}</h2>
                <p class="max-h-[140px] text-lg my-6 line-clamp-3">{post.meta.brief}</p>
                <img class="rounded-lg h-[300px] object-cover h-[300px] w-full" src="{post.meta.image}" alt="{post.meta.title}" />
                <p class="text-gray-500 text-sm mt-6 ml-auto">{post.meta.date}</p>
            </a>
        {/each}
    </div>
</div>