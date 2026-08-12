import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail } from 'lucide-react'
import React from 'react'
import { useToast } from './Toast'

const CTA = () => {
  const {showToast} = useToast();

  const handleContactClick = () => {
    navigator.clipboard.writeText("daisyimg65@gmail.com")
    .then(() => showToast('Email copied: daisyimg65@gmail.com'))
    .catch(() => showToast('daisyimg65@gmail.com'));
  }
  return (
    <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className='card-flat max-w-2xl mx-auto p-10 text-center'>
            <p className='eyebrow mb-3 ujustify-center flex'>contact</p>
            <h3 className="serif text-3xl mb-4">Let&#39;s work together</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I&#39;m always interested in new opportunities and challenging projects.
                Let&#39;s discuss how we can bring your ideas to life.
              </p>
              <Button size="lg" className="my-gradient-button" asChild>
                <a href="mailto:daisyimg65@gmail.com" className="flex items-center gap-2" onClick={handleContactClick}>
                  <Mail className="h-4 w-4" />
                  Start a conversation
                </a>
              </Button>
          </div>
        </div>
      </section>
  )
}

export default CTA