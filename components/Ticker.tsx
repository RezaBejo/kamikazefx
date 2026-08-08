import { INSTRUMENTS } from "@/lib/site";

/**
 * Pita instrumen. Sengaja tanpa harga — halaman ini tidak menyajikan
 * data pasar, jadi menampilkan angka berjalan akan menyesatkan.
 */
export default function Ticker() {
  const items = [...INSTRUMENTS, ...INSTRUMENTS];

  return (
    <div className="marquee overflow-hidden border-y hairline py-3">
      <div className="marquee-track flex w-max items-center">
        {items.map((pair, i) => (
          <span
            key={`${pair}-${i}`}
            className="flex items-center font-mono text-xs tracking-[0.14em] text-ash-dim"
          >
            {pair}
            <span
              aria-hidden="true"
              className="mx-7 h-1 w-1 rotate-45 bg-blade-700"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
