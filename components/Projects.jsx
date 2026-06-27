"use client"

import { Github, ExternalLink, FileText } from "lucide-react"

const projects = [
  {
    image: "/assets/icons/ad.png",
    title: "ad-attack-lab",
    tech: ["Active Directory", "PowerShell", "Python", "Kerberos", "ADCS", "Ligolo-ng"],
    description:
      "Cadena de ataque completa sobre Active Directory: LLMNR poisoning, AS-REP roasting, Kerberoasting, pivoting con Ligolo-ng, ACL abuse, ADCS ESC1 y compromiso de dominio vía DCSync.",
    github: "https://github.com/espinalclark/Projects/tree/main/ad-attack-lab",
    report: "https://github.com/espinalclark/Projects/blob/main/ad-attack-lab/report/INFORME.pdf",
    highlight: true,
    variant: "offensive",
  },
  {
    image: "/assets/icons/aws.png",
    title: "aws-misconfig-lab",
    tech: ["AWS", "Terraform", "Python", "IAM", "SSRF", "Lambda"],
    description:
      "Cadena de ataque completa en AWS: S3 enumeration, IAM privesc, SSRF → IMDSv1 credential theft, Lambda RCE, ECR hardcoded secrets y persistencia vía backdoor IAM user.",
    github: "https://github.com/espinalclark/Projects/tree/main/aws-misconfig-lab",
    report: "https://github.com/espinalclark/Projects/blob/main/aws-misconfig-lab/report/INFORME.pdf",
    highlight: true,
    variant: "offensive",
  },
  {
    image: "/assets/images/hardening.png",
    title: "aws-server-hardening",
    tech: ["AWS", "Bash", "WireGuard", "nftables", "AppArmor", "auditd"],
    description:
      "Hardening automatizado de EC2 en AWS. 6 fases: kernel sysctl, SSH post-quantum, WireGuard VPN, nftables default-drop, AppArmor enforce y auditd en tiempo real. Sin perder acceso SSH en el proceso.",
    github: "https://github.com/espinalclark/Projects/tree/main/aws-server-hardening",
    report: null,
    highlight: true,
    variant: "defensive",
  },
  {
    image: "/assets/images/hyprland.jpeg",
    title: "Arch Linux + Hyprland",
    tech: ["Arch Linux", "Hyprland", "Waybar", "Bash"],
    description:
      "Entorno Linux minimalista optimizado para prácticas CTF y pentesting. Configuración completa desde cero.",
    github: "https://github.com/espinalclark/Hyprland-kali",
    report: null,
    highlight: false,
    variant: "offensive",
  },
  {
    image: "/assets/images/multi.jpeg",
    title: "ThreadDownloader",
    tech: ["Python", "Multithreading"],
    description:
      "Script multihilo en Python para descarga masiva de archivos desde URLs directas. Útil para automatización y recolección de recursos.",
    github: "https://github.com/espinalclark/Multi_Thread",
    report: null,
    highlight: false,
    variant: "offensive",
  },
]

// Tokens por variante
const theme = {
  offensive: {
    border: "rgba(0,255,65,.35)",
    borderDim: "rgba(0,255,65,.12)",
    glow: "rgba(0,255,65,.08)",
    scanline: "rgba(0,255,65,.35)",
    topLine: "#00ff41",
    title: "#00ff41",
    badge: { bg: "rgba(0,255,65,.12)", border: "rgba(0,255,65,.3)", color: "#00ff41" },
    techBg: "rgba(0,255,65,.06)",
    techBorder: "rgba(0,255,65,.12)",
    reportBorder: "rgba(0,255,65,.3)",
    reportColor: "rgba(0,255,65,.85)",
    reportHoverBg: "rgba(0,255,65,.15)",
    codeColor: "#00ff41",
    divider: "rgba(0,255,65,.12)",
    pulseColor: "rgba(0, 255, 65,",
    scanlineColor: "rgba(0, 255, 65, 0.35)",
    label: "FEATURED",
  },
  defensive: {
    border: "rgba(56,189,248,.35)",
    borderDim: "rgba(56,189,248,.12)",
    glow: "rgba(56,189,248,.08)",
    scanline: "rgba(56,189,248,.35)",
    topLine: "#38bdf8",
    title: "#38bdf8",
    badge: { bg: "rgba(56,189,248,.12)", border: "rgba(56,189,248,.3)", color: "#38bdf8" },
    techBg: "rgba(56,189,248,.06)",
    techBorder: "rgba(56,189,248,.12)",
    reportBorder: "rgba(56,189,248,.3)",
    reportColor: "rgba(56,189,248,.85)",
    reportHoverBg: "rgba(56,189,248,.15)",
    codeColor: "#38bdf8",
    divider: "rgba(56,189,248,.12)",
    pulseColor: "rgba(56, 189, 248,",
    scanlineColor: "rgba(56, 189, 248, 0.35)",
    label: "DEFENSIVE",
  },
}

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <style>{`
        @keyframes reportPulseGreen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0); }
          50% { box-shadow: 0 0 8px 2px rgba(0, 255, 65, 0.25); }
        }
        @keyframes reportPulseBlue {
          0%, 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
          50% { box-shadow: 0 0 8px 2px rgba(56, 189, 248, 0.25); }
        }
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }

        .report-btn-green {
          position: relative;
          overflow: hidden;
          animation: reportPulseGreen 2.5s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        .report-btn-green::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.35), transparent);
          animation: scanline 2.2s ease-in-out infinite;
        }
        .report-btn-green:hover {
          background: rgba(0, 255, 65, 0.15) !important;
          border-color: rgba(0, 255, 65, 0.7) !important;
          color: #00ff41 !important;
          transform: translateY(-1px);
          box-shadow: 0 0 14px rgba(0, 255, 65, 0.3);
        }

        .report-btn-blue {
          position: relative;
          overflow: hidden;
          animation: reportPulseBlue 2.5s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        .report-btn-blue::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 40%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.35), transparent);
          animation: scanline 2.2s ease-in-out infinite;
        }
        .report-btn-blue:hover {
          background: rgba(56, 189, 248, 0.15) !important;
          border-color: rgba(56, 189, 248, 0.7) !important;
          color: #38bdf8 !important;
          transform: translateY(-1px);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.3);
        }
      `}</style>

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full blur-[160px]"
        style={{ background: "radial-gradient(circle, rgba(0,255,65,.08), transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        <p className="section-label mb-3 text-center">// proyectos</p>

        <h2
          className="font-mono font-bold text-center mb-3"
          style={{ color: "#e5e7eb", fontSize: "clamp(1.8rem,4.5vw,2.8rem)" }}
        >
          Mis proyectos
        </h2>

        <p
          className="text-center mb-10 max-w-2xl mx-auto text-sm"
          style={{ color: "rgba(229,231,235,.7)" }}
        >
          Herramientas, configuraciones y automatizaciones desarrolladas
          durante mi aprendizaje en Linux, pentesting y ciberseguridad.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const t = theme[project.variant] ?? theme.offensive
            const reportBtnClass =
              project.variant === "defensive" ? "report-btn-blue" : "report-btn-green"

            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02]"
                style={{
                  background: "rgba(0,0,0,.35)",
                  backdropFilter: "blur(18px)",
                  border: project.highlight
                    ? `1px solid ${t.border}`
                    : `1px solid ${t.borderDim}`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${t.glow}, transparent 50%)`,
                  }}
                />

                {/* Top line on hover */}
                <div
                  className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                  style={{
                    background: `linear-gradient(to right, transparent, ${t.topLine}, transparent)`,
                  }}
                />

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "240px" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,.95) 5%, transparent 60%)",
                    }}
                  />
                  {project.highlight && (
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-mono animate-pulse"
                      style={{
                        background: t.badge.bg,
                        border: `1px solid ${t.badge.border}`,
                        color: t.badge.color,
                      }}
                    >
                      {t.label}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <h3
                    className="font-mono font-bold text-lg mb-3 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: t.title }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-5 flex-grow"
                    style={{ color: "rgba(229,231,235,.7)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1.5 rounded-md font-mono text-[11px] transition-all hover:scale-105"
                        style={{
                          background: t.techBg,
                          border: `1px solid ${t.techBorder}`,
                          color: "rgba(229,231,235,.7)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: `1px solid ${t.divider}` }}
                  >
                    <a
                      href="https://github.com/espinalclark"
                      className="flex items-center gap-2 font-mono text-xs"
                      style={{ color: "rgba(229,231,235,.65)" }}
                    >
                      <Github size={14} />
                      espinalclark
                    </a>

                    <div className="flex items-center gap-3">
                      {project.report && (
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${reportBtnClass} flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded-md`}
                          style={{
                            background: t.techBg,
                            border: `1px solid ${t.reportBorder}`,
                            color: t.reportColor,
                          }}
                        >
                          <FileText size={12} />
                          Ver reporte
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-mono text-xs"
                        style={{ color: t.codeColor }}
                      >
                        Ver código
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="font-mono text-xs" style={{ color: "rgba(229,231,235,.45)" }} />
        </div>
      </div>
    </section>
  )
}
