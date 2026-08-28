<div align="center">

  <img src="public/favicon.svg" width="64" height="64" alt="disinauni logo" />

  <h1>disinauni</h1>

  <p><strong>Di manapun kita berada, harus selalu belajar agar bisa menikmati proses kehidupan dengan bijak.</strong></p>

</div>

---

## Tentang Project

Landing page & portal untuk organisasi **disinauni** — pintu masuk ke seluruh keluarga situs [belajar-cpp](https://github.com/disinauni/belajar-cpp), [belajar-python](https://github.com/disinauni/belajar-python), [belajar-sql](https://github.com/disinauni/belajar-sql), [belajar-golang](https://github.com/disinauni/belajar-golang), dan [belajar-rust](https://github.com/disinauni/belajar-rust).

Situs ini sengaja dibuat sederhana dulu (satu halaman statis) — bukan portal academy penuh — tapi disusun supaya **siap diperluas** tanpa migrasi besar nanti:

- Adapter `@astrojs/vercel` sudah terpasang dari awal, jadi menambah route API/SSR (mis. `/api/*`, `/dashboard`) tinggal tambah file di `src/pages/`, tidak perlu ganti adapter.
- Daftar 5 proyek disimpan di satu sumber (`src/data/projects.ts`), bukan hardcode di halaman — kalau nanti ada halaman lain yang perlu menampilkan daftar proyek yang sama (mis. `/proyek`, admin panel), tinggal import ulang.
- `ProjectCard.astro` dipisah jadi komponen sendiri supaya gampang dipakai ulang di halaman lain.

### Kalau nanti benar-benar mau jadi "portal academy" (satu akun, progress lintas 5 situs)

Ini **bukan** cuma soal framework — kelima situs `belajar-*` saat ini menyimpan progress belajar di `localStorage` per-domain (origin-scoped), jadi `belajar-rust.disinauni.my.id` tidak bisa "melihat" progress dari `belajar-python.disinauni.my.id`. Untuk portal terpadu beneran, dibutuhkan tambahan:

1. Backend/database bersama (mis. Postgres via Vercel/Supabase) untuk akun & progress
2. Sistem autentikasi terpusat
3. Kelima situs `belajar-*` diubah supaya sync progress ke backend itu (bukan cuma localStorage)

Itu proyek arsitektur tersendiri, baru relevan dikerjakan kalau memang mau dieksekusi ke arah sana.

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [Astro v7](https://astro.build) + React islands |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Deployment | Vercel (adapter SSR-capable, walau situs ini masih statis penuh) |

---

## Memulai Development

```bash
# Clone repository
git clone https://github.com/disinauni/disinauni.git
cd disinauni

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka **http://localhost:4321** di browser.

### Scripts

```bash
npm run dev        # Development server (localhost:4321)
npm run build      # Production build
npm run preview    # Preview production build
npm run typecheck  # TypeScript type checking
```

---

## Struktur Project

```
disinauni/
├── public/
│   ├── icons/                 # Favicon tiap proyek belajar-* (dipakai di ProjectCard)
│   ├── favicon.svg            # Monogram "D" — logo organisasi
│   ├── og-default.svg/.png    # Social share image
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── ProjectCard.astro
│   ├── data/
│   │   └── projects.ts        # Sumber tunggal daftar 5 proyek
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.ts
└── vercel.json
```

---

## Deployment

Live di **[disinauni.my.id](https://disinauni.my.id)** (domain apex, bukan subdomain — perlu di-set manual di Vercel Project Settings → Domains).

---

## Lisensi

Dirilis di bawah [MIT License](./LICENSE).

---

<div align="center">
  <sub>Dibuat dengan ❤️ untuk pelajar Indonesia</sub>
</div>
