import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
    subtitle: { min: 300, max: 800, default: 300 },
    title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style={{
                fontVariationSettings: `'wght' ${baseWeight}`,
                position: "relative", // keeps letters painted above the lens
            }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
};

// groups: [{ el: HTMLElement, type: 'title' | 'subtitle' }, ...]
// One shared "lens" + one mousemove listener for the whole section, instead
// of a separate lens per text block. Distance is now full 2D (x and y),
// since letters from different lines sit at different vertical positions —
// horizontal-only distance would make hovering one line falsely swell
// letters directly above/below it on the other line.
const setupSectionHover = (section, groups) => {
    if (!section) return () => {};

    const letterEntries = groups.flatMap(({ el, type }) => {
        if (!el) return [];
        const config = FONT_WEIGHTS[type];
        return [...el.querySelectorAll("span")].map((span) => ({ span, config }));
    });

    // --- one shared circular lens --------------------------------------------
    let lens = section.querySelector(":scope > .blur-lens");
    if (!lens) {
        lens = document.createElement("div");
        lens.className = "blur-lens";
        Object.assign(lens.style, {
            position: "absolute",
            top: "0",
            left: "0",
            width: "0px",
            height: "0px",
            borderRadius: "50%",
            pointerEvents: "none",
            opacity: "0",
            willChange: "transform, opacity",
            maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 75%)",
        });
        if (getComputedStyle(section).position === "static") {
            section.style.position = "relative";
        }
        section.prepend(lens); // first in DOM -> paints behind the (positioned) letters
    }

    const moveLensX = gsap.quickTo(lens, "x", { duration: 0.3, ease: "power3" });
    const moveLensY = gsap.quickTo(lens, "y", { duration: 0.3, ease: "power3" });
    const sizeLensW = gsap.quickTo(lens, "width", { duration: 0.3, ease: "power3" });
    const sizeLensH = gsap.quickTo(lens, "height", { duration: 0.3, ease: "power3" });
    const fadeLens = gsap.quickTo(lens, "opacity", { duration: 0.3, ease: "power3" });

    const blurState = { px: 0 };
    const blurLens = gsap.quickTo(blurState, "px", {
        duration: 0.3,
        ease: "power3",
        onUpdate: () => {
            lens.style.backdropFilter = `blur(${blurState.px}px)`;
            lens.style.webkitBackdropFilter = `blur(${blurState.px}px)`;
        },
    });

    // --- tunables -------------------------------------------------------------
    const LENS_BASE_SIZE = 140; // px, spotlight diameter at rest
    const MAX_BLUR = 12;       // px, blur at full intensity
    const FALLOFF = 20000;     // lower = tighter hover radius, higher = wider

    const animateLetter = (span, weight, duration = 0.25) =>
        gsap.to(span, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });

    const handleMouseMove = (e) => {
        const { left, top } = section.getBoundingClientRect();
        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;
        let peakIntensity = 0;

        letterEntries.forEach(({ span, config }) => {
            const { left: l, top: t, width: w, height: h } = span.getBoundingClientRect();
            const cx = l - left + w / 2;
            const cy = t - top + h / 2;
            const distance = Math.hypot(mouseX - cx, mouseY - cy); // 2D, not just horizontal
            const intensity = Math.exp(-(distance ** 2) / 10000);
            if (intensity > peakIntensity) peakIntensity = intensity;

            const { min, max } = config;
            animateLetter(span, min + (max - min) * intensity);
        });

        const size = LENS_BASE_SIZE + LENS_BASE_SIZE * peakIntensity;
        moveLensX(mouseX - size / 2);
        moveLensY(mouseY - size / 2);
        sizeLensW(size);
        sizeLensH(size);
        blurLens(peakIntensity * MAX_BLUR);
        fadeLens(peakIntensity);
    };

    const handleMouseLeave = () => {
        letterEntries.forEach(({ span, config }) => animateLetter(span, config.default, 0.3));
        fadeLens(0);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", handleMouseLeave);
        lens.remove();
    };
};

const Welcome = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);

    useGSAP(() => {
        const cleanup = setupSectionHover(sectionRef.current, [
            { el: subTitleRef.current, type: "subtitle" },
            { el: titleRef.current, type: "title" },
        ]);
        return cleanup;
    }, []);

    return (
        <section id="welcome" ref={sectionRef}>
            <p ref={subTitleRef}>
                {renderText("Hey, myself Harsh! && This is my", "text-3xl font-georama", 300)}
            </p>
            <h1 ref={titleRef} className="mt-1">
                {renderText("portfolio", "text-9xl font-georama italic", 500)}
            </h1>

            <div className="small-screen">
                <p>This Portfolio is designed specifically for a desktop experience only.</p>
            </div>
        </section>
    );
};


export default Welcome