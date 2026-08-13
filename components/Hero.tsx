import type { CSSProperties } from "react";
import { LogoMark } from "./Brand";
import CtaButton from "./CtaButton";
import SignalCard from "./SignalCard";
import Ticker from "./Ticker";
import { LINKS } from "@/lib/links";

const at = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Tiga janji utama di hero. Ditulis pendek supaya terbaca sekali lihat. */
const POINTS = [
  "Rahasia grow saldo kecil jadi naga",
  "Teknik sniper entry",
  "Trabar via Google Meet",
];

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
              className="a-rise mt-5 font-display text-[3rem] leading-[0.92] font-extrabold tracking-tight text-balance sm:text-[4rem] lg:text-[4.75rem]"
              style={at(200)}
            >
              CIRCLE TRADER HIGH QUALITY
            </h1>

            <ul className="a-rise mt-8 space-y-3.5" style={at(300)}>
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-baseline gap-3.5 font-display text-xl leading-tight font-bold tracking-tight sm:text-2xl lg:text-[1.75rem]"
                >
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-3.5 shrink-0 translate-y-[-0.32em] bg-blade-500"
                  />
                  {point}
                </li>
              ))}
            </ul>

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
