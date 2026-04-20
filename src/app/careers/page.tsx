import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersHero from './components/CareersHero';
import JobListings from './components/JobListings';
import ApplicationForm from './components/ApplicationForm';

export default function CareersPage() {
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
        <CareersHero />
        <JobListings />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}