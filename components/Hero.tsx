import type { CSSProperties } from "react";
import { LogoMark } from "./Brand";
import CtaButton from "./CtaButton";
import SignalCard from "./SignalCard";
import Ticker from "./Ticker";
import { LINKS } from "@/lib/links";
import { SITE } from "@/lib/site";

const at = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[76rem] px-5 pt-14 pb-14 lg:px-8 lg:pt-20 lg:pb-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <LogoMark
              size={124}
              priority
              className="a-rise mb-7"
              style={at(0)}
            />

            <p className="a-rise eyebrow tick" style={at(120)}>
              Komunitas sinyal &amp; edukasi forex
            </p>

            <h1
              className="a-rise mt-5 font-display text-[2.5rem] leading-[0.95] font-extrabold tracking-tight text-balance sm:text-[3.25rem] lg:text-[3.75rem]"
              style={at(200)}
            >
              Kuasai SMC &amp; Rahasia Fair Value Gap (FVG) High-Probability
            </h1>

            <p
              className="a-rise mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ash"
              style={at(300)}
            >
              Selamat datang di {SITE.name}. Kami membuka tabir rahasia
              institusi finansial melalui pendekatan Smart Money Concepts
              (SMC), berfokus penuh pada FVG (Fair Value Gap) Entry dengan
              tingkat akurasi tinggi dan Risk-to-Reward Ratio (RRR) maksimal.
            </p>

            <div
              className="a-rise mt-9 flex flex-col gap-3 sm:flex-row"
              style={at(380)}
            >
              <CtaButton href={LINKS.grupUmum}>Join grup gratis</CtaButton>
              <CtaButton href="#vip" variant="line">
                Lihat jalur VIP
              </CtaButton>
            </div>

            <p
              className="a-rise mt-5 font-mono text-xs text-ash-dim"
              style={at(440)}
            >
              Gratis, tanpa syarat deposit.
            </p>
          </div>

          <div className="lg:pl-4">
            <SignalCard />
          </div>
        </div>
      </div>

      <div className="a-rise" style={at(760)}>
        <Ticker />
      </div>
    </section>
  );
}
