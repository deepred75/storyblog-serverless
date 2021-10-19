# Storyblog Social Media

Blog sosial media dengan beberapa fungsi seperti pada umumnya dengan fitur berikut :

- Buat akun, ubah informasi akun (lokasi, profesi, bio, nickname, nama user, gambar profil, gambar sampul)
- Setiap user memiliki halaman profil publik yang mencakup daftar posting yang telah dipublikasikan, gambar sampul, informasi, dan bagian rahasia 'postingan yang tidak dipublikasikan' hanya ditampilkan pada pemilik laman
- Posting teks & gambar, hapus posting, edit posting (deskripsi, konten, gambar posting, status diterbitkan)
- Sukai postingan, tambahkan/hapus postingan ke bookmark
- Ikuti / berhenti mengikuti user, daftar posting yang diikuti
- Daftar posting dengan hashtag (hanya 1 tag yang didukung untuk setiap posting)
- Tulis komentar, vote komentar suara naik/turun, hapus komentar, edit komentar & check history edit komentar

Web app ini fully responsive menggunakan plugin Tailwind css dibuat dengan Nuxt dan component Vue, di deploy fully static di shared hosting dengan permalink yang SEO friendly

### nuxt.config.js (static deploy)
```bash
export default {
  target: 'static',
    ssr: false,
    generate: {
      fallback: true
        },
    router: {
      middleware: ['authControl']
  },
```

### .htaccess (menghindari 404 page not found)
```bash
# BEGIN nuxt
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
# END nuxt
```

Find deployed project here : <a href="https://storyblog.malanggleerrr.com/">Storyblog</a>
