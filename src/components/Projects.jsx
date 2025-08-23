import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useInView, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export function Projects({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.3 })
  const [currentImageIndexes, setCurrentImageIndexes] = useState([0, 0, 0]) // Estado separado para cada proyecto

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  // Auto-play del carrusel para cada proyecto
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setCurrentImageIndexes(prev => [(prev[0] + 1) % 5, prev[1], prev[2]]); // 5 imágenes para RunInsight
      }, 3000),
      setInterval(() => {
        setCurrentImageIndexes(prev => [prev[0], (prev[1] + 1) % 5, prev[2]]); // 5 imágenes para VecindApp
      }, 3500),
      setInterval(() => {
        setCurrentImageIndexes(prev => [prev[0], prev[1], (prev[2] + 1) % 2]); // 2 imágenes para Laboratorios School
      }, 4000)
    ];

    return () => intervals.forEach(interval => clearInterval(interval));
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
      <h2 className="heading">Proyectos</h2>
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
              
              <div className="flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">
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
                        {c.title !== 'Laboratorios School' && c.images.length > 1 && c.images[getCurrentIndex(i, c.images) + 1] && (
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
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
                      >
                        <FaChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => nextImage(i, c.images)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all"
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
                              ? 'bg-[rgb(var(--accent))] w-6' 
                              : 'bg-white/30 hover:bg-white/50'
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


