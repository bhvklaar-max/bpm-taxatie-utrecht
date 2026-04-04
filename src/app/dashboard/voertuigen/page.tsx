'use client';

import { useState } from 'react';
import { Search, Database, Car } from 'lucide-react';
import { vehicleData } from '@/lib/vehicleData';

export default function VoertuigenPage() {
  const [search, setSearch] = useState('');

  const filtered = vehicleData.filter(
    (v) =>
      v.make.toLowerCase().includes(search.toLowerCase()) ||
      v.model.toLowerCase().includes(search.toLowerCase()) ||
      v.fuel_type.toLowerCase().includes(search.toLowerCase()) ||
      v.year.toString().includes(search)
  );

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(amount);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Voertuigen Database</h1>
          <p className="text-gray-500 mt-1">Referentiewaarden voor taxaties</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Database className="w-4 h-4" />
          <span>{vehicleData.length} voertuigen</span>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Zoek op merk, model, brandstof of bouwjaar..."
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
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Merk</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Model</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden sm:table-cell">Bouwjaar</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider hidden md:table-cell">Brandstof</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Catalogusprijs</th>
                <th className="text-right px-5 py-3 text-xs font-semibold text-white uppercase tracking-wider">Marktwaarde</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((vehicle, index) => {
                const depreciationPct = Math.round(((vehicle.catalogPrice - vehicle.marketValue) / vehicle.catalogPrice) * 100);
                return (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-md flex items-center justify-center bg-gray-100">
                          <Car className="w-4 h-4 text-gray-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{vehicle.make}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{vehicle.model}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700 hidden sm:table-cell">{vehicle.year}</td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        vehicle.fuel_type.toLowerCase() === 'benzine' ? 'bg-green-100 text-green-800' :
                        vehicle.fuel_type.toLowerCase() === 'diesel' ? 'bg-gray-100 text-gray-800' :
                        vehicle.fuel_type.toLowerCase() === 'elektrisch' ? 'bg-blue-100 text-blue-800' :
                        vehicle.fuel_type.toLowerCase() === 'hybride' ? 'bg-teal-100 text-teal-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {vehicle.fuel_type}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-700 text-right font-medium">
                      {formatCurrency(vehicle.catalogPrice)}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div>
                        <span className="text-sm font-semibold" style={{ color: '#1e3a5f' }}>
                          {formatCurrency(vehicle.marketValue)}
                        </span>
                        <span className="text-xs text-red-500 ml-2">-{depreciationPct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-10 text-center text-gray-400 text-sm">
                    Geen voertuigen gevonden
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-gray-100 text-sm text-gray-500">
          {filtered.length} van {vehicleData.length} voertuigen
        </div>
      </div>
    </div>
  );
}
