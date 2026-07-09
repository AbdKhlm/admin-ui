# React + Vite

React + Vite repository untuk aplikasi frontend autentikasi dan dashboard keuangan sederhana. Proyek ini memakai backend JWT di `https://jwt-auth-eight-neon.vercel.app` dan sudah disiapkan untuk deploy ke Vercel.

## Demo

- Production: `https://admin-ui-nine-zeta.vercel.app`

## Fitur Utama

- Login dan register berbasis JWT
- Protected route untuk halaman yang membutuhkan autentikasi
- Dashboard dengan kartu balance, goals, upcoming bills, statistik, dan expense breakdown
- Halaman expenses dengan normalisasi data backend yang fleksibel
- Theme color switcher dan dark/light mode
- Snackbar untuk feedback error dan status aksi
- Testing end-to-end menggunakan Cypress

## Tech Stack

- React 18
- Vite 5
- React Router DOM 7
- Tailwind CSS 4
- Material UI
- Axios
- Formik + Yup
- Cypress
- Vercel

## Struktur Halaman

- `/login` : halaman login
- `/register` : halaman registrasi
- `/` : dashboard utama, wajib login
- `/balance` : halaman balance
- `/expenses` : halaman expenses, wajib login
- `/expense` : redirect ke `/expenses`

## Struktur Folder Penting

```text
src/
  assets/
    Icons/
  components/
    Elements/
    Fragments/
    Layouts/
  context/
  pages/
  services/
  Latihan/
cypress/
  e2e/
```

## Context yang Digunakan

- `AuthContext` untuk menyimpan user hasil decode JWT dan token di `localStorage`
- `ThemeContext` untuk warna tema utama
- `ColorModeContext` untuk mode terang/gelap
- `CounterContext` tersedia di app wrapper

## Konfigurasi API

Service utama berada di:

- `src/services/authService.jsx`
- `src/services/dataService.jsx`

Base URL backend saat ini:

```text
https://jwt-auth-eight-neon.vercel.app
```

Endpoint yang dipakai:

- `POST /login`
- `POST /register`
- `POST /logout`
- `GET /goals`
- `GET /expenses`
- `GET /bills`

## Kredensial Contoh Login

Contoh kredensial yang tersimpan di repo ada di `src/Latihan/auth.rest`:

```text
email: 111202315327@mhs.dinus.ac.id
password: 123456
```

Catatan: kredensial ini bergantung pada data backend yang aktif.

## Menjalankan Proyek Secara Lokal

1. Install dependency

```bash
npm install
```

2. Jalankan development server

```bash
npm run dev
```

3. Build production

```bash
npm run build
```

4. Preview hasil build

```bash
npm run preview
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Testing

Folder test end-to-end ada di `cypress/e2e`.

File test yang tersedia:

- `spec.cy.js` untuk login
- `register.cy.js` untuk register

`cypress.config.js` memakai `baseUrl` berikut:

```text
https://admin-ui-nine-zeta.vercel.app
```

Bisa dioverride dengan environment variable:

```bash
CYPRESS_BASE_URL=http://localhost:5173
```

## Deploy ke Vercel

Proyek ini memakai SPA rewrite di `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Supaya deploy berhasil:

- pastikan import path sesuai huruf besar/kecil nama file dan folder
- output build berasal dari `vite build`
- branch production mengarah ke `main`

## Catatan Pengembangan

- Folder asset ikon menggunakan nama `Icons` dengan huruf `I` besar
- Folder latihan menggunakan nama `Latihan` dengan huruf `L` besar
- Karena deploy berjalan di Linux, perbedaan huruf besar/kecil pada import akan menyebabkan build gagal
