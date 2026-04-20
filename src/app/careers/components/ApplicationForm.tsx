'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: string;
  position: string;
  message: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  language: '',
  position: '',
  message: '',
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submit — connect to backend here
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="apply"
      className="py-20 md:py-28 bg-background relative z-10"
      aria-labelledby="apply-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
                Candidature
              </div>
              <h2
                id="apply-heading"
                className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight uppercase mb-6"
              >
                Postulez
                <br />
                <span className="font-light text-muted-foreground">
                  maintenant
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Envoyez votre candidature directement à notre équipe RH. M.
                Chetti vous contactera sous 48 heures ouvrées pour un premier
                entretien téléphonique.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4 p-6 bg-secondary border border-border" style={{ borderRadius: 'var(--radius)' }}>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Contact recrutement
              </div>
              {[
                { icon: 'UserIcon', label: 'Responsable', value: 'M. Chetti' },
                { icon: 'PhoneIcon', label: 'Téléphone', value: '0661.660.830' },
                {
                  icon: 'EnvelopeIcon',
                  label: 'Email',
                  value: 'ressources.humaines@tingisgroupe.com',
                },
                {
                  icon: 'ClockIcon',
                  label: 'Horaires',
                  value: 'Lun–Dim, 09:00–19:00',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <Icon
                    name={item.icon as Parameters<typeof Icon>[0]['name']}
                    size={16}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 bg-secondary border border-border" style={{ borderRadius: 'var(--radius)' }}>
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="CheckCircleIcon" size={32} className="text-accent" variant="solid" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Candidature envoyée !
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Merci pour votre intérêt. M. Chetti vous contactera sous 48h
                  ouvrées au numéro que vous avez fourni.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-6 text-sm font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  Soumettre une autre candidature
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Votre prénom"
                      aria-label="Prénom"
                    />
                  </div>
                  <div className="relative">
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Votre nom"
                      aria-label="Nom"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="votre@email.com"
                      aria-label="Adresse email"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="+212 6XX XXX XXX"
                      aria-label="Numéro de téléphone"
                    />
                  </div>
                </div>

                {/* Language + Position */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                      Langue principale *
                    </label>
                    <select
                      name="language"
                      value={form.language}
                      onChange={handleChange}
                      required
                      className="form-input bg-transparent"
                      style={{ cursor: 'pointer' }}
                      aria-label="Langue principale"
                    >
                      <option value="" disabled>
                        Sélectionner...
                      </option>
                      <option value="fr">Français</option>
                      <option value="es">Espagnol</option>
                      <option value="en">Anglais</option>
                      <option value="fr-es">Français + Espagnol</option>
                      <option value="fr-en">Français + Anglais</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                      Poste souhaité
                    </label>
                    <select
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      className="form-input bg-transparent"
                      style={{ cursor: 'pointer' }}
                      aria-label="Poste souhaité"
                    >
                      <option value="">Aucun préférence</option>
                      <option value="agent-bilingue">Agent Bilingue FR/ES</option>
                      <option value="teleconseiller-en">Téléconseiller Anglophone</option>
                      <option value="superviseur">Superviseur</option>
                      <option value="tech-support">Support Technique</option>
                      <option value="prospection">Prospection Commerciale</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                    Message / Lettre de motivation
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Parlez-nous de votre motivation, expérience et disponibilité..."
                    aria-label="Message de motivation"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  {loading ? (
                    <>
                      <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma candidature
                      <Icon name="PaperAirplaneIcon" size={18} />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center font-mono">
                  * Champs obligatoires — Vos données sont confidentielles
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}