"use client";

import { useEffect, useState } from "react";
import { Lockup } from "./Brand";
import { LINKS } from "@/lib/links";

const NAV = [
  { href: "#isi", label: "Isi grup" },
  { href: "#gratis", label: "Grup gratis" },
  { href: "#vip", label: "VIP" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Kunci scroll saat menu mobile terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink-800/90 backdrop-blur-md">
      <nav className="mx-auto flex h-[4.5rem] max-w-[76rem] items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="Kamikaze FX, ke atas halaman">
          <Lockup height={32} priority />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="eyebrow transition-colors hover:text-bone"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={LINKS.grupUmum}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden border border-ink-400 px-5 py-2.5 font-display text-sm font-bold tracking-[0.06em] uppercase transition-colors hover:border-blade-500 hover:text-blade-500 md:block"
        >
          Join gratis
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="-mr-2 p-2 md:hidden"
        >
          <span className="block h-4 w-6">
            <span
              className={`block h-[2px] w-6 bg-bone transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`mt-[5px] block h-[2px] w-6 bg-bone transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`mt-[5px] block h-[2px] w-6 bg-bone transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile: panel penuh, tipografi besar, bukan dropdown kecil. */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 bg-ink-800 md:hidden"
      >
        <ul className="flex flex-col px-5 pt-4">
          {NAV.map((item, i) => (
            <li key={item.href} className="border-b hairline">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-5 font-display text-3xl font-bold tracking-tight"
              >
                <span className="font-mono text-xs text-ash-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-5 pt-8">
          <a
            href={LINKS.grupUmum}
            target="_blank"
            rel="noopener noreferrer"
            className="blade-fill block px-6 py-4 text-center font-display text-base font-bold tracking-[0.06em] text-white uppercase"
          >
            Join grup gratis
          </a>
        </div>
      </div>
    </header>
  );
}
