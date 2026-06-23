import { useState, useMemo } from 'react'
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

function App() {
  const sections = useMemo(
    () => [
      { id: 'hero', label: 'Inicio' },
      { id: 'about', label: 'Acerca de mí' },
      { id: 'projects', label: 'Casos de Éxito' },
      { id: 'tech', label: 'Tecnologías' },
      { id: 'experience', label: 'Experiencias' },
      { id: 'certifications', label: 'Certificaciones' },
      { id: 'contact', label: 'Contacto' },
    ],
    []
  )

  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="relative min-h-screen">
      {/* Fondo global con InteractiveGridPattern */}
      <div className="fixed inset-0 opacity-50 pointer-events-none z-0">
        <InteractiveGridPattern
          width={100}
          height={100}
          squares={[25, 25]}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-20%] h-[140%] skew-y-6"
        />
      </div>
      
      <Navbar sections={sections} active={activeSection} />
      <main className="container-page relative z-10 pt-16">
        <Hero id="hero" setActive={setActiveSection} />
        <About id="about" setActive={setActiveSection} />
        <Projects id="projects" setActive={setActiveSection} />
        <Technologies id="tech" setActive={setActiveSection} />
        <Experience id="experience" setActive={setActiveSection} />
        <Certifications id="certifications" setActive={setActiveSection} />
        <Contact id="contact" setActive={setActiveSection} />
      </main>
    </div>
  )
}

export default App
