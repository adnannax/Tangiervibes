'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

// BENTO AUDIT: 4 cards in 2x2 grid
// Row 1: [col-1: Inbound cs-1] [col-2: Outbound cs-1]
// Row 2: [col-1: Multilingual cs-1] [col-2: Tech Support cs-1]
// Placed 4/4 ✓

const services = [
  {
    icon: 'PhoneArrowDownLeftIcon',
    title: 'Centre d\'Appels Entrants',
    desc: 'Gestion de la relation client, support technique, traitement des réclamations et fidélisation. Disponible 7j/7 avec des agents formés à vos produits.',
    tag: 'Inbound',
    color: 'bg-primary/5 border-primary/20',
    tagColor: 'bg-primary/10 text-primary',
  },
  {
    icon: 'PhoneArrowUpRightIcon',
    title: 'Centre d\'Appels Sortants',
    desc: 'Prospection commerciale, enquêtes de satisfaction, relances clients et campagnes de fidélisation ciblées.',
    tag: 'Outbound',
    color: 'bg-accent/5 border-accent/20',
    tagColor: 'bg-accent/10 text-accent-foreground',
  },
  {
    icon: 'LanguageIcon',
    title: 'Support Multilingue',
    desc: 'Équipes dédiées en Français, Espagnol et Anglais. Expertise culturelle pour chaque marché cible — Europe, Afrique du Nord, Amériques.',
    tag: 'FR · ES · EN',
    color: 'bg-secondary border-border',
    tagColor: 'bg-secondary text-muted-foreground',
  },
  {
    icon: 'ComputerDesktopIcon',
    title: 'Support Technique',
    desc: 'Assistance niveau 1 et 2 pour les clients finaux. Diagnostic, résolution et escalade avec des techniciens certifiés.',
    tag: 'Tech Support',
    color: 'bg-card border-border',
    tagColor: 'bg-muted text-muted-foreground',
  },
];

export default function ServicesSection() {
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
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
    );
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 md:py-28 bg-secondary/30 relative z-10 border-b border-border"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-border gap-6">
          <div
            className="animate-on-scroll opacity-100"
            style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}
          >
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
              Nos Services
            </div>
            <h2
              id="services-heading"
              className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight uppercase"
            >
              Ce que nous
              <br />
              <span className="font-light text-muted-foreground">faisons</span>
            </h2>
          </div>
          <p
            className="animate-on-scroll opacity-100 text-muted-foreground max-w-sm text-base leading-relaxed"
            style={{ animation: 'animationIn 0.8s ease-out 0.2s forwards' }}
          >
            Solutions de communication sur mesure pour entreprises de toutes
            tailles — de la startup au grand groupe industriel.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`animate-on-scroll opacity-100 p-6 md:p-8 border ${svc.color} group hover:shadow-md transition-all duration-300`}
              style={{
                borderRadius: 'var(--radius)',
                animation: `animationIn 0.8s ease-out ${0.1 + i * 0.1}s forwards`,
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-card border border-border flex items-center justify-center">
                  <Icon
                    name={svc.icon as Parameters<typeof Icon>[0]['name']}
                    size={22}
                    className="text-primary"
                  />
                </div>
                <span
                  className={`font-mono text-xs uppercase tracking-widest px-3 py-1 ${svc.tagColor}`}
                >
                  {svc.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {svc.desc}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                <span>En savoir plus</span>
                <Icon
                  name="ArrowRightIcon"
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}