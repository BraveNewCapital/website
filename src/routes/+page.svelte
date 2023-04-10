<script>
	import LinearVaporwave from "$lib/components/background/LinearVaporwave.svelte";
    import currentYear from "current-year";
	import Navbar from "$lib/components/navigation/Navbar.svelte";
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

<main class="flex flex-col h-full max-w-[1280px] m-auto px-6">
    {#if ready}
        <Navbar />
    {/if}

    <section class="flex min-h-full w-full text-white m-auto bg-[#00000000]">
        <div class="h-full w-full m-auto flex min-h-[600px]">
            <div class="absolute left-0 min-h-[600px] h-[95%] w-full overflow-hidden pointer-events-all">
                <LinearVaporwave />
            </div>
            <div class="flex flex-col full-height w-full text-center z-[2] mx-auto pointer-events-none">
                <div class="h-screen max-h-full min-h-[600px] flex">
                    {#if ready}
                        <div class="flex flex-col m-auto" in:fade={{ delay: 200, duration: 800 }}>
                            <div class="text-5xl xs:text-6xl sm:text-8xl md:text-8xl lg:text-9xl -rotate-6">
                                <h1 class="glitch layers text-white/80 max-w-[420px] sm:max-w-[600px] md:max-w-[700px] mx-auto" data-text="Brave New Capital">Brave New Capital</h1>
                            </div>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </section>

    <section class="space-y-12">
        <div class="text-white text-lg w-full md:w-1/2">
            <h2 class="text-2xl font-bold mb-2">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci dapibus ultrices in iaculis nunc. Auctor eu augue ut lectus arcu. Ut aliquam purus sit amet luctus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Mollis nunc sed id semper risus. Maecenas volutpat blandit aliquam etiam. Nisi vitae suscipit tellus mauris. Congue quisque egestas diam in arcu cursus euismod quis viverra. Erat imperdiet sed euismod nisi porta. Venenatis urna cursus eget nunc scelerisque viverra. Dignissim enim sit amet venenatis urna cursus eget nunc. Tincidunt vitae semper quis lectus nulla at volutpat. Malesuada fames ac turpis egestas maecenas pharetra.</p>
        </div>

        <div class="text-white text-lg md:text-right w-full md:w-1/2 md:ml-auto">
            <h2 class="text-2xl font-bold mb-2">Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci dapibus ultrices in iaculis nunc. Auctor eu augue ut lectus arcu. Ut aliquam purus sit amet luctus. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Mollis nunc sed id semper risus. Maecenas volutpat blandit aliquam etiam. Nisi vitae suscipit tellus mauris. Congue quisque egestas diam in arcu cursus euismod quis viverra. Erat imperdiet sed euismod nisi porta. Venenatis urna cursus eget nunc scelerisque viverra. Dignissim enim sit amet venenatis urna cursus eget nunc. Tincidunt vitae semper quis lectus nulla at volutpat. Malesuada fames ac turpis egestas maecenas pharetra.</p>
        </div>
    </section>

    <footer class="flex bottom-0">
        
        <div class="flex flex-col mt-16 mb-12 m-auto">
            <p class="text-xs text-gray-500 m-auto">© {currentYear()} Brave New Capital, DAO.</p>
        </div>
    </footer>
</main>