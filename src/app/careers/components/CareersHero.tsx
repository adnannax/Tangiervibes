'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CareersHero() {
  const ref = useRef<HTMLElement>(null);

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
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-background border-b border-border overflow-hidden z-10"
      aria-labelledby="careers-hero-heading"
    >
      {/* Blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div
            className="animate-on-scroll opacity-100 font-mono text-xs uppercase tracking-widest text-accent mb-4"
            style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}
          >
            Offres d&apos;emploi — Tanger 2026
          </div>
          <h1
            id="careers-hero-heading"
            className="animate-on-scroll opacity-100 text-5xl md:text-7xl font-extrabold text-foreground tracking-tight uppercase leading-[0.9] mb-6"
            style={{ animation: 'animationIn 0.8s ease-out 0.2s forwards' }}
          >
            Rejoignez
            <br />
            <span className="font-light text-muted-foreground">
              l&apos;équipe
            </span>
          </h1>
          <p
            className="animate-on-scroll opacity-100 text-muted-foreground text-lg leading-relaxed mb-8"
            style={{ animation: 'animationIn 0.8s ease-out 0.3s forwards' }}
          >
            24 postes ouverts en ce moment dans nos centres de Tanger.
            Agents bilingues, superviseurs, techniciens — nous recrutons des
            talents motivés qui parlent français, espagnol ou anglais.
          </p>

          <div
            className="animate-on-scroll opacity-100 flex flex-wrap gap-4"
            style={{ animation: 'animationIn 0.8s ease-out 0.4s forwards' }}
          >
            {[
              { icon: 'MapPinIcon', text: 'Tanger, Maroc' },
              { icon: 'LanguageIcon', text: 'FR · ES · EN' },
              { icon: 'BriefcaseIcon', text: 'CDI & CDD' },
              { icon: 'AcademicCapIcon', text: 'Formation incluse' },
            ].map((tag) => (
              <div
                key={tag.text}
                className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <Icon
                  name={tag.icon as Parameters<typeof Icon>[0]['name']}
                  size={14}
                  className="text-accent"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                  {tag.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}