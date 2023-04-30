<script>
    export let data;

    import date from 'date-and-time';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
    <meta name="description" content="BraveNew.Capital is a pioneering technology company focused on revolutionising the digital landscape by developing innovative, secure, and decentralised trust solutions. By harnessing cutting-edge research and advanced algorithms, our groundbreaking Open Reputation Kit (ORK) offers a universal trust scoring system that seamlessly integrates across platforms and applications. Our mission is to empower individuals and organisations in the rapidly evolving world of web3, NFTs, and DeFi, fostering a secure and transparent environment for online interactions and transactions.">
    <meta property="og:title" content="Brave New Capital" />
    <meta property="og:description" content="BraveNew.Capital is a pioneering technology company focused on revolutionising the digital landscape by developing innovative, secure, and decentralised trust solutions. By harnessing cutting-edge research and advanced algorithms, our groundbreaking Open Reputation Kit (ORK) offers a universal trust scoring system that seamlessly integrates across platforms and applications. Our mission is to empower individuals and organisations in the rapidly evolving world of web3, NFTs, and DeFi, fostering a secure and transparent environment for online interactions and transactions.">
    <meta property="og:image" content="https://bravenew.capital/img/BNC.webp">
    <meta property="og:url" content="https://bravenew.capital/">
</svelte:head>

<div class="w-full text-white mt-32">
    <div class="mt-8 flex flex-col w-full max-w-[1024px] mx-auto space-y-12">
        {#each data.posts as post}
            <a href="{post.path}" class="flex flex-col bg-gray-700/30 hover:bg-gray-700/40 rounded-lg p-8 md:p-16" in:fade>
                <h2 class="monument-extended text-2xl xs:text-2xl md:text-7xl break-words">{post.meta.title}</h2>
                <p class="max-h-[140px] text-md md:text-xl my-6 line-clamp-2 leading-9">{post.meta.brief}</p>
                <img class="rounded-lg w-full max-h-[370px] object-cover w-full" src="{post.meta.image}" alt="{post.meta.title}" />
                <p class="text-gray-500 text-sm mt-6 ml-auto">{date.format(date.parse(post.meta.date, 'YYYY-MM-DD'), 'ddd, MMM DD YYYY')}</p>
            </a>
        {/each}
    </div>
</div>