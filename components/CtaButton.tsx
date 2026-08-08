import type { ReactNode } from "react";
import { CTA_BASE, CTA_VARIANTS, type CtaVariant } from "@/lib/ui";

type Props = {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
};

/** Panah kecil yang maju sedikit saat hover — satu-satunya gerak di tombol. */
export function CtaArrow() {
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
      className={`${CTA_BASE} ${CTA_VARIANTS[variant]} ${className}`}
    >
      {children}
      <CtaArrow />
    </a>
  );
}
