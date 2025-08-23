import { useEffect, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { ShinyButton } from "@/components/magicui/shiny-button";

export function Hero({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  return (
    <section id={id} ref={ref} className="section">
      <div className="text-center">
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="heading"
        >
          Marco Antonio Arellanes Gómez
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-3 text-lg sm:text-xl subheading"
        >
          Software Engineer | Frontend Developer | UX/UI Designer
        </Motion.p>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-2 text-sm sm:text-base text-[rgb(var(--fg))]/70"
        >
         
        </Motion.p>
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <a
            href="/Marco_Arellanes_CV.pdf"
            download
          >
            <ShinyButton>Descargar CV</ShinyButton>
          </a>
        </Motion.div>
      </div>
    </section>
  )
}


