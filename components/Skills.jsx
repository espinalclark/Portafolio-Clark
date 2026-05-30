"use client"
import Image from "next/image"

const conocimientos = [
  "Redes TCP/IP",
  "OWASP Top 10",
  "Linux Fundamentals",
  "Active Directory (básico)",
  "Seguridad en Aplicaciones Web",
  "Enumeración y reconocimiento",
  "Escalada de privilegios",
  "Post-explotación",
]

const herramientas = [
  { name: "Nmap",        icon: "/assets/icons/nmap-logo.svg" },
  { name: "Burp Suite",  icon: "/assets/icons/burpsuite-logo.svg" },
  { name: "Hydra",       icon: "/assets/icons/hydra-logo.svg" },
  { name: "Hashcat",     icon: "/assets/icons/hashcat-logo.svg" },
  { name: "John",        icon: "/assets/icons/john-logo.svg" },
  { name: "Netcat",      icon: "/assets/icons/netcat-logo.svg" },
  { name: "SQLMap",      icon: "/assets/icons/sqlmap-logo.svg" },
  { name: "Nikto",       icon: "/assets/icons/nikto-logo.svg" },
  { name: "WhatWeb",     icon: "/assets/icons/whatweb-logo.svg" },
  { name: "Amass",       icon: "/assets/icons/amass-logo.svg" },
  { name: "Enum4linux",  icon: "/assets/icons/enum4linux-logo.svg" },
  { name: "Responder",   icon: "/assets/icons/responder-logo.svg" },
  { name: "Tcpdump",     icon: "/assets/icons/tcpdump-logo.svg" },
  { name: "Masscan",     icon: "/assets/icons/masscan-logo.svg" },
  { name: "Medusa",      icon: "/assets/icons/medusa-logo.svg" },
]

const lenguajes = [
  { name: "Python",      icon: "/assets/icons/python-logo.svg" },
  { name: "Bash",        icon: "/assets/icons/bash-logo.svg" },
  { name: "PowerShell",  icon: "/assets/icons/powershell-logo.svg" },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">

        <p className="section-label mb-4">// habilidades</p>
        <h2 className="font-mono font-bold text-white mb-12">
          Skills
        </h2>

        <div className="space-y-12">

          {/* Conocimientos */}
          <div>
            <p
              className="font-mono text-xs mb-5"
              style={{ color: "hsl(210, 100%, 60%)" }}
            >
              conocimientos
            </p>
            <div className="flex flex-wrap gap-2">
              {conocimientos.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 rounded"
                  style={{
                    background: "hsl(215, 13%, 12%)",
                    color: "hsl(215, 12%, 62%)",
                    border: "1px solid hsl(215, 12%, 20%)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "hsl(215, 12%, 15%)" }} />

          {/* Herramientas */}
          <div>
            <p
              className="font-mono text-xs mb-6"
              style={{ color: "hsl(210, 100%, 60%)" }}
            >
              herramientas
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
              {herramientas.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-md transition-all duration-200 group-hover:border-opacity-60"
                    style={{
                      background: "hsl(215, 13%, 11%)",
                      border: "1px solid hsl(215, 12%, 18%)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "hsl(210, 60%, 35%)"
                      e.currentTarget.style.background = "hsl(210, 30%, 13%)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "hsl(215, 12%, 18%)"
                      e.currentTarget.style.background = "hsl(215, 13%, 11%)"
                    }}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={22}
                      height={22}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className="text-center font-mono leading-tight"
                    style={{
                      color: "hsl(215, 12%, 45%)",
                      fontSize: "0.6rem",
                    }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "hsl(215, 12%, 15%)" }} />

          {/* Lenguajes */}
          <div>
            <p
              className="font-mono text-xs mb-6"
              style={{ color: "hsl(210, 100%, 60%)" }}
            >
              lenguajes
            </p>
            <div className="flex gap-6">
              {lenguajes.map((lang) => (
                <div
                  key={lang.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-md transition-all duration-200"
                    style={{
                      background: "hsl(215, 13%, 11%)",
                      border: "1px solid hsl(215, 12%, 18%)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "hsl(210, 60%, 35%)"
                      e.currentTarget.style.background = "hsl(210, 30%, 13%)"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "hsl(215, 12%, 18%)"
                      e.currentTarget.style.background = "hsl(215, 13%, 11%)"
                    }}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.name}
                      width={28}
                      height={28}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "hsl(215, 12%, 50%)" }}
                  >
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
