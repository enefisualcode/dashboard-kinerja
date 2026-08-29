import type { Project } from "../types";

export const nefKeuangan: Project = {
  id: "02",
  slug: "nef-keuangan",
  order: 2,
  featured: true,
  status: "active",
  categories: ["web", "dashboard"],
  year: "2026",
  liveUrl: "https://nefkeuangan-production.up.railway.app",
  liveLabel: {
    id: "Buka aplikasi (perlu akun)",
    en: "Open the app (account required)",
  },
  tint: "#1F6FEB",

  repositories: [
    {
      name: "nefkeuangan",
      url: "https://github.com/enefisualcode/nefkeuangan",
      role: {
        id: "Aplikasi web lengkap — antarmuka, akun, database, dan ekspor laporan.",
        en: "The full web application — interface, accounts, database, and report export.",
      },
    },
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Auth.js",
    "Google Gemini",
    "pdf-lib",
    "Railway",
  ],

  screenshots: [],

  placeholders: [
    {
      frame: "browser",
      label: {
        id: "Layar utama — pengeluaran hari ini",
        en: "Home screen — today's spending",
      },
      note: "Add /screenshots/nef-home.png (1440x900 @2x) — sign in with a demo account holding synthetic transactions only.",
    },
    {
      frame: "phone",
      label: {
        id: "Rincian harian & catat transaksi",
        en: "Daily detail & record a transaction",
      },
      note: "Add /screenshots/nef-detail.png (390x844 @3x) — same demo account, never a real balance.",
    },
  ],

  name: "NEF Keuangan",
  kind: {
    id: "Aplikasi Web Keuangan Pribadi",
    en: "Personal Finance Web App",
  },
  tagline: {
    id: "Tahu ke mana uangmu pergi, tanpa harus jadi orang yang rajin membukukan.",
    en: "Know where your money went, without having to be the kind of person who keeps books.",
  },
  summary: {
    id: "Aplikasi web keuangan pribadi untuk membuat pencatatan dan pemahaman kondisi keuangan menjadi lebih sederhana. Bisa dicatat lewat web atau lewat bot Telegram yang sudah terhubung — datanya tetap satu. Struk belanja bisa difoto dan dibaca otomatis, dan laporan bisa diunduh sebagai PDF.",
    en: "A personal finance web application built to make tracking and understanding your money simpler. Records can come from the web app or from a linked Telegram bot — it is the same data either way. Receipts can be photographed and read automatically, and reports can be downloaded as a PDF.",
  },
  tags: [
    { id: "Aplikasi Web", en: "Web App" },
    { id: "Keuangan Pribadi", en: "Personal Finance" },
    { id: "AI", en: "AI" },
  ],

  caseStudy: {
    overview: {
      id: "NEF Keuangan adalah aplikasi web tempat pengeluaran dan pemasukan dicatat, dikelompokkan, dan dilihat kembali. Aplikasi ini punya akun sendiri, database sendiri, dan bisa dipasang di layar utama HP. Satu akun bisa dihubungkan ke bot Telegram, jadi mencatat bisa dilakukan dari mana saja yang paling cepat saat itu.",
      en: "NEF Keuangan is a web application where spending and income get recorded, categorised, and looked back on. It has its own accounts, its own database, and can be pinned to a phone's home screen. An account can be linked to a Telegram bot, so recording can happen from wherever is quickest at the time.",
    },
    problem: {
      id: "Aplikasi keuangan biasanya gagal bukan karena kurang fitur, tapi karena terlalu banyak. Yang dibutuhkan sehari-hari cuma dua hal: mencatat dengan cepat, dan tahu apakah hari ini boros atau tidak. Sisanya — grafik yang rumit, kategori bertingkat, anggaran yang harus disiapkan dulu — justru membuat orang berhenti mencatat di minggu kedua.",
      en: "Finance apps usually fail not from having too few features but from having too many. Day to day, only two things matter: recording something quickly, and knowing whether today was heavy or light. The rest — elaborate charts, nested categories, budgets you must set up before you can start — is what makes people stop recording in week two.",
    },
    idea: {
      id: "Buat layar pertama menjawab satu pertanyaan saja: berapa pengeluaran hari ini, dan itu di atas atau di bawah kebiasaanmu. Semua fitur lain boleh ada, tapi harus mengalah pada pertanyaan itu. Dan karena mencatat harus mudah, sediakan lebih dari satu pintu masuk: ketik di web, kirim pesan ke bot, atau foto struknya.",
      en: "Make the first screen answer exactly one question: how much went out today, and is that above or below your own normal. Every other feature can exist, but it has to yield to that question. And because recording has to be easy, give it more than one entrance: type it on the web, message the bot, or photograph the receipt.",
    },
    solution: {
      id: "Aplikasi web dengan akun pribadi, database sendiri, dan satu layar utama yang menampilkan pengeluaran hari ini beserta perbandingannya terhadap rata-rata harian. Di bawahnya ada rincian per hari dan form untuk mencatat. Struk bisa difoto lalu dibaca otomatis menjadi transaksi yang tinggal dikonfirmasi. Akun bisa dihubungkan ke bot Telegram lewat kode sekali pakai, dan laporan periode bisa diunduh sebagai PDF.",
      en: "A web application with personal accounts, its own database, and one home screen showing today's spending alongside how it compares with your daily average. Below it sit the day-by-day details and the form for recording. A receipt can be photographed and read automatically into a transaction you only need to confirm. An account can be linked to the Telegram bot with a one-time code, and a period's report can be downloaded as a PDF.",
    },
    flow: [
      {
        label: { id: "Catat dari mana saja", en: "Record from anywhere" },
        detail: {
          id: "Lewat web, lewat bot Telegram, atau dengan memotret struk.",
          en: "Through the web app, through the Telegram bot, or by photographing a receipt.",
        },
      },
      {
        label: { id: "Dirapikan & dikategorikan", en: "Tidied and categorised" },
        detail: {
          id: "Nominal, tanggal, merchant, dan kategori dipisahkan menjadi satu transaksi.",
          en: "Amount, date, merchant, and category are separated into a single transaction.",
        },
      },
      {
        label: { id: "Masuk ke akunmu", en: "Saved to your account" },
        detail: {
          id: "Tersimpan di database dan hanya bisa dilihat oleh pemilik akun.",
          en: "Stored in the database and visible only to the account that owns it.",
        },
      },
      {
        label: { id: "Terbaca sebagai gambaran", en: "Read back as a picture" },
        detail: {
          id: "Total hari ini, perbandingan dengan kebiasaan, rincian, dan laporan PDF.",
          en: "Today's total, a comparison against your normal, the detail, and a PDF report.",
        },
      },
    ],
    features: [
      {
        title: { id: "Satu layar, satu pertanyaan", en: "One screen, one question" },
        body: {
          id: "Layar utama menampilkan pengeluaran hari ini dan menandai apakah itu di atas atau di bawah rata-rata harianmu — bukan dinding penuh grafik.",
          en: "The home screen shows today's spending and marks whether it sits above or below your daily average — not a wall of charts.",
        },
      },
      {
        title: { id: "Foto struk, langsung jadi catatan", en: "Photograph a receipt, get a record" },
        body: {
          id: "Struk dibaca otomatis menjadi tanggal, merchant, nominal, dan kategori. Hasilnya ditampilkan untuk dikonfirmasi dulu, bukan langsung disimpan diam-diam.",
          en: "A receipt is read into a date, merchant, amount, and category. The result is shown for confirmation first rather than saved silently.",
        },
      },
      {
        title: { id: "Web dan bot, satu data", en: "Web and bot, one dataset" },
        body: {
          id: "Akun dihubungkan ke Telegram lewat kode sekali pakai yang punya masa berlaku. Setelah terhubung, catat dari mana saja — yang muncul tetap catatan yang sama.",
          en: "An account is linked to Telegram with a single-use code that expires. Once linked, record from either side — it is the same set of records.",
        },
      },
      {
        title: { id: "Laporan PDF", en: "PDF report" },
        body: {
          id: "Ringkasan satu periode bisa diunduh sebagai PDF, untuk disimpan atau dibagikan tanpa perlu membuka aplikasinya.",
          en: "A period summary can be downloaded as a PDF, to keep or to share without opening the app.",
        },
      },
      {
        title: { id: "Akun terpisah dan aman", en: "Separate, protected accounts" },
        body: {
          id: "Setiap pengguna punya akunnya sendiri dengan kata sandi yang tidak pernah disimpan apa adanya, dan bisa diganti dari dalam aplikasi.",
          en: "Every user has their own account with a password that is never stored as-is, changeable from inside the app.",
        },
      },
      {
        title: { id: "Terasa seperti aplikasi", en: "Feels like an app" },
        body: {
          id: "Bisa dipasang di layar utama HP dan dibuka layar penuh, dengan pilihan tema di dalamnya.",
          en: "It can be pinned to a phone's home screen and opens full-screen, with a theme picker inside.",
        },
      },
    ],
    behindTheBuild: {
      id: "Dibangun dengan Next.js App Router, React, dan TypeScript, dengan Tailwind untuk tampilannya. Datanya disimpan di PostgreSQL lewat Prisma, dengan setiap transaksi terikat ke pemiliknya. Autentikasi memakai Auth.js. Pembacaan struk memakai Google Gemini, dan laporan PDF dibuat langsung di server dengan pdf-lib supaya tidak perlu layanan pihak ketiga. Aplikasinya berjalan di Railway.",
      en: "Built on the Next.js App Router with React and TypeScript, styled with Tailwind. Data lives in PostgreSQL through Prisma, with every transaction tied to its owner. Authentication uses Auth.js. Receipt reading uses Google Gemini, and PDF reports are generated on the server with pdf-lib so no third-party service is involved. The app runs on Railway.",
    },
    challenges: [
      {
        title: { id: "Menghubungkan dua pintu ke satu akun", en: "Wiring two doors to one account" },
        body: {
          id: "Web punya sesi login, Telegram punya identitas sendiri. Menyatukannya butuh kode penghubung sekali pakai yang kedaluwarsa — supaya kode yang tidak sengaja tersebar tidak bisa dipakai untuk masuk ke catatan orang lain.",
          en: "The web has a login session; Telegram has its own identity. Joining them needed a single-use linking code that expires — so a code that leaks by accident cannot be used to reach someone else's records.",
        },
      },
      {
        title: { id: "AI yang boleh salah, asal ketahuan", en: "AI allowed to be wrong, but visibly" },
        body: {
          id: "Pembacaan struk tidak selalu tepat. Jadi hasilnya selalu ditampilkan untuk dikonfirmasi, bukan langsung masuk. Lebih baik satu ketukan tambahan daripada catatan yang diam-diam salah selama sebulan.",
          en: "Receipt reading is not always right. So the result is always shown for confirmation rather than saved straight away. One extra tap beats a record that has been quietly wrong for a month.",
        },
      },
      {
        title: { id: "Menahan diri menambah fitur", en: "Resisting the next feature" },
        body: {
          id: "Bagian paling sulit bukan membuat fiturnya, tapi memutuskan mana yang tidak boleh muncul di layar pertama. Anggaran, target, dan analitik yang lebih dalam sengaja belum ada — karena yang membuat orang berhenti mencatat justru layar yang terlalu ramai.",
          en: "The hardest part was not building features but deciding which ones must not appear on the first screen. Budgets, targets, and deeper analytics are deliberately absent — because a crowded screen is exactly what makes people stop recording.",
        },
      },
    ],
    statusNote: {
      id: "Sudah berjalan dan dipakai. Pencatatan, pembacaan struk, penghubungan ke bot, dan ekspor PDF sudah berfungsi. Screenshot produk belum dipasang di sini karena aplikasinya berisi data keuangan asli — akan diganti dengan tangkapan layar dari akun demo berisi data buatan.",
      en: "Live and in use. Recording, receipt reading, bot linking, and PDF export all work. Product screenshots are not shown here yet because the app holds real financial data — they will be replaced with captures from a demo account containing synthetic data.",
    },
    statusDone: [
      { id: "Akun, login, dan ganti kata sandi", en: "Accounts, sign-in, and password change" },
      { id: "Catat pengeluaran dan pemasukan", en: "Recording spending and income" },
      { id: "Pembacaan struk otomatis", en: "Automatic receipt reading" },
      { id: "Penghubungan akun ke bot Telegram", en: "Linking an account to the Telegram bot" },
      { id: "Ringkasan periode dan rincian harian", en: "Period summary and daily detail" },
      { id: "Unduh laporan PDF", en: "PDF report download" },
    ],
    statusNotYet: [
      { id: "Anggaran dan target pengeluaran", en: "Budgets and spending targets" },
      { id: "Beberapa dompet atau rekening terpisah", en: "Multiple separate wallets or accounts" },
      { id: "Screenshot produk dari akun demo", en: "Product screenshots from a demo account" },
    ],
  },
};
