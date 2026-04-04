'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hoe-werkt-het', label: 'Hoe Werkt Het' },
  { href: '/tarieven', label: 'Tarieven' },
  { href: '/over-ons', label: 'Over Ons' },
  { href: '/bpm-calculator', label: 'BPM Calculator' },
  { href: '/veelgestelde-vragen', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BT</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-primary font-bold text-lg leading-tight block">BPM Taxatie</span>
              <span className="text-accent text-xs font-semibold -mt-1 block">Utrecht</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+31301234567"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark"
            >
              <Phone className="w-4 h-4" />
              030 - 123 4567
            </a>
            <Link
              href="/afspraak-maken"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Afspraak Maken
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-primary"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t mt-4 space-y-3">
              <a
                href="tel:+31301234567"
                className="flex items-center gap-2 px-4 py-3 text-primary font-medium"
              >
                <Phone className="w-5 h-5" />
                030 - 123 4567
              </a>
              <Link
                href="/afspraak-maken"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-lg font-semibold"
              >
                Afspraak Maken
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
