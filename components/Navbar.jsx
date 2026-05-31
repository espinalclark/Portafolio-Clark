"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "sobre mi",    href: "#sobre-mi" },
  { label: "experiencia", href: "#experiencia" },
  { label: "proyectos",   href: "#proyectos" },
  { label: "write-ups",   href: "#writeups" },
  { label: "certs",       href: "#certificaciones" },
  { label: "skills",      href: "#habilidades" },
]

export default function Navbar() {
  const [visible, setVisible]             = useState(true)
  const [lastScrollY, setLastScrollY]     = useState(0)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled]           = useState(false)

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
          background: scrolled ? "rgba(3,5,3,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(0,255,65,0.15)" : "1px solid transparent",
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
          className="font-mono font-bold text-sm"
          style={{ color: "hsl(120,20%,90%)", letterSpacing: "0.15em" }}
        >
          CLARK ESPINAL
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
                    color: isActive ? "hsl(120,100%,50%)" : "hsl(120,10%,45%)",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = "hsl(120,60%,70%)"
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = "hsl(120,10%,45%)"
                  }}
                >
                  {isActive && (
                    <span style={{ color: "hsl(120,100%,50%)", marginRight: "4px" }}>/</span>
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
          style={{ color: "hsl(120,20%,60%)" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          style={{
            background: "rgba(3,5,3,0.98)",
            borderBottom: "1px solid rgba(0,255,65,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          <ul className="flex flex-col py-2 px-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <li key={link.href} style={{ width: "100%" }}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm block py-3"
                    style={{
                      color: isActive ? "hsl(120,100%,50%)" : "hsl(120,10%,50%)",
                      borderBottom: "1px solid rgba(0,255,65,0.08)",
                    }}
                  >
                    <span style={{ color: "hsl(120,100%,50%)", marginRight: "8px" }}>
                      {isActive ? ">" : "//"}
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
