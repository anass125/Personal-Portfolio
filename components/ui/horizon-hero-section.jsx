"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as THREE from "three";
import { gsap } from "gsap";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

/* ---------- Settings you can tweak ---------- */

const SCROLL_HEIGHT = "300vh"; // longer = slower, more cinematic scroll
const TOTAL = 3; // number of text panels

const CAMERA_KEYS = [
    { x: 0, y: 30, z: 300 }, // panel 1
    { x: 0, y: 40, z: -50 }, // panel 2
    { x: 0, y: 50, z: -700 }, // panel 3
];

const STACK = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "React",
    "Next.js",
    "Redis",
    "BullMQ",
    "Docker",
];

/* ---------- Helpers ---------- */

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.min(Math.max(v, 0), 1);
const smoothstep = (a, b, x) => {
    const t = clamp01((x - a) / (b - a));
    return t * t * (3 - 2 * t);
};
// The composer output is not colour-converted, so colours are given as display values.
const rgb = (hex) => new THREE.Color().setHex(hex, THREE.LinearSRGBColorSpace);

const primaryBtn =
    "inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-yellow-600 hover:shadow-xl hover:shadow-orange-500/25 sm:px-6 sm:py-3.5 sm:text-base";

const secondaryBtn =
    "inline-flex items-center justify-center rounded-full border border-orange-300/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-orange-300/50 hover:bg-orange-500/20 sm:px-6 sm:py-3.5 sm:text-base";

function Label({ children, className = "" }) {
    return (
        <div className={`mb-8 flex items-center gap-4 ${className}`}>
            <span className="h-[2px] w-10 bg-[#FF704D]" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/60">
                {children}
            </span>
        </div>
    );
}

function SplitTitle({ text }) {
    return text.split(" ").map((word, w) => (
        <span key={w} className="mr-[0.25em] inline-block whitespace-nowrap last:mr-0">
            {word.split("").map((ch, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    className="hero-char inline-block opacity-0"
                >
                    {ch}
                </span>
            ))}
        </span>
    ));
}

function Panel({ active, children }) {
    return (
        <div
            inert={!active}
            className={`absolute inset-0 flex flex-col justify-center px-5 transition-all duration-700 ease-out sm:px-8 lg:px-[4%] ${active
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
                }`}
        >
            <div className="mx-auto w-full max-w-[1100px]">{children}</div>
        </div>
    );
}

const titleClass =
    "text-[clamp(3rem,10vw,9rem)] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#F1EEE9] [text-shadow:0_0_40px_rgba(255,112,77,0.35)]";

/* ---------- Component ---------- */

export default function HorizonHero() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const fillRef = useRef(null);

    const [active, setActive] = useState(0);
    const [ready, setReady] = useState(false);
    const [noWebGL, setNoWebGL] = useState(false);

    /* ----- Three.js scene ----- */
    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        const isMobile = window.innerWidth < 768;

        let renderer;
        try {
            renderer = new THREE.WebGLRenderer({
                canvas,
                antialias: !isMobile,
                alpha: true,
                powerPreference: "high-performance",
            });
        } catch {
            setNoWebGL(true);
            return;
        }

        const width = () => canvas.clientWidth || window.innerWidth;
        const height = () => canvas.clientHeight || window.innerHeight;

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
        renderer.setSize(width(), height(), false);
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.00025);

        const camera = new THREE.PerspectiveCamera(75, width() / height(), 0.1, 2000);
        camera.position.set(0, 30, 300);

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(


            new UnrealBloomPass(
                new THREE.Vector2(width(), height()),
                isMobile ? 0.45 : 0.55,
                0.4,
                0.85
            )
        );

        /* --- Stars --- */
        const stars = [];
        const starCount = isMobile ? 2000 : 5000;

        for (let layer = 0; layer < 3; layer++) {
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(starCount * 3);
            const colors = new Float32Array(starCount * 3);
            const sizes = new Float32Array(starCount);
            const color = new THREE.Color();

            for (let j = 0; j < starCount; j++) {
                const radius = 200 + Math.random() * 800;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);

                positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[j * 3 + 2] = radius * Math.cos(phi);

                const pick = Math.random();
                if (pick < 0.7) color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
                else if (pick < 0.9) color.setHSL(0.08, 0.6, 0.8);
                else color.setHSL(0.04, 0.7, 0.75);

                colors[j * 3] = color.r;
                colors[j * 3 + 1] = color.g;
                colors[j * 3 + 2] = color.b;
                sizes[j] = Math.random() * 2 + 0.5;
            }

            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
            geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: { time: { value: 0 }, depth: { value: layer } },
                vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float depth;

          void main() {
            vColor = color;
            vec3 pos = position;
            float angle = time * 0.05 * (1.0 - depth * 0.3);
            mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            pos.xy = rot * pos.xy;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
                fragmentShader: `
          varying vec3 vColor;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
            gl_FragColor = vec4(vColor, opacity);
          }
        `,
                transparent: true,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);
            stars.push(points);
        }

        /* --- Nebula (warm orange) --- */
        const NEBULA_OPACITY = 0.35;
        const nebula = new THREE.Mesh(
            new THREE.PlaneGeometry(8000, 4000, 100, 100),
            new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },

                    color1: { value: rgb(0xc87542) },
                    color2: { value: rgb(0x873d24) },

                    opacity: { value: NEBULA_OPACITY },
                },
                vertexShader: `
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;

          void main() {
            vUv = uv;
            vec3 pos = position;
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
                fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;

          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;
            gl_FragColor = vec4(color, max(alpha, 0.0));
          }
        `,
                transparent: true,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false,
            })
        );
        nebula.position.z = -260;
        scene.add(nebula);

        /* --- Mountains (dark warm layers) --- */
        const mountains = [];
        const layers = [
            { distance: -50, height: 60, color: 0x120a06, opacity: 1 },
            { distance: -100, height: 80, color: 0x1f110a, opacity: 0.8 },
            { distance: -150, height: 100, color: 0x33190c, opacity: 0.6 },
            { distance: -200, height: 120, color: 0x4d2610, opacity: 0.4 },
        ];

        layers.forEach((layer, index) => {
            const points = [];
            const segments = 50;
            for (let i = 0; i <= segments; i++) {
                const x = (i / segments - 0.5) * 1000;
                const y =
                    Math.sin(i * 0.1) * layer.height +
                    Math.sin(i * 0.05) * layer.height * 0.5 +
                    Math.random() * layer.height * 0.2 -
                    100;
                points.push(new THREE.Vector2(x, y));
            }
            points.push(new THREE.Vector2(5000, -300));
            points.push(new THREE.Vector2(-5000, -300));

            const mountain = new THREE.Mesh(
                new THREE.ShapeGeometry(new THREE.Shape(points)),
                new THREE.MeshBasicMaterial({
                    color: rgb(layer.color),
                    transparent: true,
                    opacity: layer.opacity,
                    side: THREE.DoubleSide,
                })
            );
            mountain.position.z = layer.distance;
            mountain.userData = { baseOpacity: layer.opacity, index };
            scene.add(mountain);
            mountains.push(mountain);
        });

        /* --- Atmosphere glow --- */
        const atmosphere = new THREE.Mesh(
            new THREE.SphereGeometry(600, 32, 32),
            new THREE.ShaderMaterial({
                uniforms: { time: { value: 0 } },
                vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
                fragmentShader: `
          varying vec3 vNormal;
          uniform float time;
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            // vec3 atmosphere = vec3(1.0, 0.45, 0.15) * intensity;
            // vec3 atmosphere = vec3(0.55, 0.25, 0.10) * intensity;
            vec3 atmosphere = vec3(1.0, 0.45, 0.15) * intensity;
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;
            gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true,
            })
        );
        scene.add(atmosphere);

        /* --- Scroll -> camera target --- */
        let progress = 0;
        const target = { ...CAMERA_KEYS[0] };

        const updateFromScroll = () => {
            const rect = container.getBoundingClientRect();
            const scrollable = rect.height - window.innerHeight;
            progress = scrollable > 0 ? clamp01(-rect.top / scrollable) : 0;

            const seg = progress * (CAMERA_KEYS.length - 1);
            const i = Math.min(Math.floor(seg), CAMERA_KEYS.length - 2);
            const t = seg - i;
            const a = CAMERA_KEYS[i];
            const b = CAMERA_KEYS[i + 1];
            target.x = lerp(a.x, b.x, t);
            target.y = lerp(a.y, b.y, t);
            target.z = lerp(a.z, b.z, t);

            if (fillRef.current) fillRef.current.style.width = `${progress * 100}%`;

            const next = progress < 0.25 ? 0 : progress < 0.75 ? 1 : 2;
            setActive((prev) => (prev === next ? prev : next));
        };

        updateFromScroll();
        const smooth = { ...target };

        /* --- Render loop --- */
        let rafId = null;

        const loop = () => {
            rafId = requestAnimationFrame(loop);
            const t = reduceMotion ? 0 : performance.now() * 0.001;

            stars.forEach((s) => (s.material.uniforms.time.value = t));
            nebula.material.uniforms.time.value = t * 0.5;
            atmosphere.material.uniforms.time.value = t;

            // Smooth camera follow
            smooth.x += (target.x - smooth.x) * 0.05;
            smooth.y += (target.y - smooth.y) * 0.05;
            smooth.z += (target.z - smooth.z) * 0.05;
            camera.position.set(
                smooth.x + Math.sin(t * 0.1) * 2,
                smooth.y + Math.cos(t * 0.15),
                smooth.z
            );
            camera.lookAt(0, 10, -600);

            // Mountains and nebula fade out once the camera flies past them
            const fade = 1 - smoothstep(0.45, 0.65, progress);
            mountains.forEach((m, i) => {
                const f = 1 + i * 0.5;
                m.position.x = Math.sin(t * 0.1) * 2 * f;
                m.position.y = 50 + Math.cos(t * 0.15) * f;
                m.material.opacity = m.userData.baseOpacity * fade;
                m.visible = fade > 0.01;
            });
            nebula.material.uniforms.opacity.value = NEBULA_OPACITY * fade;
            nebula.visible = fade > 0.01;

            composer.render();
        };

        const start = () => {
            if (rafId === null) rafId = requestAnimationFrame(loop);
        };
        const stop = () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        };

        // Only render while the hero is on screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    updateFromScroll();
                    start();
                } else {
                    stop();
                }
            },
            { threshold: 0 }
        );
        observer.observe(container);

        const onResize = () => {
            const w = width();
            const h = height();
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h, false);
            composer.setSize(w, h);
            updateFromScroll();
        };

        window.addEventListener("scroll", updateFromScroll, { passive: true });
        window.addEventListener("resize", onResize);

        setReady(true);

        return () => {
            stop();
            observer.disconnect();
            window.removeEventListener("scroll", updateFromScroll);
            window.removeEventListener("resize", onResize);

            scene.traverse((obj) => {
                if (obj.geometry) obj.geometry.dispose();
                if (obj.material) obj.material.dispose();
            });
            composer.dispose?.();
            renderer.dispose();
        };
    }, []);

    /* ----- Text intro animation (GSAP) ----- */
    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const ctx = gsap.context(() => {
            if (reduceMotion) {
                gsap.set(".hero-label, .hero-char, .hero-line, .hero-cta", { opacity: 1 });
                return;
            }

            gsap
                .timeline({ delay: 0.2 })
                .fromTo(
                    ".hero-label",
                    { opacity: 0, x: -40 },
                    { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
                )
                .fromTo(
                    ".hero-char",
                    { y: 140, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, stagger: 0.045, ease: "power4.out" },
                    "-=0.4"
                )
                .fromTo(
                    ".hero-line",
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power3.out" },
                    "-=0.7"
                )
                .fromTo(
                    ".hero-cta",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.5"
                );
        }, root);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            aria-label="Introduction"
            className="relative z-20 w-full"
            style={{ height: SCROLL_HEIGHT }}
        >
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black text-[#F1EEE9]">
                {/* Fallback if WebGL is unavailable */}
                {noWebGL && (
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,112,77,0.35),transparent_60%)]" />
                )}

                <canvas
                    ref={canvasRef}
                    aria-hidden="true"
                    className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"
                        }`}
                />

                {/* Readability overlay */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"
                />

                {/* Panel 1: introduction */}
                <Panel active={active === 0}>
                    <Label className="hero-label opacity-0">PORTFOLIO</Label>

                    <h1 aria-label="Anas Shaikh" className={titleClass}>
                        <SplitTitle text="Anas Shaikh" />
                    </h1>

                    <p className="hero-line mt-6 font-mono text-xs uppercase tracking-[0.2em] text-orange-500 opacity-0 sm:text-sm">
                        Junior Full-Stack Developer
                    </p>

                    <div className="mt-6 max-w-[540px] text-sm leading-7 text-white/70 sm:text-base">
                        <p className="hero-line opacity-0">
                            {/* I build secure, scalable web applications */}
                            I build modern, responsive web applications with React and Next.js — creating reusable components, intuitive user experiences, and secure backend APIs.
                        </p>
                        <p className="hero-line opacity-0">with a backend-first approach.</p>
                    </div>

                    <div className="hero-cta mt-10 flex flex-wrap items-center gap-3 opacity-0">
                        <Link href="/works" className={primaryBtn}>
                            View My Work →
                        </Link>
                        <Link href="/contact" className={secondaryBtn}>
                            Contact Me
                        </Link>
                    </div>
                </Panel>

                {/* Panel 2: backend focus */}
                <Panel active={active === 1}>
                    <Label>BACKEND FIRST</Label>
                    <h2 className={titleClass}>Backend</h2>
                    <div className="mt-8 max-w-[560px] text-sm leading-7 text-white/70 sm:text-base">
                        <p>REST APIs with JWT authentication and role-based access control.</p>
                        <p>Redis caching and BullMQ background jobs keep them fast.</p>
                    </div>
                </Panel>

                {/* Panel 3: stack */}
                <Panel active={active === 2}>
                    <Label>THE STACK</Label>
                    <h2 className={titleClass}>Stack</h2>
                    <div className="mt-8 flex max-w-[640px] flex-wrap gap-2">
                        {STACK.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-orange-500/40 bg-black/30 px-4 py-2 font-mono text-xs text-orange-400 backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="mt-6 max-w-[560px] text-sm leading-7 text-white/70 sm:text-base">
                        Two live full-stack apps, deployed on Vercel.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-3">
                        <Link href="/skills" className={primaryBtn}>
                            See all skills →
                        </Link>
                        <Link href="/works" className={secondaryBtn}>
                            View My Work
                        </Link>
                    </div>
                </Panel>

                {/* Scroll progress */}
                <div className="absolute bottom-8 left-5 z-10 flex items-center gap-5 sm:left-8 lg:left-[4%]">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-white/50">
                        SCROLL
                    </span>
                    <div className="h-px w-32 bg-white/20 sm:w-48">
                        <div ref={fillRef} className="h-full w-0 bg-[#FF704D]" />
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-white/50">
                        {String(active + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </section>
    );
}