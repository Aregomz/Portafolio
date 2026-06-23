import { useEffect, useRef } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { IconCloud } from "@/components/magicui/icon-cloud";
import { 
  Globe, 
  Palette, 
  Smartphone, 
  Code, 
  Zap, 
  Database, 
  Cloud, 
  Shield,
  GitBranch,
  Server,
  Layers
} from 'lucide-react'

const techList = [
  { name: 'JavaScript', Icon: Code },
  { name: 'Node.js', Icon: Code },
  { name: 'TypeScript', Icon: Code },
  { name: 'Python', Icon: Code },
  { name: 'MySQL', Icon: Database },
  { name: 'PostgreSQL', Icon: Database },
  { name: 'Flutter', Icon: Smartphone },
  { name: 'Dart', Icon: Code },
  { name: 'Kotlin', Icon: Code },
  { name: 'Figma', Icon: Palette },
  { name: 'Docker', Icon: Layers },
  { name: 'AWS', Icon: Cloud },
  { name: 'GitHub', Icon: GitBranch },
  { name: 'Git', Icon: GitBranch },
  { name: 'Sequelize', Icon: Database },
  { name: 'Postman', Icon: Server },
  { name: 'HTML', Icon: Globe },
  { name: 'CSS', Icon: Palette },
  { name: 'React', Icon: Globe },
  { name: 'Tailwind', Icon: Palette },
  { name: 'Express', Icon: Zap },
  { name: 'Vite', Icon: Zap },
]

const slugs = [
  "react",
  "tailwindcss",
  "flutter",
  "nodedotjs",
  "express",
  "sequelize",
  "mysql",
  "postgresql",
  "docker",
  "git",
  "github",
  "amazonaws",
  "figma",
  "dart",
  "kotlin",
  "android",
  "javascript",
  "typescript",
  "firebase",
  "prisma",
  "nextdotjs",
  "vercel",
  "nginx",
  "jira",
  "visualstudiocode",
  "androidstudio",
  "jest",
  "cypress",
  "gitlab",
  "sonarqube"
];

export function Technologies({ id, setActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-30% 0px -60% 0px', amount: 0.2 })

  useEffect(() => {
    if (inView) setActive(id)
  }, [inView, id, setActive])

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id={id} ref={ref} className="section">
      <h2 className="heading">Tecnologías</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        {/* Lista tradicional de tecnologías */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Principales tecnologías</h3>
          <div className="grid grid-cols-2 gap-3">
            {techList.map(({ name, Icon }, i) => (
              <Motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 * i }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg border border-[rgb(var(--surface))]/10 bg-[rgb(var(--surface))]/5 hover:bg-[rgb(var(--surface))]/10 transition-all"
              >
                <Icon className="text-xl text-[rgb(var(--accent))]" />
                <span className="text-sm">{name}</span>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* IconCloud */}
        <div className="space-y-4">
          <div className="relative flex size-full items-center justify-center overflow-hidden h-[40rem]">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
    </section>
  )
}


