'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const contactDetails = [
  {
    icon: 'MapPinIcon',
    title: 'Adresse',
    lines: [
      'Rdc numéro 21, Rue Caid Ahmed Riffi',
      'Tanger 90000, Maroc',
      'Villa en verre — rond-point Consulat Espagnol',
    ],
  },
  {
    icon: 'PhoneIcon',
    title: 'Téléphone',
    lines: ['+212 5393-33361', '0661.660.830 (M. Chetti — RH)'],
  },
  {
    icon: 'EnvelopeIcon',
    title: 'Email',
    lines: ['ressources.humaines@tingisgroupe.com'],
  },
  {
    icon: 'ClockIcon',
    title: 'Horaires',
    lines: ['Lundi – Dimanche', '09:00 – 19:00'],
  },
];

export default function ContactContent() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      className="py-16 md:py-24 bg-background relative z-10"
      aria-labelledby="contact-form-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Form */}
          <div>
            <h2
              id="contact-form-heading"
              className="text-3xl font-extrabold text-foreground tracking-tight uppercase mb-2"
            >
              Envoyez-nous
              <br />
              <span className="font-light text-muted-foreground">
                un message
              </span>
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Pour toute question sur nos services, recrutement ou partenariat.
            </p>

            {submitted ? (
              <div
                className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 bg-secondary border border-border"
                style={{ borderRadius: 'var(--radius)' }}
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center mb-6">
                  <Icon name="CheckCircleIcon" size={32} className="text-accent" variant="solid" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Message reçu !
                </h3>
                <p className="text-muted-foreground">
                  Nous vous répondrons sous 24 heures ouvrées.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-6 text-sm font-semibold text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Votre nom complet"
                    aria-label="Nom complet"
                  />
                </div>

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
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="form-input bg-transparent"
                    style={{ cursor: 'pointer' }}
                    aria-label="Sujet du message"
                  >
                    <option value="" disabled>
                      Sélectionner un sujet...
                    </option>
                    <option value="recrutement">Recrutement / Candidature</option>
                    <option value="services">Renseignements services</option>
                    <option value="partenariat">Partenariat commercial</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Décrivez votre demande..."
                    aria-label="Votre message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  {loading ? (
                    <>
                      <Icon name="ArrowPathIcon" size={18} className="animate-spin" />
                      Envoi...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Icon name="PaperAirplaneIcon" size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Map + Details */}
          <div className="flex flex-col gap-8">
            {/* Google Maps embed */}
            <div
              className="overflow-hidden border border-border w-full"
              style={{ borderRadius: 'var(--radius)', height: '320px' }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.5!2d-5.8160!3d35.7670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzAxLjIiTiA1wrA0OCc1Ny42Ilc!5e0!3m2!1sfr!2sma!4v1713600000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Tingis Groupe — Tanger, Maroc"
                aria-label="Carte Google Maps montrant l'emplacement de Tingis Groupe à Tanger"
              />
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="p-5 bg-secondary border border-border hover:border-accent/40 transition-colors"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon
                      name={detail.icon as Parameters<typeof Icon>[0]['name']}
                      size={16}
                      className="text-accent"
                    />
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {detail.title}
                    </span>
                  </div>
                  {detail.lines.map((line, i) => (
                    <div
                      key={i}
                      className={`text-sm ${i === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
                    >
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div
              className="p-6 bg-primary/5 border border-primary/20"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Réseaux sociaux
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://facebook.com/TingisGroupeCentreDappel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="GlobeAltIcon" size={18} className="text-primary" />
                  <span>facebook.com/TingisGroupeCentreDappel</span>
                  <Icon
                    name="ArrowTopRightOnSquareIcon"
                    size={14}
                    className="text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                >
                  <Icon name="CameraIcon" size={18} className="text-primary" />
                  <span>@tingisgroupe</span>
                  <Icon
                    name="ArrowTopRightOnSquareIcon"
                    size={14}
                    className="text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}