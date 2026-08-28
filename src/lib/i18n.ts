export type Lang = 'id' | 'en'

export const dictionary = {
  id: {
    meta: {
      title: 'disinauni — Portal Belajar Coding',
      description:
        'Di manapun kita berada, harus selalu belajar agar bisa menikmati proses kehidupan dengan bijak. Portal belajar coding gratis & interaktif untuk siswa Indonesia — C++, Python, SQL, Go, dan Rust.',
    },
    hero: {
      tagline: 'Di manapun kita berada, harus selalu belajar agar bisa menikmati proses kehidupan dengan bijak.',
      description:
        'Portal belajar coding gratis & interaktif untuk siswa SMP & SMA Indonesia — tanpa akun, tanpa iklan, langsung bisa dicoba di browser.',
      ctaProjects: 'Lihat 5 Proyek',
      ctaGithub: 'GitHub Organisasi',
    },
    philosophy: {
      title: 'Filosofi',
      intro:
        'Disinauni berasal dari Bahasa Jawa — bentuk pasif dari sinau (belajar), kira-kira berarti "diajari" atau "dibelajarkan".',
      di: { label: 'Dimanapun berada', desc: 'Belajar tidak terikat tempat, kelas, atau alat mahal.' },
      sinau: { label: 'Tetap belajar', desc: 'Proses yang tidak pernah selesai, sekecil apapun langkahnya.' },
      ni: { label: 'Nikmat urip', desc: 'Menikmati proses kehidupan, bukan sekadar mengejar hasil.' },
    },
    projects: {
      title: 'Proyek Kami',
      subtitle:
        'Lima situs belajar pemrograman, satu arsitektur — kurikulumnya dirancang mengikuti idiom asli tiap bahasa, bukan sekadar terjemahan urutan materi.',
      cta: 'Mulai belajar',
    },
    footer: {
      credit: 'Dibuat dengan ❤️ untuk pelajar Indonesia',
    },
  },
  en: {
    meta: {
      title: 'disinauni — Coding Learning Portal',
      description:
        'Wherever we are, we must keep learning to enjoy the process of life wisely. A free, interactive coding portal for Indonesian students — C++, Python, SQL, Go, and Rust.',
    },
    hero: {
      tagline: 'Wherever we are, we must keep learning to enjoy the process of life wisely.',
      description:
        'A free, interactive coding portal for Indonesian middle & high school students — no account, no ads, runs straight in your browser.',
      ctaProjects: 'See Our 5 Projects',
      ctaGithub: 'GitHub Organization',
    },
    philosophy: {
      title: 'Philosophy',
      intro:
        'Disinauni comes from Javanese — the passive form of sinau (to learn), roughly meaning "to be taught" or "to be made to learn".',
      di: { label: 'Wherever we are', desc: 'Learning isn’t bound to a place, a classroom, or expensive tools.' },
      sinau: { label: 'Keep learning', desc: 'A process that never ends, no matter how small each step is.' },
      ni: { label: 'Enjoy life', desc: 'Enjoying the process of life, not just chasing outcomes.' },
    },
    projects: {
      title: 'Our Projects',
      subtitle:
        'Five programming learning sites, one architecture — each curriculum follows the real idioms of its language, not just a translated copy of another one.',
      cta: 'Start learning',
    },
    footer: {
      credit: 'Made with ❤️ for Indonesian learners',
    },
  },
} as const

export function t(lang: Lang) {
  return dictionary[lang]
}
