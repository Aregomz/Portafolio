import { useEffect, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'

const roles = [
  {
    company: 'MeServices – Fullstack Developer & Líder de Proyectos',
    period: 'Agosto 2025 – Actualidad',
    stages: [
      {
        label: 'Fullstack Developer & Líder de Proyectos',
        period: 'Diciembre 2025 – Actualidad',
        bullets: [
          'Desarrollo fullstack de soluciones a la medida con React, Node.js, C# y bases de datos relacionales, integradas con ContpaQi y sus SDK.',
          'Liderazgo de proyectos: planeación, estimación y seguimiento de entregables.',
          'Coordinación del equipo de desarrollo, aplicando metodologías ágiles (Scrum).',
          'Diseño de arquitectura de software y toma de decisiones técnicas.',
        ],
      },
      {
        label: 'Soporte Técnico + Practicante en Desarrollo',
        period: 'Agosto – Noviembre 2025',
        bullets: [
          'Atención y resolución de incidencias técnicas a clientes.',
          'Participación en el área de desarrollo como practicante, apoyando en tareas de frontend y backend.',
          'Documentación de procesos y soporte en despliegues.',
        ],
      },
    ],
  },
  {
    company: 'Nanoglow E-commerce – Back-End Developer (Bitquark Inc.)',
    period: 'Agosto 2024',
    bullets: [
      'Migraciones de base de datos con Sequelize.',
      'Validaciones en autenticación y formularios de productos.',
      'Autenticación segura con tokens JWT.',
    ],
  },
  {
    company: 'Hampton School – Front-End Developer',
    period: 'Marzo 2024',
    bullets: [
      'Creación de interfaces con React, CSS y JavaScript.',
      'Implementación de componentes reutilizables y optimizados.',
    ],
  },
]

export function Experience({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="heading">Experiencias</h2>
      <div className="mt-8 relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
        <div className="space-y-8">
          {roles.map((r, i) => (
            <Motion.div
              key={r.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[9px] top-1 h-3 w-3 rounded-full bg-[rgb(var(--accent))]" />
              <div className="ml-2 flex items-center gap-3">
                {r.logo && (
                  <img src={r.logo} alt={r.company} className="h-8 w-8 rounded object-contain bg-white/5 p-0.5" />
                )}
                <h3 className="font-semibold">{r.company}</h3>
              </div>
              <p className="text-sm text-white/70 ml-2">{r.period}</p>
              {r.stages ? (
                <div className="mt-3 ml-2 space-y-4">
                  {r.stages.map((stage) => (
                    <div key={stage.label}>
                      <p className="text-sm font-medium text-[rgb(var(--accent))]">{stage.label}</p>
                      <p className="text-xs text-white/50 mb-1">{stage.period}</p>
                      <ul className="list-disc pl-5 subheading">
                        {stage.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="mt-2 list-disc pl-5 subheading ml-2">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


