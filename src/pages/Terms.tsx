import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import {
  FileText,
  ShieldCheck,
  UserRound,
  Scale,
  Gavel,
  AlertTriangle,
  BadgeCheck,
  Handshake,
  Layers,
  Mail
} from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: '1) Acceptance of Terms',
      points: [
        'By accessing or using Auditify.One (“we”, “our”, “us”, or “the Platform”), you agree to be bound by these Terms of Service.',
        'If you do not agree, you must not access or use the Platform.'
      ]
    },
    {
      icon: UserRound,
      title: '2) Eligibility',
      points: [
        'You must be at least 18 years old and have the legal capacity to enter into this agreement.',
        'If you are using the platform on behalf of an organization, you represent that you have authority to bind that organization.'
      ]
    },
    {
      icon: Layers,
      title: '3) Services Provided',
      points: [
        'Auditify.One provides an AI-powered compliance automation platform to analyze documents, generate audit-ready content, and track compliance progress.',
        'Features may change, be enhanced, or be discontinued at any time.'
      ]
    },
    {
      icon: ShieldCheck,
      title: '4) User Accounts',
      points: [
        'You are responsible for maintaining the confidentiality of your credentials and any activity under your account.',
        'You must notify support@auditify.one of any unauthorized use.'
      ]
    },
    {
      icon: BadgeCheck,
      title: '5) Acceptable Use',
      points: [
        'You agree not to use the Platform for unlawful, harmful, or fraudulent purposes.',
        'Do not upload or share content that infringes on intellectual property rights or violates applicable laws.',
        'Do not attempt to reverse-engineer, hack, or interfere with the Platform’s security or functionality.'
      ]
    },
    {
      icon: AlertTriangle,
      title: '6) Beta Features',
      points: [
        'Some features may be provided in beta mode and are offered “as-is”, without warranties.',
        'Feedback you provide may be used to improve the service.',
        'Beta features may be modified or removed at any time.'
      ]
    },
    {
      icon: Handshake,
      title: '7) Data and Privacy',
      points: [
        'Your data is handled in accordance with our Privacy Policy.',
        'By using the Platform, you consent to the collection, use, and storage of your data as described there.'
      ]
    },
    {
      icon: Scale,
      title: '8) Intellectual Property',
      points: [
        'All content, branding, algorithms, and designs of Auditify.One are the exclusive property of Auditify.One and its licensors.',
        'You may not copy, modify, distribute, or exploit any part of the Platform without written consent.'
      ]
    },
    {
      icon: Gavel,
      title: '9) Disclaimers',
      points: [
        'The Platform is provided “as-is” and “as-available”, without warranties of any kind, whether express or implied.',
        'Auditify.One does not guarantee that the Platform will be error-free, secure, or uninterrupted.',
        'You are responsible for validating any output before relying on it for compliance or audits.'
      ]
    },
    {
      icon: ShieldCheck,
      title: '10) Limitation of Liability',
      points: [
        'To the maximum extent permitted by law, Auditify.One is not liable for indirect, incidental, or consequential damages.',
        'Our total liability for any claim shall not exceed the amount paid (if any) by you in the 12 months preceding the claim.'
      ]
    },
    {
      icon: FileText,
      title: '11) Termination',
      points: [
        'We may suspend or terminate your access at any time, without notice, if you violate these Terms.',
        'You may stop using the Platform at any time. Termination will not affect accrued obligations or limitations of liability.'
      ]
    },
    {
      icon: Scale,
      title: '12) Governing Law and Jurisdiction',
      points: [
        'These Terms are governed by the laws of India.',
        'Any disputes shall be subject to the exclusive jurisdiction of the courts in Maharashtra, India.'
      ]
    }
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
                Terms of Service <span className="text-primary">– Auditify.One</span>
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
                Welcome to Auditify.One. By accessing our website, joining our waitlist, or using our platform, you
                acknowledge that you have read, understood, and agree to these Terms of Service. Please review them carefully.
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
                </Card>
              ))}
            </div>

            {/* Contact & Changes */}
            <div className="grid grid-cols-1 md:grid-cols-2 grid-gap-tight mt-8">
              <Card className="p-7 h-full border-border animate-fade-in">
                <div className="flex items-center w-12 h-12 mb-5 bg-primary/10 rounded-2xl justify-center">
                  <FileText strokeWidth={2.2} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-feature-title text-foreground mb-3">13) Changes to These Terms</h3>
                <p className="text-gray leading-relaxed">
                  We may update these Terms periodically. Updates will be posted here with a revised “Last updated” date. Continued use of the platform indicates acceptance of those changes.
                </p>
              </Card>

              <Card className="p-7 h-full border-border animate-fade-in" style={{ animationDelay: '120ms' }}>
                <div className="flex items-center w-12 h-12 mb-5 bg-primary/10 rounded-2xl justify-center">
                  <Mail strokeWidth={2.2} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-feature-title text-foreground mb-3">14) Contact Us</h3>
                <p className="text-gray leading-relaxed">For any questions regarding these Terms:</p>
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
                Use responsibly. Build with trust.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
