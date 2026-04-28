"use client";

import { useEffect, useRef } from "react";

export default function ManabiyaLogo({
  size = 48,
  animate = true,
  className = "",
}: {
  size?: number;
  animate?: boolean;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) el.classList.add("mn-logo-drawn");
        });
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animate]);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animate ? "mn-logo-svg" : ""} ${className}`}
    >
      {/* House shape */}
      <path
        className="mn-logo-stroke"
        d="M32 6L6 28V58H58V28L32 6Z"
        stroke="#FF7733"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Roof accent */}
      <path
        className="mn-logo-stroke"
        d="M2 28L32 4L62 28"
        stroke="#FF7733"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Door */}
      <path
        className="mn-logo-stroke"
        d="M24 58V40H40V58"
        stroke="#FF7733"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Book / learning symbol inside */}
      <path
        className="mn-logo-stroke"
        d="M26 22L32 19L38 22V34L32 31L26 34V22Z"
        stroke="#FF7733"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Sparkle top-right */}
      <circle
        className="mn-logo-fill"
        cx="50"
        cy="14"
        r="2"
        fill="#FDF7A1"
        opacity="0"
      />
      <circle
        className="mn-logo-fill"
        cx="54"
        cy="8"
        r="1.5"
        fill="#A0E8D3"
        opacity="0"
      />
    </svg>
  );
}
