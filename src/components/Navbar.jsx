import { useEffect } from 'react'

export function Navbar({ sections, active }) {
  useEffect(() => {
    const handleHash = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleHash)
    return () => document.removeEventListener('click', handleHash)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <nav className="container-page flex items-center justify-between py-3">
        <a href="#hero" className="font-semibold tracking-tight">Marco Arellanes</a>
        <ul className="hidden md:flex gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={
                  'px-2 py-1 rounded transition-colors ' +
                  (active === s.id
                    ? 'text-white bg-white/10'
                    : 'text-white/70 hover:text-white')
                }
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


