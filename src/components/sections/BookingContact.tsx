"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function BookingContact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const WHATSAPP_NUMBER = "15123165784"; // Actual phone number
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Roxana, me gustaría agendar una cita.")}`;

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-widest text-white uppercase mb-4"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass p-8 md:p-12 rounded-sm"
        >
          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-400">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl text-white font-medium mb-2">{t.contact.form.success}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.name}</label>
                  <input 
                    required 
                    name="name" 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.email}</label>
                  <input 
                    required 
                    name="email" 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.phone}</label>
                  <input 
                    required 
                    name="phone" 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.service}</label>
                  <select 
                    required 
                    name="service" 
                    defaultValue=""
                    className="w-full bg-transparent border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors appearance-none"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    <option value="" disabled>-- {t.contact.form.service} --</option>
                    {t.services.items.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">{t.contact.form.message}</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm">{t.contact.form.error}</p>
              )}

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary-500 text-black py-4 rounded-sm font-medium uppercase tracking-widest hover:bg-primary-400 transition-colors disabled:opacity-70"
                >
                  {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
