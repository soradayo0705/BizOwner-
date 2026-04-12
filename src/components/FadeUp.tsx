"use client";

import { useEffect, useRef } from "react";

export default function FadeUp({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-9 transition-all duration-700 [transition-timing-function:cubic-bezier(.16,1,.3,1)] [&.visible]:opacity-100 [&.visible]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
