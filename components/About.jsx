"use client"
import { Shield, Search, Terminal } from "lucide-react"

const cards = [
  {
    icon: Shield,
    title: "Seguridad ofensiva",
    desc: "Pentesting en entornos controlados — THM, HTB, labs eJPT. Enumeración, explotación y post-explotación.",
  },
  {
    icon: Search,
    title: "Análisis de vulnerabilidades",
    desc: "Reconocimiento de superficie de ataque, detección de CVEs y análisis manual de servicios expuestos.",
  },
  {
    icon: Terminal,
    title: "Scripting",
    desc: "Scripts en Python y Bash para automatizar tareas de reconocimiento, fuerza bruta y análisis.",
  },
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">

        {/* Label */}
        <p className="section-label mb-4">// sobre mí</p>

        {/* Heading */}
        <h2 className="font-mono font-bold text-white mb-8">
          Un poco de contexto
        </h2>

        {/* Texto — dos párrafos cortos, casual */}
        <div className="max-w-2xl space-y-4 mb-16">
          <p className="text-base leading-relaxed" style={{ color: "hsl(215, 12%, 62%)" }}>
            Soy Clark, estudiante de Ingeniería en Ciberseguridad en Perú.
            Tengo la cert <span style={{ color: "hsl(210, 20%, 85%)" }} className="font-medium">eJPT</span> y
            llevo un tiempo rompiendo cosas en laboratorios — THM, HTB, labs del
            curso. Me interesa la parte ofensiva: entender cómo funciona un sistema
            para encontrar dónde falla.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "hsl(215, 12%, 62%)" }}>
            Tengo experiencia básica en backend (4 meses), lo que me ayuda a
            entender mejor cómo están construidas las aplicaciones que termino
            analizando.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-dark p-6 group">
              <div
                className="mb-4 w-9 h-9 flex items-center justify-center rounded-md"
                style={{ background: "hsl(210, 80%, 18%)" }}
              >
                <Icon size={18} style={{ color: "hsl(210, 100%, 60%)" }} />
              </div>
              <h3
                className="font-mono font-semibold text-sm mb-2"
                style={{ color: "hsl(210, 20%, 88%)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(215, 12%, 55%)" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
