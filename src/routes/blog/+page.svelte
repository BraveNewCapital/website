<script>
    export let data;

    import date from 'date-and-time';
</script>

<div class="w-full text-white mt-32 w-full">
    <div class="mt-8 flex flex-col w-full max-w-[1024px] mx-auto space-y-12">
        {#each data.posts as post}
            <a href="{post.path}" class="flex flex-col bg-gray-700/30 hover:bg-gray-700/40 rounded-lg p-8 md:p-16">
                <h2 class="monument-extended text-3xl xs:text-5xl md:text-7xl">{post.meta.title}</h2>
                <p class="max-h-[140px] text-xl my-6 line-clamp-2 leading-9">{post.meta.brief}</p>
                <img class="rounded-lg w-full max-h-[370px] object-cover w-full" src="{post.meta.image}" alt="{post.meta.title}" />
                <p class="text-gray-500 text-sm mt-6 ml-auto">{date.format(date.parse(post.meta.date, 'YYYY-MM-DD'), 'ddd, MMM DD YYYY')}</p>
            </a>
        {/each}
    </div>
</div>