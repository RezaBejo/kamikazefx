import CopyChat from "./CopyChat";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { LINKS } from "@/lib/links";
import { CHAT } from "@/lib/messages";
import { BROKER, VIP_PRICE } from "@/lib/site";

const BENEFITS = [
  "Seluruh sinyal harian, tanpa jeda",
  "Update posisi sampai ditutup",
  "Sesi bedah chart & tanya jawab",
  "Materi VIP: strategi, jurnal, manajemen risiko",
  "Respon admin didahulukan",
  "Grup terpisah, khusus member VIP",
];

/** Ini urutan yang benar-benar harus dilalui, jadi penomorannya berarti. */
const BROKER_STEPS = [
  `Daftar akun ${BROKER.name} lewat link kami`,
  `Deposit minimal ${BROKER.minDeposit} di akun itu`,
  "Kirim bukti ke admin, kamu langsung diundang",
];

export default function GrupVip() {
  return (
    <section id="vip" className="mx-auto max-w-[76rem] px-5 py-20 lg:px-8 lg:py-28">
      <SectionHead
        eyebrow="Akses penuh"
        title="Dua jalan masuk ke VIP"
        lead={`Isinya sama persis. Yang beda cuma cara kamu membayarnya — dengan uang, atau dengan mendaftar ${BROKER.name} lewat link kami.`}
        className="max-w-2xl"
      />

      <Reveal delay={180} className="mt-14 border-t hairline">
        <ul className="grid sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <li
              key={benefit}
              className="flex items-baseline gap-3 border-b hairline py-3.5 text-[0.9375rem] text-ash"
            >
              <span
                aria-hidden="true"
                className="h-[2px] w-3 shrink-0 translate-y-[-0.35em] bg-jade-500"
              />
              {benefit}
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Jalur berbayar — ditahan tenang. */}
        <Reveal className="flex flex-col border hairline p-7 sm:p-9">
          <p className="eyebrow">Bayar langsung</p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">
            Berlangganan
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ash">
            Buat kamu yang sudah punya broker sendiri dan tidak mau buka akun
            baru.
          </p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-5xl font-extrabold tracking-tight tabular-nums">
              {VIP_PRICE.amount}
            </span>
            <span className="font-mono text-sm text-ash">
              {VIP_PRICE.period}
            </span>
          </div>
          {VIP_PRICE.strikethrough && (
            <p className="mt-2 font-mono text-sm text-ash-dim line-through">
              {VIP_PRICE.strikethrough}
            </p>
          )}
          <p className="mt-3 font-mono text-xs text-ash-dim">
            {VIP_PRICE.note}
          </p>

          <div className="mt-auto pt-10">
            <CtaButton href={LINKS.vipCheckout} variant="line" className="w-full">
              Bayar &amp; gabung
            </CtaButton>
            <CopyChat
              message={CHAT.vipBayar}
              label="Sudah bayar? Salin pesan konfirmasi"
              className="mt-5 border-t hairline pt-5"
            />
          </div>
        </Reveal>

        {/* Jalur broker — dilebarkan dan diberi aksen, tanpa label "terpopuler". */}
        <Reveal
          delay={120}
          className="relative flex flex-col border border-blade-700 bg-ink-700 p-7 sm:p-9"
        >
          <span
            aria-hidden="true"
            className="blade-fill absolute inset-x-0 top-0 h-px"
          />
          <p className="eyebrow text-blade-500">Lewat {BROKER.name}</p>
          <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">
            Gratis lewat {BROKER.name}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ash">
            Buka akun {BROKER.name} lewat link referral kami dan deposit minimal{" "}
            {BROKER.minDeposit}. Kami dapat komisi dari {BROKER.name}, jadi
            akses VIP-mu kami buka tanpa biaya.
          </p>

          <ol className="mt-8 border-t hairline">
            {BROKER_STEPS.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 border-b hairline py-3.5 text-[0.9375rem]"
              >
                <span className="font-mono text-xs text-blade-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ash">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs leading-relaxed text-ash-dim">
            Biaya trading kamu sama saja dengan atau tanpa link referral —
            komisi dibayar {BROKER.name} dari spread, bukan ditambahkan ke kamu.
          </p>

          <div className="mt-auto pt-10">
            <CtaButton href={LINKS.brokerReferral} className="w-full">
              Daftar {BROKER.name}
            </CtaButton>
            <CopyChat
              message={CHAT.vipBroker}
              label="Sudah daftar? Salin pesan verifikasi"
              className="mt-5 border-t hairline pt-5"
            />
          </div>
        </Reveal>
      </div>

      <Reveal
        delay={80}
        className="mt-12 flex flex-col items-start gap-4 border-t hairline pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="text-sm text-ash">
          Masih bingung pilih jalur yang mana?
        </p>
        <CopyChat
          message={CHAT.vipTanya}
          label="Salin pesan & tanya admin"
          className="sm:text-right"
        />
      </Reveal>
    </section>
  );
}
