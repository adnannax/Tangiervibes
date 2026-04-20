import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-10 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Single Row Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <AppLogo size={28} />
            <span className="font-bold text-base text-primary tracking-tight">
              Tingis Groupe
            </span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link
              href="/homepage"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/homepage#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              À Propos
            </Link>
            <Link
              href="/homepage#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Carrières
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/TingisGroupeCentreDappel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Tingis Groupe"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="GlobeAltIcon" size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Tingis Groupe"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="CameraIcon" size={18} />
            </a>
            <span className="text-xs text-muted-foreground font-mono">
              © 2026 Tingis Groupe
            </span>
          </div>
        </div>

        {/* Bottom micro line */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
          <span>Rdc n°21, Rue Caid Ahmed Riffi, Tanger 90000, Maroc</span>
          <div className="flex items-center gap-4">
            <span>Lun–Dim 09:00–19:00</span>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:ressources.humaines@tingisgroupe.com" className="hover:text-primary transition-colors">
              ressources.humaines@tingisgroupe.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}