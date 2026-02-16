"use client"

const experiences = [
  {
    title: "Empresa VafTec Peru",
    duration: "4 meses",
    date: "23/09/2025 - 15/12/2025",
    role: "Programador Backend jr",
  },
  {
    title: "Ingenieria de Ciberseguridad",
    duration: "Actualidad",
    date: "2023 - Actualidad",
    role: "Estudiante",
  },
  {
    title: "Certifiacion eJPT",
    duration: "Actualdiad",
    date: "2026",
    role: "Estudiante",
  },

]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Experiencia
        </h2>

        <div className="relative">

          {/* Línea central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Punto timeline */}
                <span className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 z-10" />

                {/* Card */}
                <div
                  className={`
                    w-full md:w-[42%]
                    bg-card
                    border border-border
                    rounded-xl
                    p-6
                    shadow-lg
                    hover:shadow-primary/20
                    transition-all
                    duration-300
                  `}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.duration}
                  </p>

                  <p className="text-xs text-muted-foreground mb-4">
                    {exp.date}
                  </p>

                  {/* Badge */}
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {"</>"} {exp.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
