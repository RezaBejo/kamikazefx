/**
 * SEMUA LINK KELUAR ADA DI SINI.
 * Ganti nilai di bawah dengan link asli — tidak perlu menyentuh file komponen.
 */

export const LINKS = {
  /** Grup umum (gratis) — link invite Telegram. */
  grupUmum: "https://t.me/+ZOEIwBl3ak9kMWNl",

  /** Halaman pembayaran / checkout VIP (Trakteer, Mayar, Xendit, Lynk, dll). */
  vipCheckout: "https://mayar.link/kamikazefx-vip",

  /**
   * Link referral pendaftaran broker (jalur VIP gratis).
   * Jangan hapus bagian apa pun dari URL ini — kode di belakang /a/ adalah
   * penanda afiliasi. Kalau berubah, komisi tidak terlacak.
   */
  brokerReferral: "https://one.exnessonelink.com/a/je3wbiydk1",

  /**
   * Username Telegram admin, TANPA "@".
   * Dipakai untuk semua tombol konfirmasi ke admin.
   */
  adminTelegram: "agungprstya",

  /** Sosial media — kosongkan ("") kalau belum ada, otomatis disembunyikan. */
  instagram: "https://www.instagram.com/kamikazefx_",
  tiktok: "https://www.tiktok.com/@kamikazefx_",
  youtube: "",
  email: "mailto:admin@kamikazefx.com",
} as const;

/** Link ke chat admin. Telegram tidak mendukung teks pesan yang sudah terisi. */
export const adminChat = LINKS.adminTelegram
  ? `https://t.me/${LINKS.adminTelegram}`
  : "";
