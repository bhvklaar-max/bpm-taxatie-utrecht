import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BT</span>
              </div>
              <div>
                <span className="font-bold text-lg block">BPM Taxatie</span>
                <span className="text-orange-400 text-xs font-semibold block">Utrecht</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Uw erkende en onafhankelijke taxateur voor BPM taxatierapporten.
              Snel, betrouwbaar en scherp geprijsd. Gevestigd in Utrecht, actief door heel Nederland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Snelle Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/hoe-werkt-het', label: 'Hoe Werkt Het' },
                { href: '/tarieven', label: 'Tarieven' },
                { href: '/over-ons', label: 'Over Ons' },
                { href: '/bpm-calculator', label: 'BPM Calculator' },
                { href: '/veelgestelde-vragen', label: 'Veelgestelde Vragen' },
                { href: '/blog', label: 'Blog' },
                { href: '/afspraak-maken', label: 'Afspraak Maken' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Onze Diensten</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>BPM Taxatie Personenauto&apos;s</li>
              <li>BPM Taxatie Motoren</li>
              <li>BPM Taxatie Campers</li>
              <li>BPM Taxatie Oldtimers</li>
              <li>BPM Taxatie Youngtimers</li>
              <li>BPM Taxatie Bedrijfsvoertuigen</li>
              <li>BPM Tegenbewijs Taxatie</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span>Industrieweg 12<br />3542 AD Utrecht</span>
              </li>
              <li>
                <a href="tel:+31301234567" className="flex items-center gap-3 text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                  030 - 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@bpmtaxatieutrecht.nl" className="flex items-center gap-3 text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                  info@bpmtaxatieutrecht.nl
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <span>Ma - Vr: 08:00 - 18:00<br />Za: 09:00 - 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 BPM Taxatie Utrecht. Alle rechten voorbehouden. KvK: 12345678
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">Privacybeleid</Link>
            <Link href="/voorwaarden" className="hover:text-orange-400 transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
