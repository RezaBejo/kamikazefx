import type { ReactNode } from "react";

type Variant = "solid" | "line";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-display text-[0.95rem] font-bold tracking-[0.06em] uppercase transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "blade-fill text-white hover:brightness-110",
  line: "border border-ink-400 text-bone hover:border-blade-500 hover:text-blade-500",
};

/** Panah kecil yang maju sedikit saat hover — satu-satunya gerak di tombol. */
function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M1 8h13M9 3l5 5-5 5" />
    </svg>
  );
}

export default function CtaButton({
  href,
  children,
  variant = "solid",
  className = "",
}: Props) {
  const isAnchor = href.startsWith("#");

  return (
    <a
      href={href}
      target={isAnchor ? undefined : "_blank"}
      rel={isAnchor ? undefined : "noopener noreferrer"}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      <Arrow />
    </a>
  );
}
