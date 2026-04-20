import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactContent from './components/ContactContent';

export default function ContactPage() {
  return (
    <>
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
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}