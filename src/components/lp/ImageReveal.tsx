"use client";

import { useEffect, useRef } from "react";

type Direction = "right" | "left" | "up";

export default function ImageReveal({
  children,
  direction = "right",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("mn-visible"), delay);
          }
        });
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const cls =
    direction === "left"
      ? "lp-reveal-left"
      : direction === "up"
        ? "lp-reveal-up"
        : "lp-reveal";

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  );
}
