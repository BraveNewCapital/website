<script>
	import LinearVaporwave from "$lib/components/background/LinearVaporwave.svelte";
    import currentYear from "current-year";
</script>

<style>
    .text-shadow {
        text-shadow: 1px 1px 6px #ffffff;
    }
</style>

<main class="flex flex-col max-w-[1280px] m-auto px-6">
    <nav class="fixed top-0 left-0 right-0 mx-auto z-[2] backdrop-blur text-white py-1 border-b-[1px] border-gray-700">
        <div class="flex text-md px-2 space-x-6 w-full max-w-[1280px] mx-auto">
            <a class="flex flex-col font-bold text-4xl my-auto" href="/">
                <h1 class="tracking-widest p-2">BNC</h1>
            </a>
            <div class="my-auto w-full">
                <div class="hidden sm:block space-x-4">
                    <a href="/">Projects</a>
                    <a href="/">Careers</a>
                    <a href="/">Mission</a>
                </div>
            </div>
            <div class="flex">
                <button class="ml-auto pr-2">Connect</button>
            </div>
        </div>
    </nav>
    <section class="flex h-screen w-full min-h-[500px] text-white m-auto bg-[#00000000]">
        <div class="absolute left-0 h-[85%] w-full z-[1] overflow-hidden pointer-events-all">
            <LinearVaporwave />
        </div>
        <div class="flex flex-col h-screen w-full text-center z-[2] mx-auto pointer-events-none">
            <div class="flex flex-col mt-auto mb-[50px]">
                <div class="text-4xl sm:text-5xl md:text-6xl">
                    <h1 class="text-shadow">Brave New Capital</h1>
                </div>
                <p class="text-md mt-4 font-light">Remixing classic crypto concepts with cutting edge cryptographic techniques.</p>
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
</main>

<footer class="flex bottom-0 mt-16 h-12">
    <p class="text-xs text-gray-500 m-auto">© {currentYear()} Brave New Capital, DAO.</p>
</footer>