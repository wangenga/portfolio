import React from 'react'
import Image from 'next/image'

import Navbar from '../comps/Navbar'
import FloatingElements from '../comps/FloatingElements'
import Container from '../comps/Container'
import { Briefcase, Calendar, GraduationCap, MapPin, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const about = () => {
  const skills = [
    "Java",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Kotlin",
    "Jetpack Compose",
    "Tailwind CSS",
    "PostgreSQL",
    "Firebase",
    "Room Database",
    "Drizzle ORM",
    "Node.js / Express",
    "REST APIs",
    "Generative AI"
  ];

  const softwareTools = [
    "Git & GitHub",
    "Docker / WSL2",
    "Google Analytics",
    "WordPress",
    "Shopify",
    "Supabase",
    "Android Studio",
    "SQLCipher",
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Attention to Detail",
    "Continuous Learning",
  ];

  return (
    <>
      <Navbar />
      <div className='about-page'>
        <FloatingElements />
        <Container className='mx-auto px-4 py-12 relative'>
          <div className='max-w-6xl mx-auto'>
            {/* Header with Profile Image */}
            <div className="text-center mb-16 animate-fade-in">
              <div className='mb-8'>
                <div className='w-28 h-28 mx-auto rounded-full overflow-hidden border border--[var(--line)] shadow-xl animate-fade-in animate-float'>
                  <Image
                    src="/images/mypic.PNG"
                    alt="Daisy Wangenga"
                    fill
                    className='object-cover'
                  />
                </div>
                  
                  <div className='absolute -bottom-2 -right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-lg'>
                    <User className='h-4 w-4'/>
                  </div>
              </div>

              <p className='eyebrow justify-center flex mb-3'>about</p>
              <h1 className="serif text-5xl md:text-6xl mb-4 animate-slide-up">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Motivated developer with knowledge in web development and problem-solving abilities
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 ">
              {/* About Statement */}
              <div className="card-flat p-8">
                  <h3 className="flex items-center gap-2 text-xl serif mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Who I am
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I am someone who thrives in the space between a question and an answer. My professional identity is built on curiosity and the belief that there is always a more efficient way to navigate a challenge. I don&apos;t just look for solutions; I look for the &apos;why&apos; behind the problem, ensuring that the impact of my work lasts longer than the task itself.
                  </p>
              </div>

              {/* Skills (with subsections) */}
              <div className="card-flat p-8">
                  <h3 className="text-xl serif mb-6">
                    Skills
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="eyebrow mb-3">technical skills</p>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant='secondary' className='text-[var(--purple)] text-sm font-medium bg-[var(--purple-tint)] w-fit'>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow mb-3">software tools</p>
                      <div className="flex flex-wrap gap-2">
                        {softwareTools.map((tool) => (
                          <Badge key={tool} variant='secondary' className='text-[var(--purple)] text-sm font-medium bg-[var(--purple-tint)] w-fit'>
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="eyebrow mb-3">soft skills</p>
                      <div className="flex flex-wrap gap-2">
                        {softSkills.map((soft) => (
                          <Badge key={soft} variant='secondary' className='text-[var(--purple)] text-sm font-medium bg-[var(--purple-tint)] w-fit'>
                            {soft}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>

              {/* Education*/}
              <div className="card-flat p-8">
                  <h3 className='flex items-center gap-2 text-xl serif mb-6'>
                    <GraduationCap className='h-5 w-5 text-primary'/>
                    Education
                  </h3>
                <div className="space-y-6">
                  <div className="border-l border-[var(--line)] pl-6 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[var(--purple)] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-medium">AI Essentials for Software Developers Program</h3>
                      <div className="flex items-center gap-1 text-muted-foreground font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>March 2026</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Moringa School</span>
                    </div>
                  </div>

                  <div className="border-l border-[var(--line)] pl-6 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[var(--purple)] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-medium">Bachelor of Science Computer Science</h3>
                      <div className="flex items-center gap-1 text-muted-foreground font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>September 2021 – December 2026</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Kenyatta University, Nairobi</span>
                    </div>
                  </div>

                  <div className="border-l border-[var(--line)] pl-6 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[var(--purple)] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-medium">Proficiency in Chinese Language</h3>
                      <div className="flex items-center gap-1 text-muted-foreground font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>January 2020 – March 2020</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Kenyatta University, Nairobi</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Experience */}
            <div className="card-flat p-8">
                <h3 className="flex items-center gap-2 text-xl serif mb-6">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Work experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l border-[var(--line)] pl-6 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[var(--purple)] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-medium">Full Stack Developer</h3>
                      <div className="flex items-center gap-1 text-muted-foreground font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>May 2025 – May 2026</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>TrustPeak, Remote</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                     Building and maintaining the Trustpeak property management platform across the entire stack using React, TypeScript, and Tailwind CSS. Architecting scalable database solutions with Supabase and implementing end-to-end features from conception to production. Designing reusable component libraries, optimizing API integrations, and managing complex authentication flows while ensuring code quality through Vitest testing. Collaborating with the team to enhance user experiences, scale platform reliability, and maintain a clean, modern codebase.
                    </p>
                  </div>
 
                  <div className="border-l border-[var(--line)] pl-6 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[var(--purple)] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-medium">Web Developer</h3>
                      <div className="flex items-center gap-1 text-muted-foreground font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>March 2024 – March 2025</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>JIJIFEST LTD, Nairobi</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Designed and developed responsive e-commerce websites using WordPress and React,
                      tailored to client specifications and branding requirements. Built and maintained
                      custom websites for a variety of industries, ensuring usability, performance, and
                      mobile compatibility. Collaborated with clients to provide training and guidance on
                      website management, content updates, and basic troubleshooting.
                    </p>
                  </div>
 
                  <div className="border-l border-[var(--line)] pl-6 relative">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 bg-[var(--purple)] rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-medium">Education Manager</h3>
                      <div className="flex items-center gap-1 text-muted-foreground font-mono text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>January 2023 – January 2024</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>AIESEC in KU, Nairobi</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Evaluate the impact of educational programs and identify opportunities for improvement.
                      Develop and oversee education programs and initiatives that align with the mission and
                      goals of AIESEC. Develop program curriculum and materials, and manage program
                      implementation and evaluation.
                    </p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
 
export default about
 