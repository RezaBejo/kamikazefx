import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import { LINKS } from "@/lib/links";

export default function GrupUmum() {
  return (
    <section id="gratis" className="border-y hairline bg-ink-700">
      <div className="mx-auto max-w-[76rem] px-5 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-xl">
            <p className="eyebrow tick">Gratis</p>
            <h2 className="mt-5 font-display text-4xl leading-[0.95] font-extrabold tracking-tight sm:text-5xl">
              Coba dulu di grup umum
            </h2>
            <p className="mt-5 leading-relaxed text-ash">
              Sebagian sinyal, analisa mingguan, dan info kelas dibagikan
              terbuka di sini. Lihat sendiri cara kami kerja sebelum
              memutuskan naik ke VIP.
            </p>
          </Reveal>

          <Reveal delay={120} className="shrink-0">
            <CtaButton href={LINKS.grupUmum}>Masuk grup umum</CtaButton>
            <p className="mt-4 font-mono text-xs text-ash-dim">
              Tanpa biaya. Bisa keluar kapan saja.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
