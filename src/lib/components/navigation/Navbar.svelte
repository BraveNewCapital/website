<script>
    import { Hamburger } from 'svelte-hamburgers';
	import MobileNav from './MobileNav.svelte';
	import { fade } from 'svelte/transition';
    import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

    let open;
    let navbar;

    let toggle = () => {
        open = !open;
    }

    $: open, navbar ? open ? disableBodyScroll(navbar) : enableBodyScroll(navbar) : null;
</script>

<svelte:window on:resize={() => open = false} />

<nav bind:this={navbar} class="fixed top-0 left-0 right-0 mx-auto z-[12] backdrop-blur text-white py-1 border-b-[1px] border-gray-700" in:fade={{ delay: 200, duration: 300 }}>
    <div class="flex text-md px-2 space-x-6 w-full max-w-[1280px] mx-auto">
        <a class="flex flex-col font-bold text-4xl my-auto" href="/">
            <h2 class="tracking-widest p-2">BNC</h2>
        </a>
        <div class="my-auto w-full">
            <div class="hidden sm:block space-x-6 ml-8">
                <a class="underline-offset-8 decoration-2 hover:underline" href="/">Projects</a>
                <a class="underline-offset-8 decoration-2 hover:underline" href="/">Careers</a>
                <a class="underline-offset-8 decoration-2 hover:underline" href="/">Mission</a>
            </div>
        </div>
        <div class="flex">
            <button class="border-2 rounded-lg ml-auto px-4 h-[40px] hidden sm:block my-auto hover:bg-white hover:text-black">Connect</button>
            <div class="sm:hidden my-auto pr-2">
                <Hamburger bind:open --color="white" --padding={"0px"} />
            </div>
        </div>
    </div>
</nav>

{#if open}
    <MobileNav toggle={toggle} />
{/if}