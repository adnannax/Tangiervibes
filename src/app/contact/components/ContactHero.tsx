import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactHero() {
  return (
    <section
      className="relative pt-32 pb-14 md:pt-44 md:pb-16 bg-background border-b border-border overflow-hidden z-10"
      aria-labelledby="contact-hero-heading"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #1B3A6B 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Nous contacter
          </div>
          <h1
            id="contact-hero-heading"
            className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight uppercase leading-[0.9] mb-6"
          >
            Parlons
            <br />
            <span className="font-light text-muted-foreground">ensemble</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Notre équipe RH est disponible tous les jours de 09h00 à 19h00.
            Rendez-nous visite dans notre villa en verre emblématique à Tanger.
          </p>

          {/* Quick info pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { icon: 'ClockIcon', text: 'Ouvert 09:00–19:00' },
              { icon: 'PhoneIcon', text: '0661.660.830' },
              { icon: 'MapPinIcon', text: 'Tanger 90000' },
            ].map((item) => (
              <div
                key={item.text}
                className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <Icon
                  name={item.icon as Parameters<typeof Icon>[0]['name']}
                  size={14}
                  className="text-accent"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-foreground">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}