"use client";

import { useEffect, useRef } from "react";

type Direction = "right" | "left" | "up";

export default function ImageReveal({
  children,
  direction = "right",
  delay = 0,
  className = "",
  immediate = false,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visibleImmediately = immediate && delay === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (visibleImmediately) return;
    const revealEl = el.firstElementChild;
    if (!revealEl) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => revealEl.classList.add("mn-visible"), delay);
          }
        });
      },
      { threshold: 0.05, rootMargin: "120px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, visibleImmediately]);

  const cls =
    direction === "left"
      ? "lp-reveal-left"
      : direction === "up"
        ? "lp-reveal-up"
        : "lp-reveal";

  return (
    <div ref={ref} className={className}>
      <div className={`${cls} ${visibleImmediately ? "mn-visible" : ""} w-full h-full`}>
        {children}
      </div>
    </div>
  );
}
