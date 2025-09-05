import { Card } from '@/components/ui/card';
import { 
  FileCheck, 
  Brain, 
  MessageSquare, 
  Target, 
  Zap, 
  BarChart3 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Document Intelligence',
      description: 'AI instantly reads, understands, and maps your documents to compliance frameworks with precision.'
    },
    {
      icon: MessageSquare,
      title: 'Interactive Compliance Builder',
      description: 'Chat with AI to build complete compliance documentation from scratch through guided conversations.'
    },
    {
      icon: Target,
      title: 'Gap Analysis & Recommendations',
      description: 'Identify missing documents and get actionable recommendations to achieve full compliance.'
    },
    {
      icon: FileCheck,
      title: 'Audit-Ready Documentation',
      description: 'Generate professional, auditor-approved documents that meet industry standards and requirements.'
    },
    {
      icon: Zap,
      title: '95% Automation Promise',
      description: 'Let AI handle the heavy lifting while you focus on the 5% that requires human expertise and oversight.'
    },
    {
      icon: BarChart3,
      title: 'Compliance Status Tracking',
      description: 'Monitor your audit progress with clear dashboards showing completion status and next steps.'
    }
  ];

  return (
    <section id="features" className="section-spacing lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center section-header-spacing animate-fade-in">
          <h2 className="text-section-title font-heading text-foreground mb-6">
            Built for{' '}
            <span className="text-primary">Compliance Excellence</span>
          </h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            From document chaos to audit confidence. Our AI-powered platform transforms how compliance professionals work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-tight">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-8 h-full border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-6 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                <feature.icon strokeWidth={2.25} className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-feature-title text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New features added weekly
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;