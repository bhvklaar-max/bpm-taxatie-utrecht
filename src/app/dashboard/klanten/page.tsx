'use client';

import { useState } from 'react';
import { Search, Plus, Eye, Edit, Trash2, UserPlus } from 'lucide-react';

interface ClientRow {
  id: string;
  naam: string;
  email: string;
  telefoon: string;
  type: 'particulier' | 'zakelijk';
  aantalTaxaties: number;
}

const placeholderClients: ClientRow[] = [
  { id: '1', naam: 'Jan de Vries', email: 'jan.devries@email.nl', telefoon: '06-12345678', type: 'particulier', aantalTaxaties: 2 },
  { id: '2', naam: 'Fatima El Amrani', email: 'f.elamrani@email.nl', telefoon: '06-23456789', type: 'particulier', aantalTaxaties: 1 },
  { id: '3', naam: 'Pieter Bakker', email: 'p.bakker@bedrijf.nl', telefoon: '06-34567890', type: 'zakelijk', aantalTaxaties: 5 },
  { id: '4', naam: 'Karin Jansen', email: 'karin.jansen@email.nl', telefoon: '06-45678901', type: 'particulier', aantalTaxaties: 1 },
  { id: '5', naam: 'Van der Berg Automotive B.V.', email: 'info@vdbergauto.nl', telefoon: '030-2345678', type: 'zakelijk', aantalTaxaties: 12 },
  { id: '6', naam: 'Sophie Vermeer', email: 's.vermeer@email.nl', telefoon: '06-56789012', type: 'particulier', aantalTaxaties: 3 },
];

export default function KlantenPage() {
  const [search, setSearch] = useState('');

  const filtered = placeholderClients.filter(
    (c) =>
      c.naam.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.telefoon.includes(search)
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Klanten</h1>
          <p className="text-gray-500 mt-1">Beheer uw klantenbestand</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#f97316' }}
        >
          <UserPlus className="w-4 h-4" />
          Nieuwe Klant
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Zoek op naam, email of telefoon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200" style={{ backgroundColor: '#1e3a5f' }}>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Naam</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden md:table-cell">Email</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden sm:table-cell">Telefoon</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Type</th>
                <th className="text-center px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden sm:table-cell">Taxaties</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ backgroundColor: client.type === 'zakelijk' ? '#1e3a5f' : '#f97316' }}
                      >
                        {client.naam.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{client.naam}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-gray-600 hidden md:table-cell">{client.email}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-600 hidden sm:table-cell">{client.telefoon}</td>
                  <td className="px-5 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      client.type === 'zakelijk' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {client.type === 'zakelijk' ? 'Zakelijk' : 'Particulier'}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-center text-sm font-medium text-gray-700 hidden sm:table-cell">{client.aantalTaxaties}</td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors" title="Bekijken">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-orange-600 transition-colors" title="Bewerken">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-red-600 transition-colors" title="Verwijderen">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-gray-400 text-sm">
                    Geen klanten gevonden
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 text-sm text-gray-500">
          {filtered.length} van {placeholderClients.length} klanten
        </div>
      </div>
    </div>
  );
}
