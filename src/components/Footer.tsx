import { Button } from '@/components/ui/button';
import { Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Auditify<span className="text-gray">.one</span>
            </div>
            <p className="text-gray mb-6 max-w-md">
              Simplifying compliance through AI-powered automation. 
              Transform your audit workflows from complex to seamless.
            </p>
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="outline-primary"
                size="sm"
              >
                <a href="mailto:contact@auditify.one">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/privacy" 
                  className="text-gray hover:text-primary transition-colors flex items-center"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-gray hover:text-primary transition-colors flex items-center"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#features" 
                  className="text-gray hover:text-primary transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="text-gray hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  className="text-gray hover:text-primary transition-colors"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray">
            © 2025 Auditify.one. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
