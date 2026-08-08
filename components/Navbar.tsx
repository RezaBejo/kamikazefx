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

  // Kunci scroll halaman selama panel terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Panel disembunyikan di md ke atas; tutup juga state-nya supaya
    // kunci scroll ikut lepas saat layar dilebarkan.
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onDesktop = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <>
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
                className={`block h-[2px] w-6 bg-bone transition-transform duration-300 motion-reduce:transition-none ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`mt-[5px] block h-[2px] w-6 bg-bone transition-opacity duration-200 motion-reduce:transition-none ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`mt-[5px] block h-[2px] w-6 bg-bone transition-transform duration-300 motion-reduce:transition-none ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Peredup sisa layar — diketuk untuk menutup. */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-30 bg-ink-900/80 transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
          open ? "opacity-100" : "invisible opacity-0"
        }`}
      />

      {/*
        Panel sengaja diletakkan DI LUAR <header>.
        Header memakai backdrop-blur, dan elemen ber-backdrop-filter menjadi
        acuan posisi bagi anak `fixed`-nya — panel di dalamnya akan bertinggi
        nol sehingga latarnya tidak pernah tergambar.

        Tingginya mengikuti isi, bukan setinggi layar, dengan batas atas
        supaya tetap muat di layar pendek.
      */}
      <div
        id="menu-mobile"
        className={`fixed top-20 right-5 z-40 max-h-[65svh] w-60 max-w-[calc(100vw-2.5rem)] origin-top-right overflow-y-auto overscroll-contain border hairline bg-ink-800 shadow-[0_18px_44px_-12px_rgba(0,0,0,0.75)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:hidden ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <ul className="px-4">
          {NAV.map((item) => (
            <li key={item.href} className="border-b hairline last:border-b-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 font-display text-xl font-bold tracking-tight"
              >
                <span
                  aria-hidden="true"
                  className="h-[2px] w-2.5 shrink-0 bg-blade-500"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-4 pt-3 pb-4">
          <a
            href={LINKS.grupUmum}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="blade-fill block px-4 py-3 text-center font-display text-sm font-bold tracking-[0.06em] text-white uppercase"
          >
            Join grup gratis
          </a>
        </div>
      </div>
    </>
  );
}
