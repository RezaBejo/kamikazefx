# Kamikaze FX — Landing Page

Landing page satu halaman untuk komunitas trading Kamikaze FX.
Next.js 16 (App Router) + Tailwind CSS v4, statis, tanpa backend.

## Menjalankan

```bash
npm run dev     # http://localhost:3000
npm run build   # build produksi
npm run lint
```

## Aset logo

`public/logo.jpg` adalah sumber kebenaran. File aslinya 1254×1254 dengan mark
hanya 274px di tengah dan background navy solid tanpa alpha — tidak bisa
dipakai langsung di halaman.

`scripts/build-logo-assets.mjs` memotong ketat isinya, mengangkat background
jadi transparan, lalu menghasilkan:

| Hasil | Dipakai untuk |
|---|---|
| `public/logo-mark.png` | mark di hero |
| `public/logo-wordmark.png` | wordmark di navbar & footer |
| `public/og-image.png` | preview saat link di-share |
| `app/icon.png` | favicon |

Kalau `logo.jpg` diganti, jalankan ulang:

```bash
node scripts/build-logo-assets.mjs
```

Kalau ukuran atau posisi mark di file baru berbeda, sesuaikan konstanta
`MARK` dan `WORDMARK` di script tersebut.

## Yang perlu kamu isi

### `lib/links.ts` — semua link keluar

| Key | Dipakai di |
|---|---|
| `grupUmum` | Navbar, hero, section Grup Umum |
| `vipCheckout` | Kartu VIP "Berlangganan" |
| `brokerReferral` | Kartu VIP "Lewat broker" |
| `adminTelegram` | Username admin (tanpa `@`) — semua tombol konfirmasi |
| `instagram` / `tiktok` / `youtube` / `email` | Footer |

Sosial media yang dikosongkan (`""`) otomatis tidak ditampilkan.

### `lib/messages.ts` — format pesan ke admin

Telegram tidak bisa mengisi kolom pesan lewat link — tidak ada padanan
`wa.me/...?text=`. Jadi `components/CopyChat.tsx` menyalin pesan ke papan klip
lalu membuka chat admin; calon member tinggal tempel dan kirim.

Empat template tersedia: `vipBayar`, `vipBroker`, `vipTanya`, `umum`.
Tulis sebagai pesan utuh tanpa bagian yang harus diisi.

> Kalau mau benar-benar satu tap, jalurnya harus lewat bot Telegram
> (`t.me/NamaBot?start=vip_bayar`) — itu butuh bot dan penanganan di sisi
> server, di luar cakupan landing page statis ini.

### `lib/site.ts` — brand, harga, instrumen

Nama brand, tagline, deskripsi SEO, `url` (ganti ke domain asli sebelum
deploy — dipakai untuk canonical dan og:url), harga VIP, dan daftar instrumen
yang jalan di pita hero.

## Sistem desain

Palet disampel langsung dari logo, didefinisikan sebagai token Tailwind di
`app/globals.css`:

| Token | Nilai | Peran |
|---|---|---|
| `ink-800` | `#0C1326` | background asli logo, jadi ground halaman |
| `ink-900` / `ink-700` | | footer & permukaan naik |
| `blade-500` | `#FF222F` | merah ujung bilah — aksen utama |
| `blade-900` | `#5A0C10` | merah gagang — ujung gelap gradasi |
| `jade-500` | `#22E644` | hijau logo, dibatasi ke elemen profit/konfirmasi |

Tipografi:

- **Saira Condensed** — judul. Condensed dan tegas, kontras dengan wordmark
  logo yang lebar dan geometris.
- **IBM Plex Sans** — body.
- **IBM Plex Mono** — label, angka, dan kartu sinyal.

Struktur halaman dibangun dari garis rambut (`.hairline`) dan tanda merah
pendek (`.tick`), bukan dari kotak bersudut bulat.

## Motion

- Rangkaian saat halaman dibuka: `.a-rise` dengan `--d` sebagai jeda,
  murni CSS tanpa JS.
- Reveal saat scroll: `components/Reveal.tsx`, satu `IntersectionObserver`
  dipakai bersama semua instance.
- `prefers-reduced-motion` mematikan seluruh animasi.
- `@media (scripting: none)` memastikan isi halaman tetap terlihat kalau
  JavaScript mati.

## Struktur file

```
app/
  layout.tsx        # font + metadata SEO
  page.tsx          # rakitan section
  globals.css       # token, komponen dasar, keyframes
  icon.png          # favicon (dihasilkan script)
components/
  Navbar.tsx        # sticky, panel penuh di mobile
  Hero.tsx          # mark, headline, CTA, kartu sinyal, pita instrumen
  SignalCard.tsx    # contoh format sinyal — elemen utama halaman
  Ticker.tsx        # pita instrumen berjalan
  ValueProps.tsx    # daftar editorial "Yang kamu dapat"
  GrupUmum.tsx      # pita grup gratis
  GrupVip.tsx       # dua jalur akses VIP
  Faq.tsx           # accordion
  Footer.tsx        # sosial media + peringatan risiko
  Brand.tsx         # LogoMark & Lockup
  CtaButton.tsx     # tombol CTA
  SectionHead.tsx   # kepala section
  Reveal.tsx        # reveal saat scroll
lib/
  links.ts          # semua link keluar
  site.ts           # brand, harga, instrumen
scripts/
  build-logo-assets.mjs
```

## Catatan isi

Angka pada kartu sinyal di hero adalah **contoh format**, bukan sinyal live,
dan diberi label "Sampel". Pita instrumen sengaja tidak menampilkan harga —
halaman ini tidak menyajikan data pasar. Peringatan risiko dan pengungkapan
komisi afiliasi wajib tetap ada di footer.

## Deploy

Push ke GitHub lalu import di Vercel — tanpa konfigurasi tambahan.
