"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right";

export default function FadeSlide({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  const translate =
    direction === "left"
      ? "translate-x-[-60px]"
      : direction === "right"
        ? "translate-x-[60px]"
        : "translate-y-[40px]";

  return (
    <div
      ref={ref}
      style={style}
      className={`opacity-0 ${translate} transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] [&.mn-visible]:opacity-100 [&.mn-visible]:translate-x-0 [&.mn-visible]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
