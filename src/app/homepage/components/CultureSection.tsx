'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

// BENTO AUDIT — 6 gallery photos
// Desktop grid-cols-3:
// Row 1: [col-1: Photo1] [col-2: Photo2] [col-3: Photo3]
// Row 2: [col-1: Photo4] [col-2: Photo5] [col-3: Photo6]
// Placed 6/6 ✓

const galleryPhotos = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_155853302-1768554122352.png",
  alt: 'Agents de centre d\'appels travaillant dans un bureau lumineux, postes modernes, ambiance professionnelle dynamique',
  label: 'Nos équipes'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_151d82005-1772095647243.png",
  alt: 'Réunion d\'équipe dans une salle de conférence moderne, professionnels en discussion autour d\'une table',
  label: 'Formation'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_13092c9c5-1772430673726.png",
  alt: 'Espace de travail open space avec rangées de bureaux, éclairage naturel, environnement de call center moderne',
  label: 'Nos locaux'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11011c88f-1769181008553.png",
  alt: 'Présentation professionnelle en entreprise, personne debout devant un écran dans une salle lumineuse',
  label: 'Coaching'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa16ab54-1775680453490.png",
  alt: 'Groupe de collègues souriants en pause, ambiance conviviale dans un bureau moderne',
  label: 'Ambiance'
},
{
  src: "https://images.unsplash.com/photo-1631246846195-aae614aaac3d",
  alt: 'Couloir de bureau moderne avec grandes fenêtres, lumière naturelle, architecture contemporaine',
  label: 'Infrastructure'
}];


const perks = [
{ icon: 'AcademicCapIcon', text: 'Formation continue assurée' },
{ icon: 'BriefcaseIcon', text: 'CDI & CDD disponibles' },
{ icon: 'ClockIcon', text: 'Horaires flexibles' },
{ icon: 'TrophyIcon', text: 'Primes de performance' }];


export default function CultureSection() {
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
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="culture"
      className="py-20 md:py-28 bg-background relative z-10 border-b border-border"
      aria-labelledby="culture-heading">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className="animate-on-scroll opacity-100 text-center mb-14"
          style={{ animation: 'animationIn 0.8s ease-out 0.1s forwards' }}>
          
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            Vie chez Tingis
          </div>
          <h2
            id="culture-heading"
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight uppercase">
            
            Pourquoi nous
            <br />
            <span className="font-light text-muted-foreground">rejoindre ?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Gallery */}
          <div
            className="animate-on-scroll opacity-100"
            style={{ animation: 'animationIn 0.8s ease-out 0.2s forwards' }}>
            
            <div className="grid grid-cols-3 gap-2">
              {galleryPhotos.map((photo) =>
              <div
                key={photo.label}
                className="gallery-item relative overflow-hidden aspect-square group cursor-pointer"
                style={{ borderRadius: 'var(--radius)' }}>
                
                  <AppImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 20vw" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 text-white font-mono text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Perks + Social */}
          <div className="flex flex-col justify-between h-full gap-8">
            <div
              className="animate-on-scroll opacity-100"
              style={{ animation: 'animationIn 0.8s ease-out 0.3s forwards' }}>
              
              <p className="text-muted-foreground leading-relaxed text-base mb-8">
                Chez Tingis Groupe, nous créons un environnement de travail
                stimulant où chaque collaborateur peut développer ses
                compétences linguistiques et professionnelles. Rejoignez plus
                de 600 agents qui font de la communication leur métier.
              </p>

              <div className="space-y-4">
                {perks.map((perk, i) =>
                <div
                  key={perk.text}
                  className="flex items-center gap-4 p-4 bg-secondary border border-border hover:border-accent/40 transition-colors"
                  style={{
                    borderRadius: 'var(--radius)',
                    animationDelay: `${0.3 + i * 0.08}s`
                  }}>
                  
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon
                      name={perk.icon as Parameters<typeof Icon>[0]['name']}
                      size={18}
                      className="text-primary" />
                    
                    </div>
                    <span className="font-medium text-foreground text-sm">
                      {perk.text}
                    </span>
                    <Icon
                    name="CheckCircleIcon"
                    size={18}
                    className="text-accent ml-auto flex-shrink-0"
                    variant="solid" />
                  
                  </div>
                )}
              </div>
            </div>

            {/* Social media callout */}
            <div
              className="animate-on-scroll opacity-100 p-6 bg-primary text-primary-foreground"
              style={{
                borderRadius: 'var(--radius)',
                animation: 'animationIn 0.8s ease-out 0.5s forwards'
              }}>
              
              <div className="font-mono text-xs uppercase tracking-widest text-primary-foreground/60 mb-2">
                Suivez notre culture
              </div>
              <p className="font-semibold text-base mb-4">
                Découvrez la vie chez Tingis sur nos réseaux sociaux
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com/TingisGroupeCentreDappel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}>
                  
                  <Icon name="GlobeAltIcon" size={14} />
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}>
                  
                  <Icon name="CameraIcon" size={14} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}