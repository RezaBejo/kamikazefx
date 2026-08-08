import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const ITEMS = [
  {
    title: "Sinyal harian",
    body: "Entry, stop loss, dan target ditulis lengkap — tidak pernah setengah. Setiap sinyal disertai alasan teknikalnya, jadi kamu tahu kenapa, bukan cuma apa.",
  },
  {
    title: "Edukasi bertahap",
    body: "Mulai dari struktur pasar dan manajemen risiko, naik ke price action dan psikologi. Materinya berurutan, bukan potongan acak yang bikin bingung.",
  },
  {
    title: "Posisi dikawal",
    body: "Sinyal tidak ditinggal setelah dikirim. Kapan geser stop loss, kapan ambil sebagian, kapan setup dinyatakan batal — semua diberi tahu.",
  },
  {
    title: "Tempat bertanya",
    body: "Komunitas yang mau membedah chart kamu, termasuk yang kena stop loss. Yang salah dibahas, bukan disembunyikan.",
  },
];

export default function ValueProps() {
  return (
    <section id="isi" className="mx-auto max-w-[76rem] px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
        <SectionHead
          eyebrow="Isi grup"
          title="Yang kamu dapat"
          lead="Empat hal yang jadi rutinitas di dalam grup, tiap hari pasar buka."
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <ul>
          {ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 90}
              className="group border-t hairline py-8 first:border-t-0 first:pt-0 md:grid md:grid-cols-[minmax(0,13rem)_1fr] md:gap-10"
            >
              <h3 className="flex items-baseline font-display text-2xl font-bold tracking-tight">
                <span
                  aria-hidden="true"
                  className="mr-3 h-[2px] w-3.5 shrink-0 translate-y-[-0.35em] bg-blade-500 transition-all duration-300 group-hover:w-7 motion-reduce:transition-none"
                />
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ash md:mt-0">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
