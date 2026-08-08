"use client";

import { useState } from "react";
import { CtaArrow } from "./CtaButton";
import { adminChat } from "@/lib/links";
import { CTA_BASE, CTA_VARIANTS, type CtaVariant } from "@/lib/ui";

type Props = {
  /** Pesan yang disalin ke papan klip. */
  message: string;
  /** Teks tombol. */
  label: string;
  /** "link" untuk tautan kecil, sisanya tampil sebagai tombol CTA penuh. */
  variant?: "link" | CtaVariant;
  className?: string;
};

/** Salin tanpa Clipboard API — untuk browser lama atau konteks non-HTTPS. */
function copyFallback(text: string) {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.top = "0";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  try {
    document.execCommand("copy");
    return true;
  } catch {
    return false;
  } finally {
    field.remove();
  }
}

/**
 * Telegram tidak bisa mengisi kolom pesan lewat link, jadi pesannya disalin
 * ke papan klip lalu chat admin dibuka. Navigasi diserahkan ke anchor supaya
 * tidak kena pemblokir popup.
 */
export default function CopyChat({
  message,
  label,
  variant = "link",
  className = "",
}: Props) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  if (!adminChat) return null;

  function handleClick() {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(message)
        .then(() => setState("copied"))
        .catch(() => setState(copyFallback(message) ? "copied" : "failed"));
      return;
    }
    setState(copyFallback(message) ? "copied" : "failed");
  }

  const isLink = variant === "link";

  return (
    <div className={className}>
      <a
        href={adminChat}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={
          isLink
            ? "group inline-flex items-center gap-2 font-mono text-xs text-blade-500 transition-colors hover:text-bone"
            : `${CTA_BASE} ${CTA_VARIANTS[variant]} w-full`
        }
      >
        {label}
        <CtaArrow />
      </a>

      <p
        aria-live="polite"
        className={`mt-2 font-mono text-[0.6875rem] leading-relaxed ${
          isLink ? "" : "text-center"
        } ${state === "failed" ? "text-blade-500" : "text-jade-500"}`}
      >
        {state === "copied" &&
          "Pesan tersalin. Tempel di chat admin, lalu kirim."}
        {state === "failed" &&
          "Gagal menyalin otomatis — salin manual dari kotak di bawah."}
      </p>

      <details className={`mt-2 ${isLink ? "" : "text-center"}`}>
        <summary className="cursor-pointer font-mono text-[0.6875rem] text-ash-dim hover:text-ash">
          Lihat isi pesan
        </summary>
        <pre className="mt-2 border hairline bg-ink-800 p-3 text-left font-mono text-[0.6875rem] leading-relaxed whitespace-pre-wrap text-ash">
          {message}
        </pre>
      </details>
    </div>
  );
}
