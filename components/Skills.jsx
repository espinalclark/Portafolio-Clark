"use client"

const skillCategories = [
  {
    title: "Herramientas",
    skills: [
      { name: "Burp Suite", level: 75 },
      { name: "Nmap", level: 85 },
      { name: "Metasploit", level: 65 },
      { name: "Wireshark", level: 70 },
      { name: "John the Ripper", level: 60 },
    ],
  },
  {
    title: "Lenguajes",
    skills: [
      { name: "Python", level: 80 },
      { name: "Bash", level: 75 },
      { name: "SQL", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "PowerShell", level: 55 },
    ],
  },
  {
    title: "Conocimientos",
    skills: [
      { name: "OWASP Top 10", level: 85 },
      { name: "Redes TCP/IP", level: 75 },
      { name: "Linux", level: 80 },
      { name: "Active Directory", level: 55 },
      { name: "CTF / HackTheBox", level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Habilidades
        </h2>
        <div className="h-1 w-16 bg-primary rounded mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div key={i}>
              <h3 className="text-foreground font-bold text-lg mb-6">
                {category.title}
              </h3>
              <div className="flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-primary font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
