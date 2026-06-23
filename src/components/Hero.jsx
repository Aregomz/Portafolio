import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { ShinyButton } from "@/components/magicui/shiny-button"
import fotoMarco from '../assets/foto marco.jpg'

const roles = [
  'Fullstack Developer',
  'Scrum Master Jr.',
  'Líder de Proyectos',
  'Arquitecto de Software',
]

export function Hero({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  useEffect(() => {
    const role = roles[roleIdx]
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 75)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((prev) => (prev + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <section id={id} ref={ref} className="section">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[rgb(var(--accent))]/60 mb-4">
            Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[rgb(var(--fg))]">
            Ing. Marco Antonio<br />
            <span className="text-[rgb(var(--fg))]/50">Arellanes Gómez</span>
          </h1>

          <div className="mt-5 h-8 flex items-center justify-center md:justify-start gap-1">
            <span className="text-lg sm:text-xl text-[rgb(var(--accent))] font-mono">
              {displayed}
            </span>
            <span
              className="w-[2px] h-5 bg-[rgb(var(--accent))]"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a href="/Marco_Arellanes_CV.pdf" download>
              <ShinyButton>Descargar CV</ShinyButton>
            </a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <div className="relative group">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[rgb(var(--accent))] z-10" />
            <img
              src={fotoMarco}
              alt="Marco Arellanes"
              className="w-52 h-64 sm:w-60 sm:h-72 md:w-64 md:h-80 object-cover pl-3 grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-3 right-0 h-16 bg-gradient-to-t from-[rgb(var(--bg))] to-transparent pointer-events-none" />
          </div>
        </Motion.div>

      </div>
    </section>
  )
}
