import type { CSSProperties } from "react";

/**
 * Artefak utama halaman: bentuk sinyal yang benar-benar diterima member.
 * Angkanya contoh — ditandai jelas supaya tidak terbaca sebagai sinyal live.
 */
const ROWS = [
  { label: "Entry", value: "2341.50 – 2343.00", delta: null },
  { label: "Stop loss", value: "2336.00", delta: "−55" },
  { label: "Target 1", value: "2352.00", delta: "+90" },
  { label: "Target 2", value: "2361.50", delta: "+185" },
];

/** Jeda tiap baris, dipakai untuk stagger saat halaman dibuka. */
const step = (i: number) => ({ "--d": `${520 + i * 70}ms` }) as CSSProperties;

export default function SignalCard() {
  return (
    <figure className="a-rise border hairline bg-ink-700" style={step(-1)}>
      <figcaption className="flex items-center justify-between border-b hairline px-5 py-3.5">
        <span className="eyebrow">Contoh format sinyal</span>
        <span className="border border-blade-700 px-2 py-0.5 font-mono text-[0.625rem] font-medium tracking-[0.18em] text-blade-500 uppercase">
          Sampel
        </span>
      </figcaption>

      <div
        className="a-rise flex items-start justify-between px-5 pt-5 pb-4"
        style={step(0)}
      >
        <div>
          <p className="font-display text-3xl font-bold tracking-tight">
            XAU/USD
          </p>
          <p className="mt-1 font-mono text-xs text-ash-dim">
            Emas · sesi London
          </p>
        </div>
        <span className="mt-1.5 flex items-center gap-2 border border-jade-700 px-2.5 py-1 font-mono text-xs font-medium tracking-[0.12em] text-jade-500 uppercase">
          <svg viewBox="0 0 10 10" className="h-2 w-2" aria-hidden="true">
            <path d="M5 0 10 9H0z" fill="currentColor" />
          </svg>
          Buy
        </span>
      </div>

      <dl className="border-t hairline">
        {ROWS.map((row, i) => (
          <div
            key={row.label}
            className="a-rise flex items-baseline justify-between border-b hairline px-5 py-3"
            style={step(i + 1)}
          >
            <dt className="font-mono text-[0.8125rem] text-ash">{row.label}</dt>
            <dd className="flex items-baseline gap-3 font-mono text-[0.8125rem] tabular-nums">
              <span className="text-bone">{row.value}</span>
              {row.delta && (
                <span
                  className={`w-12 text-right ${
                    row.delta.startsWith("+") ? "text-jade-500" : "text-blade-500"
                  }`}
                >
                  {row.delta}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="a-rise px-5 py-4" style={step(5)}>
        <p className="eyebrow">Alasan</p>
        <p className="mt-2 text-sm leading-relaxed text-ash">
          Break struktur H1 lalu retest area demand. Rasio risiko 1 : 2,4 —
          kalau harga tembus 2336 setup batal, bukan ditahan.
        </p>
      </div>

      <p
        className="a-rise border-t hairline px-5 py-3 font-mono text-[0.6875rem] text-ash-dim"
        style={step(6)}
      >
        Setiap sinyal dikirim lengkap dengan alasannya.
      </p>
    </figure>
  );
}
