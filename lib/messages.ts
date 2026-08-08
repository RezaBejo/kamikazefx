/**
 * Format pesan yang disalin calon member sebelum masuk ke chat admin.
 *
 * Tulis sebagai pesan yang sudah utuh — tanpa bagian kosong yang harus diisi,
 * supaya benar-benar tinggal tempel dan kirim. Detail seperti nomor akun atau
 * bukti transfer dikirim menyusul lewat lampiran.
 */
import { BROKER, VIP_PRICE } from "./site";

export const CHAT = {
  /**
   * Jalur bayar langsung. Pembayaran lewat transfer manual, jadi pesan ini
   * memulai percakapan untuk meminta detail rekening — nomor rekening sengaja
   * tidak dipajang di halaman.
   */
  vipBayar: `Halo Admin Kamikaze FX.

Saya mau gabung grup VIP lewat jalur bayar langsung (${VIP_PRICE.amount}, sekali bayar, akses selamanya).

Mohon dikirim detail rekening untuk transfernya. Setelah transfer, bukti pembayaran saya kirim di chat ini. Terima kasih.`,

  /** Sudah daftar broker lewat link referral, minta diverifikasi. */
  vipBroker: `Halo Admin Kamikaze FX.

Saya sudah mendaftar akun ${BROKER.name} lewat link referral Kamikaze FX dan sudah deposit minimal ${BROKER.minDeposit} untuk klaim akses VIP gratis.

Nomor akun dan bukti pendaftarannya saya kirim setelah pesan ini. Mohon dibantu verifikasinya. Terima kasih.`,

  /** Belum memutuskan, mau tanya dulu. */
  vipTanya: `Halo Admin Kamikaze FX.

Saya tertarik gabung grup VIP tapi masih bingung pilih jalur bayar langsung atau lewat ${BROKER.name}.

Mohon dibantu penjelasannya. Terima kasih.`,

  /** Kontak umum dari footer. */
  umum: `Halo Admin Kamikaze FX.

Saya mau bertanya soal grup dan cara gabungnya. Terima kasih.`,
} as const;
