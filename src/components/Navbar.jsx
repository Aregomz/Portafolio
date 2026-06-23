import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export function Navbar({ sections, active, isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleHash = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        setOpen(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handleHash)
    return () => document.removeEventListener('click', handleHash)
  }, [])

  // Cierra el menú si cambia la sección activa (scroll)
  useEffect(() => {
    setOpen(false)
  }, [active])

  return (
    <>
      <header className="fixed top-2 left-0 right-0 z-[100] px-4 sm:px-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-5 rounded-xl border border-[rgb(var(--surface))]/10 bg-[rgb(var(--bg))]/80 backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--bg))]/70">

          <a href="#hero" className="font-mono text-sm tracking-widest uppercase text-[rgb(var(--fg))]/60 hover:text-[rgb(var(--fg))] transition-colors">
            MA<span className="text-[rgb(var(--accent))]">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-1 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={
                    'px-3 py-1.5 rounded-lg transition-all duration-200 text-sm ' +
                    (active === s.id
                      ? 'text-[rgb(var(--fg))] bg-[rgb(var(--surface))]/10'
                      : 'text-[rgb(var(--fg))]/50 hover:text-[rgb(var(--fg))]/80')
                  }
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-[rgb(var(--surface))]/10 text-[rgb(var(--fg))]/60 hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--surface))]/10 transition-all duration-200"
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Hamburger — solo móvil */}
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden p-2 rounded-lg border border-[rgb(var(--surface))]/10 text-[rgb(var(--fg))]/60 hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--surface))]/10 transition-all duration-200"
              aria-label="Menú"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Menú móvil desplegable */}
        {open && (
          <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-xl border border-[rgb(var(--surface))]/10 bg-[rgb(var(--bg))]/95 backdrop-blur overflow-hidden">
            <ul className="flex flex-col py-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={
                      'flex items-center gap-3 px-5 py-3 text-sm transition-colors ' +
                      (active === s.id
                        ? 'text-[rgb(var(--fg))] bg-[rgb(var(--surface))]/10'
                        : 'text-[rgb(var(--fg))]/50 hover:text-[rgb(var(--fg))]/80 hover:bg-[rgb(var(--surface))]/5')
                    }
                  >
                    {active === s.id && (
                      <span className="w-1 h-1 rounded-full bg-[rgb(var(--accent))]" />
                    )}
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
