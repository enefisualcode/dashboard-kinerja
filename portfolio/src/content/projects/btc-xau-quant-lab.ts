import type { Project } from "../types";

export const btcXauQuantLab: Project = {
  id: "05",
  slug: "btc-xau-quant-lab",
  order: 5,
  featured: false,
  status: "research",
  categories: ["research", "dashboard"],
  year: "2026",
  liveUrl: null,
  liveLabel: null,
  tint: "#3F6B4F",

  repositories: [
    {
      name: "btc-xau-quant-lab",
      url: "https://github.com/enefisualcode/btc-xau-quant-lab",
      private: true,
      role: {
        id: "Lingkungan riset lokal untuk menguji aturan strategi terhadap data historis.",
        en: "A local research environment for testing strategy rules against historical data.",
      },
    },
  ],

  technologies: ["Python", "pandas", "NumPy", "Streamlit", "Plotly", "pytest"],

  screenshots: [],

  placeholders: [
    {
      frame: "browser",
      label: {
        id: "Dashboard riset — hasil pengujian",
        en: "The research dashboard — test results",
      },
      note: "Add /screenshots/quant-dashboard.png rendered from the bundled synthetic dataset, so nothing implies a real track record.",
    },
    {
      frame: "browser",
      label: {
        id: "Pemeriksaan ketahanan parameter",
        en: "Parameter robustness check",
      },
      note: "Add /screenshots/quant-robustness.png — same synthetic dataset; keep the 'synthetic data' banner visible in frame.",
    },
  ],

  name: "BTC-XAU Quant Research Lab",
  kind: {
    id: "Riset & Pengujian Strategi",
    en: "Research & Strategy Testing",
  },
  tagline: {
    id: "Menguji ide strategi trading sebelum mempertaruhkan uang sungguhan.",
    en: "Testing trading ideas before risking real money.",
  },
  summary: {
    id: "Lingkungan riset untuk menguji apakah sebuah aturan trading sederhana benar-benar punya keunggulan, atau hanya kebetulan yang terlihat bagus di data masa lalu. Perangkat ini tidak terhubung ke bursa mana pun dan tidak pernah melakukan transaksi — tujuannya justru sebaliknya: mempersulit diri sendiri untuk tertipu oleh hasil yang terlihat menjanjikan.",
    en: "A research environment for testing whether a simple trading rule genuinely has an edge, or merely happens to look good on past data. It connects to no exchange and places no orders — its purpose is the opposite: to make it harder to fool yourself with results that look promising.",
  },
  tags: [
    { id: "Riset", en: "Research" },
    { id: "Data", en: "Data" },
    { id: "Analisis", en: "Analysis" },
  ],

  caseStudy: {
    overview: {
      id: "BTC-XAU Quant Research Lab adalah aplikasi riset lokal untuk menguji aturan trading sistematis pada Bitcoin dan emas terhadap data harga historis. Isinya mencakup pemuat data, indikator, aturan strategi, pengelolaan risiko, mesin pengujian, serangkaian pemeriksaan keandalan, dan sebuah dashboard untuk membaca hasilnya. Perangkat ini bukan bot trading dan tidak dirancang untuk menjadi bot trading.",
      en: "BTC-XAU Quant Research Lab is a local research application for testing systematic trading rules on Bitcoin and gold against historical price data. It covers data loading, indicators, strategy rules, risk management, a backtest engine, a battery of reliability checks, and a dashboard for reading the results. It is not a trading bot and is not designed to become one.",
    },
    problem: {
      id: "Menguji strategi trading itu mudah; menguji dengan jujur itu sulit. Kalau seratus kombinasi parameter dicoba pada satu rentang harga, salah satunya pasti terlihat luar biasa — bukan karena strateginya bagus, tapi karena begitulah sifat angka terbaik dari seratus percobaan acak. Kesalahan paling mahal di bidang ini bukan strategi yang buruk, melainkan strategi buruk yang tampak meyakinkan.",
      en: "Testing a trading strategy is easy; testing one honestly is hard. Try a hundred parameter combinations on one stretch of price history and one of them will look spectacular — not because the strategy is good, but because that is simply what the best of a hundred noisy draws looks like. The expensive mistake in this field is not a bad strategy; it is a bad strategy that looks convincing.",
    },
    idea: {
      id: "Bangun alatnya dengan asumsi bahwa penggunanya — saya sendiri — akan tergoda menipu diri. Jadi setiap bagian dirancang untuk mempersulit hasil yang menyesatkan agar tidak lolos: data uji terakhir dikunci, hasil terbaik tidak boleh dijadikan pilihan, dan sistemnya secara aktif mencari alasan membosankan yang lebih mungkin menjelaskan hasil bagus.",
      en: "Build the tool assuming its user — me — will be tempted to fool himself. So every part is designed to make misleading results harder to get through: the final test data is locked, the best result is not allowed to be the chosen one, and the system actively looks for the boring explanation that more likely accounts for a good outcome.",
    },
    solution: {
      id: "Data historis dibagi secara berurutan waktu — tidak pernah diacak, karena mengacak data harga berarti berlatih menggunakan masa depan untuk menebak masa lalu. Bagian terakhir dikunci dan hanya bisa dibuka dengan alasan yang dicatat. Saat mencoba banyak kombinasi parameter, yang dipilih bukan yang hasilnya paling tinggi, melainkan yang tetangga parameternya juga bagus — karena hasil tinggi yang berdiri sendiri biasanya kebetulan. Di atasnya ada sepuluh pemeriksaan otomatis yang menandai pola-pola khas hasil yang menipu, dan sebuah dashboard untuk membacanya.",
      en: "Historical data is split in chronological order — never shuffled, because shuffling price data means training on the future to predict the past. The last segment is locked and can only be opened with a recorded reason. When many parameter combinations are tried, the one selected is not the highest scoring but the one whose parameter neighbours also score well — because a high score standing alone is usually luck. On top of that sit ten automatic checks that flag the patterns typical of misleading results, and a dashboard for reading them.",
    },
    flow: [
      {
        label: { id: "Data historis", en: "Historical data" },
        detail: {
          id: "Harga masa lalu dimuat dan diperiksa kelengkapannya sebelum dipakai.",
          en: "Past prices are loaded and validated before anything uses them.",
        },
      },
      {
        label: { id: "Aturan strategi", en: "Strategy rules" },
        detail: {
          id: "Aturan masuk, keluar, dan ukuran posisi dijalankan bar demi bar.",
          en: "Entry, exit, and position-size rules run bar by bar.",
        },
      },
      {
        label: { id: "Pengujian & biaya", en: "Backtest and costs" },
        detail: {
          id: "Hasilnya dihitung lengkap dengan biaya transaksi, bukan hasil kotor.",
          en: "Results are computed with transaction costs included, not gross.",
        },
      },
      {
        label: { id: "Pemeriksaan keandalan", en: "Reliability checks" },
        detail: {
          id: "Sepuluh pemeriksaan mencari alasan mengapa hasil bagus mungkin palsu.",
          en: "Ten checks look for reasons a good result might be false.",
        },
      },
    ],
    features: [
      {
        title: { id: "Tidak boleh melihat masa depan", en: "It cannot look into the future" },
        body: {
          id: "Setiap indikator dan setiap keputusan hanya boleh memakai data yang sudah tersedia pada saat itu. Aturan ini diuji secara otomatis, karena kebocoran satu bar saja sudah cukup membuat seluruh hasil tidak berarti.",
          en: "Every indicator and every decision may only use data that existed at that moment. This is enforced by automated tests, because leaking a single bar is enough to make the whole result meaningless.",
        },
      },
      {
        title: { id: "Data uji yang dikunci", en: "A locked test set" },
        body: {
          id: "Bagian data terakhir tidak bisa disentuh tanpa membukanya secara sadar dan mencatat alasannya — supaya tidak terpakai diam-diam saat mencoba banyak kombinasi.",
          en: "The final slice of data cannot be touched without deliberately unlocking it and recording why — so it is never consumed quietly during a parameter search.",
        },
      },
      {
        title: { id: "Memilih dataran, bukan puncak", en: "Choosing plateaus, not peaks" },
        body: {
          id: "Parameter dipilih berdasarkan seberapa baik tetangganya, bukan seberapa tinggi puncaknya. Puncak yang berdiri sendiri ditandai sebagai mencurigakan.",
          en: "Parameters are chosen by how well their neighbours do, not by how high the peak is. An isolated peak is flagged as suspicious.",
        },
      },
      {
        title: { id: "Sepuluh peringatan otomatis", en: "Ten automatic warnings" },
        body: {
          id: "Terlalu sedikit transaksi, untung yang hilang saat biaya dinaikkan, keuntungan yang hanya berasal dari segelintir transaksi — masing-masing punya pemeriksaannya sendiri.",
          en: "Too few trades, profit that vanishes when costs rise, gains that come from only a handful of trades — each has its own check.",
        },
      },
      {
        title: { id: "Uji maju bertahap", en: "Walk-forward testing" },
        body: {
          id: "Strategi disetel pada satu periode lalu diuji pada periode berikutnya yang belum pernah dilihat, berulang-ulang. Hasilnya adalah gambaran paling jujur yang bisa dihasilkan alat ini.",
          en: "The strategy is fitted on one window then tested on the next unseen one, repeatedly. The result is the most honest picture this tool can produce.",
        },
      },
      {
        title: { id: "Setiap percobaan tercatat", en: "Every experiment is recorded" },
        body: {
          id: "Konfigurasi dan sidik jari datanya disimpan bersama hasilnya, jadi sebuah percobaan bisa diulang persis sama di kemudian hari.",
          en: "The configuration and a fingerprint of the dataset are saved alongside the result, so an experiment can be reproduced exactly later.",
        },
      },
    ],
    behindTheBuild: {
      id: "Ditulis dengan Python menggunakan pandas dan NumPy, tanpa memakai pustaka backtesting siap pakai — supaya urutan kejadian di dalam mesin pengujiannya bisa dipastikan sendiri, bukan diasumsikan. Dashboard-nya dibuat dengan Streamlit dan Plotly. Ada 138 pengujian otomatis, dan sebagian besar bukan untuk memastikan hasilnya bagus, melainkan untuk memastikan hasilnya tidak diam-diam salah.",
      en: "Written in Python with pandas and NumPy, deliberately without an off-the-shelf backtesting library — so the ordering of events inside the engine can be verified rather than assumed. The dashboard uses Streamlit and Plotly. There are 138 automated tests, and most of them are not there to confirm the results are good but to confirm the results are not quietly wrong.",
    },
    challenges: [
      {
        title: { id: "Angka bagus yang ternyata menyesatkan", en: "A good number that told the opposite story" },
        body: {
          id: "Dalam salah satu pengujian, sebuah pendekatan sederhana menghasilkan rasio risiko-imbal yang terlihat positif, padahal saldonya berakhir turun jauh. Penyebabnya adalah sifat matematis dari cara rasio itu dihitung. Sejak itu, pola tersebut menjadi salah satu pemeriksaan otomatis yang paling keras — karena siapa pun yang hanya menyebut angka itu akan melaporkan kebalikan dari kenyataan.",
          en: "In one test, a simple approach produced a risk-adjusted ratio that looked positive while the account itself ended far down. The cause was a mathematical property of how that ratio is computed. That pattern has since become one of the loudest automatic checks — because anyone quoting the ratio alone would report the opposite of what happened.",
        },
      },
      {
        title: { id: "Membuat alat yang menolak menyenangkan pemakainya", en: "Building a tool that refuses to please its user" },
        body: {
          id: "Bagian paling sulit bukan teknis, tapi menahan diri. Alat ini sengaja tidak menampilkan pemenang, dan kesimpulan bersihnya berbunyi kira-kira: tidak ditemukan tanda bahaya — dan itu bukan bukti adanya keunggulan.",
          en: "The hardest part was not technical but a matter of restraint. The tool deliberately reports no winner, and its clean verdict reads roughly: no red flags were found — and that is not evidence of an edge.",
        },
      },
      {
        title: { id: "Biaya yang sering dilupakan", en: "The costs people forget" },
        body: {
          id: "Banyak strategi yang terlihat menguntungkan berhenti menguntungkan begitu biaya transaksi ikut dihitung. Karena itu biaya dimasukkan sejak awal, dan ada pemeriksaan khusus untuk melihat apakah keuntungannya bertahan saat biaya digandakan.",
          en: "Plenty of strategies that look profitable stop being profitable once transaction costs are counted. So costs are included from the start, and there is a dedicated check for whether the profit survives when those costs are doubled.",
        },
      },
    ],
    statusNote: {
      id: "Riset dan sedang dikembangkan. Ini perangkat lunak riset dan pengujian: tidak terhubung ke bursa, broker, atau dompet mana pun, dan tidak memiliki jalur untuk melakukan transaksi. Tidak ada klaim keuntungan yang dibuat di sini, dan memang tidak seharusnya ada.",
      en: "Research, and still being developed. This is research and backtesting software: it connects to no exchange, broker, or wallet, and has no path to placing an order. No profitability claim is made here, and none should be.",
    },
    statusDone: [
      { id: "Pemuatan dan pemeriksaan data historis", en: "Historical data loading and validation" },
      { id: "Indikator yang dipastikan tidak melihat masa depan", en: "Indicators verified not to look ahead" },
      { id: "Mesin pengujian dengan biaya transaksi", en: "A backtest engine including transaction costs" },
      { id: "Pengelolaan risiko dan ukuran posisi", en: "Risk management and position sizing" },
      { id: "Pemeriksaan ketahanan dan uji maju bertahap", en: "Robustness checks and walk-forward testing" },
      { id: "Dashboard riset dan pencatatan percobaan", en: "A research dashboard and experiment log" },
    ],
    statusNotYet: [
      { id: "Kesimpulan tentang ada atau tidaknya keunggulan", en: "Any conclusion about whether an edge exists" },
      { id: "Strategi selain aturan tren sederhana", en: "Strategies beyond simple trend rules" },
      { id: "Eksekusi transaksi — memang tidak direncanakan", en: "Order execution — deliberately not planned" },
    ],
  },
};
