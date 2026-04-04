'use client';

import {
  ClipboardCheck,
  FileText,
  Calendar,
  Euro,
  ArrowRight,
  Clock,
  Plus,
  Car,
  UserPlus,
} from 'lucide-react';

const stats = [
  { label: 'Taxaties Vandaag', value: '3', icon: ClipboardCheck, color: '#1e3a5f' },
  { label: 'Openstaande Aanvragen', value: '7', icon: FileText, color: '#f97316' },
  { label: 'Afspraken Vandaag', value: '4', icon: Calendar, color: '#8b5cf6' },
  { label: 'Omzet Maand', value: '\u20ac4.470', icon: Euro, color: '#10b981' },
];

const recentActivity = [
  { id: 1, text: 'Nieuwe aanvraag van Jan de Vries - BMW 320d Touring', time: '10 min geleden', type: 'aanvraag' },
  { id: 2, text: 'Taxatierapport gegenereerd voor Mercedes C220d - Fatima El Amrani', time: '45 min geleden', type: 'rapport' },
  { id: 3, text: 'Inspectie voltooid - Audi A4 Avant van Pieter Bakker', time: '1 uur geleden', type: 'inspectie' },
  { id: 4, text: 'Afspraak bevestigd - Donderdag 10:00 met Karin Jansen', time: '2 uur geleden', type: 'afspraak' },
  { id: 5, text: 'Nieuwe klant aangemeld: Van der Berg Automotive B.V.', time: '3 uur geleden', type: 'klant' },
];

const quickActions = [
  { label: 'Nieuwe Aanvraag', href: '/dashboard/aanvragen/nieuw', icon: Plus, color: '#f97316' },
  { label: 'Voertuig Zoeken', href: '/dashboard/voertuigen', icon: Car, color: '#1e3a5f' },
  { label: 'Klant Toevoegen', href: '/dashboard/klanten', icon: UserPlus, color: '#8b5cf6' },
  { label: 'Agenda Bekijken', href: '/dashboard/agenda', icon: Calendar, color: '#10b981' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overzicht</h1>
        <p className="text-gray-500 mt-1">Welkom terug. Hier is een samenvatting van vandaag.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1" style={{ color: stat.color }}>{stat.value}</p>
                </div>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.color + '15' }}>
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recente Activiteit</h2>
            <button className="text-sm font-medium flex items-center gap-1 hover:underline" style={{ color: '#f97316' }}>
              Alles bekijken <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {recentActivity.map((item) => (
              <div key={item.id} className="px-5 py-3.5 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Snelle Acties</h2>
          </div>
          <div className="p-4 space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: action.color + '15' }}>
                    <Icon className="w-5 h-5" style={{ color: action.color }} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
