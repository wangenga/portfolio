import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail } from 'lucide-react'
import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in new opportunities and challenging projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <Button size="lg" asChild>
                <a href="mailto:daisyimg65@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
  )
}

export default CTA