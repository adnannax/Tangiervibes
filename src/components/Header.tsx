'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Accueil', href: '/homepage' },
  { label: 'À Propos', href: '/homepage#about' },
  { label: 'Services', href: '/homepage#services' },
  { label: 'Carrières', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href.includes('#')) return pathname === href.split('#')[0];
    return pathname === href;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2 group">
            <AppLogo
              size={36}
              onClick={() => {}}
              className="transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-lg text-primary tracking-tight hidden sm:block">
              Tingis Groupe
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href)
                    ? 'text-primary active' :'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Postuler
              <Icon name="ArrowRightIcon" size={16} />
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <Icon name={mobileOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl flex flex-col pt-20 px-6 pb-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false);
          }}
        >
          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-4 text-lg font-semibold border-b border-border transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-4 font-semibold text-base hover:bg-primary/90 transition-colors"
              style={{ borderRadius: 'var(--radius)' }}
            >
              Postuler Maintenant
              <Icon name="ArrowRightIcon" size={18} />
            </Link>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={14} className="text-accent" />
                <span>0661.660.830</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="ClockIcon" size={14} className="text-accent" />
                <span>Ouvert 09:00 – 19:00, tous les jours</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}