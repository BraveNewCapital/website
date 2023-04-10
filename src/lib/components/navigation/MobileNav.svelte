<script>
	import { fade, slide } from "svelte/transition";

    export let toggle;
</script>

<div class="fixed left-0 top-0 h-screen w-screen bg-black/90 z-[10] backdrop-blur" in:fade={{ duration: 200 }} out:fade>
    <div class="text-white h-full flex flex-col text-4xl text-center" transition:slide|local>
        <div class="flex flex-col m-auto space-y-8">
            <a href="/" on:click={toggle}>Projects</a>
            <a href="/" on:click={toggle}>Careers</a>
            <a href="/" on:click={toggle}>Mission</a>

            <button class="" on:click={toggle}>Connect</button>
        </div>
    </div>
</div>