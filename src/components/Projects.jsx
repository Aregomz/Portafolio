import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useInView, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export function Projects({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })
  const [currentImageIndexes, setCurrentImageIndexes] = useState([0, 0, 0, 0])

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  useEffect(() => {
    const counts = [4, 5, 5, 2]
    const delays = [3000, 3500, 3200, 4000]
    const intervals = counts.map((count, i) =>
      setInterval(() => {
        setCurrentImageIndexes(prev => {
          const next = [...prev]
          next[i] = (next[i] + 1) % count
          return next
        })
      }, delays[i])
    )
    return () => intervals.forEach(clearInterval)
  }, []);

  const nextImage = (projectIndex, images) => {
    setCurrentImageIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % images.length;
      return newIndexes;
    });
  }

  const prevImage = (projectIndex, images) => {
    setCurrentImageIndexes(prev => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] = (newIndexes[projectIndex] - 1 + images.length) % images.length;
      return newIndexes;
    });
  }

  // Función para obtener el índice correcto para cada proyecto
  const getCurrentIndex = (projectIndex, images) => {
    return currentImageIndexes[projectIndex] % images.length;
  }

  const cards = [
    {
      title: 'Peerdo',
      desc: 'Plataforma que conecta a estudiantes apasionados por el aprendizaje con quienes necesitan apoyo académico, creando una comunidad de conocimiento colaborativo.',
      contribution: 'Peerdo nace de la idea de democratizar el acceso al conocimiento entre estudiantes. La plataforma integra Inteligencia Artificial para transformar guías en PDF en rutas de aprendizaje interactivas con juegos y retos, haciendo el estudio más dinámico y efectivo. Además, los estudiantes pueden monetizar su conocimiento vendiendo sus propias guías dentro de la plataforma, generando un ecosistema donde aprender y enseñar tienen valor real.',
      awards: [
        '🥇 1er lugar – Expo ANFECA',
        '🥇 1er lugar – FACPYA Pitch (Universidad Autónoma de Nuevo León)',
        '🥇 1er lugar Estatal – Feria de Emprendimiento 2026 (Nayarit)',
      ],
      tech: ['Flutter', 'TypeScript', 'Microservicios', 'IA', 'Gamificación'],
      images: ['/peerdo1.jpeg', '/peerdo2.jpeg', '/peerdo3.jpeg', '/peerdo4.jpeg'],
    },
    {
      title: 'RunInsight',
      desc: 'App móvil para corredores, incluyendo análisis de entrenamientos, ranking y recomendaciones personalizadas.',
      contribution: 'Tareas del proyecto: Encargado de la maquetación UI/UX y definición de la experiencia de usuario, tomando decisiones arquitectónicas clave para garantizar la escalabilidad y mantenibilidad del sistema. Definí y prioricé los features principales del producto, desarrollé la aplicación móvil utilizando Dart (Flutter) bajo los principios de Arquitectura Limpia, asegurando una base sólida y escalable. Además, realicé la integración completa de las rutas con las APIs backend.',
      tech: ['Flutter', 'Dart', 'Figma'],
      images: ['/r1.png', '/r2.1.png', '/r3.1.png','/r4.png','/r5.png'], // Agrega aquí las rutas de tus imágenes
    },
    {
      title: 'VecindApp',
        desc: 'Aplicación móvil para conectar vecinos y facilitar la comunicación dentro de comunidades residenciales.',
        contribution: 'Encargado del diseño UI/UX y construcción de la aplicación móvil utilizando Kotlin y Android. Participe en la feature de detalles de residencial, configuré el sistema de notificaciones push con Firebase y realicé la integración de las rutas del backend aplicando el patrón Modelo-Vista-VistaModelo (MVVM) para garantizar mantenibilidad y escalabilidad.',
        tech: ['Kotlin', 'Android', 'Firebase'],
      images: ['/v1.png', '/v2.png', '/v3.png', '/v4.png', '/v5.png'], // Agrega aquí las rutas de tus imágenes
    },
    {
      title: 'Laboratorios School',
      desc: 'Página web educativa para gestión y visualización de laboratorios escolares con funcionalidades interactivas.',
      contribution: 'Tareas del proyecto: Construcción de la vista frontend y conexión con el backend. Desarrollé la interfaz de usuario responsiva utilizando React y Tailwind CSS, implementé la lógica de negocio en JavaScript y realicé la integración completa con las APIs del backend.',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      images: ['/lab1.jpg', '/lab2.jpeg'], // Agrega aquí las rutas de tus imágenes
    },
  ]

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="heading">Casos de Éxito</h2>
      <div className="mt-8 space-y-8">
        {cards.map((c, i) => (
          <Motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            {/* Información del proyecto */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-sm subheading">{c.desc}</p>
              <p className="text-sm text-[rgb(var(--fg))]/80 italic">{c.contribution}</p>
              
              {c.awards && (
                <div className="mt-1">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[rgb(var(--fg))]/35 mb-2">
                    Reconocimientos
                  </p>
                  <div className="space-y-1.5">
                    {c.awards.map((a) => (
                      <div key={a} className="flex items-center gap-3">
                        <div className="h-px w-4 bg-amber-400/60 flex-shrink-0" />
                        <span className="text-xs text-amber-300/90 font-medium tracking-wide">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-[rgb(var(--surface))]/10 border border-[rgb(var(--surface))]/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Imágenes del proyecto */}
            {c.images && c.images.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-[rgb(var(--fg))]/70">Capturas del proyecto:</h4>
                
                {/* Carrusel de imágenes */}
                <div className="relative">
                  <div className="relative h-auto w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
                    <AnimatePresence mode="wait">
                      <Motion.div
                        key={getCurrentIndex(i, c.images)}
                        className="flex gap-6 justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {/* Primera imagen */}
                        <img
                          src={c.images[getCurrentIndex(i, c.images)]}
                          alt={`${c.title} - Captura ${getCurrentIndex(i, c.images) + 1}`}
                          className={`h-auto object-contain rounded-lg ${
                            c.title === 'Laboratorios School' 
                              ? 'w-96 max-h-[28rem]' 
                              : 'w-64 max-h-96'
                          }`}
                        />
                        
                        {/* Segunda imagen (solo para proyectos con múltiples imágenes) */}
                        {c.title !== 'Laboratorios School' && c.title !== 'Peerdo' && c.images.length > 1 && c.images[getCurrentIndex(i, c.images) + 1] && (
                          <img
                            src={c.images[getCurrentIndex(i, c.images) + 1]}
                            alt={`${c.title} - Captura ${getCurrentIndex(i, c.images) + 2}`}
                            className="w-64 h-auto object-contain max-h-96 rounded-lg"
                          />
                        )}
                      </Motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Controles de navegación */}
                  {c.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(i, c.images)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[rgb(var(--bg))]/70 text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg))]/90 border border-[rgb(var(--surface))]/10 transition-all"
                      >
                        <FaChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => nextImage(i, c.images)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[rgb(var(--bg))]/70 text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg))]/90 border border-[rgb(var(--surface))]/10 transition-all"
                      >
                        <FaChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  {/* Indicadores de posición */}
                  {c.images.length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {c.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndexes(prev => {
                            const newIndexes = [...prev];
                            newIndexes[i] = index;
                            return newIndexes;
                          })}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === getCurrentIndex(i, c.images)
                              ? 'bg-[rgb(var(--accent))] w-5' 
                              : 'bg-[rgb(var(--surface))]/30 hover:bg-[rgb(var(--surface))]/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </Motion.div>
        ))}
      </div>
    </section>
  )
}


