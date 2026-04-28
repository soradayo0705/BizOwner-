"use client";

import { useEffect, useRef } from "react";

export default function StaggerChildren({
  children,
  staggerMs = 120,
  className = "",
}: {
  children: React.ReactNode;
  staggerMs?: number;
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
            const items = el.querySelectorAll("[data-stagger-item]");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).classList.add("mn-visible");
              }, i * staggerMs);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [staggerMs]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-stagger-item
      className={`opacity-0 translate-y-[30px] scale-[0.95] transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] [&.mn-visible]:opacity-100 [&.mn-visible]:translate-y-0 [&.mn-visible]:scale-100 ${className}`}
    >
      {children}
    </div>
  );
}
