"use client"
import { Download, Linkedin, Github, ArrowDown } from "lucide-react"

const stack = ["nmap", "burpsuite", "metasploit", "python", "bash"]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-16">

      {/* Grid background sutil */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Contenido — alineado a la izquierda */}
      <div className="relative max-w-3xl">

        {/* Label superior */}
        <p className="section-label mb-6 fade-up">
          // seguridad ofensiva
        </p>

        {/* Nombre */}
        <h1 className="font-mono font-bold leading-none text-white fade-up delay-100">
          Clark
          <br />
          <span className="text-accent">Espinal.</span>
        </h1>

        {/* Descripción casual */}
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed fade-up delay-200">
          <span className="text-white font-medium">eJPT</span> cert. Estudiante
          de ciberseguridad en Perú. Buscando entrar al mundo laboral en
          seguridad.
        </p>

        {/* Stack chips */}
        <div className="mt-8 flex flex-wrap gap-2 fade-up delay-300">
          {stack.map((tool) => (
            <span key={tool} className="badge-tech">
              {tool}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4 fade-up delay-400">
          <a
            href="/assets/cv/CV_CLARK.pdf"
            download="CV_CLARK.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-primary text-background text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
            style={{ background: "hsl(210, 100%, 60%)", color: "hsl(210, 14%, 7%)" }}
          >
            <Download size={16} />
            Descargar CV
          </a>

          <a
            href="https://github.com/espinalclark"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border text-sm font-medium transition-all hover:border-accent-primary hover:text-accent"
            style={{ borderColor: "hsl(215, 12%, 25%)", color: "hsl(210, 20%, 75%)" }}
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/espinalclark/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border text-sm font-medium transition-all hover:border-accent-primary hover:text-accent"
            style={{ borderColor: "hsl(215, 12%, 25%)", color: "hsl(210, 20%, 75%)" }}
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        {/* Ubicación casual */}
        <p className="mt-10 text-xs text-dim font-mono fade-up delay-500">
          <span style={{ color: "hsl(142, 70%, 45%)" }}>●</span>{" "}
          Perú · buscando trabajo en seguridad ofensiva
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-muted-foreground">scroll</span>
        <ArrowDown size={14} className="text-muted-foreground animate-bounce" />
      </div>
    </section>
  )
}
