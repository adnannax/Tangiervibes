'use client';

import React, { useState, useEffect, useRef } from 'react';

import Icon from '@/components/ui/AppIcon';

interface Job {
  id: string;
  title: string;
  department: string;
  type: 'CDI' | 'CDD';
  language: string;
  level: string;
  description: string;
  tags: string[];
}

const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Agent Bilingue Français / Espagnol',
    department: 'Relation Client',
    type: 'CDI',
    language: 'FR · ES',
    level: 'Débutant accepté',
    description:
      'Gérez les appels entrants de clients francophones et hispanophones. Formation complète assurée. Aucune expérience préalable requise.',
    tags: ['Inbound', 'Formation', 'Tanger'],
  },
  {
    id: 'j2',
    title: 'Téléconseiller Anglophone',
    department: 'Support International',
    type: 'CDI',
    language: 'EN',
    level: 'Intermédiaire',
    description:
      'Support client pour des marques internationales anglophones. Bonne maîtrise de l\'anglais écrit et oral indispensable.',
    tags: ['Anglais', 'International', 'CDI'],
  },
  {
    id: 'j3',
    title: 'Superviseur Centre d\'Appels',
    department: 'Management',
    type: 'CDI',
    language: 'FR · ES',
    level: 'Expérimenté',
    description:
      'Encadrez une équipe de 15 à 20 agents. Suivi des KPI, coaching quotidien, reporting à la direction. 2 ans d\'expérience minimum.',
    tags: ['Management', 'KPI', 'Leadership'],
  },
  {
    id: 'j4',
    title: 'Agent Support Technique Niveau 1',
    department: 'Tech Support',
    type: 'CDD',
    language: 'FR',
    level: 'Débutant accepté',
    description:
      'Assistance téléphonique pour les pannes et incidents techniques. Formation technique fournie. Profil curieux et patient recherché.',
    tags: ['Technique', 'Formation', 'CDD'],
  },
  {
    id: 'j5',
    title: 'Chargé de Prospection Commerciale',
    department: 'Outbound',
    type: 'CDI',
    language: 'FR · ES',
    level: 'Intermédiaire',
    description:
      'Campagnes d\'appels sortants pour des clients B2B. Aisance commerciale, sens du challenge et goût pour les objectifs.',
    tags: ['Outbound', 'Commercial', 'B2B'],
  },
  {
    id: 'j6',
    title: 'Agent Bilingue Français / Anglais',
    department: 'Relation Client',
    type: 'CDD',
    language: 'FR · EN',
    level: 'Débutant accepté',
    description:
      'Poste mixte inbound/outbound pour des clients francophones et anglophones. Idéal pour les profils souhaitant développer leurs compétences linguistiques.',
    tags: ['Bilingue', 'Inbound', 'Outbound'],
  },
];

const filters = ['Tous', 'CDI', 'CDD', 'FR', 'ES', 'EN'];

export default function JobListings() {
  const [activeFilter, setActiveFilter] = useState('Tous');
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
      { threshold: 0.05 }
    );
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = jobs.filter((job) => {
    if (activeFilter === 'Tous') return true;
    if (activeFilter === 'CDI' || activeFilter === 'CDD')
      return job.type === activeFilter;
    return job.language.includes(activeFilter);
  });

  const typeColor: Record<string, string> = {
    CDI: 'bg-primary/10 text-primary',
    CDD: 'bg-accent/10 text-accent-foreground',
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 bg-secondary/30 border-b border-border relative z-10"
      aria-labelledby="jobs-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div
            className="animate-on-scroll opacity-100"
            style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}
          >
            <h2
              id="jobs-heading"
              className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight uppercase"
            >
              Postes ouverts
            </h2>
            <p className="text-muted-foreground text-sm mt-1 font-mono">
              {filtered.length} offre{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Filter pills */}
          <div
            className="animate-on-scroll opacity-100 flex flex-wrap gap-2"
            style={{ animation: 'animationIn 0.8s ease-out 0.2s forwards' }}
            role="group"
            aria-label="Filtrer par type ou langue"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border transition-all ${
                  activeFilter === f
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'
                }`}
                style={{ borderRadius: 'var(--radius)' }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Job cards */}
        <div className="space-y-4">
          {filtered.map((job, i) => (
            <div
              key={job.id}
              className="animate-on-scroll opacity-100 bg-card border border-border p-5 md:p-6 hover:border-primary/40 hover:shadow-md transition-all group"
              style={{
                borderRadius: 'var(--radius)',
                animation: `animationIn 0.7s ease-out ${0.1 + i * 0.07}s forwards`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Left info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`font-mono text-xs px-2 py-0.5 uppercase tracking-wider ${typeColor[job.type]}`}
                    >
                      {job.type}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {job.language}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      · {job.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary border border-border text-xs text-muted-foreground px-2 py-0.5 font-mono"
                        style={{ borderRadius: 'var(--radius)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Department + CTA */}
                <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-2 flex-shrink-0">
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider hidden md:block">
                    {job.department}
                  </span>
                  <a
                    href="#apply"
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors whitespace-nowrap"
                    style={{ borderRadius: 'var(--radius)' }}
                  >
                    Postuler
                    <Icon name="ArrowRightIcon" size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}