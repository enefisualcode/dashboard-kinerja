import type { Project } from "../types";

export const workActivityTracker: Project = {
  id: "01",
  slug: "work-activity-tracker",
  order: 1,
  featured: true,
  status: "active",
  categories: ["automation", "dashboard"],
  year: "2026",
  liveUrl: null,
  liveLabel: null,
  tint: "#0E7C6F",

  repositories: [
    {
      name: "dashboard-kinerja",
      url: "https://github.com/enefisualcode/dashboard-kinerja",
      role: {
        id: "Dashboard web yang menampilkan ringkasan dan dokumentasi aktivitas.",
        en: "The web dashboard that presents the summaries and activity log.",
      },
    },
    {
      name: "bot-reportbsi",
      url: "https://github.com/enefisualcode/bot-reportbsi",
      private: true,
      role: {
        id: "Bot Telegram yang menerima laporan harian dan menuliskannya ke spreadsheet.",
        en: "The Telegram bot that receives daily reports and writes them to the spreadsheet.",
      },
    },
  ],

  technologies: [
    "Telegram Bot API",
    "Python",
    "Google Gemini",
    "Google Sheets",
    "Google Drive",
    "Chart.js",
    "Railway",
  ],

  screenshots: [
    {
      src: "/screenshots/tracker-summary.png",
      width: 2560,
      height: 1800,
      frame: "browser",
      demoData: true,
      alt: {
        id: "Dashboard menampilkan total pembukaan baru, grafik batang per produk, grafik tren harian, dan tabel catatan terbaru.",
        en: "The dashboard showing total new openings, a bar chart per product, a daily trend chart, and a table of recent records.",
      },
      caption: {
        id: "Ringkasan bulanan: satu angka besar, dua grafik, satu tabel. Tidak lebih.",
        en: "The monthly summary: one big number, two charts, one table. Nothing more.",
      },
    },
    {
      src: "/screenshots/tracker-docs.png",
      width: 2000,
      height: 1330,
      frame: "browser",
      demoData: true,
      alt: {
        id: "Tab dokumentasi berisi kartu-kartu catatan kunjungan dengan tanggal dan label kategori berwarna.",
        en: "The documentation tab showing visit-log cards with dates and colour-coded category labels.",
      },
      caption: {
        id: "Tab dokumentasi: catatan kegiatan lapangan, dikelompokkan per kategori.",
        en: "The documentation tab: field-activity notes, grouped by category.",
      },
    },
    {
      src: "/screenshots/tracker-mobile.png",
      width: 1170,
      height: 2532,
      frame: "phone",
      demoData: true,
      alt: {
        id: "Tampilan dashboard di layar ponsel, tersusun satu kolom.",
        en: "The dashboard on a phone screen, laid out in a single column.",
      },
      caption: {
        id: "Dibuka dari HP di lapangan — jadi tampilan ponsel yang dirancang lebih dulu.",
        en: "It is opened from a phone in the field, so the phone layout came first.",
      },
    },
  ],

  placeholders: [],

  name: "Work Activity Tracker",
  kind: {
    id: "Automation + Dashboard Internal",
    en: "Automation + Internal Dashboard",
  },
  tagline: {
    id: "Ubah aktivitas kerja harian menjadi laporan yang terstruktur dan mudah dipantau.",
    en: "Turn daily work activities into structured, visual reports.",
  },
  summary: {
    id: "Laporan kerja harian biasanya berakhir sebagai pesan chat yang hilang di tengah percakapan. Sistem ini menerima laporan itu apa adanya — diketik bebas seperti biasa — lalu merapikannya menjadi catatan yang rapi dan menampilkannya di satu dashboard yang bisa dibuka dari HP.",
    en: "Daily work reports usually end up as chat messages that get lost mid-conversation. This system takes those reports exactly as they are — typed casually, the normal way — tidies them into structured records, and shows them on a single dashboard you can open from a phone.",
  },
  tags: [
    { id: "Automation", en: "Automation" },
    { id: "Dashboard", en: "Dashboard" },
    { id: "Produktivitas", en: "Productivity" },
  ],

  caseStudy: {
    overview: {
      id: "Work Activity Tracker adalah dua bagian yang bekerja sebagai satu alur: sebuah bot chat tempat aktivitas kerja dilaporkan dengan bahasa sehari-hari, dan sebuah dashboard web yang menampilkan hasilnya sebagai ringkasan dan dokumentasi. Di antaranya ada spreadsheet yang menyimpan semuanya dalam bentuk baris yang rapi.",
      en: "Work Activity Tracker is two parts working as one flow: a chat bot where work activity is reported in ordinary language, and a web dashboard that presents the result as summaries and documentation. In between sits a spreadsheet that keeps everything as tidy rows.",
    },
    problem: {
      id: "Mencatat aktivitas kerja harian itu pekerjaan kecil yang berulang, dan justru karena kecil, sering tertunda. Kalau dicatat di buku, angkanya susah dijumlahkan di akhir bulan. Kalau dikirim lewat chat, catatannya tenggelam. Kalau harus buka spreadsheet di HP sambil di lapangan, hampir pasti ditunda sampai lupa. Masalahnya bukan kurang niat mencatat — masalahnya jarak antara \"selesai melakukan\" dan \"selesai mencatat\" terlalu jauh.",
      en: "Recording daily work activity is a small, repetitive task — and precisely because it is small, it gets postponed. Written in a notebook, the numbers are painful to add up at month end. Sent as a chat message, the record sinks out of sight. Asked to open a spreadsheet on a phone while out in the field, most people put it off until they forget. The problem was never a lack of willingness to record things; it was that the distance between finishing the work and finishing the record was too long.",
    },
    idea: {
      id: "Jangan minta orang mengubah caranya melapor. Laporan sudah biasa ditulis sebagai satu kalimat bebas di chat — jadi biarkan bentuk itu tetap sama, dan biarkan sistemnya yang mengerti. Satu pesan, beberapa aktivitas sekaligus, tanpa formulir dan tanpa urutan yang harus dihafal.",
      en: "Do not ask anyone to change how they report. Reports are already written as a single free-form sentence in chat — so leave that shape alone and let the system do the understanding. One message, several activities at once, no form to fill in and no field order to memorise.",
    },
    solution: {
      id: "Bot Telegram menerima pesan bebas, membacanya dengan bantuan AI, dan memecahnya menjadi baris-baris terstruktur: tanggal, produk, jenis aktivitas, jumlah, dan status tindak lanjut. Setiap baris masuk ke spreadsheet. Dashboard web membaca spreadsheet itu dan menampilkannya sebagai ringkasan bulanan, grafik per produk, tren harian, dan galeri dokumentasi kegiatan lapangan. Kalau sampai sore belum ada laporan yang masuk, bot mengirim pengingat.",
      en: "A Telegram bot receives the free-form message, reads it with the help of AI, and breaks it into structured rows: date, product, activity type, quantity, and follow-up status. Each row lands in a spreadsheet. The web dashboard reads that spreadsheet and presents it as a monthly summary, a per-product chart, a daily trend, and a gallery of field-activity documentation. If no report has arrived by late afternoon, the bot sends a reminder.",
    },
    flow: [
      {
        label: { id: "Laporan diketik", en: "Report is typed" },
        detail: {
          id: "Satu pesan chat dengan bahasa biasa, beberapa aktivitas sekaligus.",
          en: "One chat message in plain language, several activities at once.",
        },
      },
      {
        label: { id: "Dibaca otomatis", en: "Read automatically" },
        detail: {
          id: "Bot memisahkan tiap aktivitas menjadi data yang jelas kolomnya.",
          en: "The bot separates each activity into clearly labelled fields.",
        },
      },
      {
        label: { id: "Tersimpan rapi", en: "Stored tidily" },
        detail: {
          id: "Setiap aktivitas jadi satu baris di spreadsheet, siap dijumlahkan.",
          en: "Every activity becomes one spreadsheet row, ready to be totalled.",
        },
      },
      {
        label: { id: "Tampil di dashboard", en: "Shown on the dashboard" },
        detail: {
          id: "Ringkasan, grafik, dan dokumentasi kegiatan dalam satu halaman.",
          en: "Summary, charts, and activity documentation on one page.",
        },
      },
    ],
    features: [
      {
        title: { id: "Lapor dengan mengetik biasa", en: "Report by typing normally" },
        body: {
          id: "Tidak ada formulir. Satu kalimat bisa berisi beberapa aktivitas dan beberapa produk sekaligus, dan tetap terbaca dengan benar.",
          en: "There is no form. A single sentence can contain several activities across several products and still be read correctly.",
        },
      },
      {
        title: { id: "Ringkasan bulanan sekali lihat", en: "A month at a glance" },
        body: {
          id: "Satu angka besar untuk total bulan berjalan, satu grafik untuk sebaran per produk, satu grafik untuk tren harian.",
          en: "One large number for the running month, one chart for the spread across products, one chart for the daily trend.",
        },
      },
      {
        title: { id: "Dokumentasi kegiatan lapangan", en: "Field-activity documentation" },
        body: {
          id: "Kunjungan, canvassing, penawaran, maintenance, survei, edukasi, meeting, dan dokumentasi tercatat sebagai kartu berlabel warna, lengkap dengan tanggal dan catatan singkat.",
          en: "Visits, canvassing, offers, maintenance, surveys, education, meetings, and documentation are recorded as colour-labelled cards with a date and a short note.",
        },
      },
      {
        title: { id: "Pengingat sore hari", en: "Late-afternoon reminder" },
        body: {
          id: "Kalau sampai jam yang ditentukan belum ada catatan hari itu, bot mengirim satu pengingat. Satu saja, bukan notifikasi beruntun.",
          en: "If nothing has been recorded by a set time, the bot sends one reminder. Exactly one — not a stream of notifications.",
        },
      },
      {
        title: { id: "Tetap terbuka meski sinyal buruk", en: "Still opens on a bad connection" },
        body: {
          id: "Dashboard menyimpan data terakhir di perangkat, jadi halaman langsung tampil sambil data baru diambil di latar belakang.",
          en: "The dashboard keeps the last data on the device, so the page appears immediately while fresh data loads in the background.",
        },
      },
      {
        title: { id: "Data sensitif tidak ikut tampil", en: "Sensitive data stays out of view" },
        body: {
          id: "Nama dan nomor rekening disamarkan di tampilan, dan foto kegiatan tersimpan di penyimpanan privat, bukan di dalam halaman.",
          en: "Names and account numbers are masked in the interface, and activity photos live in private storage rather than inside the page.",
        },
      },
    ],
    behindTheBuild: {
      id: "Bagian bot ditulis dengan Python dan Telegram Bot API, dengan Google Gemini dipakai khusus untuk satu pekerjaan: mengubah kalimat bebas menjadi baris data. Penyimpanannya sengaja memakai Google Sheets, bukan database — supaya datanya tetap bisa dibuka, dikoreksi, dan dicentang manual tanpa perlu alat khusus. Dashboardnya satu halaman HTML dengan Chart.js, tanpa proses build, sehingga bisa dipasang di layar utama HP dan dibuka secepat membuka aplikasi.",
      en: "The bot is written in Python against the Telegram Bot API, with Google Gemini used for exactly one job: turning a free-form sentence into data rows. Storage is deliberately Google Sheets rather than a database, so the data stays openable, correctable, and tickable by hand without any special tooling. The dashboard is a single HTML page with Chart.js and no build step, so it can be pinned to a phone's home screen and opens about as fast as an app.",
    },
    challenges: [
      {
        title: { id: "AI yang menebak, bukan yang memutuskan", en: "AI that guesses, not decides" },
        body: {
          id: "Pembacaan otomatis kadang salah menebak kategori. Karena datanya disimpan di spreadsheet biasa, koreksinya cukup diketik ulang di sel yang salah — barisnya tidak hilang dan tidak perlu mengulang laporan. Ini keputusan desain: lebih baik salah yang mudah diperbaiki daripada sistem yang menolak masukan yang tidak sempurna.",
          en: "Automatic reading sometimes guesses a category wrong. Because the data lives in an ordinary spreadsheet, fixing it means editing one cell — the row is not lost and the report does not need re-sending. That was a design decision: a mistake that is easy to correct beats a system that rejects imperfect input.",
        },
      },
      {
        title: { id: "Sinyal lapangan yang tidak bisa diandalkan", en: "Field connections you cannot rely on" },
        body: {
          id: "Sumber datanya lambat dan kadang tidak menjawab. Dashboard akhirnya dibuat menampilkan salinan terakhir lebih dulu, mencoba ulang beberapa kali secara diam-diam, dan hanya menampilkan pesan gagal kalau memang belum pernah ada data sama sekali.",
          en: "The data source is slow and occasionally does not answer at all. The dashboard ended up showing the last saved copy first, retrying quietly a few times, and surfacing a failure message only when there has genuinely never been any data.",
        },
      },
      {
        title: { id: "Apa yang sebaiknya tidak ditampilkan", en: "What is better left off the screen" },
        body: {
          id: "Dashboard ini menyentuh data orang. Pelajaran yang paling terasa: memutuskan apa yang tidak perlu muncul sama pentingnya dengan memutuskan apa yang muncul. Nama dan nomor rekening disamarkan sejak di tampilan, dan foto tidak pernah dipindahkan keluar dari penyimpanan privat.",
          en: "This dashboard touches other people's data. The sharpest lesson was that deciding what must not appear matters as much as deciding what does. Names and account numbers are masked at the presentation layer, and photos are never moved out of private storage.",
        },
      },
    ],
    statusNote: {
      id: "Dipakai rutin. Alur lapor → simpan → tampil sudah berjalan penuh, dan dashboard dibuka dari HP sebagai bagian dari kebiasaan harian.",
      en: "In regular use. The report → store → display flow runs end to end, and the dashboard is opened from a phone as part of a daily routine.",
    },
    statusDone: [
      { id: "Lapor lewat chat dengan bahasa bebas", en: "Free-form reporting through chat" },
      { id: "Penyimpanan terstruktur per aktivitas", en: "Structured storage, one row per activity" },
      { id: "Ringkasan bulanan dan tren harian", en: "Monthly summary and daily trend" },
      { id: "Dokumentasi kegiatan lapangan", en: "Field-activity documentation" },
      { id: "Pengingat harian otomatis", en: "Automatic daily reminder" },
    ],
    statusNotYet: [
      { id: "Ekspor laporan ke PDF", en: "Report export to PDF" },
      { id: "Beberapa pengguna dalam satu tim", en: "Multiple users in one team" },
      { id: "Pencarian dan filter di dalam dokumentasi", en: "Search and filtering inside the documentation log" },
    ],
  },
};
