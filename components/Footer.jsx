"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Clark Espinal. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4">
          {/* GitHub */}
          <a
            href="https://github.com/espinalclark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/espinalclark/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:7clarkespinal@gmail.com?subject=Contacto%20desde%20tu%20portafolio&body=Hola%20Clark,%20vi%20tu%20portafolio..."
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
