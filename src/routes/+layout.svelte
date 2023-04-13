<script>
	import '../app.postcss';
	import Navbar from "$lib/components/navigation/Navbar.svelte";
	import { onMount } from 'svelte';

	let ready = false;

    onMount(() => {
        ready = true;
    })
</script>

<main class="flex flex-col h-full max-w-[1280px] m-auto px-6">
    {#if ready}
        <Navbar />
    {/if}

	<slot />
</main>