import React from 'react'
import Image from 'next/image'

import Navbar from '../comps/Navbar'
import FloatingElements from '../comps/FloatingElements'
import Container from '../comps/Container'
import { Badge, GraduationCap, User } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const about = () => {
  const skills = [
    "JavaScript", "React", "Node.js", "MongoDB", "SQL", "WordPress", "HTML/CSS"
  ];

  return (
    <>
      <Navbar />
      <div className='about-page'>
        <FloatingElements />
        <Container className='mx-auto px-40 py-12 relative'>
          <div className='max-w-5xl mx-auto'>
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

            <div className="grid gap-8 md:gap-12">
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
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill}  className="text-sm">
                          {skill}
                        </Badge>
                      ))}
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