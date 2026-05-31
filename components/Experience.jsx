"use client"

const bullets = [
  "Desarrollo y mantenimiento de funcionalidades backend a nivel junior.",
  "Soporte en aplicaciones web y corrección de errores detectados.",
  "Consumo y pruebas de APIs dentro de aplicaciones web.",
  "Revisiones de seguridad en aplicaciones web.",
  "Identificación de vulnerabilidad Clickjacking por ausencia de cabeceras HTTP.",
]

function ExperienceCard({ children }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-6
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.01]
      "
      style={{
        background: "rgba(0,0,0,.35)",
        border: "1px solid rgba(0,255,65,.12)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 10px 50px rgba(0,0,0,.35)",
      }}
    >
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,255,65,.08), transparent 45%)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="py-24 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">

        <p className="section-label mb-4 text-center">
          // experiencia
        </p>

        <h2 className="font-mono font-bold text-center mb-10"
            style={{ color: "#00ff41" }}>
          Experiencia Profesional
        </h2>

        <ExperienceCard>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">

            <div>

              <div className="flex items-center gap-3 mb-2">

                <div
                  className="w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{ background: "#00ff41" }}
                />

                <span
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "#00ff41" }}
                >
                  Backend Development
                </span>

              </div>

              <h3
                className="font-mono font-bold text-lg mb-1"
                style={{ color: "hsl(120,50%,88%)" }}
              >
                Programador Backend Jr
              </h3>

              <p
                className="font-mono text-sm"
                style={{ color: "rgba(0,255,65,.75)" }}
              >
                VafTec Perú
              </p>

            </div>

            <div className="flex flex-col items-start lg:items-end gap-2">

              <span
                className="px-3 py-1.5 rounded-xl font-mono text-xs"
                style={{
                  background: "rgba(0,255,65,.08)",
                  border: "1px solid rgba(0,255,65,.2)",
                  color: "#00ff41",
                }}
              >
                Sep 2025 — Dic 2025
              </span>

              <span
                className="font-mono text-xs"
                style={{ color: "rgba(180,255,200,.5)" }}
              >
                Remoto · 4 meses
              </span>

            </div>

          </div>

          <div
            className="mb-6"
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(0,255,65,.25), transparent)",
            }}
          />

          <div className="space-y-3">

            {bullets.map((item, i) => (
              <div
                key={i}
                className="
                  group
                  flex
                  items-start
                  gap-3
                  p-3
                  rounded-2xl
                  transition-all
                  duration-300
                  hover:translate-x-2
                "
                style={{
                  background: "rgba(255,255,255,.02)",
                }}
              >

                <div
                  className="
                    mt-2
                    w-1.5
                    h-1.5
                    rounded-full
                    shrink-0
                    transition-all
                    duration-300
                    group-hover:scale-150
                  "
                  style={{
                    background:
                      i === bullets.length - 1
                        ? "#00ff41"
                        : "rgba(0,255,65,.6)",
                  }}
                />

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color:
                      i === bullets.length - 1
                        ? "rgba(180,255,200,.9)"
                        : "rgba(180,255,200,.65)",
                  }}
                >
                  {item}
                </p>

              </div>
            ))}

          </div>

          <div
            className="
              mt-6
              rounded-2xl
              p-4
              transition-all
              duration-500
              hover:scale-[1.02]
            "
            style={{
              background: "rgba(0,255,65,.08)",
              border: "1px solid rgba(0,255,65,.2)",
            }}
          >

            <p
              className="font-mono text-xs mb-2"
              style={{ color: "#00ff41" }}
            >
              Vulnerabilidad Identificada
            </p>

            <p
              className="font-mono text-sm"
              style={{ color: "rgba(180,255,200,.85)" }}
            >
              Clickjacking · Missing X-Frame-Options / CSP Headers
            </p>

          </div>

        </ExperienceCard>

      </div>
    </section>
  )
}
