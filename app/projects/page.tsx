import React from 'react'
import FloatingElements from '../comps/FloatingElements'
import Navbar from '../comps/Navbar'
import Container from '../comps/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, GithubIcon, Plus } from 'lucide-react'

const Projects = () => {

  // Placeholder projects - can be updated with real projects later
  const pjs = [
    {
      id: 1,
      title: "Green Day Bank",
      description: "A command-line banking application implemented in Java as the final project for kood.",
      technologies: ["Java"],
      status: "completed",
      category: "Command Line App",
      githublink: "https://github.com/wangenga/bankingApp"
    },
    {
      id: 2,
      title: "Venuease",
      description: "A web platform for hosts to list venues and clients to search, book, and manage event spaces.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Drizzle ORM",],
      status: "completed",
      category: "Event Venue Booking System",
      githublink: "https://github.com/wangenga/venuease",
      sitelink: "https://venuease.vercel.app/"
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "Personal portfolio showcasing development skills and projects",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      status: "completed", 
      category: "Personal Project",
      githublink: "https://github.com/wangenga/portfolio",
      sitelink: "https://daisywangenga.vercel.app/"
    },
    {
      id: 4,
      title: "Simple Shell",
      description: "a progressive implementation of a Simple UnixShell done in C. It uses POSIX to implement many of the same functionalities of the Ken Thompson's Shell",
      technologies: ["C", "Shell"],
      status: "completed", 
      category: "Collaborative Project",
      githublink: "https://github.com/MauriceNzai/simple_shell"
    },
    {
      id: 5,
      title: "TrustPeak",
      description: "A platform for building and managing trust-based applications",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      status: "in progress",
      category: "Web Application",
      sitelink: "https://trustpeak.vercel.app/"
    },
    {
      id: 6,
      title: "MoneyHub",
      description: "A secure Android financial management app with biometric authentication, encrypted database, and real-time expense tracking with visual charts and analytics.",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room Database", "Hilt", "SQLCipher"],
      status: "completed",
      category: "Mobile Finance App",
      githublink: "https://github.com/wangenga/MoneyHub"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-300";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };


  return (
    <>
      <Navbar />
      <div className='about-page'>
        <FloatingElements />
        <Container className='mx-auto px-4 py-12 relative'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-14'>
              <p className="eyebrow justify-center flex mb-3">projects</p>
              <h1 className='serif text-5xl md:text-6xl mb-4'>
                Selected work
              </h1>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                A showcase of my web development work and technical projects
              </p>
            </div>
 
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {pjs.map((pj) => (
                <div key={pj.id} className='card-flat hover:shadow-lg p-6 transition-shadow duration-300 flex flex-col'>
                    <div className='flex items-start justify-between mb-2'>
                      <h3 className='text-xl serif'>{pj.title}</h3>
                      <span className='font-mono text-xs text-muted-foreground'>
                        {pj.status}
                      </span>
                    </div>
                    <Badge variant='secondary' className='text-[var(--purple)] font-medium bg-[var(--purple-tint)] w-fit mb-4'>
                      {pj.category}
                    </Badge>
 
                    <p className='text-muted-foreground mb-4 leading-relaxed flex-1'>
                      {pj.description}
                    </p>
                    <div className='mb-5'>
                      <div className='flex flex-wrap gap-2'>
                        {pj.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className='text-xs border-[var(--line)] text-muted-foreground'>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
 
                    <div className='flex gap-2'>
                      {pj.githublink && (
                        <Button variant="outline" size="sm" className='flex-1 code-button' asChild>
                          <a href={pj.githublink} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className='h-4 w-4 mr-2' />
                            GitHub
                          </a>
                        </Button>
                      )}
 
                      {pj.sitelink && (
                        <Button size="sm" className='flex-1 site-link-button' asChild>
                          <a href={pj.sitelink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className='h-4 w-4 mr-2' />
                            Visit site
                          </a>
                        </Button>
                      )}
                    </div>
                </div>
              ))}
 
              {/* Add More Projects Card */}
              <div className="card-flat border-dashed p-8 flex flex-col items-center justify-center text-center">
                  <Plus className="h-8 w-8 text-[var(--ink-faint)] mb-4" />
                  <h3 className="text-lg font-medium mb-2 text-muted-foreground">
                    More projects coming soon
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I&#39;m constantly working on new projects and learning new technologies
                  </p>
              </div>
            </div>
 
            {/* GitHub CTA */}
            <div className="text-center mt-14">
              <div className="card-flat inline-block p-8">
                  <h3 className="text-xl serif mb-2">Want to see more?</h3>
                  <p className="text-muted-foreground mb-5">
                    Check out my GitHub for additional projects and contributions
                  </p>
                  <Button asChild className="site-link-button">
                    <a
                      href="https://github.com/wangenga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Visit GitHub profile
                    </a>
                  </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Projects