'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Plus, Eye, Edit, Trash2, Filter } from 'lucide-react';

interface AppraisalRow {
  id: string;
  client: string;
  vehicle: string;
  status: 'aangevraagd' | 'ingepland' | 'inspectie' | 'rapport' | 'afgerond';
  date: string;
}

const statusConfig: Record<string, { label: string; bg: string; text: string }> = {
  aangevraagd: { label: 'Aangevraagd', bg: 'bg-yellow-100', text: 'text-yellow-800' },
  ingepland: { label: 'Ingepland', bg: 'bg-blue-100', text: 'text-blue-800' },
  inspectie: { label: 'Inspectie', bg: 'bg-purple-100', text: 'text-purple-800' },
  rapport: { label: 'Rapport', bg: 'bg-orange-100', text: 'text-orange-800' },
  afgerond: { label: 'Afgerond', bg: 'bg-green-100', text: 'text-green-800' },
};

const placeholderData: AppraisalRow[] = [
  { id: 'TAX-2026-001', client: 'Jan de Vries', vehicle: 'BMW 320d Touring (2021)', status: 'aangevraagd', date: '04-04-2026' },
  { id: 'TAX-2026-002', client: 'Fatima El Amrani', vehicle: 'Mercedes C220d Estate (2022)', status: 'ingepland', date: '03-04-2026' },
  { id: 'TAX-2026-003', client: 'Pieter Bakker', vehicle: 'Audi A4 Avant 35 TFSI (2021)', status: 'inspectie', date: '03-04-2026' },
  { id: 'TAX-2026-004', client: 'Karin Jansen', vehicle: 'BMW X3 xDrive20i (2022)', status: 'rapport', date: '02-04-2026' },
  { id: 'TAX-2026-005', client: 'Van der Berg Automotive B.V.', vehicle: 'Volvo XC60 T6 Recharge (2023)', status: 'afgerond', date: '01-04-2026' },
  { id: 'TAX-2026-006', client: 'Sophie Vermeer', vehicle: 'Volkswagen Tiguan 1.5 TSI (2022)', status: 'aangevraagd', date: '04-04-2026' },
  { id: 'TAX-2026-007', client: 'Mohammed Ait Said', vehicle: 'Mercedes GLC 300e (2023)', status: 'ingepland', date: '02-04-2026' },
  { id: 'TAX-2026-008', client: 'Hendrik Smit', vehicle: 'Audi Q5 55 TFSIe (2023)', status: 'afgerond', date: '31-03-2026' },
];

export default function AanvragenPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('alle');

  const filtered = placeholderData.filter((row) => {
    const matchesSearch =
      row.client.toLowerCase().includes(search.toLowerCase()) ||
      row.vehicle.toLowerCase().includes(search.toLowerCase()) ||
      row.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'alle' || row.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Aanvragen</h1>
          <p className="text-gray-500 mt-1">Beheer alle taxatieaanvragen</p>
        </div>
        <Link
          href="/dashboard/aanvragen/nieuw"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#f97316' }}
        >
          <Plus className="w-4 h-4" />
          Nieuwe Aanvraag
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Zoek op klant, voertuig of ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="alle">Alle statussen</option>
              <option value="aangevraagd">Aangevraagd</option>
              <option value="ingepland">Ingepland</option>
              <option value="inspectie">Inspectie</option>
              <option value="rapport">Rapport</option>
              <option value="afgerond">Afgerond</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200" style={{ backgroundColor: '#1e3a5f' }}>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">ID</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Klant</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden md:table-cell">Voertuig</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Status</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden sm:table-cell">Datum</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((row) => {
                const status = statusConfig[row.status];
                return (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-mono font-medium text-gray-900">{row.id}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{row.client}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700 hidden md:table-cell">{row.vehicle}</td>
                    <td className="px-5 py-3.5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-500 hidden sm:table-cell">{row.date}</td>
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
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-gray-400 text-sm">
                    Geen aanvragen gevonden
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 text-sm text-gray-500">
          {filtered.length} van {placeholderData.length} aanvragen
        </div>
      </div>
    </div>
  );
}
