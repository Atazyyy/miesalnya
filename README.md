# MieSalnyy — Menu Digital Resto (QR)

> **Kategori proyek: Menu Digital + QR untuk resto/kafe.**
> Halaman menu yang dibuka dari QR di meja pelanggan: pilih level pedas,
> susun pesanan, kirim ke kasir via WhatsApp.

Menu digital untuk resto fiktif "MieSalnyy" — konsep mie pedas bertingkat
(seperti mie level 1–5). Proyek ini adalah **concept demo** untuk portofolio
jasa pembuatan web — seluruh merek, menu, dan cabang bersifat fiktif.

**Live:** https://miesalnya.vercel.app

## Fitur

- Hero bertema pedas dengan indikator level 1–5
- Marquee menyala khas resto
- Menu 17 item dalam 4 kategori tab (Mie Level, Dimsum, Minuman, Topping)
- **Pemilih level pedas per item** — chip level 1–5 di kartu, ikon api
  menunjukkan level terpilih; item non-pedas ditandai ❄
- Keranjang: gabungkan item dengan level berbeda sebagai baris terpisah
- Checkout via WhatsApp dengan format pesanan rapi + nomor meja
- Tombol "Panggil Pelayan" mengambang
- **QR code otomatis** di footer — menunjuk ke URL halaman ini, siap
  dicetak dan ditempel di meja
- Fully responsive (didesain mobile-first, karena dibuka dari HP)

## Untuk siapa demo ini?

Resto, kafe, kedai kopi, warung nasi — semua bisnis F&B yang ingin
menekan biaya cetak menu dan mempermudah pelanggan memesan.

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion
- Lucide Icons
- QR via api.qrserver.com (tanpa library)

## Menjalankan

```bash
npm install
npm run dev      # development
npm run build    # production build ke folder dist/
npm run preview  # preview hasil build
```

---

Dibuat oleh [Agni Miftah Fauzi](https://github.com/Atazyyy) — jasa pembuatan
website & web app. Demo lain: [tanamanies-cafe.vercel.app](https://tanamanies-cafe.vercel.app) ·
[teinun.vercel.app](https://teinun.vercel.app) · [lapakhub.vercel.app](https://lapakhub.vercel.app) ·
[barberlagi.vercel.app](https://barberlagi.vercel.app)
