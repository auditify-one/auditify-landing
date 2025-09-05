import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import {
  ShieldCheck,
  UserRound,
  Brain,
  Lock,
  Database,
  Clock,
  Cookie,
  Globe,
  Mail,
  Scale
} from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: UserRound,
      title: '1) Information We Collect',
      points: [
        'Basic contact details: name, work/official email, role/title, organization.',
        'Compliance preferences: audit interests, challenges, ISO focus (only if provided).',
        'Technical info: device, browser, IP address, general analytics (cookies/analytics).'
      ],
    },
    {
      icon: Brain,
      title: '2) How We Use Your Information',
      points: [
        'Register you on the waitlist and send updates about beta access & launch.',
        'Understand needs to tailor communication and improve the product.',
        'Send newsletters/invitations (only with your consent).',
        'Ensure website security and performance.',
        'We do not sell, rent, or share your data for marketing.'
      ],
    },
    {
      icon: Scale,
      title: '3) Legal Basis for Processing',
      points: [
        'Consent – when you opt in to the waitlist or communications.',
        'Legitimate interests – product improvement, security, usage insights.',
        'Compliance with law – as required by GDPR, DPDPA 2023, or other laws.'
      ],
    },
    {
      icon: Lock,
      title: '4) Data Storage & Security',
      points: [
        'Trusted cloud providers; encryption in transit & at rest.',
        'Access restricted to authorized team members.',
        'Controls aligned to ISO/IEC 27001:2022 (CIA principles).'
      ],
    },
    {
      icon: Clock,
      title: '5) Data Retention',
      points: [
        'Waitlist data kept until beta completion or your deletion request.',
        'Analytics & logs retained only as long as needed for security/performance.'
      ],
    },
    {
      icon: ShieldCheck,
      title: '6) Your Rights',
      points: [
        'Access, correction, deletion of your data.',
        'Withdraw consent anytime (unsubscribe or request deletion).',
        'Object to processing such as marketing communications.'
      ],
      note: 'Contact privacy@auditify.one to exercise these rights.',
    },
    {
      icon: Cookie,
      title: '7) Cookies & Analytics',
      points: [
        'Used for essential functionality and performance analytics.',
        'You can control/disable cookies in your browser settings.'
      ],
    },
    {
      icon: Database,
      title: '8) Third-Party Services (Processors)',
      points: [
        'Email delivery (e.g., SendGrid, Mailchimp).',
        'Analytics (e.g., Google Analytics, PostHog).',
        'They process data only on our instructions.'
      ],
    },
    {
      icon: Globe,
      title: '9) International Transfers',
      points: [
        'Data may be processed outside your country by global providers.',
        'Safeguards (e.g., GDPR SCCs) are used where required.'
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1">
        <section className="section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center section-header-spacing animate-fade-in">
              <h1 className="text-section-title font-heading text-foreground mb-4">
                Privacy Policy <span className="text-primary">– Auditify.One</span>
              </h1>

              <div className="flex items-center justify-center gap-4">
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
                  Last updated: September 2025
                </div>

                <a
                  href="/"
                  className="text-sm font-medium text-primary hover:opacity-90 transition-opacity"
                  aria-label="Back to home"
                >
                  ← Back to Home
                </a>
              </div>
            </div>

            {/* Intro */}
            <Card className="p-6 md:p-8 max-w-4xl mx-auto mb-8 bg-gradient-subtle border-primary/10 animate-fade-in">
              <p className="text-gray leading-relaxed">
                Auditify.One (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal
                data. This policy explains how we collect, use, and safeguard your information when you visit our
                website or sign up for our waitlist.
              </p>
            </Card>

            {/* Grid of sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-tight">
              {sections.map((s, i) => (
                <Card
                  key={s.title}
                  className="p-7 h-full border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 card-hover animate-scale-in"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-5 bg-primary/10 rounded-2xl">
                    <s.icon strokeWidth={2.2} className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-feature-title text-foreground mb-3">{s.title}</h3>

                  <ul className="space-y-2.5 text-gray leading-relaxed list-disc pl-5">
                    {s.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>

                  {s.note && (
                    <p className="mt-4 text-sm text-gray/90">{s.note}</p>
                  )}
                </Card>
              ))}
            </div>

            {/* Contact & Changes */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-gap-tight mt-8">
              <Card className="p-7 h-full border-border animate-fade-in">
                <div className="flex items-center w-12 h-12 mb-5 bg-primary/10 rounded-2xl justify-center">
                  <ShieldCheck strokeWidth={2.2} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-feature-title text-foreground mb-3">10) Changes to This Policy</h3>
                <p className="text-gray leading-relaxed">
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised
                  “Last updated” date.
                </p>
              </Card>

              <Card className="p-7 h-full border-border animate-fade-in" style={{ animationDelay: '120ms' }}>
                <div className="flex items-center w-12 h-12 mb-5 bg-primary/10 rounded-2xl justify-center">
                  <Mail strokeWidth={2.2} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-feature-title text-foreground mb-3">11) Contact Us</h3>
                <p className="text-gray leading-relaxed">
                  For questions about this Privacy Policy or to exercise your rights:
                </p>
                <ul className="mt-3 space-y-1.5 text-gray leading-relaxed list-disc pl-5">
                  <li>📧 <strong>auditify.one@gmail.com</strong></li>
                  <li>🌐 <strong>www.auditify.one</strong></li>
                </ul>
              </Card>
            </div>

            {/* Footer chip */}
            <div className="text-center mt-12">
              <div className="inline-flex items-center justify-center px-6 py-3 bg-primary/10 rounded-full text-primary font-medium">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Your data. Your control.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
