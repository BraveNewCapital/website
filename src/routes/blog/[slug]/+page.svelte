<!-- src/routes/[slug]/+page.svelte -->
<script>
    export let data;
</script>

<svelte:head>
  <title>Brave New Capital - {data.title}</title>
  <meta property="og:title" content={data.title} />
</svelte:head>

<article class="text-white mt-32">
    <h1 class="monument-extended text-5xl md:text-7xl">{data.title}</h1>
    <img class="rounded-lg h-[300px] object-cover h-[300px] w-full my-4" src="{data.image}" alt="{data.title}" />
    <p class="text-gray-500 text-sm">Published: {data.date}</p>
    <p class="text-gray-500 text-sm">by {data.author}</p>

    <div class="content my-8">
        <svelte:component this={data.content} />
    </div>
</article>