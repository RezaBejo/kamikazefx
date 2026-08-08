"use client";

import { useId, useState } from "react";

/**
 * Daftar isi VIP yang bisa dilipat, supaya kepala section tidak terlalu jauh
 * dari dua kartu pilihan akses. Memakai pola buka-tutup yang sama dengan FAQ.
 */
export default function BenefitsToggle({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const uid = useId();
  const panelId = `${uid}-panel`;
  const buttonId = `${uid}-button`;

  return (
    <div className="border-y hairline">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center gap-4 py-4 text-left"
      >
        <span className="eyebrow transition-colors group-hover:text-bone">
          {label}
        </span>

        <span className="ml-auto font-mono text-xs text-ash-dim">
          {items.length} poin
        </span>

        <span aria-hidden="true" className="relative h-3 w-3 shrink-0">
          <span className="absolute top-1/2 left-0 h-[2px] w-3 -translate-y-1/2 bg-blade-500" />
          <span
            className={`absolute top-1/2 left-0 h-[2px] w-3 -translate-y-1/2 bg-blade-500 transition-transform duration-300 motion-reduce:transition-none ${
              open ? "rotate-0" : "rotate-90"
            }`}
          />
        </span>
      </button>

      {/* 0fr → 1fr: tinggi panel beranimasi tanpa perlu diukur JS. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-x-10 gap-y-2.5 pb-6 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-[0.9375rem] text-ash"
              >
                <span
                  aria-hidden="true"
                  className="h-[2px] w-3 shrink-0 translate-y-[-0.35em] bg-jade-500"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
