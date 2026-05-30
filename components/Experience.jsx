"use client"

const bullets = [
  "Desarrollo y mantenimiento de funcionalidades backend a nivel junior.",
  "Soporte en aplicaciones web y corrección de errores detectados.",
  "Consumo y pruebas de APIs dentro de aplicaciones web.",
  "Revisiones de seguridad en aplicaciones web.",
  "Identificación de vulnerabilidad Clickjacking por ausencia de cabeceras de seguridad HTTP.",
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">

        <p className="section-label mb-4">// experiencia</p>
        <h2 className="font-mono font-bold text-white mb-12">
          Trabajo
        </h2>

        <div className="card-dark p-6 md:p-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
            <div>
              <h3
                className="font-mono font-semibold text-base mb-1"
                style={{ color: "hsl(210, 20%, 92%)" }}
              >
                Programador Backend Jr
              </h3>
              <p className="text-sm" style={{ color: "hsl(210, 100%, 60%)" }}>
                VafTec Perú
              </p>
            </div>
            <div className="text-right shrink-0">
              <span
                className="font-mono text-xs px-3 py-1 rounded"
                style={{
                  background: "hsl(215, 13%, 13%)",
                  color: "hsl(215, 12%, 55%)",
                  border: "1px solid hsl(215, 12%, 20%)",
                }}
              >
                Sep 2025 — Dic 2025
              </span>
              <p
                className="text-xs mt-2 font-mono"
                style={{ color: "hsl(215, 12%, 40%)" }}
              >
                Remoto · 4 meses
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mb-6"
            style={{ height: "1px", background: "hsl(215, 12%, 18%)" }}
          />

          {/* Bullets */}
          <ul className="space-y-3">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i === bullets.length - 1
                      ? "hsl(142, 70%, 45%)"
                      : "hsl(210, 100%, 60%)",
                  }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{
                    color: i === bullets.length - 1
                      ? "hsl(210, 20%, 85%)"
                      : "hsl(215, 12%, 60%)",
                    fontWeight: i === bullets.length - 1 ? "500" : "400",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Vuln highlight */}
          <div
            className="mt-6 p-4 rounded-md font-mono text-xs"
            style={{
              background: "hsl(142, 40%, 8%)",
              border: "1px solid hsl(142, 50%, 18%)",
              color: "hsl(142, 60%, 50%)",
            }}
          >
            <span style={{ color: "hsl(142, 40%, 35%)" }}>// vuln encontrada → </span>
            Clickjacking · Missing X-Frame-Options / CSP headers
          </div>
        </div>

        {/* Nota */}
        <p
          className="mt-6 text-xs font-mono"
          style={{ color: "hsl(215, 10%, 35%)" }}
        >
          // actualmente enfocado en seguridad ofensiva — buscando primer rol en pentesting
        </p>
      </div>
    </section>
  )
}
