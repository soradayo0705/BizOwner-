"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ManabiyaLogo({
  size = 48,
  animate = true,
  className = "",
}: {
  size?: number;
  animate?: boolean;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!animate);

  useEffect(() => {
    if (!animate) return;
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animate]);

  const h = size;
  const w = size;

  return (
    <div
      ref={wrapRef}
      className={`relative shrink-0 overflow-hidden transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ width: w, height: h }}
    >
      <Image
        src="/manabiya/manabiya-logo-pink.png"
        alt="ビジネスの学び家"
        width={1024}
        height={1024}
        className="h-full w-full object-contain object-center mx-auto"
        sizes={`${w}px`}
        priority={!animate}
      />
    </div>
  );
}
