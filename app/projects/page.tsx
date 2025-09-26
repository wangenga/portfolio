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
      title: "Venuease",
      description: "A web platform for hosts to list venues and clients to search, book, and manage event spaces.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Drizzle ORM",],
      status: "completed",
      category: "Event Venue Booking System",
      githublink: "https://github.com/wangenga/venuease",
      sitelink: "https://venuease.vercel.app/"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Personal portfolio showcasing web development skills and projects",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      status: "in-progress", 
      category: "Personal Project",
      githublink: "https://github.com/wangenga/portfolio",
      sitelink: "https://daisywangenga.vercel.app/"
    }
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
            <div className='text-center mb-12'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4b2ee1] to-[#9270ff] bg-clip-text text-transparent'>
                Projects
              </h1>
              <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                A showcase of my web development work and technical projects
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {pjs.map((pj) => (
                <Card key={pj.id} className='border-zinc-200  hover:shadow-lg transition-shadow duration-300 '>
                  <CardHeader>
                    <div className='flex items-start justify-between'>
                      <CardTitle className='text-xl'>{pj.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className={`text-xs ${getStatusColor(pj.status)}`}
                      >
                        {pj.status}
                      </Badge>
                    </div>
                    <Badge variant='secondary' className='text-[#423fe9] font-semibold bg-[#F3F3F7]  w-fit'>
                      {pj.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground mb-4 leading-relaxed'>
                      {pj.description}
                    </p>
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-2'>
                        {pj.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className='text-xs border-[#E2E8F0]'>
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
                            GitHub Link
                          </a>
                        </Button>
                      )}

                      {pj.sitelink && (
                        <Button size="sm" className='flex-1 site-link-button' asChild>
                          <a href={pj.sitelink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className='h-4 w-4 mr-2' />
                            Site Link
                          </a>
                        </Button>
                      )}
                    </div>  
                  </CardContent>
                </Card>
              ))}


              {/* Add More Projects Card */}
              <Card className="shadow-elegant hover:shadow-lg transition-shadow duration-300 border-dashed border-2 border-[#423fe94d]">
                <CardContent className="flex flex-col items-center justify-center h-full text-center p-8">
                  <Plus className="h-12 w-12 text-[#423fe94d] mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-muted-foreground">
                    More Projects Coming Soon
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I'm constantly working on new projects and learning new technologies
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* GitHub CTA */}
            <div className="text-center mt-12  ">
              <Card className="inline-block border-zinc-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Want to see more?</h3>
                  <p className="text-muted-foreground mb-4">
                    Check out my GitHub for additional projects and contributions
                  </p>
                  <Button asChild>
                    <a 
                      href="https://github.com/wangenga" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 site-link-button"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Visit GitHub Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>  
          </div>
        </Container>
      </div>
    </>
  )
}

export default Projects