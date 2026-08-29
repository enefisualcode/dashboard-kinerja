import type { Project } from "../types";

export const cpnsLearningApp: Project = {
  id: "04",
  slug: "cpns-learning-app",
  order: 4,
  featured: false,
  status: "in-development",
  categories: ["web"],
  year: "2026",
  liveUrl: null,
  liveLabel: null,
  tint: "#6D4AC4",

  repositories: [
    {
      name: "cpns-learning-app",
      url: "https://github.com/enefisualcode/cpns-learning-app",
      private: true,
      role: {
        id: "Aplikasi belajar untuk Android, iOS, dan web dari satu kode.",
        en: "The learning app for Android, iOS, and web from one codebase.",
      },
    },
  ],

  technologies: [
    "Expo",
    "React Native",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Vitest",
  ],

  screenshots: [],

  placeholders: [
    {
      frame: "phone",
      label: {
        id: "Daftar pelajaran",
        en: "The lesson list",
      },
      note: "Add /screenshots/cpns-lessons.png once the learning path (Phase 9) lands — capturing it now would show a temporary flat list.",
    },
    {
      frame: "phone",
      label: {
        id: "Menjawab soal",
        en: "Answering a question",
      },
      note: "Add /screenshots/cpns-question.png — use a seeded demo account, never a real learner's progress.",
    },
  ],

  name: "CPNS Learning App",
  kind: {
    id: "Aplikasi Belajar (Android, iOS, Web)",
    en: "Learning App (Android, iOS, Web)",
  },
  tagline: {
    id: "Membuat latihan CPNS terasa lebih seperti bermain daripada membaca buku latihan.",
    en: "Making CPNS preparation feel more like a game than a textbook.",
  },
  summary: {
    id: "Aplikasi latihan soal CPNS dalam potongan-potongan pendek yang bisa dikerjakan sambil menunggu. Materi dan soalnya tersimpan di database, dan setiap jawaban serta pelajaran yang selesai ikut tercatat, jadi belajarnya bisa dilanjutkan dari mana saja.",
    en: "A CPNS practice app built out of short sessions you can finish while waiting for something else. Lessons and questions live in a database, and every answer and completed lesson is recorded, so study can continue from anywhere.",
  },
  tags: [
    { id: "Aplikasi Mobile", en: "Mobile App" },
    { id: "Pendidikan", en: "Education" },
    { id: "Micro-learning", en: "Micro-learning" },
  ],

  caseStudy: {
    overview: {
      id: "CPNS Learning App adalah aplikasi latihan untuk persiapan SKD — TWK, TIU, dan TKP — yang dipecah menjadi pelajaran-pelajaran pendek. Satu kode dipakai untuk Android, iOS, dan web. Saat ini berisi 100 soal awal yang tersusun dalam 24 pelajaran, dan aplikasinya sudah berjalan di atas data sungguhan, bukan contoh.",
      en: "CPNS Learning App is a practice app for SKD preparation — TWK, TIU, and TKP — broken into short lessons. One codebase serves Android, iOS, and web. It currently holds an initial 100 questions arranged into 24 lessons, and the app already runs on real stored data rather than sample content.",
    },
    problem: {
      id: "Persiapan CPNS biasanya berbentuk buku tebal atau tryout panjang yang butuh waktu duduk berjam-jam. Padahal waktu belajar yang benar-benar tersedia sering datang dalam potongan sepuluh menit: di perjalanan, saat menunggu, sebelum tidur. Format yang ada tidak cocok dengan waktu yang ada, jadi belajarnya tertunda terus.",
      en: "CPNS preparation usually comes as a thick book or a long mock exam that needs hours of sitting down. But the study time people actually have tends to arrive in ten-minute pieces: commuting, waiting, before bed. The format does not fit the time available, so studying keeps getting postponed.",
    },
    idea: {
      id: "Pecah materinya menjadi pelajaran yang bisa diselesaikan dalam sekali duduk singkat, dan simpan kemajuannya supaya tidak ada yang terasa terbuang saat aplikasi ditutup. Belajar sedikit tapi sering lebih realistis daripada belajar banyak tapi jarang.",
      en: "Break the material into lessons you can finish in one short sitting, and store the progress so nothing feels wasted when the app closes. A little, often is more realistic than a lot, rarely.",
    },
    solution: {
      id: "Aplikasi dengan pelajaran pendek yang bisa langsung dikerjakan. Setiap jawaban dinilai saat itu juga di perangkat, jadi tidak ada jeda menunggu jaringan, lalu disimpan di latar belakang. Penilaiannya berbeda sesuai jenis soalnya: TWK dan TIU punya jawaban benar dan salah, sementara TKP menilai setiap pilihan dengan bobot berbeda — persis seperti aturan aslinya.",
      en: "An app with short lessons you can start immediately. Every answer is scored on the device right away, so there is no waiting on the network, then saved in the background. Scoring differs by question type: TWK and TIU have right and wrong answers, while TKP weights every option differently — exactly as the real rules do.",
    },
    flow: [
      {
        label: { id: "Pilih pelajaran", en: "Pick a lesson" },
        detail: {
          id: "Pelajaran pendek dari materi TWK, TIU, atau TKP.",
          en: "A short lesson drawn from TWK, TIU, or TKP material.",
        },
      },
      {
        label: { id: "Jawab soalnya", en: "Answer the questions" },
        detail: {
          id: "Penilaian langsung di perangkat, tanpa menunggu jaringan.",
          en: "Scored on the device immediately, with no network wait.",
        },
      },
      {
        label: { id: "Lihat hasilnya", en: "See the result" },
        detail: {
          id: "Ringkasan skor sesuai aturan penilaian jenis soalnya.",
          en: "A score summary that follows the scoring rules for that question type.",
        },
      },
      {
        label: { id: "Kemajuan tersimpan", en: "Progress is saved" },
        detail: {
          id: "Jawaban dan pelajaran yang selesai tercatat, bisa dilanjutkan nanti.",
          en: "Answers and completed lessons are recorded, ready to continue later.",
        },
      },
    ],
    features: [
      {
        title: { id: "Pelajaran berdurasi pendek", en: "Short-form lessons" },
        body: {
          id: "Materi dipecah menjadi 24 pelajaran, cukup untuk dikerjakan di sela waktu tanpa harus menyiapkan waktu khusus.",
          en: "The material is split into 24 lessons, short enough to fit into spare moments without setting time aside.",
        },
      },
      {
        title: { id: "Penilaian sesuai jenis soal", en: "Scoring that matches the question type" },
        body: {
          id: "TWK dan TIU dinilai benar-salah; TKP dinilai dengan bobot per pilihan. Dua aturan yang berbeda, bukan satu aturan yang dipaksakan untuk semuanya.",
          en: "TWK and TIU are scored right or wrong; TKP is scored by per-option weight. Two distinct rules, not one rule forced onto everything.",
        },
      },
      {
        title: { id: "Belajar tetap jalan meski simpan gagal", en: "Learning continues even if saving fails" },
        body: {
          id: "Nilai dihitung di perangkat, penyimpanan berjalan di belakang. Kalau koneksi bermasalah, pelajaran tetap bisa diselesaikan.",
          en: "Scores are computed on the device; saving happens behind it. If the connection struggles, the lesson can still be finished.",
        },
      },
      {
        title: { id: "Tidak ada catatan ganda", en: "No duplicate records" },
        body: {
          id: "Setiap jawaban dan setiap sesi punya penanda tetap, jadi mengulang pengiriman tidak membuat riwayat belajar tercatat dua kali.",
          en: "Every answer and every session carries a stable identifier, so a retried save never records the same study history twice.",
        },
      },
      {
        title: { id: "Catatan belajar hanya milik pemiliknya", en: "Study records belong to their owner" },
        body: {
          id: "Aturan akses diterapkan di sisi database, bukan hanya di aplikasi — jadi satu akun tidak bisa membaca kemajuan akun lain.",
          en: "Access rules are enforced at the database, not only in the app — so one account cannot read another's progress.",
        },
      },
      {
        title: { id: "Satu kode untuk tiga platform", en: "One codebase, three platforms" },
        body: {
          id: "Android, iOS, dan web dibangun dari sumber yang sama, sehingga perbaikan cukup dilakukan sekali.",
          en: "Android, iOS, and web are built from the same source, so a fix only needs making once.",
        },
      },
    ],
    behindTheBuild: {
      id: "Dibangun dengan Expo dan React Native supaya Android, iOS, dan web berbagi satu kode, dengan TypeScript dalam mode paling ketat. Materi, soal, dan riwayat belajar tersimpan di Supabase di atas PostgreSQL, dengan aturan akses per baris supaya kepemilikan data dijaga di lapisan database. Logika penilaiannya sengaja dipisahkan dari tampilan sehingga bisa diuji sendiri — saat ini ada 152 pengujian otomatis yang berjalan.",
      en: "Built with Expo and React Native so Android, iOS, and web share a single codebase, with TypeScript in its strictest mode. Lessons, questions, and study history live in Supabase on PostgreSQL, with row-level access rules so ownership is enforced at the database layer. The scoring logic is deliberately separated from the interface so it can be tested on its own — there are currently 152 automated tests running.",
    },
    challenges: [
      {
        title: { id: "Dua aturan penilaian, bukan satu", en: "Two scoring rules, not one" },
        body: {
          id: "TKP tidak punya jawaban benar — setiap pilihan bernilai berbeda. Menyatukannya dengan penilaian benar-salah akan membuat salah satunya salah. Jadi keduanya dibuat sebagai mesin penilaian terpisah, dan struktur datanya menjaga agar satu jenis soal tidak bisa tercampur aturan jenis lain.",
          en: "TKP has no correct answer — every option is worth something different. Merging it with right-or-wrong scoring would make one of them wrong. So they exist as two separate scoring engines, and the data structure prevents one question type from being scored under the other's rules.",
        },
      },
      {
        title: { id: "Gagal dengan jelas, bukan menebak", en: "Fail loudly instead of guessing" },
        body: {
          id: "Kalau ada soal yang datanya tidak lengkap, aplikasinya berhenti dengan pesan yang jelas, bukan menambal sendiri. Soal yang ditambal diam-diam berarti pengguna belajar dari materi yang salah tanpa pernah tahu.",
          en: "If a question arrives with incomplete data, the app stops with a clear message instead of repairing it. A quietly patched question means someone studies from wrong material and never finds out.",
        },
      },
      {
        title: { id: "Menahan urutan pengerjaan", en: "Holding the build order" },
        body: {
          id: "Godaan terbesar adalah membangun bagian yang paling menyenangkan lebih dulu — XP, streak, papan skor. Tapi tanpa penyimpanan kemajuan yang benar, semua itu hanya angka hiasan. Fondasinya diselesaikan lebih dulu, dan bagian gamifikasinya sengaja belum dibuat.",
          en: "The strongest temptation was to build the fun parts first — XP, streaks, leaderboards. But without progress storage that actually works, all of that is decorative. The foundation was finished first, and the gamification is deliberately still unbuilt.",
        },
      },
    ],
    statusNote: {
      id: "Sedang dibangun. Alur belajar sudah berjalan di atas data sungguhan: pelajaran dibaca dari database, jawaban dinilai, dan kemajuan tersimpan. Bagian gamifikasinya belum ada — dan tidak ditampilkan seolah-olah sudah ada.",
      en: "In development. The learning flow already runs on real stored data: lessons load from the database, answers are scored, and progress is saved. The gamification layer does not exist yet — and is not presented as if it does.",
    },
    statusDone: [
      { id: "100 soal awal dalam 24 pelajaran", en: "An initial 100 questions across 24 lessons" },
      { id: "Penilaian TWK, TIU, dan TKP", en: "Scoring for TWK, TIU, and TKP" },
      { id: "Daftar akun dan masuk", en: "Sign-up and sign-in" },
      { id: "Kemajuan belajar tersimpan", en: "Persisted learning progress" },
      { id: "Berjalan di Android, iOS, dan web", en: "Runs on Android, iOS, and web" },
    ],
    statusNotYet: [
      { id: "XP, streak, dan aktivitas harian", en: "XP, streaks, and daily activity" },
      { id: "Halaman statistik", en: "The statistics screen" },
      { id: "Ulasan soal yang salah", en: "Review of missed questions" },
      { id: "Alur belajar bertingkat dengan pelajaran terkunci", en: "A staged learning path with locked lessons" },
    ],
  },
};
