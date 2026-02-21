"use client";

import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    staggerDelay?: number;
}

export function useScrollAnimation({
    threshold = 0.12,
    rootMargin = "0px 0px -8% 0px",
    staggerDelay = 0.15,
}: UseScrollAnimationOptions = {}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const elements = container.querySelectorAll("[data-animate]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target as HTMLElement;
                        const delay = el.dataset.delay || "0";
                        el.style.transitionDelay = `${parseFloat(delay) * staggerDelay}s`;
                        el.classList.add("animate-visible");
                        observer.unobserve(el);
                    }
                });
            },
            { threshold, rootMargin }
        );

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [threshold, rootMargin, staggerDelay]);

    return containerRef;
}
