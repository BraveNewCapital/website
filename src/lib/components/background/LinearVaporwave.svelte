<script>
    import * as dat from "lil-gui";
    import * as THREE from "three";
    import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
    import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
    import { GammaCorrectionShader } from "three/examples/jsm/shaders/GammaCorrectionShader.js";
    import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
    import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
    import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";
    import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
	import { onMount } from "svelte";
    import { clamp } from "$lib/util/util.js";

    let canvas;

    onMount(() => {
        const gui = new dat.GUI();
        //gui.hide();
        gui.close();
        gui.reset();
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);
        const fog = new THREE.FogExp2("#000000", 1.2);
        scene.fog = fog;

        const textureLoader = new THREE.TextureLoader();
        const gridTexture = textureLoader.load("/img/grid-white.png");
        const heightTexture = textureLoader.load("/img/displacement.png");
        const metalnessTexture = textureLoader.load("/img/metalness.png");

        gridTexture.minFilter = THREE.LinearMipmapLinearFilter;
        gridTexture.magFilter = THREE.LinearFilter;

        heightTexture.minFilter = THREE.LinearMipmapLinearFilter;
        heightTexture.magFilter = THREE.LinearFilter;

        metalnessTexture.minFilter = THREE.LinearMipmapLinearFilter;
        metalnessTexture.magFilter = THREE.LinearFilter;

        const parameters = {
            displacementScale: 0.4,
            metalness: 1,
            roughness: 0.8
        };

        const geometry = new THREE.PlaneGeometry(1, 2, 24, 24);
        const material = new THREE.MeshStandardMaterial({
            map: gridTexture,
            displacementMap: heightTexture,
            displacementScale: parameters.displacementScale,
            metalness: parameters.metalness,
            metalnessMap: metalnessTexture,
            roughness: parameters.roughness
        });
        const plane = new THREE.Mesh(geometry, material);
        const plane2 = new THREE.Mesh(geometry, material);

        plane.rotation.x = -Math.PI * 0.5;
        plane2.rotation.x = -Math.PI * 0.5;

        plane.position.y = 0.0;
        plane.position.z = 0.15;
        plane2.position.y = 0.0;
        plane2.position.z = -1.85;
        scene.add(plane);
        scene.add(plane2);

        gui.add(material, "displacementScale").min(0).max(5).step(0.001).name("Terrain intensity");
        gui.add(material, "metalness", 0, 1, 0.0001).name("Material metalness");
        gui.add(material, "roughness", 0, 1, 0.0001).name("Material roughness");

        const ambientLight = new THREE.AmbientLight("#ffffff", 10);
        scene.add(ambientLight);
        gui.add(ambientLight, "intensity").min(0).max(100).step(0.001).name("AmbientLight intensity");
        gui.addColor(ambientLight, "color").name("AmbientLight color");

        const spotlight = new THREE.SpotLight(
            "#03ffff",
            40,
            25,
            Math.PI * 0.1,
            0.25
        );

        spotlight.position.set(0.5, 0.75, 2.1);
        spotlight.target.position.x = -0.25;
        spotlight.target.position.y = 0.25;
        spotlight.target.position.z = 0.25;
        scene.add(spotlight);
        scene.add(spotlight.target);

        const spotlight2 = new THREE.SpotLight(
            "#f14bfa",
            40,
            25,
            Math.PI * 0.1,
            0.25
        );

        spotlight2.position.set(-0.5, 0.75, 2.1);
        spotlight2.target.position.x = 0.25;
        spotlight2.target.position.y = 0.25;
        spotlight2.target.position.z = 0.25;
        scene.add(spotlight2);
        scene.add(spotlight2.target);

        gui.add(spotlight, "intensity").min(0).max(50).step(0.001).name("Spotlight 1 intensity");
        gui.add(spotlight2, "intensity").min(0).max(50).step(0.001).name("Spotlight 2 intensity");

        gui.addColor(spotlight, "color").name("Spotlight 1 color");
        gui.addColor(spotlight2, "color").name("Spotlight 2 color");

        gui.add(spotlight.position, "x").min(-15).max(15).step(0.01).name("Spotlight 1 X");
        gui.add(spotlight.position, "y").min(-2).max(15).step(0.01).name("Spotlight 1 Y");
        gui.add(spotlight.position, "z").min(-15).max(15).step(0.01).name("Spotlight 1 Z");

        gui.add(spotlight2.position, "x").min(-15).max(15).step(0.01).name("Spotlight 2 X");
        gui.add(spotlight2.position, "y").min(-2).max(15).step(0.01).name("Spotlight 2 Y");
        gui.add(spotlight2.position, "z").min(-15).max(15).step(0.01).name("Spotlight 2 Z");

        const sizes = {
            width: window.innerWidth,
            height: canvas.parentElement.clientHeight
        };

        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.01,
            20
        );
        camera.position.x = 0.0;
        camera.position.y = 0.075;
        camera.position.z = 1.1;

        let target = new THREE.Vector3(0, 0, 0);

        gui.add(camera, "near").min(0).max(10).step(0.1).onChange(() => camera.updateProjectionMatrix()).name("Camera Near");
        gui.add(camera, "far").min(0).max(100).step(0.1).onChange(() => camera.updateProjectionMatrix()).name("Camera Far");
        gui.add(camera, "fov").min(0).max(180).step(0.1).onChange(() => camera.updateProjectionMatrix()).name("Camera FOV");
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(2);

        gridTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        const effectComposer = new EffectComposer(renderer);
        effectComposer.setSize(sizes.width, sizes.height);
        effectComposer.setPixelRatio(2);

        const renderPass = new RenderPass(scene, camera);
        effectComposer.addPass(renderPass);

        const rgbShiftPass = new ShaderPass(RGBShiftShader);
        rgbShiftPass.uniforms["amount"].value = 0.00015;
        gui.add(rgbShiftPass.uniforms["amount"], "value").min(0).max(0.01).step(0.00001).name("RGBShift intensity");
        effectComposer.addPass(rgbShiftPass);

        const gammaCorrectionPass = new ShaderPass(GammaCorrectionShader);
        effectComposer.addPass(gammaCorrectionPass);

        const fxaaPass = new ShaderPass(FXAAShader);
        fxaaPass.material.uniforms['resolution'].value.x = 1 / (sizes.width * renderer.getPixelRatio());
		fxaaPass.material.uniforms['resolution'].value.y = 1 / (sizes.height * renderer.getPixelRatio());
        effectComposer.addPass(fxaaPass);

        let bloomParams = {
            strength: 0.2
        };

        const bloomPass = new UnrealBloomPass();
        bloomPass.strength = bloomParams.strength;

        gui.add(bloomParams, "strength", 0.0, 3.0).onChange((value) => {
            bloomPass.strength = Number(value);
        }).name("Bloom Strength");

        effectComposer.addPass(bloomPass);

        let mouse = new THREE.Vector2();
        canvas.parentElement.addEventListener('mousemove', (e) => {
            mouse.x = (e.clientX / sizes.width) * 2 - 1;
            mouse.y = -(e.clientY / sizes.height) * 2 + 1;
        }, false);

        window.addEventListener("resize", () => {
            sizes.width = window.innerWidth;
            sizes.height = canvas.parentElement.clientHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(2);

            effectComposer.setSize(sizes.width, sizes.height);
            effectComposer.setPixelRatio(2);
        });

        const speed = {
            value: 0.15
        }
        gui.add(speed, "value").min(0).max(0.5).step(0.01).name("Speed");

        const clock = new THREE.Clock();
        const tick = () => {
            const elapsedTime = clock.getElapsedTime();

            plane.position.z = (elapsedTime * speed.value) % 2;
            plane2.position.z = ((elapsedTime * speed.value) % 2) - 2;

            const max = 0.1;

            // Set an easing factor
            const easing = 0.001;

            // Calculate the difference between the current target.x and the mouse.x position
            const dx = mouse.x - target.x;

            // Apply the easing function to the difference
            const easedDx = dx * easing;

            // Update the target.x position by adding the eased difference
            target.x += easedDx;

            // Repeat the above steps for target.y
            const dy = -mouse.y - target.y;
            const easedDy = dy * easing;
            target.y -= easedDy;

            // Clamp the target.x and target.y values
            target.x = clamp(target.x, -max, max);
            target.y = clamp(target.y, -max, max);

            // Set the z position to 0
            target.z = 0;

            // Set the camera to look at the target
            camera.lookAt(target);

            effectComposer.render();

            window.requestAnimationFrame(tick);
        };

        tick();
    });
</script>

<canvas bind:this={canvas} class=""></canvas>