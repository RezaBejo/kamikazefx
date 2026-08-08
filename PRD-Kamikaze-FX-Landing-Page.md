# PRD — Landing Page "Kamikaze FX"

## 1. Tujuan
Landing page satu halaman untuk mengarahkan calon member ke grup trading Kamikaze FX, dengan dua tujuan konversi:
1. Join grup umum (gratis)
2. Join grup VIP — via dua jalur: berbayar langsung, atau daftar broker via link referral

## 2. Target User
Trader retail (pemula–menengah) yang menemukan Kamikaze FX lewat sosial media/iklan dan mencari sinyal/edukasi trading.

## 3. Struktur Halaman

| Section | Isi |
|---|---|
| Hero | Nama brand "Kamikaze FX", tagline singkat, CTA utama "Join Grup Umum" |
| Value Proposition | 3–4 poin kenapa join (sinyal, edukasi, komunitas, dll) |
| Grup Umum | Deskripsi singkat + tombol link Telegram/WhatsApp grup umum (gratis) |
| Grup VIP | Deskripsi benefit VIP, lalu 2 pilihan akses: |
| — Opsi 1: Berbayar | Harga/paket + tombol link pembayaran/checkout |
| — Opsi 2: Via Broker | Penjelasan singkat "daftar broker via link referral kami, gratis akses VIP" + tombol link referral broker |
| FAQ (opsional) | 3–5 pertanyaan umum (legal disclaimer, cara akses, dll) |
| Footer | Disclaimer risiko trading + kontak/social media |

## 4. Fitur Fungsional
- Semua tombol CTA adalah link keluar (Telegram/WA/payment gateway/broker), bukan form.
- Semua link (grup umum, VIP checkout, referral broker) disimpan sebagai variabel/config terpisah — mudah diganti tanpa ubah kode komponen.
- Responsive (mobile-first, karena traffic diperkirakan dominan dari HP).

## 5. Non-Fungsional
- Load cepat, section minim, no unnecessary animasi berat.
- SEO dasar: title, meta description, og:image untuk share di sosmed.
- Disclaimer risiko trading wajib tampil (etika/legal).

## 5a. Visual Identity (mengikuti logo)
Logo: background navy gelap, dua pedang katana bersilang gradasi merah (terang di ujung, gelap di gagang), ikon grafik tren naik hijau di tengah atas, wordmark "KamikazeFx" putih bold sans-serif.

- **Background**: navy/dark blue gelap (`#0A0E1A` – `#0D1220`), bukan hitam pekat — konsisten dengan background logo.
- **Warna primer (aksen utama/CTA/heading)**: gradasi merah (`#DC2626` → `#7F1D1D`), dipakai di tombol utama, garis pembatas, highlight.
- **Warna sekunder (growth/profit)**: hijau (`#22C55E`), dipakai untuk elemen terkait profit/statistik/checklist/ikon panah naik — jangan dipakai berlebihan, hanya sebagai aksen seperti di logo.
- **Teks**: putih/abu terang untuk heading & body di atas background gelap.
- **Tipografi**: sans-serif bold/tegas untuk heading (senada wordmark logo), regular untuk body.
- **Elemen dekoratif opsional**: garis tipis atau siluet pedang bersilang sebagai watermark/divider antar-section (jangan mendominasi, tetap subtle).
- Logo ditempatkan di navbar (kiri) dan hero (bisa jadi elemen visual utama).

## 6. Tech Stack
- Next.js (App Router) + Tailwind CSS
- Deploy: Vercel
- Tanpa backend/database — landing page statis, link-link disimpan di file config

## 7. Out of Scope (v1)
- Tidak ada sistem pembayaran custom (pakai link payment gateway existing, misal Trakteer/Mayar/Xendit link)
- Tidak ada dashboard admin
- Tidak ada tracking analytics custom (bisa ditambah GA/Meta Pixel belakangan)

---

# Prompt untuk Claude Code

```
Buatkan landing page Next.js (App Router) + Tailwind CSS untuk grup trading "Kamikaze FX".

Struktur halaman (single page, mobile-first, responsive):
1. Hero section — nama brand "Kamikaze FX", tagline singkat tentang sinyal & edukasi trading, CTA utama "Join Grup Umum".
2. Value proposition — 3-4 card singkat (sinyal harian, edukasi, komunitas trader, dll).
3. Section "Grup Umum" — deskripsi singkat + tombol CTA ke link grup umum (gratis).
4. Section "Grup VIP" — deskripsi benefit VIP, lalu tampilkan 2 pilihan akses berdampingan (2 kartu):
   - Kartu "Berbayar": harga + tombol CTA ke link pembayaran.
   - Kartu "Daftar via Broker": penjelasan "daftar akun broker via link referral kami, akses VIP gratis" + tombol CTA ke link referral broker.
5. FAQ singkat (3-5 pertanyaan, accordion).
6. Footer — disclaimer risiko trading (wajib, karena ini konten finansial) + kontak/social media.

Visual identity (WAJIB mengikuti logo brand, saya akan taruh file logo di /public/logo.png):
- Background navy gelap (#0A0E1A - #0D1220), bukan hitam pekat.
- Warna aksen utama: gradasi merah (#DC2626 ke #7F1D1D) untuk tombol CTA, heading highlight, border/divider.
- Warna aksen sekunder: hijau (#22C55E), dipakai terbatas untuk elemen terkait profit/growth/statistik/ikon panah naik — jangan dominan, hanya aksen seperti di logo.
- Teks putih/abu terang di atas background gelap.
- Heading pakai font sans-serif bold/tegas, body pakai font regular.
- Tampilkan logo (/public/logo.png) di navbar dan di hero section.
- Boleh tambahkan elemen dekoratif subtle terinspirasi bentuk pedang bersilang (garis tipis/divider), tapi jangan berlebihan.

Requirement teknis:
- Semua link (grup umum, checkout VIP, referral broker) taruh di satu file config (misal `lib/links.ts`) sebagai konstanta, biar gampang diganti nanti.
- Gunakan Tailwind sesuai palet warna di atas.
- Tambahkan meta tags dasar (title, description, og:image placeholder) untuk SEO.
- Struktur komponen per section, jangan satu file monolitik.
- Jangan buat backend/database, ini landing page statis.

Setelah selesai, tampilkan struktur file yang dibuat.
```

Ganti isi `lib/links.ts` dengan link asli grup Telegram/WA, link payment, dan link referral broker setelah project selesai di-generate. Taruh file logo (`IMG-20260807-WA0012.jpg` → rename jadi `logo.png`/`logo.jpg`) di folder `public/` sebelum atau sesudah generate project.
