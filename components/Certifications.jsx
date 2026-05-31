"use client"

import { ExternalLink } from "lucide-react"

const CiscoLogo = () => (
  <svg width="28" height="28" viewBox="0 0 200 200" fill="none">
    <rect x="85" y="10" width="30" height="60" rx="8" fill="#00ff41" />
    <rect x="85" y="130" width="30" height="60" rx="8" fill="#00ff41" />
    <rect x="130" y="35" width="30" height="50" rx="8" fill="#00ff41" />
    <rect x="40" y="35" width="30" height="50" rx="8" fill="#00ff41" />
    <rect x="160" y="70" width="30" height="40" rx="8" fill="#00ff41" />
    <rect x="10" y="70" width="30" height="40" rx="8" fill="#00ff41" />
    <rect x="130" y="115" width="30" height="50" rx="8" fill="#00ff41" />
    <rect x="40" y="115" width="30" height="50" rx="8" fill="#00ff41" />
  </svg>
)

const certs = [
  {
    title: "Junior Penetration Tester",
    short: "eJPT",
    issuer: "INE",
    date: "Mayo 2026",
    url: "https://certs.ine.com/deaa189f-1b5b-4cfd-9b07-3edaa39334d0",
    logo: "ejpt",
    tags: ["Pentesting", "Redes", "Web", "Pivoting"],
    featured: true,
  },
  {
    title: "INE Certified Cloud Associate",
    short: "ICCA",
    issuer: "INE",
    date: "Dic 2025",
    url: "https://certs.ine.com/3887f35f-2411-4eda-84f3-3bf4553786b1",
    logo: "icca",
    tags: ["Cloud", "AWS", "Infraestructura"],
  },
  {
    title: "Hacker Ético",
    short: "HE",
    issuer: "Cisco Networking Academy",
    date: "Mar 2025",
    url: "https://certs.ine.com/97f82cd1-bb44-4547-8326-b389abbdd680?username=clarkespinal950498",
    logo: "hacker",
    tags: ["Reconocimiento", "Explotación", "Seguridad"],
  },
  {
    title: "Networking Essentials",
    short: "NE",
    issuer: "Cisco Networking Academy",
    date: "Jul 2024",
    url: "https://certs.ine.com/a15fe91b-0d43-4a4d-8992-1f92040a5fea?username=clarkespinal950498",
    logo: "cisco",
    tags: ["TCP/IP", "Redes", "Protocolos"],
  },
  {
    title: "Programming Essentials in Python",
    short: "PY",
    issuer: "Cisco Networking Academy",
    date: "Jul 2024",
    url: "https://certs.ine.com/66918772-5678-4786-a084-389e2f6fcd34?username=clarkespinal950498",
    logo: "cisco",
    tags: ["Python", "Scripting", "Automatización"],
  },
]
function CertLogo({ type }) {
  if (type === "ejpt") {
    return (
      <img src="/assets/icons/eJPT.png" className="w-12 h-12 object-contain" />
    )
  }

  if (type === "icca") {
    return (
      <img src="/assets/icons/ICCA.png" className="w-12 h-12 object-contain" />
    )
  }

  if (type === "hacker") {
    return (
      <img src="/assets/icons/hacker.png" className="w-12 h-12 object-contain" />
    )
  }

  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center"
      style={{
        background: "rgba(0,255,65,.08)",
        border: "1px solid rgba(0,255,65,.18)",
      }}
    >
      <CiscoLogo />
    </div>
  )
}

export default function Certifications() {
  return (
    <section
      id="certificaciones"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,65,.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">

        <p className="section-label mb-3 text-center">
          // certificaciones
        </p>

        <h2
          className="font-mono font-bold text-center mb-3"
          style={{
            color: "#e5e7eb",
            fontSize: "clamp(2rem,4vw,2.6rem)",
          }}
        >
          Credenciales
        </h2>

        <p
          className="text-center mb-10 text-sm"
          style={{ color: "rgba(229,231,235,.75)" }}
        >
          Certificaciones verificables en pentesting, cloud y redes.
        </p>

        <div className="grid gap-5">

          {certs.map((cert) => (
            <a
              key={cert.short}
              href={cert.url}
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                p-5
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.01]
              "
              style={{
                background: "rgba(0,0,0,.35)",
                border: cert.featured
                  ? "1px solid rgba(0,255,65,.35)"
                  : "1px solid rgba(0,255,65,.12)",
              }}
            >
              <div
                className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,65,.10), transparent 50%)",
                }}
              />

              <div className="relative z-10 flex items-start justify-between gap-4">

                <div className="flex gap-4">

                  <div className="transition-all duration-500 group-hover:scale-110">
                    <CertLogo type={cert.logo} />
                  </div>

                  <div>

                    <h3
                      className="font-mono font-bold text-base mb-1 group-hover:translate-x-1 transition-all"
                      style={{
                        color: "#f3f4f6",
                      }}
                    >
                      {cert.title}
                    </h3>

                    <p
                      className="text-xs mb-3"
                      style={{ color: "rgba(229,231,235,.65)" }}
                    >
                      {cert.issuer} • {cert.date}
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-2.5 py-1 rounded-md text-[11px] font-mono
                            transition-all hover:scale-105
                          "
                          style={{
                            background: "rgba(0,255,65,.06)",
                            border: "1px solid rgba(0,255,65,.12)",
                            color: "rgba(229,231,235,.7)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>
                </div>

                <ExternalLink size={16} color="#e5e7eb" />

              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p
            className="font-mono text-xs"
            style={{ color: "rgba(229,231,235,.45)" }}
          >
             // todas las credenciales son verificables mediante enlace oficial
          
          </p>
        </div>

      </div>
    </section>
  )
}
