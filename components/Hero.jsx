"use client"

import { useEffect, useRef } from "react"
import { Download, Linkedin, Github } from "lucide-react"

export default function Hero() {
  const blobRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!blobRef.current) return

      blobRef.current.style.left = e.clientX + "px"
      blobRef.current.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 overflow-hidden">

      {/* Grid Hacker */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,65,.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,65,.03) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 95%)",
        }}
      />

      {/* Cursor Glow */}
      <div
        ref={blobRef}
        style={{
          position: "fixed",
          width: "650px",
          height: "650px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,65,.10) 0%, transparent 70%)",
          pointerEvents: "none",
          transform: "translate(-50%,-50%)",
          transition: "left .08s linear, top .08s linear",
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />

      {/* Glow central */}
      <div
        className="absolute"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "999px",
          background: "rgba(0,255,65,.04)",
          filter: "blur(120px)",
          animation: "pulseGlow 8s ease-in-out infinite",
        }}
      />

      <div
        className="relative flex flex-col items-center gap-8"
        style={{ zIndex: 10 }}
      >
        <p
          className="section-label"
          style={{
            animation: "fadeUp .7s ease forwards",
          }}
        >
          // seguridad ofensiva
        </p>

        <h1
          className="font-mono font-bold leading-none"
          style={{
            fontSize: "clamp(4rem,12vw,8rem)",
            letterSpacing: "-0.05em",
            color: "hsl(120,100%,55%)",
            textShadow:
              "0 0 10px rgba(0,255,65,.5), 0 0 25px rgba(0,255,65,.25)",
            animation:
              "fadeUp .9s ease forwards, heroGlow 4s ease-in-out infinite",
          }}
        >
          Clark
        </h1>

        <div
          style={{
            width: "140px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(0,255,65,.8), transparent)",
            animation: "scanline 3s linear infinite",
          }}
        />

        <p
          className="font-mono"
          style={{
            color: "hsl(120,20%,40%)",
            fontSize: ".85rem",
            letterSpacing: ".25em",
            animation: "fadeUp 1.1s ease forwards",
          }}
        >
          PENTESTER JUNIOR · PERU
        </p>

        <div
          className="flex flex-wrap justify-center items-center gap-4"
          style={{
            animation: "fadeUp 1.3s ease forwards",
          }}
        >

          <a
            href="/assets/cv/CV_CLARK.pdf"
            download="CV_CLARK.pdf"
            className="hero-btn hero-btn-primary"
          >
            <Download size={16} />
            Descargar CV
          </a>

          <a
            href="https://github.com/espinalclark"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-secondary"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/espinalclark"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-secondary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

        </div>
      </div>
          <style jsx>{`
        .hero-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          gap: .6rem;
          padding: .9rem 1.6rem;
          font-family: monospace;
          font-size: .85rem;
          border-radius: 4px;
          transition: all .35s ease;
          transform-style: preserve-3d;
        }

        .hero-btn::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -120%;
          width: 70px;
          height: 220%;
          background: rgba(255,255,255,.15);
          transform: rotate(25deg);
          transition: .8s;
        }

        .hero-btn:hover::before {
          left: 150%;
        }

        .hero-btn:hover {
          transform:
            translateY(-5px)
            scale(1.05);
        }

        .hero-btn-primary {
          background: hsl(120,100%,50%);
          color: #000;
          box-shadow:
            0 0 10px rgba(0,255,65,.25),
            0 0 30px rgba(0,255,65,.12);
        }

        .hero-btn-primary:hover {
          box-shadow:
            0 0 20px rgba(0,255,65,.6),
            0 0 50px rgba(0,255,65,.25);
        }

        .hero-btn-secondary {
          border: 1px solid rgba(0,255,65,.25);
          color: hsl(120,60%,65%);
          background: rgba(0,0,0,.25);
          backdrop-filter: blur(12px);
        }

        .hero-btn-secondary:hover {
          border-color: rgba(0,255,65,.8);
          box-shadow:
            0 0 15px rgba(0,255,65,.25),
            inset 0 0 15px rgba(0,255,65,.05);
        }

        .hero-btn svg {
          transition: .35s;
        }

        .hero-btn:hover svg {
          transform:
            scale(1.15)
            rotate(6deg);
        }

        @keyframes heroGlow {
          0%,100% {
            text-shadow:
              0 0 10px rgba(0,255,65,.4),
              0 0 25px rgba(0,255,65,.2);
          }

          50% {
            text-shadow:
              0 0 18px rgba(0,255,65,.8),
              0 0 45px rgba(0,255,65,.4);
          }
        }

        @keyframes pulseGlow {
          0%,100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.15);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateX(-60px);
          }

          100% {
            transform: translateX(60px);
          }
        }
      `}</style>

    </section>
  )
}
