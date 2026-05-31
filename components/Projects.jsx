"use client"

import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    image: "/assets/images/hyprland.jpeg",
    title: "Arch Linux + Hyprland",
    tech: ["Arch Linux", "Hyprland", "Waybar", "Bash"],
    description:
      "Entorno Linux minimalista optimizado para prácticas CTF y pentesting. Configuración completa desde cero.",
    github: "https://github.com/espinalclark/Hyprland-kali",
    highlight: true,
  },
  {
    image: "/assets/images/multi.jpeg",
    title: "ThreadDownloader",
    tech: ["Python", "Multithreading"],
    description:
      "Script multihilo en Python para descarga masiva de archivos desde URLs directas. Útil para automatización y recolección de recursos.",
    github: "https://github.com/espinalclark/Multi_Thread",
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,65,.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        <p className="section-label mb-3 text-center">
          // proyectos
        </p>

        <h2
          className="font-mono font-bold text-center mb-3"
          style={{
            color: "#e5e7eb",
            fontSize: "clamp(1.8rem,4.5vw,2.8rem)",
          }}
        >
          Mis proyectos
        </h2>

        <p
          className="text-center mb-10 max-w-2xl mx-auto text-sm"
          style={{
            color: "rgba(229,231,235,.7)",
          }}
        >
              Herramientas, configuraciones y automatizaciones desarrolladas
          durante mi aprendizaje en Linux, pentesting y ciberseguridad.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                transition-all
                duration-700
                hover:-translate-y-3
                hover:scale-[1.02]
              "
              style={{
                background: "rgba(0,0,0,.35)",
                backdropFilter: "blur(18px)",
                border: project.highlight
                  ? "1px solid rgba(0,255,65,.35)"
                  : "1px solid rgba(0,255,65,.12)",
              }}
            >

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-700
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,65,.12), transparent 50%)",
                }}
              />

              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-[2px]
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-700
                "
                style={{
                  background:
                    "linear-gradient(to right, transparent, #00ff41, transparent)",
                }}
              />

              <div
                className="relative overflow-hidden"
                style={{ height: "240px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-1000
                    group-hover:scale-110
                  "
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.95) 5%, transparent 60%)",
                  }}
                />

                {project.highlight && (
                  <div
                    className="
                      absolute
                      top-4
                      right-4
                      px-3
                      py-1
                      rounded-full
                      text-[10px]
                      font-mono
                      animate-pulse
                    "
                    style={{
                      background: "rgba(0,255,65,.12)",
                      border: "1px solid rgba(0,255,65,.3)",
                      color: "#00ff41",
                    }}
                  >
                    FEATURED
                  </div>
                )}
              </div>

              <div className="relative z-10 p-6 flex flex-col flex-grow">

                <h3
                  className="
                    font-mono
                    font-bold
                    text-lg
                    mb-3
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                  style={{
                    color: "#00ff41",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5 flex-grow"
                  style={{
                    color: "rgba(229,231,235,.7)",
                  }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-2.5
                        py-1.5
                        rounded-md
                        font-mono
                        text-[11px]
                        transition-all
                        hover:scale-105
                      "
                      style={{
                        background: "rgba(0,255,65,.06)",
                        border: "1px solid rgba(0,255,65,.12)",
                        color: "rgba(229,231,235,.7)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{
                    borderTop: "1px solid rgba(0,255,65,.12)",
                  }}
                >
                  <a
                    href="https://github.com/espinalclark"
                    className="flex items-center gap-2 font-mono text-xs"
                    style={{ color: "rgba(229,231,235,.65)" }}
                  >
                    <Github size={14} />
                    espinalclark
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 font-mono text-xs"
                    style={{ color: "#00ff41" }}
                  >
                    Ver código
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p
            className="font-mono text-xs"
            style={{ color: "rgba(229,231,235,.45)" }}
          >

          </p>
        </div>

      </div>
    </section>
  )
}
