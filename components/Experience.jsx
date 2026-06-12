"use client"

const vaftecBullets = [
  "Desarrollo y mantenimiento de funcionalidades backend a nivel junior.",
  "Soporte y análisis de aplicaciones web, incluyendo corrección de errores.",
  "Pruebas de APIs desde una perspectiva funcional y de seguridad.",
  "Evaluaciones básicas de seguridad en aplicaciones web.",
  "Detección de vulnerabilidades de Clickjacking por ausencia de cabeceras HTTP de protección.",
]

const puyuBullets = [
  "Pentest externo black-box sobre plataforma IoT GPS real en producción (3 hosts).",
  "Identificación de 19 hallazgos: 3 críticos, 5 altos, 5 medios, 4 bajos, 2 informativos.",
  "Acceso administrativo completo a Grafana mediante credenciales por defecto.",
  "Exposición de arquitectura interna completa vía Wiki.js pública sin autenticación.",
  "Verificación de ausencia de rate limiting SSH con más de 2000 intentos sin bloqueo.",
  "Documentación de hallazgos con CVSS, CWE y mapeo MITRE ATT&CK.",
]

function ExperienceCard({ children }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01]"
      style={{
        background: "rgba(15,23,42,.65)",
        border: "1px solid rgba(148,163,184,.12)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 10px 50px rgba(0,0,0,.35)",
      }}
    >
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(34,197,94,.06), transparent 45%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <p className="section-label mb-4 text-center">// experiencia</p>

        <h2
          className="font-mono font-bold text-center mb-10"
          style={{ color: "#f1f5f9" }}
        >
          Experiencia Profesional
        </h2>

        <div className="flex flex-col gap-6">

          {/* Card 1 — VafTec */}
          <ExperienceCard>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#cbd5e1" }}>
                    Backend Development
                  </span>
                </div>
                <h3 className="font-mono font-bold text-lg mb-1" style={{ color: "#f1f5f9" }}>
                  Programador Backend Jr
                </h3>
                <p className="font-mono text-sm" style={{ color: "#94a3b8" }}>VafTec Perú</p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-2">
                <span
                  className="px-3 py-1.5 rounded-xl font-mono text-xs"
                  style={{
                    background: "rgba(34,197,94,.08)",
                    border: "1px solid rgba(34,197,94,.2)",
                    color: "#22c55e",
                  }}
                >
                  Sep 2025 — Dic 2025
                </span>
                <span className="font-mono text-xs" style={{ color: "#64748b" }}>Remoto · 4 meses</span>
              </div>
            </div>

            <div className="mb-6" style={{ height: "1px", background: "linear-gradient(to right, rgba(34,197,94,.25), transparent)" }} />

            <div className="space-y-3">
              {vaftecBullets.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 p-3 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{ background: "rgba(255,255,255,.02)" }}
                >
                  <div
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 group-hover:scale-150"
                    style={{ background: i === vaftecBullets.length - 1 ? "#22c55e" : "rgba(34,197,94,.6)" }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: i === vaftecBullets.length - 1 ? "#e2e8f0" : "#94a3b8" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl p-4 transition-all duration-500 hover:scale-[1.02]"
              style={{ background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.2)" }}
            >
              <p className="font-mono text-xs mb-2" style={{ color: "#22c55e" }}>Vulnerabilidad Identificada</p>
              <p className="font-mono text-sm" style={{ color: "#cbd5e1" }}>
                Clickjacking · Missing X-Frame-Options / CSP Headers
              </p>
            </div>
          </ExperienceCard>

          {/* Card 2 — Puyu IoT Pentest */}
          <ExperienceCard>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: "#ef4444" }} />
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "#cbd5e1" }}>
                    Penetration Testing
                  </span>
                </div>
                <h3 className="font-mono font-bold text-lg mb-1" style={{ color: "#f1f5f9" }}>
                  Penetration Tester — External Black-box
                </h3>
                <p className="font-mono text-sm" style={{ color: "#94a3b8" }}>Plataforma IoT GPS · Freelance</p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-2">
                <span
                  className="px-3 py-1.5 rounded-xl font-mono text-xs"
                  style={{
                    background: "rgba(239,68,68,.08)",
                    border: "1px solid rgba(239,68,68,.2)",
                    color: "#ef4444",
                  }}
                >
                  Jun 2026
                </span>
                <span className="font-mono text-xs" style={{ color: "#64748b" }}>Remoto · 1 semana</span>
              </div>
            </div>

            <div className="mb-6" style={{ height: "1px", background: "linear-gradient(to right, rgba(239,68,68,.25), transparent)" }} />

            <div className="space-y-3">
              {puyuBullets.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 p-3 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{ background: "rgba(255,255,255,.02)" }}
                >
                  <div
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 group-hover:scale-150"
                    style={{ background: i === puyuBullets.length - 1 ? "#ef4444" : "rgba(239,68,68,.6)" }}
                  />
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: i === puyuBullets.length - 1 ? "#e2e8f0" : "#94a3b8" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl p-4 transition-all duration-500 hover:scale-[1.02]"
              style={{ background: "rgba(239,68,68,.08)", border: "1px solid rgba(239,68,68,.2)" }}
            >
              <p className="font-mono text-xs mb-2" style={{ color: "#ef4444" }}>Hallazgo Crítico</p>
              <p className="font-mono text-sm" style={{ color: "#cbd5e1" }}>
                Wiki.js pública · tunnels.sh expuesto · SSH root sin rate limiting
              </p>
            </div>
          </ExperienceCard>

        </div>
      </div>
    </section>
  )
}
