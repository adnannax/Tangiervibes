import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CultureSection from './components/CultureSection';
import CareersCTA from './components/CareersCTA';

export default function HomepagePage() {
  return (
    <>
      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true">
        <div className="grid-inner">
          <div className="grid-line-v" />
          <div className="grid-line-v hidden md:block" />
          <div className="grid-line-v hidden lg:block" />
          <div className="grid-line-v" />
        </div>
      </div>

      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ServicesSection />
        <CultureSection />
        <CareersCTA />
      </main>
      <Footer />
    </>
  );
}