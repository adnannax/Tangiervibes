'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CareersCTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('animate');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-primary relative z-10 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                Rejoindre l&apos;équipe
              </div>
              <h2
                id="cta-heading"
                className="text-4xl md:text-6xl font-extrabold text-primary-foreground tracking-tight uppercase leading-[0.9]"
              >
                Votre carrière
                <br />
                <span className="font-light opacity-70">commence ici</span>
              </h2>
            </div>
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.25s forwards' }}
            >
              <p className="text-primary-foreground/70 text-base leading-relaxed max-w-md">
                24 postes ouverts en ce moment. Aucune expérience requise pour
                certains postes — nous formons nos talents. Parlez français,
                espagnol ou anglais ? Nous avons besoin de vous.
              </p>
            </div>
          </div>

          {/* Right */}
          <div
            className="animate-on-scroll opacity-100 flex flex-col sm:flex-row gap-4 lg:justify-end"
            style={{ animation: 'animationIn 0.8s ease-out 0.35s forwards' }}
          >
            <Link
              href="/careers"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-accent/90 transition-all hover:gap-3"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Voir toutes les offres
              <Icon
                name="ArrowRightIcon"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <Icon name="EnvelopeIcon" size={16} />
              Candidature spontanée
            </Link>
          </div>
        </div>

        {/* Bottom info strip */}
        <div className="mt-14 pt-8 border-t border-primary-foreground/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: 'MapPinIcon',
              text: 'Tanger, Maroc',
              sub: 'Rue Caid Ahmed Riffi',
            },
            {
              icon: 'PhoneIcon',
              text: '0661.660.830',
              sub: 'M. Chetti — Recrutement',
            },
            {
              icon: 'EnvelopeIcon',
              text: 'ressources.humaines@tingisgroupe.com',
              sub: 'Réponse sous 48h',
            },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <Icon
                name={item.icon as Parameters<typeof Icon>[0]['name']}
                size={18}
                className="text-accent mt-0.5 flex-shrink-0"
              />
              <div>
                <div className="text-primary-foreground font-medium text-sm">
                  {item.text}
                </div>
                <div className="text-primary-foreground/50 text-xs font-mono">
                  {item.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}