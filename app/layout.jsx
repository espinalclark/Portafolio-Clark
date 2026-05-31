import { JetBrains_Mono, Inter_Tight } from "next/font/google"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata = {
  title: "Clark Espinal",
  description:
    "Clark Espinal — Pentester certificado eJPT. Especializado en seguridad ofensiva, analisis de vulnerabilidades y pruebas de penetracion en entornos controlados.",
  keywords: [
    "pentester",
    "eJPT",
    "ciberseguridad",
    "hacking etico",
    "seguridad ofensiva",
    "Clark Espinal",
  ],
  authors: [{ name: "Clark Espinal", url: "https://github.com/espinalclark" }],
  openGraph: {
    title: "Clark Espinal",
    description:
      "Portafolio tecnico de Clark Espinal — seguridad ofensiva, write-ups y proyectos reales.",
    url: "https://clarkportafolio.vercel.app",
    siteName: "Clark Espinal",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clark Espinal",
    description: "Seguridad ofensiva.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${jetbrainsMono.variable} ${interTight.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
