import { Shield, Zap, FileCheck, BarChart3, CheckCircle, Clock } from 'lucide-react';

const Overview = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure',
      description: 'Enterprise-grade security',
    },
    {
      icon: Zap,
      title: 'Fast',
      description: 'AI-powered automation',
    },
    {
      icon: FileCheck,
      title: 'Audit-ready',
      description: 'Exportable, auditor-friendly reports',
    },
    {
      icon: BarChart3,
      title: 'Insightful',
      description: 'Real-time analytics',
    },
  ];

  const standards = [
    { name: 'ISO 27001:2022', status: 'available' },
    { name: 'ISO 27701', status: 'Under Development' },
    { name: 'ISO 20000', status: 'Coming Soon' },
    { name: 'ISO 22301', status: 'Under Development' },
    { name: 'ISO 9001', status: 'Under Development' },
    { name: 'ISO 14000 Family', status: 'Coming Soon' },
    { name: 'ISO 42001', status: 'Coming Soon' },
  ];

  return (
    <section className="section-spacing lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center section-header-spacing animate-fade-in">
          <h2 className="text-section-title font-heading text-foreground mb-6">
            Accelerate compliance with an AI-powered assistant{' '}
            <span className="text-primary">that works the way you do</span>
          </h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Our intelligent platform understands your compliance needs and adapts to your workflow,
            making complex audits simple and efficient.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-gap-tight">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors"></div>
                <feature.icon strokeWidth={2.25} className="relative w-8 h-8 text-primary" />
              </div>
              <h3 className="text-feature-title text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-gray text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-gap-tight mt-12 pt-12 border-t border-border">
          <div className="text-center animate-scale-in">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-gray">AI Automation</div>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: '200ms' }}>
            <div className="text-4xl font-bold text-primary mb-2">5%</div>
            <div className="text-gray">User Accountability</div>
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mt-12 text-center animate-fade-in">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Future-Ready Compliance Standards
          </h3>
          <p className="text-gray max-w-3xl mx-auto mb-8">
            Our platform grows with your needs. While the beta release supports{' '}
            <strong>ISO 27001:2022</strong>, we’re actively expanding support to more frameworks so you
            can stay audit-ready as compliance requirements evolve.
          </p>

          {/* Standards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-gap-tight max-w-5xl mx-auto">
            {standards.map((standard, index) => (
              <div
                key={standard.name}
                className="flex items-center justify-between px-4 py-3 border border-border rounded-xl bg-background hover:border-primary/20 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {standard.status === 'available' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="text-foreground font-medium">{standard.name}</span>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    standard.status === 'available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {standard.status === 'available' ? 'Beta Available' : 'Under Development'}
                </span>
              </div>
            ))}
          </div>

          {/* Badge */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New standards built and added based on community demand.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
