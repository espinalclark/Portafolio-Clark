"use client"

import { ExternalLink, Github, Lock, Wifi, Globe } from "lucide-react"

const projects = [
  {
    icon: Lock,
    title: "VulnScanner",
    description:
      "Herramienta automatizada de escaneo de vulnerabilidades web desarrollada en Python. Detecta XSS, SQLi y configuraciones inseguras.",
    tags: ["Python", "OWASP", "Automatizacion"],
    github: "#",
    demo: "#",
  },
  {
    icon: Wifi,
    title: "NetAudit",
    description:
      "Script de auditoria de redes inalambricas que evalua la seguridad de access points y detecta posibles vectores de ataque.",
    tags: ["Bash", "Wireless", "Linux"],
    github: "#",
    demo: null,
  },
  {
    icon: Globe,
    title: "WebRecon",
    description:
      "Framework de reconocimiento para recopilar informacion sobre objetivos web: subdominios, tecnologias, puertos abiertos y mas.",
    tags: ["Python", "Recon", "OSINT"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Proyectos
        </h2>
        <div className="h-1 w-16 bg-primary rounded mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <div
                key={i}
                className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <Icon className="text-primary mb-4" size={28} />
                <h3 className="text-foreground font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    Codigo
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
