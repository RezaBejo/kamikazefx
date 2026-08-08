import Image from "next/image";
import type { CSSProperties } from "react";
import { SITE } from "@/lib/site";

/**
 * Aset di bawah dihasilkan dari public/logo.jpg oleh
 * scripts/build-logo-assets.mjs — background navy sudah diangkat jadi alpha.
 */
const MARK = { src: "/logo-mark.png", w: 286, h: 288 };
const WORDMARK = { src: "/logo-wordmark.png", w: 284, h: 51 };

export function LogoMark({
  size,
  className = "",
  priority = false,
  style,
}: {
  size: number;
  className?: string;
  priority?: boolean;
  style?: CSSProperties;
}) {
  return (
    <Image
      src={MARK.src}
      alt=""
      width={MARK.w}
      height={MARK.h}
      priority={priority}
      className={className}
      style={{ width: size, height: "auto", ...style }}
    />
  );
}

/** Lockup horizontal: mark + wordmark asli, dipakai di navbar & footer. */
export function Lockup({
  height = 30,
  className = "",
  priority = false,
}: {
  height?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={MARK.src}
        alt=""
        width={MARK.w}
        height={MARK.h}
        priority={priority}
        style={{ height, width: "auto" }}
      />
      <Image
        src={WORDMARK.src}
        alt={SITE.name}
        width={WORDMARK.w}
        height={WORDMARK.h}
        priority={priority}
        style={{ height: height * 0.44, width: "auto" }}
      />
    </span>
  );
}
