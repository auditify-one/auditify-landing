import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, ChevronRight } from 'lucide-react';

const StickyWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShow = scrollY > 800 && !isDismissed;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-card border border-primary/20 rounded-2xl shadow-lg p-4 max-w-sm">
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-light rounded-full flex items-center justify-center text-foreground hover:bg-gray transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
        
        <div className="mb-3">
          <h3 className="font-semibold text-foreground text-sm mb-1">
            Don't miss out on early access
          </h3>
          <p className="text-xs text-gray">
        Join our waitlist for early access and exclusive beta discounts!
          </p>
        </div>
        
        <Button 
          asChild
          size="sm" 
          variant="hero"
          className="w-full btn-animate"
        >
          <a href="https://forms.gle/ugodfRv4hVfmnmhq5" target="_blank" rel="noopener noreferrer">
            Join the Waitlist
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyWaitlist;