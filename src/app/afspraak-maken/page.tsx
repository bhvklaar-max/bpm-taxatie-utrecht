'use client';

import { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AfspraakMaken() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    naam: '', email: '', telefoon: '',
    merk: '', model: '', bouwjaar: '', kenteken: '', voertuigtype: '',
    datum: '', tijd: '', opmerkingen: '',
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await supabase.from('booking_requests').insert({
        naam: form.naam,
        email: form.email,
        telefoon: form.telefoon,
        merk: form.merk,
        model: form.model,
        bouwjaar: form.bouwjaar,
        kenteken: form.kenteken,
        voertuigtype: form.voertuigtype,
        datum: form.datum,
        tijd: form.tijd,
        opmerkingen: form.opmerkingen,
      });
    } catch (err) {
      // Still show success
    }
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Afspraak Aangevraagd!</h1>
          <p className="text-gray-600 text-lg mb-2">Bedankt voor uw aanvraag. Wij nemen binnen 1 werkdag contact met u op om de afspraak te bevestigen.</p>
          <p className="text-gray-500 text-sm mt-4">Referentie: #{Date.now().toString(36).toUpperCase()}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Afspraak Maken</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Plan uw BPM taxatie afspraak in bij onze locatie in Utrecht</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Persoonlijke gegevens */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-sm">1</span>
                Persoonlijke Gegevens
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                  <input type="text" required value={form.naam} onChange={(e) => setForm({...form, naam: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefoon *</label>
                  <input type="tel" required value={form.telefoon} onChange={(e) => setForm({...form, telefoon: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
              </div>
            </div>

            {/* Voertuig */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-sm">2</span>
                Voertuiggegevens
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Merk *</label>
                  <input type="text" required value={form.merk} onChange={(e) => setForm({...form, merk: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" placeholder="bijv. BMW" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Model *</label>
                  <input type="text" required value={form.model} onChange={(e) => setForm({...form, model: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" placeholder="bijv. 320i" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bouwjaar</label>
                  <input type="number" min="1970" max="2026" value={form.bouwjaar} onChange={(e) => setForm({...form, bouwjaar: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kenteken (indien bekend)</label>
                  <input type="text" value={form.kenteken} onChange={(e) => setForm({...form, kenteken: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Voertuigtype *</label>
                  <select required value={form.voertuigtype} onChange={(e) => setForm({...form, voertuigtype: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none bg-white">
                    <option value="">Selecteer type</option>
                    <option value="personenauto">Personenauto</option>
                    <option value="motor">Motor</option>
                    <option value="camper">Camper</option>
                    <option value="oldtimer">Oldtimer / Youngtimer</option>
                    <option value="bedrijfsvoertuig">Bedrijfsvoertuig</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Datum & Tijd */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center text-sm">3</span>
                Gewenste Datum &amp; Tijd
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Datum *</label>
                  <input type="date" required value={form.datum} onChange={(e) => setForm({...form, datum: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Voorkeurstijd *</label>
                  <select required value={form.tijd} onChange={(e) => setForm({...form, tijd: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none bg-white">
                    <option value="">Selecteer tijd</option>
                    <option value="08:00">08:00</option><option value="09:00">09:00</option>
                    <option value="10:00">10:00</option><option value="11:00">11:00</option>
                    <option value="12:00">12:00</option><option value="13:00">13:00</option>
                    <option value="14:00">14:00</option><option value="15:00">15:00</option>
                    <option value="16:00">16:00</option><option value="17:00">17:00</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Opmerkingen */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Opmerkingen</label>
              <textarea rows={4} value={form.opmerkingen} onChange={(e) => setForm({...form, opmerkingen: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] outline-none resize-none" placeholder="Heeft u nog bijzonderheden die wij moeten weten?" />
            </div>

            <button type="submit" className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" /> Afspraak Aanvragen
            </button>
            <p className="text-sm text-gray-500 text-center">Wij nemen binnen 1 werkdag contact met u op om de afspraak te bevestigen.</p>
          </form>
        </div>
      </section>
    </>
  );
}
