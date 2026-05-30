"use client"
import { ExternalLink, FileText } from "lucide-react"

const writeups = [
  {
    title: "Relevant",
    platform: "THM",
    difficulty: "Medium",
    techniques: ["SMB enum", "File upload", "PrintSpoofer", "privesc Windows"],
    description: "Acceso via SMB + shell ASPX subida. Escalada con PrintSpoofer a SYSTEM.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Medium/Revelant",
    highlight: true,
  },
  {
    title: "Wonderland",
    platform: "THM",
    difficulty: "Medium",
    techniques: ["SSH", "Python hijacking", "sudo abuse", "privesc Linux"],
    description: "Doble escalada de privilegios — PATH hijacking y abuso de sudo.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Medium/Wonderland",
    highlight: true,
  },
  {
    title: "Blue",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["MS17-010", "EternalBlue", "Metasploit", "hashdump"],
    description: "Explotación EternalBlue sobre SMB. Hash dump y cracking de credenciales.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Blue",
    highlight: false,
  },
  {
    title: "Ice",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["Icecast exploit", "Kiwi", "MS17-010", "privesc suggester"],
    description: "Explotación de Icecast media server. Kiwi para dump de credenciales.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Ice",
    highlight: false,
  },
  {
    title: "Ignite",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["Fuel CMS RCE", "web enum", "reverse shell", "privesc"],
    description: "RCE en Fuel CMS via exploit público. Enumeración web y shell remota.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Ignite",
    highlight: false,
  },
  {
    title: "Kenobi",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["SMB enum", "NFS mount", "FTP exploit", "SUID abuse"],
    description: "Encadenamiento de SMB + NFS + FTP para obtener id_rsa. SUID para root.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Kenobi",
    highlight: false,
  },
  {
    title: "RootMe",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["File upload bypass", "PHP shell", "SUID python", "privesc"],
    description: "Bypass de filtro de subida de archivos con script propio. SUID python para root.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Rootme",
    highlight: false,
  },
  {
    title: "Brute-It",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["Gobuster", "Hydra", "SSH key crack", "sudo abuse"],
    description: "Fuerza bruta web + cracking de clave SSH con John. Escalada via sudo.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Brute-It",
    highlight: false,
  },
  {
    title: "Bounty Hacker",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["FTP anon", "Hydra SSH", "tar sudo", "privesc"],
    description: "FTP anónimo para obtener wordlist. Hydra sobre SSH. Escalada con tar.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Bounty-Hacker",
    highlight: false,
  },
  {
    title: "Simple CTF",
    platform: "THM",
    difficulty: "Easy",
    techniques: ["CMS exploit", "Hydra", "SSH", "sudo vim"],
    description: "CMS vulnerable + brute force SSH. Escalada con sudo vim.",
    repo: "https://github.com/espinalclark/ee/tree/main/THM/Easy/Simple-CTF",
    highlight: false,
  },
]

const diffColor = {
  Easy:   { color: "hsl(142, 70%, 45%)",  bg: "hsl(142, 40%, 8%)",  border: "hsl(142, 50%, 18%)" },
  Medium: { color: "hsl(45, 90%, 55%)",   bg: "hsl(45, 60%, 8%)",   border: "hsl(45, 60%, 20%)" },
  Hard:   { color: "hsl(0, 70%, 55%)",    bg: "hsl(0, 50%, 8%)",    border: "hsl(0, 50%, 20%)" },
}

export default function WriteUps() {
  return (
    <section id="writeups" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl">

        <p className="section-label mb-4">// write-ups</p>
        <h2 className="font-mono font-bold text-white mb-3">
          Labs documentados
        </h2>
        <p className="text-sm mb-12" style={{ color: "hsl(215, 12%, 50%)" }}>
          TryHackMe · {writeups.length} máquinas resueltas y documentadas
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {writeups.map((w) => {
            const diff = diffColor[w.difficulty]
            return (
              <a
                key={w.title}
                href={w.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group block card-dark p-5 no-underline"
                style={w.highlight ? {
                  borderColor: "hsl(210, 60%, 28%)",
                  background: "hsl(210, 30%, 10%)",
                } : {}}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <FileText size={14} style={{ color: "hsl(215, 12%, 40%)" }} />
                    <span
                      className="font-mono font-semibold text-sm"
                      style={{
                        color: w.highlight
                          ? "hsl(210, 100%, 70%)"
                          : "hsl(210, 20%, 88%)",
                      }}
                    >
                      {w.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded"
                      style={{
                        background: diff.bg,
                        color: diff.color,
                        border: `1px solid ${diff.border}`,
                      }}
                    >
                      {w.difficulty}
                    </span>
                    <ExternalLink
                      size={13}
                      style={{ color: "hsl(215, 12%, 35%)" }}
                      className="group-hover:text-accent transition-colors"
                    />
                  </div>
                </div>

                {/* Descripción */}
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "hsl(215, 12%, 52%)" }}
                >
                  {w.description}
                </p>

                {/* Técnicas */}
                <div className="flex flex-wrap gap-1.5">
                  {w.techniques.map((t) => (
                    <span key={t} className="badge-tech">{t}</span>
                  ))}
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <p
          className="mt-8 text-xs font-mono"
          style={{ color: "hsl(215, 10%, 35%)" }}
        >
          // cada card linkea al repositorio con nmap outputs, screenshots y metodología
        </p>
      </div>
    </section>
  )
}
