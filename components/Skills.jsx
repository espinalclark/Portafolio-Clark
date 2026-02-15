"use client"

import Image from "next/image"

const skillCategories = [
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
  {
    title: "Conocimientos",
    skills: [
      { name: "TCP/IP", icon: "/assets/icons/tcpdump-logo.svg" },
      { name: "Enum4linux", icon: "/assets/icons/enum4linux-logo.svg" },
      { name: "Responder", icon: "/assets/icons/responder-logo.svg" },
      { name: "Masscan", icon: "/assets/icons/masscan-logo.svg" },
      { name: "Medusa", icon: "/assets/icons/medusa-logo.svg" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
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

              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="p-3 rounded-xl bg-secondary/40 hover:bg-primary/10 transition-all duration-300">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <span className="text-xs text-muted-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
