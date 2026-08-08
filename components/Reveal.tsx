"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Menampilkan anak elemen saat masuk viewport.
 * Satu observer dipakai bersama semua instance supaya tidak boros.
 */
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-in", "true");
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
  );
  return observer;
}

type Props = {
  children: ReactNode;
  /** Jeda mulai, dalam milidetik — untuk stagger antar elemen sebaris. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Tanpa IntersectionObserver, tampilkan saja langsung.
    const io = getObserver();
    if (!io) {
      node.setAttribute("data-in", "true");
      return;
    }

    io.observe(node);
    return () => io.unobserve(node);
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? ({ "--d": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
