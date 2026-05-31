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
      className="relative px-6 md:px-16 lg:px-24 py-12 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(0,255,65,.08)",
      }}
    >

      {/* Glow fondo */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: "500px",
          height: "150px",
          background: "rgba(0,255,65,.04)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="flex justify-center gap-5 mb-8">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="footer-icon"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div
          className="mx-auto mb-6"
          style={{
            width: "180px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,65,.5), transparent)",
          }}
        />

        <p
          className="text-center font-mono text-xs"
          style={{
            color: "rgba(0,255,65,.35)",
            letterSpacing: ".15em",
          }}
        >
          CLARK · PENTESTER JUNIOR
        </p>

        <p
          className="text-center font-mono text-[11px] mt-3"
          style={{
            color: "hsl(215,12%,35%)",
          }}
        >
          © 2026 · Linux · Pentesting · Coffee · Labs
        </p>
          </div>

      <style jsx>{`
        .footer-icon {
          position: relative;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: hsl(215, 12%, 45%);
          border: 1px solid rgba(0, 255, 65, 0.08);
          background: rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(10px);
          transition: all 0.35s ease;
          overflow: hidden;
        }

        .footer-icon::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -120%;
          width: 60px;
          height: 220%;
          background: rgba(255, 255, 255, 0.08);
          transform: rotate(25deg);
          transition: 0.8s;
        }

        .footer-icon:hover::before {
          left: 160%;
        }

        .footer-icon:hover {
          color: hsl(120, 100%, 55%);
          border-color: rgba(0, 255, 65, 0.4);
          transform: translateY(-6px) scale(1.08);
          box-shadow:
            0 0 12px rgba(0,255,65,.25),
            0 0 30px rgba(0,255,65,.08);
        }

        .footer-icon svg {
          transition: all .35s ease;
        }

        .footer-icon:hover svg {
          transform: scale(1.15) rotate(8deg);
        }
      `}</style>

    </footer>
  )
}
