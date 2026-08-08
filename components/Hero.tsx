import type { CSSProperties } from "react";
import { LogoMark } from "./Brand";
import CtaButton from "./CtaButton";
import SignalCard from "./SignalCard";
import Ticker from "./Ticker";
import { LINKS } from "@/lib/links";

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
              className="a-rise mt-5 font-display text-[2.75rem] leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
              style={at(200)}
            >
              Masuk pasar dengan rencana, bukan firasat
              <span className="text-blade-500">.</span>
            </h1>

            <p
              className="a-rise mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-ash"
              style={at(300)}
            >
              Sinyal harian lengkap dengan entry, stop loss, dan alasan di
              baliknya. Ditambah materi edukasi supaya lama-lama kamu bisa baca
              chart sendiri — bukan cuma ikut.
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
