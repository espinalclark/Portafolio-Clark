"use client"

import { Shield, Search, Terminal } from "lucide-react"

const cards = [
  {
    icon: Shield,
    title: "Seguridad Ofensiva",
    desc: "Pentesting en laboratorios THM, HTB y preparación eJPT. Enumeración, explotación y post-explotación.",
  },
  {
    icon: Search,
    title: "Análisis de Vulnerabilidades",
    desc: "Reconocimiento de superficie de ataque, detección de CVEs y análisis manual de servicios expuestos.",
  },
  {
    icon: Terminal,
    title: "Scripting",
    desc: "Automatización con Python y Bash para reconocimiento, enumeración y tareas repetitivas.",
  },
]

function AboutCard({ icon: Icon, title, desc }) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        p-5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.03]
      "
      style={{
        background: "rgba(0,0,0,.35)",
        border: "1px solid rgba(0,255,65,.12)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className="
          absolute
          top-0
          left-[-100%]
          w-full
          h-px
          group-hover:left-[100%]
          transition-all
          duration-1000
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, #00ff41, transparent)",
        }}
      />

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,255,65,.08), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <div
          className="
            mb-3
            w-11
            h-11
            flex
            items-center
            justify-center
            rounded-lg
            transition-all
            duration-500
            group-hover:scale-125
            group-hover:rotate-12
            animate-pulse
          "
          style={{
            background: "rgba(0,255,65,.08)",
            border: "1px solid rgba(0,255,65,.18)",
            boxShadow: "0 0 15px rgba(0,255,65,.12)",
          }}
        >
          <Icon size={18} style={{ color: "#00ff41" }} />
        </div>

        <h3
          className="font-mono font-semibold text-base mb-2"
          style={{ color: "hsl(120,50%,88%)" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(180,255,200,.65)" }}
        >
          {desc}
        </p>
      </div>
    </div>
  )
}
export default function About() {
  return (
    <section
      id="sobre-mi"
      className="py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="section-label mb-4 text-center">
          // sobre mi
        </p>

        <h2
          className="font-mono font-bold text-center mb-8"
          style={{ color: "#00ff41" }}
        >
          Un poco de contexto
        </h2>

        <div
          className="relative overflow-hidden rounded-2xl p-6 mb-10"
          style={{
            background: "rgba(0,0,0,.35)",
            border: "1px solid rgba(0,255,65,.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,255,65,.06), transparent 55%)",
            }}
          />

          <div className="relative z-10">
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(180,255,200,.72)" }}
            >
              Soy Clark, estudiante de Ingeniería en Ciberseguridad en Perú.
              Poseo la certificación

              <span
                className="
                  mx-2
                  px-2
                  py-1
                  rounded-md
                  font-mono
                  text-xs
                "
                style={{
                  background: "rgba(0,255,65,.08)",
                  color: "#00ff41",
                  border: "1px solid rgba(0,255,65,.18)",
                }}
              >
                eJPT
              </span>

              y me especializo en seguridad ofensiva, laboratorios prácticos y
              resolución de máquinas enfocadas en pentesting.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "rgba(180,255,200,.72)" }}
            >
              También cuento con experiencia en desarrollo backend, lo que me
              permite comprender mejor cómo están construidas las aplicaciones
              antes de analizarlas desde una perspectiva de seguridad.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <AboutCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>

        <div
          className="mt-8 text-center font-mono text-xs"
          style={{ color: "rgba(0,255,65,.45)" }}
        >
          <span className="animate-pulse" style={{ color: "#00ff41" }}>
            ●
          </span>{" "}
          Pentesting · Active Directory · Red Team
        </div>

      </div>
    </section>
  )
}
