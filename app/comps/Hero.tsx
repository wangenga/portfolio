import { Button } from '@/components/ui/button'
import { Code, DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, SparklesIcon, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='pt-40 pb-24 px-4 relative'>
      <div className='container mx-auto'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center'>

            {/*Content*/}
            
            <div className='text-center lg:text-left animate-fade-in'>
              <div className="inline-flex items-center gap-2 mb-6">
                <SparklesIcon className='h-4 w-4'/> 
                <p>Available for new opportunities</p>
              </div>
              <h1 className='serif text-6xl md:text-7xl xl: text-8xl mb-4'>
                Daisy Wangenga
              </h1>

              <h2 className="text-xl md:text-2xl text-muted-foredround mb-8 font-mono">
                Software Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0" >
                Motivated developer with expertise in technologies, seeking to apply technical skills 
                and problem-solving abilities to create high-quality digital solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10 ">
                <Button size="lg" className="my-gradient-button" asChild>
                  <a href="mailto:daisyimg65@gmail.com" className="flex items-center gap-2">
                    <MailIcon className="h-4 w-4 " />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="code-button" asChild>
                  <a href="https://github.com/wangenga" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <GithubIcon className="h-4 w-4 " />
                    View GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="code-button">
                  <a href="/DaisyWangengaResume.pdf" download className='flex item-center gap-2'>
                    <DownloadIcon className="h-5 w-5 " />
                    Download CV
                  </a>
                </Button>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground font-mono test-sm" >
                <a 
                  href="mailto:daisyimg65@gmail.com" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MailIcon className="h-4 w-4 hover:scale-110 hover:text-primary transition-colors" />
                  <span className="hidden sm:inline">daisyimg65@gmail.com</span>
                </a>
                <a 
                  href="https://github.com/wangenga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <GithubIcon className="h-5 w-5 hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">github.com/wangenga</span>
                </a>
                <a 
                  href="https://linkedin.com/in/daisy-wangenga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors group"
                >
                  <LinkedinIcon className="h-5 w-5 hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="flex justify-center lg:justify-end animate-fade-in animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">

                {/* Placeholder for your image - replace with your actual photo */}
                <Image 
                  src="/images/mypic.PNG"
                  alt="Daisy Wangenga"
                  fill
                  className="object-cover pr-1"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII="
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero