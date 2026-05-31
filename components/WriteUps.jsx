"use client"

import { ExternalLink, FileText } from "lucide-react"

/* ICONOS LOCALES */
const icons = {
  Blue: "/assets/icons/blue.png",
  Ignite: "/assets/icons/ignite.png",
  Simple: "/assets/icons/simple.png",
  Kenobi: "/assets/icons/kenobi.png",
  Ice: "/assets/icons/ice.png",
  Bounty: "/assets/icons/bounty.jpeg",
  Relevant: "/assets/icons/revelant.jpeg",
  RootMe: "/assets/icons/rootme.png",
  Brute: "/assets/icons/brute.jpg",
  Wonderland: "/assets/icons/wonderland.jpeg",
}

/* DIFF COLORS (se mantienen, solo estética base verde cambiada en UI) */
const diffColor = {
  Easy: {
    color: "#22c55e",
    bg: "rgba(34,197,94,.10)",
    border: "rgba(34,197,94,.22)",
  },
  Medium: {
    color: "#facc15",
    bg: "rgba(250,204,21,.10)",
    border: "rgba(250,204,21,.22)",
  },
  Hard: {
    color: "#ef4444",
    bg: "rgba(239,68,68,.10)",
    border: "rgba(239,68,68,.22)",
  },
}

const writeups = [
  {
    title: "Relevant",
    platform: "THM",
    difficulty: "Medium",
    icon: icons.Relevant,
    techniques: ["SMB enum", "File upload", "PrintSpoofer", "privesc Windows"],
    description: "Acceso via SMB + shell ASPX subida. Escalada con PrintSpoofer a SYSTEM.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Medium/Revelant",
    highlight: true,
  },
  {
    title: "Wonderland",
    platform: "THM",
    difficulty: "Medium",
    icon: icons.Wonderland,
    techniques: ["SSH", "Python hijacking", "sudo abuse", "privesc Linux"],
    description: "Doble escalada de privilegios mediante PATH hijacking y abuso de sudo.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Medium/Wonderland",
    highlight: true,
  },
  {
    title: "Blue",
    platform: "THM",
    difficulty: "Easy",
    icon: icons.Blue,
    techniques: ["MS17-010", "EternalBlue", "Metasploit", "hashdump"],
    description: "Explotacion EternalBlue sobre SMB y volcado de hashes.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Blue",
    highlight: false,
  },
  {
    title: "Ice",
    platform: "THM",
    difficulty: "Easy",
    icon: icons.Ice,
    techniques: ["Icecast exploit", "Kiwi", "MS17-010", "privesc suggester"],
    description: "Explotacion de Icecast media server con obtencion de credenciales.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Ice",
    highlight: false,
  },
  {
    title: "Ignite",
    platform: "THM",
    difficulty: "Easy",
    icon: icons.Ignite,
    techniques: ["Fuel CMS RCE", "web enum", "reverse shell", "privesc"],
    description: "RCE en Fuel CMS y enumeracion completa del sistema.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Ignite",
    highlight: false,
  },
]
export default function WriteUps() {
  return (
    <section
      id="writeups"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Glow verde hacker sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at top, rgba(34,197,94,.10), transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        <p className="section-label mb-4 text-center">
          // write-ups
        </p>

        <h2 className="font-mono font-bold text-center mb-3"
          style={{ color: "#f8fafc" }}
        >
          Labs Documentados
        </h2>

        <p
          className="text-center mb-12 text-sm"
          style={{ color: "rgba(148,163,184,.9)" }}
        >
          TryHackMe · {10} máquinas resueltas y documentadas
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          {writeups.concat([
            {
              title: "Kenobi",
              platform: "THM",
              difficulty: "Easy",
              icon: icons.Kenobi,
              techniques: ["SMB enum", "NFS mount", "FTP exploit", "SUID abuse"],
              description: "SMB, NFS y FTP encadenados para obtener acceso root.",
              repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Kenobi",
              highlight: false,
            },
            {
              title: "RootMe",
              platform: "THM",
              difficulty: "Easy",
              icon: icons.RootMe,
              techniques: ["File upload bypass", "PHP shell", "SUID python", "privesc"],
              description: "Bypass de subida de archivos y abuso de binarios SUID.",
              repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Rootme",
              highlight: false,
            },
            {
              title: "Brute-It",
              platform: "THM",
              difficulty: "Easy",
              icon: icons.Brute,
              techniques: ["Gobuster", "Hydra", "SSH key crack", "sudo abuse"],
              description: "Fuerza bruta, cracking de claves SSH y escalada por sudo.",
              repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Brute-It",
              highlight: false,
            },
            {
              title: "Bounty Hacker",
              platform: "THM",
              difficulty: "Easy",
              icon: icons.Bounty,
              techniques: ["FTP anon", "Hydra SSH", "tar sudo", "privesc"],
              description: "Enumeracion FTP y escalada mediante sudo tar.",
              repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Bounty-Hacker",
              highlight: false,
            },
            {
              title: "Simple CTF",
              platform: "THM",
              difficulty: "Easy",
              icon: icons.Simple,
              techniques: ["CMS exploit", "Hydra", "SSH", "sudo vim"],
              description: "CMS vulnerable, SSH y privilegios mediante vim.",
              repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Simple-CTF",
              highlight: false,
            },
          ]).map((w, index) => {
            const diff = diffColor[w.difficulty]

            return (
              <a
                key={w.title}
                href={w.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
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
                  "
                  style={{
                    background: w.highlight
                      ? "rgba(15,23,42,.90)"
                      : "rgba(15,23,42,.72)",
                    border: w.highlight
                      ? "1px solid rgba(34,197,94,.25)"
                      : "1px solid rgba(34,197,94,.10)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  {/* Glow hover verde */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(34,197,94,.12), transparent 50%)",
                    }}
                  />

                  <div className="relative z-10">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-3">

                      <div className="flex items-center gap-3">

                        <div
                          className="
                            w-10
                            h-10
                            rounded-xl
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            group-hover:scale-110
                            group-hover:rotate-3
                          "
                          style={{
                            background: "rgba(34,197,94,.08)",
                            border: "1px solid rgba(34,197,94,.15)",
                          }}
                        >
                          <img
                            src={w.icon}
                            alt={w.title}
                            className="w-6 h-6 object-contain"
                          />
                        </div>

                        <div>
                          <h3
                            className="font-mono font-semibold text-sm"
                            style={{ color: "#f1f5f9" }}
                          >
                            {w.title}
                          </h3>

                          <span
                            className="text-[11px] font-mono"
                            style={{ color: "rgba(148,163,184,.8)" }}
                          >
                            {w.platform}
                          </span>
                        </div>

                      </div>

                      <span
                        className="px-2 py-1 rounded-md text-[10px] font-mono"
                        style={{
                          background: diff.bg,
                          color: diff.color,
                          border: `1px solid ${diff.border}`,
                        }}
                      >
                        {w.difficulty}
                      </span>

                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "rgba(148,163,184,.85)" }}
                    >
                      {w.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2">
                      {w.techniques.map((t, i) => (
                        <span
                          key={t}
                          className="
                            px-2.5
                            py-1
                            rounded-md
                            text-[10px]
                            font-mono
                            transition-all
                            duration-300
                            hover:scale-105
                          "
                          style={{
                            background: "rgba(34,197,94,.05)",
                            border: "1px solid rgba(34,197,94,.10)",
                            color: "rgba(203,213,225,.9)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="font-mono text-xs"
            style={{ color: "rgba(100,116,139,.8)" }}
          >
            // metodología completa: enumeración → explotación → escalada → evidencia
          </p>
        </div>

      </div>
    </section>
  )
}
