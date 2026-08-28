export interface Project {
  slug: string
  name: string
  language: string
  description: string
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
    description: 'Dasar pemrograman & sistem lewat C++ modern, tanpa Turbo C++ jadul.',
    url: 'https://belajar-cpp.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-cpp',
    iconSrc: '/icons/belajar-cpp.svg',
    accentColor: '#1E3A9E',
  },
  {
    slug: 'belajar-python',
    name: 'Belajar Python',
    language: 'Python',
    description: 'Bahasa paling ramah pemula, dari sintaks dasar sampai OOP.',
    url: 'https://belajar-python.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-python',
    iconSrc: '/icons/belajar-python.svg',
    accentColor: '#1F4E8C',
  },
  {
    slug: 'belajar-sql',
    name: 'Belajar SQL',
    language: 'SQL',
    description: 'Query database dari nol, 100% jalan di browser lewat SQLite/WASM.',
    url: 'https://belajar-sql.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-sql',
    iconSrc: '/icons/belajar-sql.svg',
    accentColor: '#1D4ED8',
  },
  {
    slug: 'belajar-golang',
    name: 'Belajar Golang',
    language: 'Go',
    description: 'Bahasa di balik Docker & Kubernetes — goroutine, channel, dan lainnya.',
    url: 'https://belajar-golang.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-golang',
    iconSrc: '/icons/belajar-golang.svg',
    accentColor: '#0891B2',
  },
  {
    slug: 'belajar-rust',
    name: 'Belajar Rust',
    language: 'Rust',
    description: 'Ownership, borrowing, dan keamanan memori tanpa garbage collector.',
    url: 'https://belajar-rust.disinauni.my.id',
    repoUrl: 'https://github.com/disinauni/belajar-rust',
    iconSrc: '/icons/belajar-rust.svg',
    accentColor: '#B8391C',
  },
]
