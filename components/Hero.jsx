"use client"

import { Download, Linkedin, Github } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Subtle glow behind name */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <h1 className="relative font-serif italic text-7xl md:text-9xl font-bold text-primary leading-none">
        Clark
      </h1>
      <p className="relative mt-4 text-lg md:text-xl tracking-[0.35em] uppercase text-muted-foreground">
        Pentester Junior
      </p>

      <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
        <a
          href="/assets/cv/CV_CLARK.pdf"
          download="CV_CLARK.pdf"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Download size={18} />
          Descargar mi CV
        </a>
        <a
          href="https://linkedin.com/in/espinalclark/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href="https://github.com/espinalclark"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>
    </section>
  )
}
