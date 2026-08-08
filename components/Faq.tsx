"use client";

import { useId, useState } from "react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

import { BROKER } from "@/lib/site";

const FAQS = [
  {
    q: "Apakah dijamin profit?",
    a: "Tidak, dan tidak ada yang bisa menjaminnya. Kami membagikan sinyal, analisa, dan materi edukasi. Keputusan membuka posisi dan risikonya tetap ada di tangan kamu.",
  },
  {
    q: "Saya masih pemula, sebaiknya mulai dari mana?",
    a: "Dari grup umum. Ikuti dulu ritmenya dan materi dasarnya sampai kamu paham manajemen risiko. Kalau sudah nyaman membaca sinyal beserta alasannya, baru pertimbangkan VIP.",
  },
  {
    q: `Bagaimana cara klaim VIP lewat ${BROKER.name}?`,
    a: `Daftar akun ${BROKER.name} lewat link referral kami, deposit minimal ${BROKER.minDeposit} di akun tersebut, lalu kirim bukti pendaftaran ke admin. Setelah diverifikasi, kamu diundang ke grup VIP.`,
  },
  {
    q: `Kenapa ada opsi berbayar kalau bisa gratis lewat ${BROKER.name}?`,
    a: `Karena sebagian orang sudah punya broker yang cocok dan tidak mau buka akun baru. Opsi bayar langsung ada supaya mereka tetap bisa masuk tanpa pindah ke ${BROKER.name}.`,
  },
  {
    q: "Apakah biayanya bisa dikembalikan?",
    a: "Tidak. Akses VIP dibuka segera setelah pembayaran terkonfirmasi, jadi biayanya tidak bisa direfund. Pastikan kamu sudah paham isi layanannya sebelum membayar.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <section
      id="faq"
      className="mx-auto max-w-[76rem] px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
        <SectionHead
          eyebrow="Sebelum kamu tanya"
          title="Pertanyaan yang sering masuk"
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <div className="border-t hairline">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            const panelId = `${uid}-panel-${i}`;
            const buttonId = `${uid}-button-${i}`;

            return (
              <Reveal key={faq.q} delay={i * 60} className="border-b hairline">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start gap-6 py-6 text-left"
                  >
                    <span className="flex-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mt-2 h-3 w-3 shrink-0"
                    >
                      <span className="absolute top-1/2 left-0 h-[2px] w-3 -translate-y-1/2 bg-blade-500" />
                      <span
                        className={`absolute top-1/2 left-0 h-[2px] w-3 -translate-y-1/2 bg-blade-500 transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-0" : "rotate-90"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {/* 0fr → 1fr: tinggi panel beranimasi tanpa perlu diukur JS. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 leading-relaxed text-ash">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
