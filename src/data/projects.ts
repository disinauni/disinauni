import type { Lang } from '@/lib/i18n'

export interface Project {
  slug: string
  name: string
  language: string
  description: Record<Lang, string>
  url: string
  repoUrl: string
  iconSrc: string
  accentColor: string
}

// Sumber tunggal daftar proyek keluarga belajar-* — dipakai di landing page,
// dan siap dipakai ulang nanti kalau ada halaman lain (mis. /academy, /dashboard)
// yang perlu menampilkan/mengiterasi proyek yang sama.
export const projects: Project[] = [
  {
    slug: 'belajar-cpp',
    name: 'Belajar C++',
    language: 'C++',
    description: {
      id: 'Dasar pemrograman & sistem lewat C++ modern, tanpa Turbo C++ jadul.',
      en: 'Programming & systems fundamentals with modern C++ — no old-school Turbo C++.',
    },
    url: 'https://belajar-cpp.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-cpp',
    iconSrc: '/icons/belajar-cpp.svg',
    accentColor: '#1E3A9E',
  },
  {
    slug: 'belajar-python',
    name: 'Belajar Python',
    language: 'Python',
    description: {
      id: 'Bahasa paling ramah pemula, dari sintaks dasar sampai OOP.',
      en: 'The most beginner-friendly language, from basic syntax to OOP.',
    },
    url: 'https://belajar-python.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-python',
    iconSrc: '/icons/belajar-python.svg',
    accentColor: '#1F4E8C',
  },
  {
    slug: 'belajar-sql',
    name: 'Belajar SQL',
    language: 'SQL',
    description: {
      id: 'Query database dari nol, 100% jalan di browser lewat SQLite/WASM.',
      en: 'Database queries from scratch, running 100% in-browser via SQLite/WASM.',
    },
    url: 'https://belajar-sql.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-sql',
    iconSrc: '/icons/belajar-sql.svg',
    accentColor: '#1D4ED8',
  },
  {
    slug: 'belajar-golang',
    name: 'Belajar Golang',
    language: 'Go',
    description: {
      id: 'Bahasa di balik Docker & Kubernetes — goroutine, channel, dan lainnya.',
      en: 'The language behind Docker & Kubernetes — goroutines, channels, and more.',
    },
    url: 'https://belajar-golang.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-golang',
    iconSrc: '/icons/belajar-golang.svg',
    accentColor: '#0891B2',
  },
  {
    slug: 'belajar-rust',
    name: 'Belajar Rust',
    language: 'Rust',
    description: {
      id: 'Ownership, borrowing, dan keamanan memori tanpa garbage collector.',
      en: 'Ownership, borrowing, and memory safety without a garbage collector.',
    },
    url: 'https://belajar-rust.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-rust',
    iconSrc: '/icons/belajar-rust.svg',
    accentColor: '#B8391C',
  },
]
