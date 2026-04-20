'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const values = [
{
  icon: 'StarIcon',
  title: 'Excellence',
  desc: 'Nous visons les plus hauts standards de qualité dans chaque interaction client.'
},
{
  icon: 'UsersIcon',
  title: 'Équipe',
  desc: 'Un environnement de travail bienveillant où chaque talent est valorisé.'
},
{
  icon: 'GlobeAltIcon',
  title: 'Multilingue',
  desc: 'Français, Espagnol, Anglais — nous parlons la langue de vos clients.'
},
{
  icon: 'ChartBarIcon',
  title: 'Croissance',
  desc: 'Des parcours d\'évolution clairs pour chaque collaborateur.'
}];


export default function AboutSection() {
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
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 md:py-28 bg-background relative z-10 border-b border-border"
      aria-labelledby="about-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div
            className="animate-on-scroll opacity-100 relative"
            style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}>
            
            <div className="relative overflow-hidden aspect-[4/3]">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1487bc0f5-1776675934601.png"
                alt="Équipe Tingis Groupe dans un bureau moderne à Tanger, Maroc, ambiance professionnelle lumineuse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              {/* Overlay scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 -right-5 bg-accent text-accent-foreground px-6 py-4 shadow-xl"
              style={{ borderRadius: 'var(--radius)' }}>
              
              <div className="font-mono text-xs uppercase tracking-widest mb-0.5">
                Fondé
              </div>
              <div className="text-3xl font-extrabold">2005</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.2s forwards' }}>
              
              <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                Notre Histoire
              </div>
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight uppercase">
                
                Premier centre
                <br />
                <span className="font-light text-muted-foreground">
                  du nord Maroc
                </span>
              </h2>
            </div>

            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.3s forwards' }}>
              
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Depuis 2005, Tingis Groupe est le pionnier des centres de
                contact multilingues dans le nord du Maroc. Installés dans
                une villa en verre emblématique au rond-point entre le
                Consulat Espagnol et l&apos;Hôpital Mohamed V de Tanger,
                nous opérons 600 postes actifs répartis sur 3 centres.
              </p>
            </div>

            {/* Values grid */}
            <div
              className="animate-on-scroll opacity-100 grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{ animation: 'animationIn 0.8s ease-out 0.4s forwards' }}>
              
              {values.map((v) =>
              <div
                key={v.title}
                className="flex items-start gap-3 p-4 bg-secondary border border-border hover:border-accent/50 transition-colors group"
                style={{ borderRadius: 'var(--radius)' }}>
                
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon
                    name={v.icon as Parameters<typeof Icon>[0]['name']}
                    size={16}
                    className="text-primary" />
                  
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm mb-1">
                      {v.title}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {v.desc}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}