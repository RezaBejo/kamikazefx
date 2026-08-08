/**
 * Konstanta brand, harga, dan teks yang sering diganti.
 * Copy panjang per-section tetap di komponennya masing-masing.
 */

export const SITE = {
  name: "Kamikaze FX",
  wordmark: "KamikazeFx",
  tagline: "Sinyal & edukasi trading, tanpa basa-basi.",
  description:
    "Komunitas trading Kamikaze FX — sinyal harian, edukasi terstruktur, dan analisa market. Join grup umum gratis, atau naik ke VIP lewat paket berbayar maupun pendaftaran broker via link referral.",
  /**
   * Alamat publik situs setelah dipasang — pakai https, tanpa garis miring
   * di akhir. Dipakai untuk canonical, og:url, dan alamat absolut og:image.
   * Belum punya domain? Deploy dulu ke Vercel, lalu tempel alamat .vercel.app
   * yang diberikan. Nilai ini tidak berpengaruh saat menjalankan di localhost.
   */
  url: "https://kamikazefx.com",
  ogImage: "/og-image.png",
} as const;

export const VIP_PRICE = {
  /** Harga yang ditampilkan di kartu VIP berbayar. */
  amount: "$70",
  /** Keterangan di samping harga. */
  period: "sekali bayar",
  /** Coret harga normal. Kosongkan ("") kalau tidak dipakai. */
  strikethrough: "",
  note: "Akses selamanya, tanpa perpanjangan.",
} as const;

/** Broker untuk jalur VIP gratis. Ubah di sini kalau ganti broker. */
export const BROKER = {
  name: "Exness",
  /**
   * Syarat deposit minimal untuk klaim akses VIP.
   * Ditulis dalam dolar karena akun broker memang berdenominasi dolar.
   * $12 dipilih dari Rp200.000 pada kurs ~Rp17.900/USD (Agustus 2026),
   * dibulatkan ke atas supaya nilainya tetap di atas Rp200.000.
   */
  minDeposit: "$12",
} as const;

/** Instrumen yang dibahas di grup — tampil sebagai pita berjalan di hero. */
export const INSTRUMENTS = [
  "XAU/USD",
  "EUR/USD",
  "GBP/USD",
  "USD/JPY",
  "GBP/JPY",
  "AUD/USD",
  "USD/CAD",
  "EUR/JPY",
  "USD/CHF",
  "NZD/USD",
] as const;
