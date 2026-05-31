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
        background: "rgba(15,23,42,.65)",
        border: "1px solid rgba(148,163,184,.12)",
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
            "linear-gradient(90deg, transparent, #22c55e, transparent)",
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
            "radial-gradient(circle at center, rgba(34,197,94,.08), transparent 70%)",
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
            background: "rgba(34,197,94,.08)",
            border: "1px solid rgba(34,197,94,.18)",
            boxShadow: "0 0 15px rgba(34,197,94,.12)",
          }}
        >
          <Icon size={18} style={{ color: "#22c55e" }} />
        </div>

        <h3
          className="font-mono font-semibold text-base mb-2"
          style={{ color: "#f1f5f9" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "#94a3b8" }}
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
          // perfil
        </p>

        <h2
          className="font-mono font-bold text-center mb-8"
          style={{ color: "#f1f5f9" }}
        >
          Perfil
        </h2>

        <div
          className="relative overflow-hidden rounded-2xl p-6 mb-10"
          style={{
            background: "rgba(15,23,42,.65)",
            border: "1px solid rgba(148,163,184,.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,197,94,.05), transparent 55%)",
            }}
          />

          <div className="relative z-10">
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#cbd5e1" }}
            >
              Soy Clark, estudiante de Ingeniería de Ciberseguridad en SENATI.
              Cuento con la certificación eJPT y trabajo principalmente en
              seguridad ofensiva, practicando en laboratorios y máquinas de pentesting.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: "#94a3b8" }}
            >
              También tengo experiencia en desarrollo backend, lo que me permite
              entender mejor la lógica de las aplicaciones antes de analizarlas
              desde el enfoque de seguridad.
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
          style={{ color: "#64748b" }}
        >
          <span className="animate-pulse" style={{ color: "#22c55e" }}>
            ●
          </span>{" "}
          Pentesting · Active Directory · Red Team
        </div>

      </div>
    </section>
  )
}


