"use client"

import { Github } from "lucide-react"

const projects = [
  {
    image: "/assets/images/backdoor.png",
    title: "Backdoor Control Panel",
    tech: "Python · Linux · Networking",
    description:
      "Desarrollo de una herramienta de control remoto enfocada en pruebas de seguridad y aprendizaje de técnicas ofensivas en entornos controlados.",
    tags: ["Python", "Security", "Linux"],
    github: "#",
    link: "#",
  },
  {
    image: "/assets/images/hyprland.jpeg",
    title: "Personalización Arch Linux + Hyprland",
    tech: "Arch Linux · Hyprland · Waybar · Kitty",
    description:
      "Configuración completa de entorno Linux minimalista con Hyprland, optimizando productividad y flujo de trabajo para ciberseguridad.",
    tags: ["ArchLinux", "Hyprland", "Waybar"],
    github: "#",
    link: "#",
  },
  {
    image: "/assets/images/multi.jpeg",
    title: "Multi Tool Security",
    tech: "Bash · Automation · Pentesting",
    description:
      "Suite de scripts para automatizar tareas de reconocimiento, escaneo y enumeración durante laboratorios de pentesting.",
    tags: ["Bash", "Automation", "Pentesting"],
    github: "#",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Proyectos
        </h2>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-xl overflow-hidden
              transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
            >
              {/* Imagen */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Tags flotantes */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black/80 text-white text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col h-[220px]">
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground mb-2">
                  {project.tech}
                </p>

                <p className="text-sm text-muted-foreground flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <a
                    href={project.github}
                    className="w-9 h-9 flex items-center justify-center rounded-full
                    bg-muted hover:bg-primary/20 transition"
                  >
                    <Github size={16} className="text-foreground" />
                  </a>

                  <a
                    href={project.link}
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Link
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
