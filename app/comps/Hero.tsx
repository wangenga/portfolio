import { Button } from '@/components/ui/button'
import { Code, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, SparklesIcon, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='pt-32 pb-20 px-4 relative'>
      <div className='container mx-auto'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>

            {/*Content*/}
            <div>
            <div className='text-center lg:text-left animate-fade-in'>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <SparklesIcon className='h-4 w-4'/>
                Available for new opportunities
              </div>
              <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-[#4b2ee1] via-[#9270ff] to-[#4b2ee1] animate-glow bg-clip-text text-transparent '>
                Daisy Wangenga
              </h1>

              <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-6 bg-gradient-to-r from-[#4b2ee1] via-[#9270ff] to-[#4b2ee1] bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Software Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
                Motivated developer with expertise in technologies, seeking to apply technical skills 
                and problem-solving abilities to create high-quality digital solutions.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="group hover:scale-105 transition-transform" asChild>
                <a href="mailto:daisyimg65@gmail.com" className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group hover:scale-105 transition-transform" asChild>
                <a href="https://github.com/wangenga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <GithubIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View GitHub
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="group hover:scale-105 transition-transform">
                <DownloadIcon className="h-5 w-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Contact Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <a 
                href="mailto:daisyimg65@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <MailIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">daisyimg65@gmail.com</span>
              </a>
              <a 
                href="https://github.com/wangenga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <GithubIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">github.com/wangenga</span>
              </a>
              <a 
                href="https://linkedin.com/in/daisy-wangenga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <LinkedinIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <div className="relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4b2ee1] to-[#9270ff] rounded-full animate-glow opacity-20 scale-115"></div>
                  
                  {/* Main image container */}
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float">
                    {/* Placeholder for your image - replace with your actual photo */}
                    <Image 
                      src="/images/mypic.PNG"
                      alt="Daisy Wangenga"
                      fill
                      className="object-cover"
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <Star className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div className="absolute -bottom-2 -left-4 bg-white rounded-full p-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Hero