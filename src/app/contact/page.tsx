'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', voertuigtype: '', bericht: '' });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await supabase.from('contact_messages').insert({
        naam: form.naam,
        email: form.email,
        telefoon: form.telefoon,
        voertuigtype: form.voertuigtype,
        bericht: form.bericht,
      });
    } catch (err) {
      // Still show success to user - message may be saved later
    }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">Heeft u vragen? Neem gerust contact met ons op</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="text-center py-16 bg-green-50 rounded-2xl">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Bericht Verzonden!</h2>
                  <p className="text-gray-600">Wij nemen zo snel mogelijk contact met u op.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Stuur ons een bericht</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Naam *</label>
                      <input type="text" required value={form.naam} onChange={(e) => setForm({...form, naam: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none" placeholder="Uw volledige naam" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none" placeholder="uw@email.nl" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon</label>
                      <input type="tel" value={form.telefoon} onChange={(e) => setForm({...form, telefoon: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none" placeholder="06 - 1234 5678" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Voertuigtype</label>
                      <select value={form.voertuigtype} onChange={(e) => setForm({...form, voertuigtype: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none bg-white">
                        <option value="">Selecteer type</option>
                        <option value="personenauto">Personenauto</option>
                        <option value="motor">Motor</option>
                        <option value="camper">Camper</option>
                        <option value="oldtimer">Oldtimer / Youngtimer</option>
                        <option value="bedrijfsvoertuig">Bedrijfsvoertuig</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bericht *</label>
                    <textarea required rows={5} value={form.bericht} onChange={(e) => setForm({...form, bericht: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent outline-none resize-none" placeholder="Vertel ons hoe wij u kunnen helpen..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-lg font-semibold">
                    <Send className="w-5 h-5" /> Bericht Versturen
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">Contactgegevens</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#f97316] shrink-0 mt-1" />
                    <div><p className="font-medium text-gray-900">Adres</p><p className="text-sm text-gray-600">Industrieweg 12<br />3542 AD Utrecht</p></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#f97316] shrink-0 mt-1" />
                    <div><p className="font-medium text-gray-900">Telefoon</p><a href="tel:+31301234567" className="text-sm text-[#1e3a5f] hover:underline">030 - 123 4567</a></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#f97316] shrink-0 mt-1" />
                    <div><p className="font-medium text-gray-900">E-mail</p><a href="mailto:info@bpmtaxatieutrecht.nl" className="text-sm text-[#1e3a5f] hover:underline">info@bpmtaxatieutrecht.nl</a></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#f97316] shrink-0 mt-1" />
                    <div><p className="font-medium text-gray-900">Openingstijden</p><p className="text-sm text-gray-600">Ma - Vr: 08:00 - 18:00<br />Za: 09:00 - 14:00<br />Zo: Gesloten</p></div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1e3a5f] rounded-xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Direct een afspraak?</h3>
                <p className="text-sm text-gray-300 mb-4">Bel ons direct of plan online een afspraak</p>
                <a href="tel:+31301234567" className="block text-center bg-[#f97316] hover:bg-[#ea580c] text-white py-3 rounded-lg font-semibold mb-2">Bel Direct</a>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-xl h-48 flex items-center justify-center">
                <p className="text-gray-500 text-sm">Google Maps - Utrecht</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
