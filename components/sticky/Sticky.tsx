"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * A sticky block that is never cut off by the next block sliding over it.
 *
 * A plain `sticky top-0` pins the block's top edge to the top of the screen.
 * If the block is taller than the screen (common on phones), its bottom part
 * is covered before the visitor ever sees it. Here the stick point is
 * `min(offset, 100svh - height)`: short blocks pin at `offset`, tall blocks
 * scroll until their bottom edge reaches the bottom of the screen and only
 * then pin, so the whole block is seen before the next one slides over.
 */
export default function Sticky({
  as = "section",
  offset = 0,
  className,
  style,
  children,
}: {
  as?: ElementType;
  /** Top offset in px used when the block fits on screen. */
  offset?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const Tag = as;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      el.style.top = `min(${offset}px, calc(100svh - ${el.offsetHeight}px))`;
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [offset]);

  return (
    <Tag
      ref={ref}
      className={`sticky ${className || ""}`}
      style={{ top: offset, ...style }}
    >
      {children}
    </Tag>
  );
}
