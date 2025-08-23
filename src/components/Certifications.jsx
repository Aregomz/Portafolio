import { useEffect, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'

const certifications = [
  {
    name: 'CISCO – Operating Systems Basics',
    url: 'https://www.credly.com/badges/ebedb7a8-0705-4be1-8ab4-2e311ed3c3ae/public_url',
    category: 'CISCO'
  },
  {
    name: 'CISCO – Network Support and Security',
    url: 'https://www.credly.com/badges/8ed637ba-a03d-4d31-93b8-36320de69e2d/public_url',
    category: 'CISCO'
  },
  {
    name: 'CISCO – Networking Basics',
    url: 'https://www.credly.com/badges/a0ee2d55-6829-4723-aadd-09d0d21f1258/public_url',
    category: 'CISCO'
  },
  {
    name: 'CISCO – Network Addressing and Basic Troubleshooting',
    url: 'https://www.credly.com/badges/d134b038-01ab-4758-824e-a0d859d815b8/public_url',
    category: 'CISCO'
  },
  {
    name: 'AWS – Cloud Foundations',
    url: 'https://www.credly.com/badges/fbedc463-badb-4241-9201-271c355ebd17/public_url',
    category: 'AWS'
  },
  {
    name: 'AWS – Cloud Architecting',
    url: 'https://www.credly.com/badges/aa5a4601-981d-49cb-a50e-5ac4c105d70b/public_url',
    category: 'AWS'
  }
]

export function Certifications({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }
    acc[cert.category].push(cert)
    return acc
  }, {})

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="heading">Certificaciones</h2>
      <div className="mt-8 space-y-8">
        {Object.entries(groupedCerts).map(([category, certs], categoryIndex) => (
          <Motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-[rgb(var(--accent))]">{category}</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {certs.map((cert, certIndex) => (
                <Motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * certIndex }}
                  viewport={{ once: true }}
                >
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-[rgb(var(--accent))/50] group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-white group-hover:text-[rgb(var(--accent))] transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-white/60 mt-1">Ver credencial</p>
                      </div>
                      <div className="text-[rgb(var(--accent))] opacity-60 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        ))}
      </div>
    </section>
  )
}
