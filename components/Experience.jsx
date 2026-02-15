"use client"

const experiences = [
  {
    period: "23/09/2025 - 15/12/2025",
    title: "Programador Junior",
    company: "Vaftec Peru",
    description:
      "Participé como Backend Junior apoyando en el desarrollo y soporte de aplicaciones web, realizando pruebas básicas de APIs y análisis inicial de seguridad.",
  },
  {
    period: "2024 - Actualidad",
    title: "Estudiante de Ciberseguridad",
    company: "SENATI",
    description:
      "Estudio Ingeniería en Ciberseguridad en SENATI, especializándome progresivamente en pentesting y seguridad ofensiva.",
  },
  {
    period: "2023 - 2024",
    title: "Soporte IT / Redes",
    company: "Experiencia Inicial",
    description:
      "Configuracion y administracion de redes. Asistencia tecnica y resolucion de incidentes. Primeros pasos en seguridad de infraestructura.",
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Experiencia
        </h2>
        <div className="h-1 w-16 bg-primary rounded mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-1 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-translate-x-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-xs tracking-wider uppercase text-primary font-semibold">
                    {exp.period}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
