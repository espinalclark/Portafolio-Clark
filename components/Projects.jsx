"use client"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    image: "/assets/images/backdoor.png",
    title: "Backdoor Control Panel",
    tech: ["PowerShell", "Windows", "Networking"],
    description:
      "Script PowerShell de C2 básico — reverse shell, persistencia y control remoto. Desarrollado para entender técnicas ofensivas en entornos de laboratorio.",
    github: "https://github.com/espinalclark/Scripting/blob/main/Backdoors/backdoor.ps1",
    highlight: true,
  },
  {
    image: "/assets/images/hyprland.jpeg",
    title: "Arch Linux + Hyprland",
    tech: ["Arch Linux", "Hyprland", "Waybar", "Bash"],
    description:
      "Entorno Linux minimalista optimizado para prácticas CTF y pentesting. Configuración completa desde cero.",
    github: "https://github.com/espinalclark/Hyprland-kali",
    highlight: false,
  },
  {
    image: "/assets/images/multi.jpeg",
    title: "ThreadDownloader",
    tech: ["Python", "Multithreading"],
    description:
      "Script multihilo en Python para descarga masiva de archivos desde URLs directas. Útil en fases de recolección de recursos.",
    github: "https://github.com/espinalclark/Multi_Thread",
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">

        <p className="section-label mb-4">// proyectos</p>
        <h2 className="font-mono font-bold text-white mb-12">
          Código propio
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group card-dark overflow-hidden flex flex-col"
              style={project.highlight ? {
                borderColor: "hsl(210, 60%, 28%)",
                background: "hsl(210, 30%, 10%)",
              } : {}}
            >
              {/* Imagen */}
              <div
                className="relative overflow-hidden"
                style={{
                  height: "160px",
                  background: "hsl(215, 13%, 9%)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.85 }}
                />
                {/* Overlay gradiente sutil */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, hsl(210, 30%, 10%) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3
                  className="font-mono font-semibold text-sm mb-2"
                  style={{
                    color: project.highlight
                      ? "hsl(210, 100%, 70%)"
                      : "hsl(210, 20%, 88%)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-xs leading-relaxed mb-4 flex-grow"
                  style={{ color: "hsl(215, 12%, 55%)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="badge-tech">{t}</span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="pt-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid hsl(215, 12%, 18%)" }}
                >
                  <a
                    href={`https://github.com/espinalclark`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono transition-colors"
                    style={{ color: "hsl(215, 12%, 45%)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "hsl(210, 20%, 75%)"}
                    onMouseLeave={e => e.currentTarget.style.color = "hsl(215, 12%, 45%)"}
                  >
                    <Github size={14} />
                    espinalclark
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono transition-colors"
                    style={{ color: "hsl(210, 100%, 60%)" }}
                    onMouseEnter={e => e.currentTarget.style.color = "hsl(210, 100%, 75%)"}
                    onMouseLeave={e => e.currentTarget.style.color = "hsl(210, 100%, 60%)"}
                  >
                    ver código
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
