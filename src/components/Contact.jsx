import { useEffect, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function Contact({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="heading">Contacto</h2>
      <div className="mt-8 flex justify-center">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="mailto:arellanes.22@icloud.com" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <MdEmail className="text-xl text-[rgb(var(--accent))]" />
            <span>arellanes.22@icloud.com</span>
          </a>
          <a href="mailto:arellanesmarco@gmail.com" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <MdEmail className="text-xl text-[rgb(var(--accent))]" />
            <span>arellanesmarco@gmail.com</span>
          </a>
          <a href="tel:+529615875380" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <FaPhoneAlt className="text-xl text-[rgb(var(--accent))]" />
            <span>961 587 5380</span>
          </a>
          <a href="https://github.com/Aregomz" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <FaGithub className="text-xl text-[rgb(var(--accent))]" />
            <span>github.com/Aregomz</span>
          </a>
          <a href="https://www.linkedin.com/in/antonio-arellanes-gomez-19b8a5317" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <FaLinkedin className="text-xl text-[rgb(var(--accent))]" />
            <span>LinkedIn</span>
          </a>
        </Motion.div>
      </div>
    </section>
  )
}


