import { Card } from '@/components/ui/card';
import { Upload, Brain, CheckCircle, ArrowDown, MessageSquare } from 'lucide-react';
import React from 'react';

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

/** Perfectly centers any icon in a uniform green circle */
const Circle: React.FC<{ size?: 'md' | 'lg'; children: React.ReactNode }> = ({ size = 'md', children }) => (
  <div
    className={[
      'flex items-center justify-center rounded-full shadow-lg',
      'bg-gradient-to-br from-primary to-primary-dark',
      size === 'lg' ? 'w-24 h-24' : 'w-20 h-20',
      'mx-auto',
    ].join(' ')}
  >
    {children}
  </div>
);

/** Down arrow with bounce only (no fade sequencing) */
const DownArrow: React.FC = () => (
  <ArrowDown strokeWidth={2.5} className="w-8 h-8 text-primary drop-shadow-md animate-bounce" />
);

const HowItWorksColumns: React.FC = () => {
  const startingOptions: { icon: IconType; title: string; description: string; details: string }[] = [
    {
      icon: Upload,
      title: 'Document Upload',
      description: 'Upload existing compliance documents',
      details:
        'Upload existing compliance documents and our AI will evaluate them, map to standards, and suggest missing documents required for compliance.',
    },
    {
      icon: MessageSquare,
      title: 'AI Chat Interface',
      description: 'Let AI build documents from scratch',
      details:
        'Interact with our AI to share your organization’s needs and let AI build documents on your behalf aligned to compliance standards.',
    },
  ];

  const processSteps: { icon: IconType; title: string; description: string; details: string }[] = [
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our AI instantly identifies gaps and risks',
      details:
        'AI processes your inputs to analyze compliance gaps, map requirements to standards, and identify missing documentation needed for full compliance.',
    },
    {
      icon: CheckCircle,
      title: 'Automated Reports',
      description: 'Generate comprehensive audit reports instantly',
      details:
        'Track audit status with built-in analytics while maintaining 95% AI automation and 5% user accountability for final review and approval.',
    },
  ];

  const FirstStartingIcon = startingOptions[0].icon;
  const SecondStartingIcon = startingOptions[1].icon;

  return (
    <section id="how-it-works" className="section-spacing lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center section-header-spacing animate-fade-in">
          <h2 className="text-section-title font-heading text-foreground mb-6">
            How Auditify.One <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Choose your starting point: upload existing documents or interact with our AI to build from scratch.
            Both paths lead to comprehensive analysis and automated reporting.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Visual Workflow */}
          <div className="relative">
            {/* Desktop Flow */}
            <div className="hidden lg:block">
              {/* Starting Options */}
              <div className="flex items-center justify-center mb-12">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-8">Choose Your Starting Point</h3>

                  <div className="flex items-start justify-center gap-12">
                    {/* First option */}
                    <div className="text-center animate-scale-in w-72" style={{ animationDelay: `0ms` }}>
                      <div className="mb-4">
                        <Circle>
                          <FirstStartingIcon strokeWidth={2} className="w-10 h-10 text-white" />
                        </Circle>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{startingOptions[0].title}</h4>
                      <p className="text-gray text-sm max-w-xs min-h-[48px] mx-auto">{startingOptions[0].description}</p>
                    </div>

                    {/* OR */}
                    <div className="flex items-center mt-10">
                      <div className="h-px w-10 bg-border" />
                      <span className="px-3 text-sm font-medium text-gray">OR</span>
                      <div className="h-px w-10 bg-border" />
                    </div>

                    {/* Second option */}
                    <div className="text-center animate-scale-in w-72" style={{ animationDelay: `200ms` }}>
                      <div className="mb-4">
                        <Circle>
                          <SecondStartingIcon strokeWidth={2} className="w-10 h-10 text-white" />
                        </Circle>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{startingOptions[1].title}</h4>
                      <p className="text-gray text-sm max-w-xs min-h-[48px] mx-auto">{startingOptions[1].description}</p>
                    </div>
                  </div>

                  {/* Down arrow to the process */}
                  <div className="flex justify-center mt-8">
                    <DownArrow />
                  </div>
                </div>
              </div>

              {/* Process Steps (equidistant arrows) */}
              <div className="flex flex-col items-center justify-center space-y-16">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="text-center">
                    {/* Step icon */}
                    <div className="animate-scale-in" style={{ animationDelay: `${(index + 2) * 200}ms` }}>
                      <div className="mb-4">
                        <Circle size="lg">
                          <step.icon strokeWidth={2} className="w-12 h-12 text-white" />
                        </Circle>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-gray text-sm max-w-xs mx-auto">{step.description}</p>
                    </div>

                    {/* Down arrow between steps */}
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <DownArrow />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Flow */}
            <div className="lg:hidden space-y-16">
              {/* Starting Options */}
              <div className="text-center mb-12">
                <h3 className="text-lg font-semibold text-foreground mb-6">Choose Your Starting Point</h3>
                {startingOptions.map((option, index) => (
                  <div
                    key={option.title}
                    className="mb-8 animate-scale-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="mb-4 inline-block">
                      <Circle>
                        <option.icon strokeWidth={2} className="w-10 h-10 text-white" />
                      </Circle>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{option.title}</h4>
                    <p className="text-gray text-sm">{option.description}</p>

                    {index < startingOptions.length - 1 && (
                      <div className="flex items-center justify-center my-6">
                        <div className="h-px bg-border flex-1 max-w-16"></div>
                        <span className="px-3 text-xs font-medium text-gray bg-background">OR</span>
                        <div className="h-px bg-border flex-1 max-w-16"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${(index + 2) * 200}ms` }}
                  >
                    <div className="mb-4 inline-block">
                      <Circle>
                        <step.icon strokeWidth={2} className="w-10 h-10 text-white" />
                      </Circle>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-gray text-sm mb-2">{step.description}</p>

                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <DownArrow />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Information Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16 mb-8 items-stretch">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Starting Options</h3>
              <div className="grid auto-rows-fr gap-6">
                {startingOptions.map((option, index) => (
                  <Card
                    key={option.title}
                    className="p-6 bg-gradient-subtle border-primary/10 animate-fade-in h-full flex flex-col"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <option.icon strokeWidth={2} className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{option.title}</h4>
                        <p className="text-sm text-gray leading-relaxed">{option.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Process Steps</h3>
              <div className="grid auto-rows-fr gap-6">
                {processSteps.map((step, index) => (
                  <Card
                    key={step.title}
                    className="p-6 bg-gradient-subtle border-primary/10 animate-fade-in h-full flex flex-col"
                    style={{ animationDelay: `${(index + 2) * 200}ms` }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <step.icon strokeWidth={2} className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-sm text-gray leading-relaxed">{step.details}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-hero rounded-3xl animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to streamline your compliance process?
            </h3>
            <p className="text-gray mb-6 max-w-2xl mx-auto">
              Join compliance professionals who are ready to simplify their audit workflows with Auditify.One.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-2 bg-primary/20 rounded-full text-primary font-medium text-sm">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Limited early access spots available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksColumns;
