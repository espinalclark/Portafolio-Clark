"use client"
import { useEffect, useRef } from "react"

export default function RainBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const fontSize = 14
    const chars    = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01ABCDEF></"
    const cols     = () => Math.floor(canvas.width / fontSize)
    let drops      = []

    const initDrops = () => {
      drops = Array(cols()).fill(0).map(() => Math.floor(Math.random() * -80))
    }
    initDrops()

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const c = cols()
      while (drops.length < c) drops.push(0)

      for (let i = 0; i < c; i++) {
        const y = drops[i] * fontSize
        if (y < 0) { drops[i]++; continue }

        ctx.font      = `bold ${fontSize}px 'JetBrains Mono', monospace`
        ctx.fillStyle = "rgba(180, 255, 180, 1)"
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y)

        ctx.font      = `${fontSize}px 'JetBrains Mono', monospace`
        ctx.fillStyle = "rgba(0, 200, 50, 0.85)"
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y - fontSize)

        ctx.fillStyle = "rgba(0, 160, 40, 0.5)"
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fontSize, y - fontSize * 2)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -30)
        }
        drops[i]++
      }
    }

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const interval = setInterval(draw, 45)
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000000",
          zIndex: -1,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.18,
        }}
      />
    </>
  )
}
