<script>
    import { Hamburger } from 'svelte-hamburgers';
	import MobileNav from './MobileNav.svelte';
	import { fade, slide } from 'svelte/transition';

    let open;

    let toggle = () => {
        open = !open;
    }
</script>

<nav class="fixed top-0 left-0 right-0 mx-auto z-[12] backdrop-blur text-white py-1 border-b-[1px] border-gray-700" in:fade={{ delay: 200, duration: 300 }}>
    <div class="flex text-md px-2 space-x-6 w-full max-w-[1280px] mx-auto">
        <a class="flex flex-col font-bold text-4xl my-auto" href="/">
            <h2 class="tracking-widest p-2">BNC</h2>
        </a>
        <div class="my-auto w-full">
            <div class="hidden sm:block space-x-4">
                <a href="/">Projects</a>
                <a href="/">Careers</a>
                <a href="/">Mission</a>
            </div>
        </div>
        <div class="flex">
            <button class="ml-auto pr-2 hidden sm:block">Connect</button>
            <div class="sm:hidden my-auto pr-2">
                <Hamburger bind:open --color="white" --padding={"0px"} />
            </div>
        </div>
    </div>
</nav>

{#if open}
    <MobileNav toggle={toggle} />
{/if}