/** Gaya tombol CTA, dipakai bersama oleh CtaButton dan CopyChat. */
export const CTA_BASE =
  "group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-display text-[0.95rem] font-bold tracking-[0.06em] uppercase transition-colors duration-200";

export const CTA_VARIANTS = {
  solid: "blade-fill text-white hover:brightness-110",
  line: "border border-ink-400 text-bone hover:border-blade-500 hover:text-blade-500",
} as const;

export type CtaVariant = keyof typeof CTA_VARIANTS;
