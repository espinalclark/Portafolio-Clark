"use client"

import Image from "next/image"

const skillCategories = [
  {
    title: "Conocimientos",
    list: [
      "Conocimiento en redes TCP/IP",
      "OWASP Top 10",
      "Linux Fundamentals",
      "Active Directory (nivel básico)",
      "ISO 27001 (conceptos básicos)",
      "Seguridad en Aplicaciones Web",
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "Burp Suite", icon: "/assets/icons/burpsuite-logo.svg" },
      { name: "Nmap", icon: "/assets/icons/nmap-logo.svg" },
      { name: "Amass", icon: "/assets/icons/amass-logo.svg" },
      { name: "Hashcat", icon: "/assets/icons/hashcat-logo.svg" },
      { name: "John the Ripper", icon: "/assets/icons/john-logo.svg" },
      { name: "Hydra", icon: "/assets/icons/hydra-logo.svg" },
      { name: "Netcat", icon: "/assets/icons/netcat-logo.svg" },
      { name: "Nikto", icon: "/assets/icons/nikto-logo.svg" },
      { name: "SQLMap", icon: "/assets/icons/sqlmap-logo.svg" },
      { name: "WhatWeb", icon: "/assets/icons/whatweb-logo.svg" },
    ],
  },
  {
    title: "Lenguajes",
    skills: [
      { name: "Python", icon: "/assets/icons/python-logo.svg" },
      { name: "Bash", icon: "/assets/icons/bash-logo.svg" },
      { name: "PowerShell", icon: "/assets/icons/powershell-logo.svg" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Habilidades
        </h2>

        <div className="h-1 w-16 bg-primary rounded mb-12" />

        <div className="grid md:grid-cols-3 gap-10">

          {skillCategories.map((category, i) => (
            <div key={i}>
              <h3 className="text-lg font-bold mb-6 text-foreground">
                {category.title}
              </h3>

              {/* ===== CONOCIMIENTOS (LISTA) ===== */}
              {category.list && (
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {category.list.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="text-primary mt-[2px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* ===== SKILLS CON ICONOS ===== */}
              {category.skills && (
                <div className="grid grid-cols-3 gap-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 group"
                    >
                      {/* Icon SIN cuadro */}
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />

                      <span className="text-xs text-muted-foreground text-center">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
