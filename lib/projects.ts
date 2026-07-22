export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  img: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[]; // keys matching TECH_ICONS in components/tech-icons.tsx
  highlights: string[];
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "piradio",
    title: "Website Piradio",
    category: "NextJS with Figma",
    year: "2026",
    img: "/piradio.png",
    role: "Frontend Developer & UI Designer",
    description:
      "Platform radio streaming digital dengan desain yang difokuskan pada kenyamanan mendengarkan dan navigasi konten siaran yang cepat.",
    problem:
      "Piradio membutuhkan wajah digital baru yang lebih modern untuk menggantikan tampilan lama yang terasa kaku dan kurang ramah di perangkat mobile.",
    solution:
      "Desain UI dimulai dari Figma dengan pendekatan mobile-first, lalu diimplementasikan di Next.js agar navigasi antar halaman terasa instan tanpa reload.",
    stack: ["nextjs", "typescript", "tailwind", "figma"],
    highlights: [
      "Desain dibangun dari nol di Figma sebelum masuk tahap development",
      "Navigasi antar siaran tanpa reload berkat Next.js App Router",
      "Skor performa mobile yang stabil di atas 90 pada Lighthouse",
    ],
  },
  {
    id: 2,
    slug: "ecommerce-qrcode",
    title: "Ecommerce QRCode Based",
    category: "Mobile First With Laravel",
    year: "2025",
    img: "/prjct-toko.png",
    role: "Fullstack Developer",
    description:
      "Sistem belanja berbasis QR code untuk toko fisik, memudahkan pelanggan memindai produk dan langsung menyelesaikan pembayaran dari ponsel.",
    problem:
      "Pemilik toko butuh cara agar pelanggan bisa berbelanja mandiri tanpa antre di kasir, terutama saat jam ramai.",
    solution:
      "Dibangun dengan Laravel sebagai backend dan tampilan mobile-first, setiap rak produk memiliki QR unik yang membuka katalog dan keranjang belanja instan.",
    stack: ["laravel", "php", "mysql", "tailwind"],
    highlights: [
      "Setiap produk punya QR unik yang terhubung ke katalog real-time",
      "Alur checkout dirancang selesai dalam kurang dari 3 langkah",
      "Dashboard admin untuk kelola stok dan riwayat transaksi",
    ],
  },
  {
    id: 3,
    slug: "dospem-web",
    title: "DOSPEM Web",
    category: "Laravel",
    year: "2026",
    img: "/lpkia.png",
    role: "Backend & Frontend Developer",
    description:
      "Sistem manajemen bimbingan dosen pembimbing (DOSPEM) untuk kampus, mempermudah pelacakan progres mahasiswa dan jadwal konsultasi.",
    problem:
      "Proses bimbingan skripsi masih dicatat manual, membuat dosen dan mahasiswa kesulitan melacak progres dan jadwal temu.",
    solution:
      "Laravel digunakan untuk membangun sistem terpusat berisi log bimbingan, status revisi, dan notifikasi jadwal, dapat diakses dosen maupun mahasiswa.",
    stack: ["laravel", "php", "mysql"],
    highlights: [
      "Log bimbingan tersimpan otomatis dan bisa ditelusuri kapan saja",
      "Role terpisah untuk dosen, mahasiswa, dan admin akademik",
      "Notifikasi status revisi mempercepat komunikasi kedua pihak",
    ],
  },
  {
    id: 4,
    slug: "forum-osis-banjar-idaman",
    title: "Forum OSIS Banjar Idaman",
    category: "NextJS with TypeScript",
    year: "2026",
    img: "/prjct6.png",
    role: "Frontend Developer",
    description:
      "Forum digital untuk komunikasi antar pengurus OSIS se-Kota Banjar, tempat berbagi program kerja dan dokumentasi kegiatan.",
    problem:
      "Koordinasi antar OSIS tersebar di banyak grup chat terpisah sehingga informasi program kerja mudah tenggelam.",
    solution:
      "Forum dibangun dengan Next.js dan TypeScript agar tipe data thread dan komentar konsisten, dengan struktur kategori per sekolah dan program kerja.",
    stack: ["nextjs", "typescript", "tailwind"],
    highlights: [
      "Struktur thread per sekolah memudahkan pelacakan diskusi",
      "Type-safe end-to-end berkat TypeScript di seluruh komponen",
      "Tampilan ringan agar tetap cepat diakses lewat data mobile",
    ],
  },
  {
    id: 5,
    slug: "ecommerce-mobile-first",
    title: "Ecommerce Mobile First",
    category: "Laravel",
    year: "2025",
    img: "/prjct.png",
    role: "Fullstack Developer",
    description:
      "Toko online dengan tampilan yang dirancang khusus untuk pengalaman belanja lewat ponsel, dari katalog hingga pembayaran.",
    problem:
      "Mayoritas pengunjung toko berbelanja lewat HP, namun tampilan lama masih meniru layout desktop yang membuat scroll terasa berat.",
    solution:
      "Seluruh alur, dari grid produk, filter, hingga checkout, dirancang ulang dengan pendekatan mobile-first di atas Laravel.",
    stack: ["laravel", "php", "mysql", "tailwind"],
    highlights: [
      "Grid produk dioptimalkan untuk thumb-scroll satu tangan",
      "Filter kategori sticky agar pencarian lebih cepat",
      "Waktu muat halaman katalog ditekan lewat lazy-loading gambar",
    ],
  },
  {
    id: 6,
    slug: "saas-mini",
    title: "Saas Mini",
    category: "Next With Laravel API",
    year: "2025",
    img: "/saas.png",
    role: "Fullstack Developer",
    description:
      "Aplikasi SaaS skala kecil dengan frontend Next.js yang mengonsumsi API dari Laravel, cocok untuk tim kecil yang butuh dashboard ringan.",
    problem:
      "Dibutuhkan dashboard internal yang cepat dibangun namun tetap bisa berkembang jadi produk multi-tenant di kemudian hari.",
    solution:
      "Next.js dipakai sebagai layer frontend yang berkomunikasi dengan REST API Laravel, dipisah agar frontend dan backend bisa berkembang independen.",
    stack: ["nextjs", "typescript", "laravel", "tailwind"],
    highlights: [
      "Arsitektur terpisah frontend-backend memudahkan scaling ke depan",
      "Autentikasi berbasis token antara Next.js dan Laravel API",
      "Dashboard ringan dengan pola loading skeleton di tiap widget",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
