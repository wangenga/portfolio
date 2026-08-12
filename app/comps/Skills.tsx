import React from 'react'
import { CodeIcon, DatabaseIcon, GlobeIcon, PaletteIcon } from 'lucide-react'

const Skills = () => {
    const skills = [
        { name: "TypeScript", icon: CodeIcon, level: "Intermediate–Advanced" },
        { name: "React.js", icon: CodeIcon, level: "Intermediate" },
        { name: "Next.js", icon: CodeIcon, level: "Intermediate" },
        { name: "Kotlin", icon: CodeIcon, level: "Intermediate–Advanced" },
        { name: "Jetpack Compose", icon: CodeIcon, level: "Intermediate" },
        { name: "Tailwind CSS", icon: PaletteIcon, level: "Intermediate–Advanced" },
        { name: "PostgreSQL", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Firebase", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Room Database", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Supabase", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Node.js / Express", icon: CodeIcon, level: "Beginner–Intermediate" },
        { name: "REST APIs", icon: GlobeIcon, level: "Intermediate" },
        { name: "Git & GitHub", icon: GlobeIcon, level: "Intermediate–Advanced" },
        { name: "Docker / WSL2", icon: GlobeIcon, level: "Beginner–Intermediate" },
        { name: "Hilt Dependency Injection", icon: CodeIcon, level: "Intermediate" },
        { name: "Google Analytics", icon: GlobeIcon, level: "Beginner" },
        { name: "WordPress (Avada, Edu Press)", icon: GlobeIcon, level: "Intermediate" },
        { name: "Shopify App Development", icon: GlobeIcon, level: "Beginner–Intermediate" }
      ];
  return (
    <section className="py-24 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <p className="eyebrow mb-3">skills</p>
              <h2 className="serif text-4xl md:text-5xl">
                Technical skills
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="card-flat p-5 hover:border-[var(--purple)] hover:shadow-2xl hover:scale-103 transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5 text-primary mb-4" />
                    <p className="font-medium text-sm mb-1">{skill.name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{skill.level}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills