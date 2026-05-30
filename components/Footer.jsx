"use client"
import { Github, Linkedin, Mail } from "lucide-react"

const links = [
  {
    icon: Github,
    href: "https://github.com/espinalclark",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/espinalclark/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:7clarkespinal@gmail.com?subject=Contacto desde tu portafolio&body=Hola Clark, vi tu portafolio...",
    label: "Email",
  },
]

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 lg:px-24 py-10"
      style={{ borderTop: "1px solid hsl(215, 12%, 15%)" }}
    >
      <div className="max-w-4xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Left */}
        <div>
          <p className="font-mono text-xs" style={{ color: "hsl(215, 10%, 35%)" }}>
            <span style={{ color: "hsl(210, 100%, 60%)" }}>clark</span>
            @sec · 2026
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: "hsl(215, 10%, 28%)" }}>
            // hecho con Next.js + Tailwind
          </p>
        </div>

        {/* Right — iconos */}
        <div className="flex items-center gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="transition-colors duration-200"
              style={{ color: "hsl(215, 12%, 38%)" }}
              onMouseEnter={e => e.currentTarget.style.color = "hsl(210, 100%, 60%)"}
              onMouseLeave={e => e.currentTarget.style.color = "hsl(215, 12%, 38%)"}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
