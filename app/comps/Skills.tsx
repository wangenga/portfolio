import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeIcon, DatabaseIcon, GlobeIcon, PaletteIcon } from 'lucide-react'

const Skills = () => {
    const skills = [
        { name: "HTML5 / CSS3", icon: PaletteIcon, level: "Advanced" },
        { name: "JavaScript (ES6+)", icon: CodeIcon, level: "Intermediate–Advanced" },
        { name: "React.js", icon: CodeIcon, level: "Intermediate" },
        { name: "Next.js", icon: CodeIcon, level: "Intermediate" },
        { name: "Tailwind CSS", icon: PaletteIcon, level: "Intermediate–Advanced" },
        { name: "PostgreSQL", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Supabase", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Drizzle ORM", icon: DatabaseIcon, level: "Intermediate" },
        { name: "Node.js / Express", icon: CodeIcon, level: "Beginner–Intermediate" },
        { name: "REST APIs", icon: GlobeIcon, level: "Intermediate" },
        { name: "Git & GitHub", icon: GlobeIcon, level: "Intermediate–Advanced" },
        { name: "Docker / WSL2", icon: GlobeIcon, level: "Beginner–Intermediate" },
        { name: "Google Analytics", icon: GlobeIcon, level: "Beginner" },
        { name: "WordPress (Avada, Edu Press)", icon: GlobeIcon, level: "Intermediate" },
        { name: "Shopify App Development", icon: GlobeIcon, level: "Beginner–Intermediate" }
      ];
  return (
    <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#4b2ee1] to-[#9270ff] bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="text-muted-foreground text-lg">Technologies I love working with</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card 
                    key={skill.name} 
                    className="group shadow-elegant hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center relative overflow-hidden">
                      {/* Background glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#4b2ee1]/5 to-[#9270ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#4b2ee1]/10 to-[#9270ff]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        
                        <Badge variant="secondary" className="text-sm font-medium mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          {skill.name}
                        </Badge>
                        
                        <div className="text-xs text-muted-foreground mt-2">
                          <div className="flex items-center justify-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                  i < (skill.level === 'Expert' ? 5 : skill.level === 'Advanced' ? 4 : 3)
                                    ? 'bg-primary group-hover:bg-accent'
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="block mt-1 text-xs font-medium">{skill.level}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills