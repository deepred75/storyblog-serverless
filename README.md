# Storyblog Serverless

Blog sosial media dengan beberapa fungsi seperti pada umumnya dengan fitur berikut :

- Buat akun, ubah informasi akun (lokasi, profesi, bio, nickname, nama user, gambar profil, gambar sampul)
- Setiap user memiliki halaman profil publik yang mencakup daftar posting yang telah dipublikasikan user, gambar sampul user, informasi user, dan bagian rahasia 'postingan yang tidak dipublikasikan' yang hanya ditampilkan pada pemilik laman
- Posting teks & gambar, hapus posting, edit posting (deskripsi, konten, gambar posting, status diterbitkan)
- Sukai postingan, tambahkan/hapus postingan ke bookmark
- Ikuti / Berhenti mengikuti user, daftar posting yang diikuti
- Daftar posting dengan hashtag (hanya 1 tag yang didukung untuk setiap posting)
- Tulis komentar, vote komentar suara naik/turun, hapus komentar, edit komentar (konten), check riwayat edit komentar

Web app ini dibuat dengan Nuxt dan component Vue, di deploy fully static di shared hosting dengan permalink yang mendukung SEO

### nuxt.config.js
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
  head: {
    title: 'StoryBlog - The Place For Story',
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
