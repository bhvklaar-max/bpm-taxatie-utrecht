'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin } from 'lucide-react';

interface AppointmentBlock {
  id: string;
  client: string;
  vehicle: string;
  day: number; // 0=Mon, 1=Tue, ...5=Sat
  startHour: number;
  duration: number; // in hours
  status: 'gepland' | 'bevestigd' | 'voltooid';
}

const statusColors: Record<string, { bg: string; border: string; text: string }> = {
  gepland: { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-800' },
  bevestigd: { bg: 'bg-blue-50', border: 'border-blue-400', text: 'text-blue-800' },
  voltooid: { bg: 'bg-green-50', border: 'border-green-400', text: 'text-green-800' },
};

const appointments: AppointmentBlock[] = [
  { id: '1', client: 'Jan de Vries', vehicle: 'BMW 320d', day: 0, startHour: 9, duration: 1.5, status: 'bevestigd' },
  { id: '2', client: 'Fatima El Amrani', vehicle: 'Mercedes C220d', day: 1, startHour: 10, duration: 1.5, status: 'gepland' },
  { id: '3', client: 'Pieter Bakker', vehicle: 'Audi A4 Avant', day: 2, startHour: 14, duration: 2, status: 'bevestigd' },
  { id: '4', client: 'Karin Jansen', vehicle: 'BMW X3', day: 3, startHour: 11, duration: 1.5, status: 'gepland' },
  { id: '5', client: 'Sophie Vermeer', vehicle: 'VW Tiguan', day: 4, startHour: 9, duration: 1, status: 'voltooid' },
];

const dayLabels = ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
const dayShortLabels = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'];
const hours = Array.from({ length: 11 }, (_, i) => i + 8); // 08:00 - 18:00

// Generate dates for current week
function getWeekDates(): string[] {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  return Array.from({ length: 6 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'short' });
  });
}

export default function AgendaPage() {
  const [weekOffset, setWeekOffset] = useState(0);
  const weekDates = getWeekDates();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Agenda</h1>
          <p className="text-gray-500 mt-1">Plan en beheer afspraken</p>
        </div>
        <button
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#f97316' }}
        >
          <Plus className="w-4 h-4" />
          Nieuwe Afspraak
        </button>
      </div>

      {/* Week navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setWeekOffset(weekOffset - 1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="text-center">
            <h2 className="font-semibold text-gray-900">
              {weekOffset === 0 ? 'Deze Week' : weekOffset > 0 ? `+${weekOffset} weken` : `${weekOffset} weken`}
            </h2>
            <p className="text-sm text-gray-500">{weekDates[0]} - {weekDates[5]}</p>
          </div>
          <button
            onClick={() => setWeekOffset(weekOffset + 1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Day headers */}
            <div className="grid grid-cols-[80px_repeat(6,1fr)] border-b border-gray-200" style={{ backgroundColor: '#1e3a5f' }}>
              <div className="px-3 py-3 text-xs font-semibold text-white">Tijd</div>
              {dayLabels.map((day, i) => (
                <div key={day} className="px-3 py-3 text-center">
                  <div className="text-xs font-semibold text-white">{day}</div>
                  <div className="text-xs text-blue-200 mt-0.5">{weekDates[i]}</div>
                </div>
              ))}
            </div>

            {/* Time slots */}
            {hours.map((hour) => (
              <div key={hour} className="grid grid-cols-[80px_repeat(6,1fr)] border-b border-gray-100">
                <div className="px-3 py-4 text-xs font-medium text-gray-500 border-r border-gray-100">
                  {String(hour).padStart(2, '0')}:00
                </div>
                {Array.from({ length: 6 }, (_, dayIndex) => {
                  const apt = appointments.find(
                    (a) => a.day === dayIndex && a.startHour === hour
                  );
                  const colors = apt ? statusColors[apt.status] : null;

                  return (
                    <div key={dayIndex} className="px-1 py-1 border-r border-gray-50 min-h-[60px] relative">
                      {apt && colors && (
                        <div
                          className={`${colors.bg} ${colors.text} border-l-4 ${colors.border} rounded-r-lg px-2 py-1.5 cursor-pointer hover:shadow-sm transition-shadow`}
                          style={{ minHeight: `${apt.duration * 60 - 8}px` }}
                        >
                          <p className="text-xs font-semibold truncate">{apt.client}</p>
                          <p className="text-xs truncate opacity-75">{apt.vehicle}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock className="w-3 h-3 opacity-60" />
                            <span className="text-xs opacity-60">
                              {String(apt.startHour).padStart(2, '0')}:00 - {String(apt.startHour + apt.duration).padStart(2, '0')}:{apt.duration % 1 ? '30' : '00'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="text-gray-600">Gepland</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400" />
          <span className="text-gray-600">Bevestigd</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <span className="text-gray-600">Voltooid</span>
        </div>
      </div>
    </div>
  );
}
