<script>
	import LinearVaporwave from "$lib/components/background/LinearVaporwave.svelte";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

    let ready = false;

    onMount(() => {
        ready = true;
    })
</script>

<style>
    h1 {
        filter: drop-shadow(0 1px 3px);
    }

    .layers::before, .layers::after {
        content: attr(data-text);
        position: absolute;
        width: 100%;
    }

    .layers::before {
        top: -3px;
        left: -3px;
        z-index: 1;
        color: #03ffff;
        mix-blend-mode: lighten;
    }

    .layers::after {
        top: 3px;
        left: 5px;
        z-index: -1;
        color: #f14bfa;
        mix-blend-mode: lighten;
    }

    .glitch {
        mix-blend-mode: lighten;
    }
</style>

<svelte:head>
    <meta name="description" content="BraveNew.Capital is a pioneering technology company focused on revolutionising the digital landscape by developing innovative, secure, and decentralised trust solutions. By harnessing cutting-edge research and advanced algorithms, our groundbreaking Open Reputation Kit (ORK) offers a universal trust scoring system that seamlessly integrates across platforms and applications. Our mission is to empower individuals and organisations in the rapidly evolving world of web3, NFTs, and DeFi, fostering a secure and transparent environment for online interactions and transactions.">
    <meta property="og:title" content="Brave New Capital" />
    <meta property="og:description" content="BraveNew.Capital is a pioneering technology company focused on revolutionising the digital landscape by developing innovative, secure, and decentralised trust solutions. By harnessing cutting-edge research and advanced algorithms, our groundbreaking Open Reputation Kit (ORK) offers a universal trust scoring system that seamlessly integrates across platforms and applications. Our mission is to empower individuals and organisations in the rapidly evolving world of web3, NFTs, and DeFi, fostering a secure and transparent environment for online interactions and transactions.">
    <meta property="og:image" content="https://bravenew.capital/img/BNC.webp">
    <meta property="og:url" content="https://bravenew.capital/">
</svelte:head>

<section class="flex min-h-full w-full text-white m-auto bg-[#00000000]">
    <div class="h-full w-full m-auto flex min-h-[600px]">
        <div class="absolute left-0 min-h-[600px] h-[95%] w-full overflow-hidden pointer-events-all">
            <LinearVaporwave />
        </div>
        <div class="flex flex-col full-height w-full text-center z-[2] mx-auto pointer-events-none">
            {#if ready}
                <div class="flex flex-col my-auto" in:fade={{ delay: 200, duration: 800 }}>
                    <div class="text-5xl xs:text-6xl sm:text-8xl md:text-8xl lg:text-9xl -rotate-6">
                        <h1 class="glitch nosignal layers text-white/80 max-w-[420px] sm:max-w-[600px] md:max-w-[700px] mx-auto" data-text="Brave New Capital">Brave New Capital</h1>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</section>

<section class="space-y-12">
    <div class="text-white text-lg w-full md:w-1/2">
        <h2 class="text-2xl font-bold mb-2 monument-extended">Truly decentralised philosophy</h2>
        <p>Our philosophy of decentralisation leads us to take a bottom up approach to architecture reflects our commitment to building a more equitable and just future, where decentralized identity and trust systems provide the tools and resources needed for individuals and communities to take control of their digital lives. We believe that everyone has the right to privacy, security, and self-determination, and that decentralized systems are the key to unlocking that potential. Join us on our mission to build a self sovereign future for all.</p>
    </div>

    <div class="text-white text-lg md:text-right w-full md:w-1/2 md:ml-auto">
        <h2 class="text-2xl font-bold mb-2 monument-extended">Brave New Movement</h2>
        <p>At BraveNewCapital, we're not just building technology, we're building a movement. Our belief that decentralized identity and trust systems are the key to a more free and prosperous future. Join us on our mission to empower individuals and cooperates alike with a self-sovereign approach to identity, trust & reputation.<br/>Contact us today to learn more about how you can get involved. Trust the decentralized future with BraveNewCapital.</p>
    </div>
</section>