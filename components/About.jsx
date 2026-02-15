"use client"

import { Shield, Search, Terminal } from "lucide-react"

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Sobre Mi
        </h2>
        <div className="h-1 w-16 bg-primary rounded mb-10" />

        <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-12">
          Soy Clark Espinal, un Pentester Junior apasionado por la ciberseguridad
          y el hacking etico. Me especializo en pruebas de penetracion, analisis
          de vulnerabilidades y seguridad ofensiva. Siempre en busca de nuevos
          retos y oportunidades para mejorar mis habilidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <Shield className="text-primary mb-4" size={32} />
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Seguridad Ofensiva Junior
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
             Desarrollo de habilidades en pentesting mediante laboratorios prácticos,
             análisis de vulnerabilidades y uso de herramientas de seguridad ofensiva
             en entornos controlados.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <Search className="text-primary mb-4" size={32} />
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Analisis de Vulnerabilidades
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Análisis inicial de seguridad en sistemas y aplicaciones mediante técnicas
              de enumeración y detección de vulnerabilidades en entornos controlados.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
            <Terminal className="text-primary mb-4" size={32} />
            <h3 className="text-foreground font-semibold text-lg mb-2">
              Scripting & Automatizacion
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desarrollo de scripts básicos para automatizar tareas de análisis y
              aprendizaje en seguridad ofensiva y pentesting.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
