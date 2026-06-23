import { useEffect, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import fotoMarco from '../assets/foto marco.jpg'

export function About({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  return (
    <section id={id} ref={ref} className="section">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">Acerca de mí</h2>
          <p className="mt-4 subheading">
            Soy Ingeniero de Software Fullstack con experiencia en desarrollo frontend y backend, diseño UX/UI, liderazgo de proyectos y arquitectura de software. Construyo soluciones digitales completas: desde interfaces responsivas e intuitivas con React, Tailwind CSS, Kotlin y Flutter, hasta APIs RESTful y bases de datos con Node.js, aplicando arquitecturas modernas como MVC y MVVM.
            Como Scrum Master Jr. y Líder de Proyectos, coordino equipos ágiles, facilito ceremonias Scrum y aseguro la entrega de valor en cada sprint. En el rol de Arquitecto de Software, diseño la estructura técnica de sistemas escalables, tomando decisiones clave sobre tecnologías, patrones y estándares de desarrollo.
            Me apasiona convertir ideas en productos digitales sólidos, desde el diseño hasta el MVP, con visión de negocio y enfoque en el usuario.
          </p>
          <div className="mt-4">
            <p className="text-[rgb(var(--fg))]/80 text-sm">
              • Egresado de la Universidad Politécnica en la carrera de Ingeniería de Software (2022-2025)
            </p>
          </div>
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img 
            src={fotoMarco} 
            alt="Marco - Ingeniero de Software" 
            className="h-40 w-40 sm:h-52 sm:w-52 rounded-xl object-cover border border-white/10"
          />
        </Motion.div>
      </div>
    </section>
  )
}


