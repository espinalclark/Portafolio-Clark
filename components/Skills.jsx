"use client"

import Image from "next/image"

const conocimientos = [
  "Redes TCP/IP",
  "OWASP Top 10",
  "Linux Fundamentals",
  "Active Directory Attack Chain",
  "Kerberos Attacks (AS-REP, Kerberoasting)",
  "LLMNR/NBT-NS Poisoning",
  "ACL Abuse",
  "ADCS / ESC1",
  "Pivoting & Tunneling",
  "DCSync / Credential Dumping",
  "SSRF",
  "IAM Privilege Escalation",
  "Cloud Misconfiguration (AWS)",
  "Seguridad en Aplicaciones Web",
  "Enumeración y Reconocimiento",
  "Escalada de Privilegios",
  "Post-Explotación",
]

const herramientas = [
  { name: "Nmap", icon: "/assets/icons/nmap-logo.svg" },
  { name: "Burp Suite", icon: "/assets/icons/burpsuite-logo.svg" },
  { name: "Hydra", icon: "/assets/icons/hydra-logo.svg" },
  { name: "Hashcat", icon: "/assets/icons/hashcat-logo.svg" },
  { name: "John", icon: "/assets/icons/john-logo.svg" },
  { name: "Netcat", icon: "/assets/icons/netcat-logo.svg" },
  { name: "SQLMap", icon: "/assets/icons/sqlmap-logo.svg" },
  { name: "Nikto", icon: "/assets/icons/nikto-logo.svg" },
  { name: "WhatWeb", icon: "/assets/icons/whatweb-logo.svg" },
  { name: "Amass", icon: "/assets/icons/amass-logo.svg" },
  { name: "Enum4linux", icon: "/assets/icons/enum4linux-logo.svg" },
  { name: "Responder", icon: "/assets/icons/responder-logo.svg" },
  { name: "Tcpdump", icon: "/assets/icons/tcpdump-logo.svg" },
  { name: "Masscan", icon: "/assets/icons/masscan-logo.svg" },
  { name: "Medusa", icon: "/assets/icons/medusa-logo.svg" },
]

const lenguajes = [
  { name: "Python", icon: "/assets/icons/python-logo.svg" },
  { name: "Bash", icon: "/assets/icons/bash-logo.svg" },
  { name: "PowerShell", icon: "/assets/icons/powershell-logo.svg" },
]

function SkillCard({ title, children }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        p-5
        transition-all
        duration-500
        hover:-translate-y-2
        hover:scale-[1.01]
        group
      "
      style={{
        background: "rgba(15,23,42,.65)",
        border: "1px solid rgba(34,197,94,.10)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* glow hacker sutil */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700
        "
        style={{
          background:
            "radial-gradient(circle at top left, rgba(34,197,94,.10), transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.25em] mb-5"
          style={{ color: "#22c55e" }}
        >
          {title}
        </p>

        {children}
      </div>
    </div>
  )
}

export default function Skills() {
    return (
    <section id="habilidades" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">

        <p className="section-label mb-4 text-center">
          // habilidades
        </p>

        <h2 className="font-mono font-bold text-center mb-4 text-white">
          Skills & Tools
        </h2>

        <p className="text-center text-sm mb-12 text-slate-400">
          Tecnologías, herramientas y conocimientos de pentesting y CTFs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* CONOCIMIENTOS */}
          <SkillCard title="Conocimientos">
            <div className="flex flex-wrap gap-2">
              {conocimientos.map((item) => (
                <span
                  key={item}
                  className="
                    px-2.5
                    py-1.5
                    rounded-lg
                    text-[11px]
                    font-mono
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                  "
                  style={{
                    background: "rgba(34,197,94,.05)",
                    border: "1px solid rgba(34,197,94,.10)",
                    color: "rgba(226,232,240,.85)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </SkillCard>

          {/* HERRAMIENTAS */}
          <SkillCard title="Herramientas">
            <div className="grid grid-cols-3 gap-3">
              {herramientas.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <div
                    className="
                      w-12
                      h-12
                      flex
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:-translate-y-1
                      group-hover:rotate-3
                    "
                    style={{
                      background: "rgba(34,197,94,.04)",
                      border: "1px solid rgba(34,197,94,.10)",
                    }}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={22}
                      height={22}
                    />
                  </div>

                  <span className="text-[10px] font-mono text-slate-400">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* LENGUAJES */}
          <SkillCard title="Lenguajes">
            <div className="flex flex-col gap-3">
              {lenguajes.map((lang) => (
                <div
                  key={lang.name}
                  className="
                    flex
                    items-center
                    gap-3
                    p-3
                    rounded-xl
                    transition-all
                    duration-300
                    hover:translate-x-2
                  "
                  style={{
                    background: "rgba(34,197,94,.03)",
                    border: "1px solid rgba(34,197,94,.08)",
                  }}
                >
                  <div
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                    style={{
                      background: "rgba(34,197,94,.04)",
                      border: "1px solid rgba(34,197,94,.10)",
                    }}
                  >
                    <Image
                      src={lang.icon}
                      alt={lang.name}
                      width={24}
                      height={24}
                    />
                  </div>

                  <div>
                    <p className="font-mono text-sm text-slate-200">
                      {lang.name}
                    </p>
                    <p className="text-[10px] text-slate-500 font-mono">
                      scripting & automation
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SkillCard>

        </div>

      </div>
    </section>
  )
}
