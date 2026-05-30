"use client"
import { ExternalLink } from "lucide-react"

const CiscoLogo = () => (
  <svg width="28" height="28" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="85" y="10" width="30" height="60" rx="8" fill="#049fd9"/>
    <rect x="85" y="130" width="30" height="60" rx="8" fill="#049fd9"/>
    <rect x="130" y="35" width="30" height="50" rx="8" fill="#049fd9"/>
    <rect x="40" y="35" width="30" height="50" rx="8" fill="#049fd9"/>
    <rect x="160" y="70" width="30" height="40" rx="8" fill="#049fd9"/>
    <rect x="10" y="70" width="30" height="40" rx="8" fill="#049fd9"/>
    <rect x="130" y="115" width="30" height="50" rx="8" fill="#049fd9"/>
    <rect x="40" y="115" width="30" height="50" rx="8" fill="#049fd9"/>
  </svg>
)

const certs = [
  {
    title: "Junior Penetration Tester",
    short: "eJPT",
    issuer: "INE",
    date: "Mayo 2026",
    url: "https://certs.ine.com/deaa189f-1b5b-4cfd-9b07-3edaa39334d0",
    highlight: true,
    logo: "ejpt",
    tags: ["pentesting", "redes", "web", "pivoting"],
  },
  {
    title: "INE Certified Cloud Associate",
    short: "ICCA",
    issuer: "INE",
    date: "Dic 2025",
    url: "https://certs.ine.com/3887f35f-2411-4eda-84f3-3bf4553786b1",
    highlight: false,
    logo: "icca",
    tags: ["cloud", "aws", "infraestructura"],
  },
  {
    title: "Hacker Ético",
    short: "HE",
    issuer: "Cisco Networking Academy",
    date: "Mar 2025",
    url: "https://certs.ine.com/97f82cd1-bb44-4547-8326-b389abbdd680",
    highlight: false,
    logo: "hacker",
    tags: ["ethical hacking", "reconocimiento", "explotación"],
  },
  {
    title: "Networking Essentials",
    short: "NE",
    issuer: "Cisco Networking Academy",
    date: "Jul 2024",
    url: "https://certs.ine.com/a15fe91b-0d43-4a4d-8992-1f92040a5fea",
    highlight: false,
    logo: "cisco",
    tags: ["tcp/ip", "redes", "protocolos"],
  },
  {
    title: "Programming Essentials in Python",
    short: "PY",
    issuer: "Cisco Networking Academy",
    date: "Jul 2024",
    url: "https://certs.ine.com/66918772-5678-4786-a084-389e2f6fcd34",
    highlight: false,
    logo: "cisco",
    tags: ["python", "scripting", "automatización"],
  },
]

function CertLogo({ type }) {
  if (type === "ejpt") {
    return (
      <div className="w-11 h-11 rounded-md overflow-hidden flex items-center justify-center shrink-0">
        <img src="/assets/icons/eJPT.png" alt="eJPT" width={44} height={44} style={{ objectFit: "contain" }} />
      </div>
    )
  }
  if (type === "icca") {
    return (
      <div className="w-11 h-11 rounded-md overflow-hidden flex items-center justify-center shrink-0">
        <img src="/assets/icons/ICCA.png" alt="ICCA" width={44} height={44} style={{ objectFit: "contain" }} />
      </div>
    )
  }
  if (type === "hacker") {
    return (
      <div className="w-11 h-11 rounded-md overflow-hidden flex items-center justify-center shrink-0">
        <img src="/assets/icons/hacker.png" alt="Hacker Ético" width={44} height={44} style={{ objectFit: "contain" }} />
      </div>
    )
  }
  return (
    <div
      className="w-11 h-11 rounded-md flex items-center justify-center shrink-0"
      style={{ background: "hsl(215, 13%, 13%)", border: "1px solid hsl(215, 12%, 20%)" }}
    >
      <CiscoLogo />
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">

        <p className="section-label mb-4">// certificaciones</p>
        <h2 className="font-mono font-bold text-white mb-12">
          Credenciales
        </h2>

        <div className="space-y-3">
          {certs.map((cert) => (
            <a
              key={cert.short}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-dark p-5 no-underline"
              style={cert.highlight ? {
                borderColor: "hsl(210, 60%, 28%)",
                background: "hsl(210, 30%, 10%)",
              } : {}}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">
                    <CertLogo type={cert.logo} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono font-semibold text-sm"
                        style={{
                          color: cert.highlight
                            ? "hsl(210, 100%, 70%)"
                            : "hsl(210, 20%, 88%)",
                        }}
                      >
                        {cert.title}
                      </span>
                      {cert.highlight && (
                        <span
                          className="text-xs font-mono px-2 py-0.5 rounded"
                          style={{
                            background: "hsl(210, 80%, 18%)",
                            color: "hsl(210, 100%, 65%)",
                            border: "1px solid hsl(210, 60%, 28%)",
                          }}
                        >
                          principal
                        </span>
                      )}
                    </div>
                    <p className="text-xs mb-3" style={{ color: "hsl(215, 12%, 50%)" }}>
                      {cert.issuer} · {cert.date}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="badge-tech">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <ExternalLink
                  size={15}
                  className="shrink-0 mt-1 transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "hsl(215, 12%, 35%)" }}
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs font-mono" style={{ color: "hsl(215, 10%, 35%)" }}>
          // todas verificables — click en cada card para validar
        </p>
      </div>
    </section>
  )
}
