import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';

const CTAFooter = () => {
  return (
    <section className="section-spacing lg:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-3xl mx-auto p-10 text-center border-primary/20 bg-card/50 backdrop-blur-sm animate-scale-in">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-section-title font-heading text-foreground mb-4">
              Be Among the First to Experience{' '}
              <span className="text-primary">Auditify.One</span>
            </h2>

            <p className="text-lg text-gray max-w-2xl mx-auto mb-8">
              Join compliance professionals ready to transform their audit workflows with AI-powered automation.
            </p>

            {/* Centered Join Button */}
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="hero"
                className="btn-animate px-8"
              >
                <a
                  href="https://forms.gle/ugodfRv4hVfmnmhq5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-gap-tight mb-6">
            <div className="flex items-center justify-center gap-3 text-sm text-gray">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Early access pricing (50% off first year)</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-gray">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>Priority onboarding and support</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 pt-6 border-t border-border opacity-60">
            <div className="flex items-center gap-2 text-sm text-gray">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>No spam ever</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTAFooter;
