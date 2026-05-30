"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "sobre mí",       href: "#sobre-mi" },
  { label: "experiencia",    href: "#experiencia" },
  { label: "proyectos",      href: "#proyectos" },
  { label: "write-ups",      href: "#writeups" },
  { label: "skills",         href: "#habilidades" },
  { label: "certs",          href: "#certificaciones" },
]

export default function Navbar() {
  const [visible, setVisible]         = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled]       = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y > lastScrollY && y > 80) setVisible(false)
      else setVisible(true)
      setLastScrollY(y)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3 }
    )
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        style={{
          background: scrolled ? "hsla(210, 14%, 7%, 0.92)" : "transparent",
          borderBottom: scrolled ? "1px solid hsl(215, 12%, 18%)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
          padding: "1rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          className="font-mono font-semibold text-sm"
          style={{ color: "hsl(210, 20%, 90%)", letterSpacing: "0.05em" }}
        >
          clark<span style={{ color: "hsl(210, 100%, 60%)" }}>@sec</span>
          <span style={{ color: "hsl(210, 100%, 60%)" }} className="cursor-blink" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs transition-colors duration-200"
                  style={{
                    color: isActive ? "hsl(210, 100%, 60%)" : "hsl(215, 12%, 55%)",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.target.style.color = "hsl(210, 20%, 85%)"
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.target.style.color = "hsl(215, 12%, 55%)"
                  }}
                >
                  {isActive && (
                    <span style={{ color: "hsl(210, 100%, 60%)", marginRight: "4px" }}>/</span>
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{ color: "hsl(210, 20%, 75%)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          style={{
            background: "hsla(210, 14%, 8%, 0.97)",
            borderBottom: "1px solid hsl(215, 12%, 18%)",
            backdropFilter: "blur(12px)",
          }}
        >
          <ul className="flex flex-col items-start gap-0 py-2 px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href} style={{ width: "100%" }}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm block py-3"
                    style={{
                      color: isActive ? "hsl(210, 100%, 60%)" : "hsl(215, 12%, 60%)",
                      borderBottom: "1px solid hsl(215, 12%, 15%)",
                    }}
                  >
                    <span style={{ color: "hsl(210, 100%, 60%)", marginRight: "8px" }}>
                      {isActive ? "▶" : "//"}
                    </span>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
