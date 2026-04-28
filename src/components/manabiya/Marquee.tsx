"use client";

export default function Marquee({
  items,
  speed = 30,
  className = "",
  dotColor = "text-mn-orange",
}: {
  items: string[];
  speed?: number;
  className?: string;
  dotColor?: string;
}) {
  // Double the items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex mn-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 text-lg font-bold"
          >
            {item}
            <span className={`${dotColor} opacity-40`}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
