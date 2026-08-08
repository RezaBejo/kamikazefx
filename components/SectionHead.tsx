import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Kepala section: label kecil, judul, lalu teks pengantar opsional. */
export default function SectionHead({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal as="p" className="eyebrow tick">
        {eyebrow}
      </Reveal>
      <Reveal
        as="h2"
        delay={80}
        className="mt-5 font-display text-4xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-5xl"
      >
        {title}
      </Reveal>
      {lead && (
        <Reveal as="p" delay={140} className="mt-5 max-w-xl leading-relaxed text-ash">
          {lead}
        </Reveal>
      )}
    </div>
  );
}
