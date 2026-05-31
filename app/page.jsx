import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import WriteUps from "@/components/WriteUps"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import RainBackground from "@/components/RainBackground"

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <RainBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Projects />
        <WriteUps />
        <Skills />
        <Footer />
      </div>
    </main>
  )
}
