import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import VideoDemo from '@/components/VideoDemo';
import HowItWorks from '@/components/HowItWorks';
import CTAFooter from '@/components/CTAFooter';
import Footer from '@/components/Footer';
import StickyWaitlist from '@/components/StickyWaitlist';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Features />
        <VideoDemo />
        <HowItWorks />
        <CTAFooter />
      </main>
      <Footer />
      <StickyWaitlist />
    </div>
  );
};

export default Index;
