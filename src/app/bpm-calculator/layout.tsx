import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BPM Calculator - Bereken uw BPM kosten | BPM Taxatie Utrecht',
  description:
    'Bereken snel een indicatie van de BPM-kosten voor uw geïmporteerde voertuig. Ontdek hoeveel u kunt besparen met een professioneel taxatierapport van BPM Taxatie Utrecht.',
  keywords: [
    'BPM calculator',
    'BPM berekenen',
    'auto importeren BPM',
    'BPM kosten berekenen',
    'forfaitaire afschrijvingstabel',
    'BPM taxatie Utrecht',
    'BPM besparen',
  ],
  openGraph: {
    title: 'BPM Calculator - Bereken uw BPM kosten',
    description:
      'Bereken snel een indicatie van de BPM-kosten voor uw geïmporteerde voertuig en ontdek hoeveel u kunt besparen.',
    url: 'https://bpmtaxatieutrecht.nl/bpm-calculator',
    siteName: 'BPM Taxatie Utrecht',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function BpmCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
