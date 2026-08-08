import { Lockup } from "./Brand";
import { adminChat, LINKS } from "@/lib/links";
import { BROKER, SITE } from "@/lib/site";

const SOCIALS = [
  { href: LINKS.instagram, label: "Instagram" },
  { href: LINKS.tiktok, label: "TikTok" },
  { href: LINKS.youtube, label: "YouTube" },
  { href: adminChat, label: "Telegram" },
  { href: LINKS.email, label: "Email" },
].filter((social) => social.href);

export default function Footer() {
  return (
    <footer className="border-t hairline bg-ink-900">
      <div className="mx-auto max-w-[76rem] px-5 py-16 lg:px-8">
        <div className="flex flex-col gap-10 border-b hairline pb-10 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" aria-label="Kamikaze FX, ke atas halaman">
            <Lockup height={30} />
          </a>

          {SOCIALS.length > 0 && (
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow transition-colors hover:text-bone"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,14rem)_1fr] lg:gap-20">
          <p className="eyebrow tick">Peringatan risiko</p>

          <div className="max-w-3xl space-y-4 text-[0.8125rem] leading-relaxed text-ash-dim">
            <p>
              Trading forex, CFD, dan instrumen berleverage lain mengandung
              risiko tinggi dan dapat mengakibatkan kerugian melebihi modal
              awal Anda. Seluruh sinyal, analisa, dan materi yang dibagikan{" "}
              {SITE.name} bersifat edukatif — bukan nasihat keuangan, bukan
              ajakan membeli atau menjual, dan bukan jaminan keuntungan.
            </p>
            <p>
              Kinerja masa lalu tidak menjamin hasil di masa depan. Setiap
              keputusan trading sepenuhnya menjadi tanggung jawab masing-masing
              individu. Gunakan hanya dana yang Anda siap kehilangannya.
            </p>
            <p>
              {SITE.name} menerima komisi afiliasi dari {BROKER.name} atas
              pendaftaran melalui link referral di halaman ini.
            </p>
          </div>
        </div>

        <p className="mt-14 font-mono text-xs text-ash-dim">
          © {new Date().getFullYear()} {SITE.name}
        </p>
      </div>
    </footer>
  );
}
