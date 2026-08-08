"use client";

import { useState } from "react";
import { adminChat } from "@/lib/links";

type Props = {
  /** Pesan yang disalin ke papan klip. */
  message: string;
  /** Teks tombol. */
  label: string;
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
export default function CopyChat({ message, label, className = "" }: Props) {
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

  return (
    <div className={className}>
      <a
        href={adminChat}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group inline-flex items-center gap-2 font-mono text-xs text-blade-500 transition-colors hover:text-bone"
      >
        {label}
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
        >
          <path d="M1 8h13M9 3l5 5-5 5" />
        </svg>
      </a>

      <p
        aria-live="polite"
        className={`mt-2 font-mono text-[0.6875rem] leading-relaxed ${
          state === "failed" ? "text-blade-500" : "text-jade-500"
        }`}
      >
        {state === "copied" &&
          "Pesan tersalin. Tempel di chat admin, lalu kirim."}
        {state === "failed" &&
          "Gagal menyalin otomatis — salin manual dari kotak di bawah."}
      </p>

      <details className="mt-2">
        <summary className="cursor-pointer font-mono text-[0.6875rem] text-ash-dim hover:text-ash">
          Lihat isi pesan
        </summary>
        <pre className="mt-2 border hairline bg-ink-800 p-3 font-mono text-[0.6875rem] leading-relaxed whitespace-pre-wrap text-ash">
          {message}
        </pre>
      </details>
    </div>
  );
}
