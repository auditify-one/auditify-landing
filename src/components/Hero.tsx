import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import heroDashboard from '@/assets/hero-dashboard.jpg';

const Hero = () => {
  return (
    <section className="relative section-spacing lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 ai-pattern opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 grid-gap-tight lg:gap-12 items-center">
          {/* Hero Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-sm">
              Private Beta Open • Join the Waitlist
            </div>
            <h1 className="text-hero font-heading text-foreground mb-6">
              Where Compliance{' '}
              <span className="text-primary">Meets AI</span>
            </h1>
            
            <p className="text-xl text-gray mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Simplifying ISO audits with AI-driven automation and real-time insights. 
              Transform your compliance workflow from complex to seamless.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button 
                asChild
                variant="hero"
                size="xl"
                className="btn-animate"
              >
                <a href="https://forms.gle/ugodfRv4hVfmnmhq5" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Early Access Available</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src={heroDashboard}
                alt="Auditify.one AI Compliance Dashboard"
                className="relative w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;