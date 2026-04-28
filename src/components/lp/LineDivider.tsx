"use client";

import { useEffect, useRef } from "react";

export default function LineDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("mn-visible");
        });
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`py-8 ${className}`}>
      <div ref={ref} className="lp-line-divider w-full" />
    </div>
  );
}
