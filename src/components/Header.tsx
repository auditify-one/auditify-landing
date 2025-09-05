import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo -> Link to Home */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              Auditify<span className="text-gray">.one</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#demo" className="text-gray hover:text-primary transition-colors">
              Demo
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild variant="hero" className="btn-animate">
              <a href="https://forms.gle/ugodfRv4hVfmnmhq5" target="_blank" rel="noopener noreferrer">
                Join the Waitlist
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#demo"
                className="text-gray hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <Button asChild variant="hero" className="w-full mt-4 btn-animate">
                <a href="https://forms.gle/ugodfRv4hVfmnmhq5" target="_blank" rel="noopener noreferrer">
                  Join the Waitlist
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
