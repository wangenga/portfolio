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
    "HTML5 / CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Drizzle ORM",
    "Node.js / Express",
    "REST APIs",
  ];

  const softwareTools = [
    "Git & GitHub",
    "Docker / WSL2",
    "Google Analytics",
    "WordPress",
    "Shopify",
    "Supabase",
    "Drizzle ORM",
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
                <div className='relative inline-block' >
                  <div className='w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl animate-float '>
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
              </div>
              

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4b2ee1] to-[#9270ff]  bg-clip-text text-transparent animate-slide-up">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Motivated developer with knowledge in web development and problem-solving abilities
              </p>
            </div>

            <div className="grid gap-8 md:gap-12 ">
              {/* About Statement */}
              <Card className="border-zinc-200 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    About Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Motivated developer with knowledge in web development, seeking to apply my technical skills 
                    and problem solving abilities in dynamic environments. I am patient, curious and detail-oriented, 
                    and I strive to deliver high quality products. I am hardworking and ready to learn more.
                  </p>
                </CardContent>
              </Card>

              {/* Skills (with subsections) */}
              <Card className="border-zinc-200 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <Badge key={skill} variant='secondary' className='text-[#423fe9] text-sm font-medium bg-[#F3F3F7]  w-fit'>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Software Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {softwareTools.map((tool) => (
                          <Badge key={tool} variant='secondary' className='text-[#423fe9] text-sm font-medium bg-[#F3F3F7]  w-fit'>
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Soft Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {softSkills.map((soft) => (
                          <Badge key={soft} variant='secondary' className='text-[#423fe9] text-sm font-medium bg-[#F3F3F7]  w-fit'>
                            {soft}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Education*/}
              <Card className="border-zinc-200 shadow-elegant">
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-2xl'>
                    <GraduationCap className='h-6 w-6 text-primary'/>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Bachelor of Science Computer Science</h3>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>September 2021 - Current</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Kenyatta University, Nairobi</span>
                    </div>
                  </div>

                  <div className="border-l-2 border-accent pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Proficiency in Chinese Language</h3>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>January 2020 - March 2020</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>Kenyatta University, Nairobi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>

              {/* Experience */}
            <Card className="border-zinc-200 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Web Developer</h3>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>March 2024 - March 2025</span>
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

                  <div className="border-l-2 border-accent pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold">Education Manager</h3>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>January 2023 - January 2024</span>
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
              </CardContent>
            </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default about