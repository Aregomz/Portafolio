import { useState, useMemo, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { InteractiveGridPattern } from './components/magicui/interactive-grid-pattern'
import './index.css'

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[110] h-[2px] bg-[rgb(var(--surface))]/10">
      <div
        className="h-full bg-[rgb(var(--accent))]"
        style={{ width: `${progress}%`, transition: 'width 60ms linear' }}
      />
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Inicio' },
      { id: 'contact', label: 'Contacto' },
      { id: 'about', label: 'Acerca de mí' },
      { id: 'projects', label: 'Casos de Éxito' },
      { id: 'tech', label: 'Tecnologías' },
      { id: 'experience', label: 'Experiencias' },
      { id: 'certifications', label: 'Certificaciones' },
    ],
    []
  )

  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const update = () => {
      const vh = window.innerHeight
      let current = sections[0].id
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= vh * 0.45) current = s.id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [sections])

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 opacity-30 pointer-events-none z-0">
        <InteractiveGridPattern
          width={100}
          height={100}
          squares={[25, 25]}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-20%] h-[140%] skew-y-6"
        />
      </div>

      <ScrollProgress />
      <Navbar sections={sections} active={activeSection} isDark={isDark} onToggleTheme={() => setIsDark(d => !d)} />
      <main className="container-page relative z-10 pt-16">
        <Hero id="hero" setActive={() => {}} />
        <Contact id="contact" setActive={() => {}} />
        <About id="about" setActive={() => {}} />
        <Projects id="projects" setActive={() => {}} />
        <Technologies id="tech" setActive={() => {}} />
        <Experience id="experience" setActive={() => {}} />
        <Certifications id="certifications" setActive={() => {}} />
      </main>
    </div>
  )
}

export default App
