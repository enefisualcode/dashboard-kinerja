import type { Project } from "../types";

export const financeAssistantBot: Project = {
  id: "03",
  slug: "finance-assistant-bot",
  order: 3,
  featured: true,
  status: "active",
  categories: ["automation", "dashboard"],
  year: "2026",
  liveUrl: null,
  liveLabel: null,
  tint: "#C2751B",

  repositories: [
    {
      name: "bot-keuangan-v2",
      url: "https://github.com/enefisualcode/bot-keuangan-v2",
      role: {
        id: "Bot Telegram: menerima pesan dan struk, lalu menuliskannya ke spreadsheet.",
        en: "The Telegram bot: takes messages and receipts, writes them to the spreadsheet.",
      },
    },
    {
      name: "keuangan-web",
      url: "https://github.com/enefisualcode/keuangan-web",
      role: {
        id: "Dashboard web ringan yang membaca hasil catatan bot.",
        en: "The lightweight web dashboard that reads what the bot recorded.",
      },
    },
  ],

  technologies: [
    "Python",
    "Telegram Bot API",
    "Google Gemini",
    "Google Sheets API",
    "HTML & CSS",
    "Railway",
  ],

  screenshots: [
    {
      src: "/screenshots/finance-dash-mobile.png",
      width: 1170,
      height: 2532,
      frame: "phone",
      demoData: true,
      alt: {
        id: "Dashboard keuangan di layar ponsel: total pengeluaran hari ini, rata-rata harian, rincian transaksi, dan grafik batang harian.",
        en: "The finance dashboard on a phone: today's total, the daily average, a transaction list, and a daily bar chart.",
      },
      caption: {
        id: "Dashboard-nya dibuka dari HP. Angka hari ini di atas, sisanya menyusul.",
        en: "The dashboard is opened from a phone. Today's number sits on top; everything else follows.",
      },
    },
    {
      src: "/screenshots/finance-dash-wide.png",
      width: 2200,
      height: 1640,
      frame: "browser",
      demoData: true,
      alt: {
        id: "Dashboard keuangan di layar lebar, menampilkan ringkasan periode dan grafik pengeluaran harian.",
        en: "The finance dashboard on a wide screen, showing the period summary and the daily spending chart.",
      },
      caption: {
        id: "Layar lebar menampilkan hal yang sama, hanya dengan ruang lebih lega.",
        en: "A wide screen shows the same things, just with more room to breathe.",
      },
    },
  ],

  placeholders: [
    {
      frame: "phone",
      label: {
        id: "Percakapan dengan bot di Telegram",
        en: "The Telegram conversation with the bot",
      },
      note: "Add /screenshots/bot-chat.png — capture a chat containing only made-up transactions, and crop out the account name and profile photo.",
    },
  ],

  name: "Finance Assistant Bot",
  kind: {
    id: "Automation + Dashboard",
    en: "Automation + Dashboard",
  },
  tagline: {
    id: "Catat keuangan semudah mengirim pesan.",
    en: "Record your finances as easily as sending a message.",
  },
  summary: {
    id: "Bot chat yang mencatat pengeluaran dari pesan biasa — atau dari foto struk — lalu merapikannya ke spreadsheet dan menampilkannya di dashboard yang bisa dibuka dari HP. Tidak ada aplikasi baru yang harus dipasang: pencatatannya terjadi di aplikasi chat yang sudah dipakai setiap hari.",
    en: "A chat bot that records spending from an ordinary message — or from a photo of a receipt — tidies it into a spreadsheet, and shows it on a dashboard you can open from your phone. There is no new app to install: the recording happens inside the chat app you already use every day.",
  },
  tags: [
    { id: "Automation", en: "Automation" },
    { id: "AI", en: "AI" },
    { id: "Dashboard", en: "Dashboard" },
  ],

  caseStudy: {
    overview: {
      id: "Finance Assistant Bot adalah versi paling ringan dari mencatat keuangan: kirim pesan, selesai. Bot membaca pesan itu, memisahkan nominal, merchant, dan kategorinya, lalu menyimpannya ke spreadsheet milik pengguna sendiri. Sebuah dashboard web ringan membaca spreadsheet itu dan menampilkannya sebagai gambaran pengeluaran per hari dan per periode.",
      en: "Finance Assistant Bot is the lightest possible version of tracking money: send a message, done. The bot reads that message, separates the amount, merchant, and category, and saves it to the user's own spreadsheet. A lightweight web dashboard reads that spreadsheet and presents it as a picture of spending by day and by period.",
    },
    problem: {
      id: "Mencatat pengeluaran gagal karena alasan yang sangat sepele: membuka aplikasi, memilih kategori dari daftar, mengetik nominal, menekan simpan. Tujuh detik, tapi tujuh detik itu terjadi tepat saat tangan sedang penuh belanjaan. Jadi ditunda. Lalu lupa. Lalu berhenti sama sekali, dan di akhir bulan tidak ada yang bisa dilihat.",
      en: "Expense tracking fails for an embarrassingly small reason: open the app, pick a category from a list, type the amount, hit save. Seven seconds — but those seven seconds land exactly when your hands are full of shopping. So it gets postponed. Then forgotten. Then dropped entirely, and at the end of the month there is nothing to look at.",
    },
    idea: {
      id: "Pindahkan pencatatan ke tempat yang sudah dibuka puluhan kali sehari: aplikasi chat. Kalau mengirim pesan ke teman terasa gampang, mencatat pengeluaran harus terasa sama gampangnya. Dan kalau ada struknya, memfoto struk itu harus cukup — tidak perlu mengetik ulang isinya.",
      en: "Move the recording to a place already opened dozens of times a day: the chat app. If messaging a friend feels effortless, recording an expense should feel the same. And when there is a receipt, photographing it should be enough — no retyping its contents.",
    },
    solution: {
      id: "Bot Telegram yang menerima tiga bentuk masukan: pesan bebas, perintah singkat, dan foto struk. Isi pesan dibaca dengan bantuan AI, tetapi kategorinya lebih dulu dicocokkan dengan daftar kata kunci yang sudah dikenal, jadi belanja sehari-hari hampir selalu masuk ke kategori yang benar tanpa perlu bertanya ke AI sama sekali. Setiap catatan disimpan ke spreadsheet milik pengguna — bot bahkan bisa membuatkan spreadsheet baru lengkap dengan halaman dashboard dan grafiknya. Untuk melihat hasilnya, ada dashboard web terpisah yang dibuka dari HP.",
      en: "A Telegram bot that accepts three kinds of input: a free-form message, a short command, and a photo of a receipt. Messages are read with the help of AI, but categories are first matched against a known keyword list, so everyday purchases land in the right category almost always without asking the AI at all. Every record is saved into the user's own spreadsheet — the bot can even create that spreadsheet for them, dashboard sheet and charts included. To see the result, there is a separate web dashboard opened from a phone.",
    },
    flow: [
      {
        label: { id: "Pesan", en: "Message" },
        detail: {
          id: "Ketik apa yang dibeli dan berapa, atau kirim foto struknya.",
          en: "Type what you bought and how much, or send a photo of the receipt.",
        },
      },
      {
        label: { id: "Bot memproses", en: "The bot processes it" },
        detail: {
          id: "Nominal, merchant, dan kategori dipisahkan; kategori dicocokkan dengan kata kunci yang sudah dikenal.",
          en: "Amount, merchant, and category are separated; the category is matched against known keywords.",
        },
      },
      {
        label: { id: "Data tersimpan", en: "The data is stored" },
        detail: {
          id: "Satu baris masuk ke spreadsheet milik pengguna sendiri.",
          en: "One row lands in the user's own spreadsheet.",
        },
      },
      {
        label: { id: "Dashboard", en: "Dashboard" },
        detail: {
          id: "Pengeluaran hari ini, tren per hari, dan sebaran kategori dalam satu halaman.",
          en: "Today's spending, the daily trend, and the category breakdown on one page.",
        },
      },
    ],
    features: [
      {
        title: { id: "Cukup kirim pesan", en: "Just send a message" },
        body: {
          id: "Tidak ada formulir dan tidak ada daftar kategori yang harus dibuka. Ketik seperti bicara, catatannya jadi.",
          en: "No form, no category list to open. Type it the way you would say it; the record appears.",
        },
      },
      {
        title: { id: "Foto struk juga bisa", en: "A photo of the receipt works too" },
        body: {
          id: "Struk dibaca otomatis. Kalau tanggal di struk terlalu lama, bot menanyakannya dulu daripada menyimpan tanggal yang salah.",
          en: "The receipt is read automatically. If its date looks too old, the bot asks first rather than saving a wrong date.",
        },
      },
      {
        title: { id: "Kategori yang menebak dengan benar", en: "Categories that guess correctly" },
        body: {
          id: "Daftar kata kunci untuk belanja sehari-hari membuat sebagian besar catatan masuk ke kategori yang tepat tanpa perlu memanggil AI — lebih cepat, lebih murah, dan lebih bisa diprediksi.",
          en: "A keyword list for everyday purchases puts most records in the right category without calling the AI at all — faster, cheaper, and more predictable.",
        },
      },
      {
        title: { id: "Spreadsheet dibuatkan otomatis", en: "The spreadsheet builds itself" },
        body: {
          id: "Pengguna baru bisa minta dibuatkan spreadsheet lengkap dengan halaman dashboard, format, dan grafiknya — tidak perlu menyiapkan apa pun sendiri.",
          en: "A new user can ask for a spreadsheet to be created complete with a dashboard sheet, formatting, and charts — nothing to set up by hand.",
        },
      },
      {
        title: { id: "Rekap dan tanya jawab", en: "Recaps and questions" },
        body: {
          id: "Rekap harian bisa diminta kapan saja, dan pertanyaan tentang catatan sendiri bisa diajukan langsung ke bot.",
          en: "A daily recap can be requested at any time, and questions about your own records can be asked directly to the bot.",
        },
      },
      {
        title: { id: "Datanya tetap milik pengguna", en: "The data stays the user's own" },
        body: {
          id: "Semua catatan tersimpan di spreadsheet milik pengguna sendiri, bukan di database tertutup. Bisa dibuka, disalin, atau dibawa pergi kapan saja.",
          en: "Every record lives in the user's own spreadsheet, not in a closed database. It can be opened, copied, or taken elsewhere at any time.",
        },
      },
    ],
    behindTheBuild: {
      id: "Bot ditulis dengan Python menggunakan Telegram Bot API, dengan Google Gemini untuk membaca pesan bebas dan struk, dan Google Sheets API untuk menulis serta memformat spreadsheet — termasuk membuat grafiknya. Dashboard-nya sengaja dibuat sebagai satu halaman HTML tanpa framework dan tanpa proses build, supaya ringan dibuka di jaringan seluler dan bisa dipasang di layar utama HP. Bot berjalan di Railway.",
      en: "The bot is Python on the Telegram Bot API, with Google Gemini reading free-form messages and receipts, and the Google Sheets API writing and formatting the spreadsheet — charts included. The dashboard is deliberately a single HTML page with no framework and no build step, so it stays light on a mobile connection and can be pinned to a phone's home screen. The bot runs on Railway.",
    },
    challenges: [
      {
        title: { id: "Jangan tanya AI kalau tidak perlu", en: "Do not ask the AI when you do not have to" },
        body: {
          id: "Awalnya setiap pesan dikirim ke AI. Ternyata sebagian besar belanja harian bisa dikenali dari nama merchant-nya saja. Menambahkan pencocokan kata kunci sebelum memanggil AI membuat pencatatan terasa jauh lebih cepat dan hasilnya lebih konsisten.",
          en: "At first every message went to the AI. It turned out most everyday purchases can be recognised from the merchant name alone. Adding keyword matching before the AI call made recording feel much faster and the results more consistent.",
        },
      },
      {
        title: { id: "Tanggal struk yang menipu", en: "Receipt dates that mislead" },
        body: {
          id: "Struk lama yang baru difoto akan tercatat di tanggal yang salah dan merusak grafik harian. Bot akhirnya memeriksa umur tanggal pada struk, dan bertanya dulu kalau terlalu lama, alih-alih diam-diam menyimpannya.",
          en: "An old receipt photographed today would be filed under the wrong date and quietly ruin the daily chart. The bot ends up checking how old the receipt's date is and asking first when it looks too old, rather than saving it silently.",
        },
      },
      {
        title: { id: "Spreadsheet sebagai database", en: "A spreadsheet as the database" },
        body: {
          id: "Memilih spreadsheet, bukan database, adalah pertukaran yang disadari. Kelemahannya: lebih lambat dan tidak cocok untuk data besar. Kelebihannya jauh lebih penting untuk alat pribadi — datanya bisa dilihat dan diperbaiki sendiri oleh pemiliknya, tanpa perlu meminta bantuan siapa pun.",
          en: "Choosing a spreadsheet over a database was a deliberate trade. The downside: slower, and wrong for large data. The upside mattered more for a personal tool — the owner can see and fix their own data without needing anyone's help.",
        },
      },
    ],
    statusNote: {
      id: "Dipakai setiap hari. Alur pesan → catatan → dashboard sudah berjalan penuh, termasuk pembacaan struk dan pembuatan spreadsheet otomatis.",
      en: "In daily use. The message → record → dashboard flow runs end to end, including receipt reading and automatic spreadsheet creation.",
    },
    statusDone: [
      { id: "Pencatatan lewat pesan bebas dan perintah singkat", en: "Recording via free-form messages and short commands" },
      { id: "Pembacaan foto struk", en: "Receipt photo reading" },
      { id: "Kategorisasi otomatis dengan kata kunci + AI", en: "Automatic categorisation with keywords plus AI" },
      { id: "Pembuatan spreadsheet dan dashboard otomatis", en: "Automatic spreadsheet and dashboard creation" },
      { id: "Rekap harian dan tanya jawab", en: "Daily recap and question answering" },
      { id: "Dashboard web untuk melihat hasilnya", en: "A web dashboard for reading the result" },
    ],
    statusNotYet: [
      { id: "Screenshot percakapan bot dengan data contoh", en: "Bot conversation screenshots using sample data" },
      { id: "Anggaran dan peringatan pengeluaran", en: "Budgets and spending alerts" },
      { id: "Dukungan lebih dari satu mata uang", en: "Support for more than one currency" },
    ],
  },
};
