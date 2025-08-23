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
            Soy Ingeniero de Software con especialización en desarrollo frontend y UX/UI, creando interfaces responsivas e intuitivas con React, Tailwind CSS, Kotlin y Flutter.
            También tengo experiencia en backend y APIs RESTful con Node.js, integrando bases de datos y aplicando arquitecturas modernas (MVC, MVVM).
            Me apasiona transformar ideas en productos digitales usables y atractivos, desde el diseño hasta la implementación de un MVP validable en el mercado.
          </p>
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


