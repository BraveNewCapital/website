<script>
    export let data;

    import date from 'date-and-time';
	import SvelteMarkdown from 'svelte-markdown';
	import { fade } from 'svelte/transition';

    const getMD = async () => {
        return data.content;
    }
</script>

<svelte:head>
  <title>Brave New Capital - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<article class="text-white mt-32" in:fade>
    <h1 class="monument-extended text-5xl md:text-7xl">{data.title}</h1>
    <img class="rounded-lg max-h-[430px] object-cover w-full my-4" src="{data.image}" alt="{data.title}" />
    <p class="text-gray-500 text-sm">{date.format(date.parse(data.date, 'YYYY-MM-DD'), 'ddd, MMM DD YYYY')}</p>
    <p class="text-gray-500 text-sm">by {data.author}</p>

    <div class="content my-8">
        {#await getMD() then source}
            <SvelteMarkdown {source} />
        {/await}
    </div>
</article>

<section class="text-white my-8" in:fade>
    <h1 class="monument-extended text-4xl md:text-5xl mb-8">Read More</h1>
    <div class="space-y-8">
        {#each data.related as article}
            <a href="{article.path}" class="flex flex-col md:flex-row">
                <img class="rounded-lg w-full md:w-[248px] h-[248px] md:h-[186px] object-cover" src="{article.meta.image}" alt="{article.meta.title}" />
                <div class="flex flex-col w-full md:px-4 h-[186px] mt-4 md:mt-0">
                    <h2 class="monument-extended text-2xl md:text-4xl line-clamp-1">{article.meta.title}</h2>
                    <p class="line-clamp-3 my-4 text-lg leading-8">{article.meta.brief}</p>
                    <p class="text-sm text-gray-500">{date.format(date.parse(article.meta.date, 'YYYY-MM-DD'), 'ddd, MMM DD YYYY')}</p>
                </div>
            </a>
        {/each}
    </div>
</section>