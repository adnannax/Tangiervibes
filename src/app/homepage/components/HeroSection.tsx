'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef?.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden z-10"
      aria-label="Bienvenue chez Tingis Groupe"
    >
      {/* Background blob */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1B3A6B 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-0">
          {/* Left: Text */}
          <div className="lg:w-1/2 text-left space-y-8">
            {/* Eyebrow */}
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}
            >
              <div className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2">
                <div
                  className="w-2 h-2 rounded-full bg-accent"
                  style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
                />
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  Tanger, Maroc — Depuis 2005
                </span>
              </div>
            </div>

            {/* Headline */}
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.2s forwards' }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight leading-[0.9] uppercase">
                L&apos;art de la
                <br />
                <span className="text-gradient-primary font-light">
                  Communication
                </span>
              </h1>
            </div>

            {/* Sub */}
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.35s forwards' }}
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Premier centre de contact multilingue du nord du Maroc.
                Rejoignez une équipe de 600+ agents passionnés à Tanger.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="animate-on-scroll opacity-100 flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ animation: 'animationIn 0.8s ease-out 0.45s forwards' }}
            >
              <Link
                href="/careers"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all hover:bg-primary/90 hover:gap-3"
                style={{ borderRadius: 'var(--radius)' }}
              >
                Voir les offres
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <Icon name="PhoneIcon" size={16} />
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Right: Dashboard Card */}
          <div
            className="lg:w-1/2 w-full animate-on-scroll opacity-100 relative"
            style={{ animation: 'animationIn 0.8s ease-out 0.55s forwards' }}
          >
            <div className="relative bg-card border border-border p-6 md:p-8 shadow-2xl">
              {/* Tag */}
              <div className="absolute -top-3 right-6 bg-accent border border-accent/30 px-3 py-1 text-accent-foreground text-xs font-mono uppercase tracking-wider z-20">
                Centre Actif
              </div>

              {/* Header row */}
              <div className="flex justify-between items-start border-b border-border pb-5 mb-6">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Postes disponibles
                  </div>
                  <div className="text-4xl font-extrabold text-foreground tracking-tight">
                    24 Offres
                  </div>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Icon name="ArrowTrendingUpIcon" size={28} />
                </div>
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div
                  className="p-4 border border-border"
                  style={{ background: 'var(--secondary)' }}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Langues
                  </div>
                  <div className="text-xl font-bold text-foreground">
                    FR · ES · EN
                  </div>
                </div>
                <div
                  className="p-4 border border-border"
                  style={{ background: 'var(--secondary)' }}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Centres actifs
                  </div>
                  <div className="text-xl font-bold text-foreground">3</div>
                </div>
              </div>

              {/* Recent openings */}
              <div className="space-y-3">
                {[
                  {
                    role: 'Agent Bilingue FR/ES',
                    type: 'CDI',
                    color: 'bg-accent/10 text-accent-foreground',
                  },
                  {
                    role: 'Superviseur Relation Client',
                    type: 'CDI',
                    color: 'bg-primary/10 text-primary',
                  },
                  {
                    role: 'Téléconseiller Anglophone',
                    type: 'CDD',
                    color: 'bg-muted text-muted-foreground',
                  },
                ]?.map((job) => (
                  <div
                    key={job?.role}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {job?.role}
                    </span>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 ${job?.color}`}
                    >
                      {job?.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute -z-10 bottom-0 right-0 w-48 h-48 rounded-full opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
                filter: 'blur(50px)',
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}