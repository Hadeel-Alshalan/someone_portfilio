import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { dictionary } from '../../context/dictionary';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dictionary[language];

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert(language === 'ar' ? 'الرجاء ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }
    
    setStatus('sending');
    
    // Simulate API dispatch
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background glow node */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-semibold uppercase tracking-wider">
            {t.contact.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-white/50 max-w-2xl mx-auto mt-4 leading-relaxed font-cairo">
            {t.contact.description}
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-pink mx-auto mt-4 rounded-full" />
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Availability Box */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 space-y-4 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-neon-emerald-glow hover:border-neon-emerald/30 group relative overflow-hidden">
              {/* Dynamic Backlight Glow: Projects color behind the card onto page background */}
              <div 
                className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
                style={{
                  background: `radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)`,
                  transform: 'scale(1.1)',
                }}
              />
              
              {/* Soft color spotlight inside the card */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 80%)`,
                }}
              />
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neon-emerald animate-ping" />
                <span>{t.contact.availability.title}</span>
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-cairo font-light">
                {t.contact.availability.description}
              </p>
            </div>

            {/* Direct Contact Details */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-neon-cyan-glow hover:border-neon-cyan/25 group relative overflow-hidden">
              {/* Dynamic Backlight Glow: Projects color behind the card onto page background */}
              <div 
                className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
                style={{
                  background: `radial-gradient(circle, rgba(0, 240, 255, 0.22) 0%, transparent 70%)`,
                  transform: 'scale(1.1)',
                }}
              />
              
              {/* Soft color spotlight inside the card */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 80%)`,
                }}
              />
              
              {/* Email link */}
              <a 
                href="mailto:rayyan@nexusmind.ai" 
                className="flex items-start gap-4 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:text-neon-cyan group-hover:bg-neon-cyan/5 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-white/40 uppercase tracking-widest font-mono">
                    {t.contact.info.email}
                  </span>
                  <p className="text-sm sm:text-base font-bold font-mono">
                    rayyan@nexusmind.ai
                  </p>
                </div>
              </a>

              {/* Location display */}
              <div className="flex items-start gap-4 text-white/70 transition-all duration-300 hover:translate-x-1 group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 group-hover:text-neon-pink group-hover:bg-neon-pink/5 transition-all">
                  <MapPin className="w-5 h-5 text-neon-pink" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-white/40 uppercase tracking-widest font-mono">
                    {t.contact.info.location}
                  </span>
                  <p className="text-sm sm:text-base font-bold font-cairo">
                    {t.contact.info.locationValue}
                  </p>
                </div>
              </div>

              {/* Social Channels links */}
              <div className="border-t border-white/10 pt-6 space-y-4">
                <span className="text-xs text-white/40 uppercase tracking-widest font-mono block">
                  {t.contact.social.follow}
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://linkedin.com/in/rayyan-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-neon-cyan hover:border-neon-cyan/50 hover:bg-neon-cyan/5 hover:-translate-y-1 hover:scale-115 hover:shadow-neon-cyan-glow transition-all duration-300 cursor-pointer flex items-center justify-center"
                    aria-label="LinkedIn Profile"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/rayyan-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-neon-violet hover:border-neon-violet/50 hover:bg-neon-violet/5 hover:-translate-y-1 hover:scale-115 hover:shadow-neon-violet-glow transition-all duration-300 cursor-pointer flex items-center justify-center"
                    aria-label="GitHub Profile"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Form Card Panel */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:shadow-neon-cyan-glow hover:border-neon-cyan/15 hover:scale-[1.002] group relative overflow-hidden">
              {/* Dynamic Backlight Glow: Projects color behind the card onto page background */}
              <div 
                className="absolute inset-0 -z-20 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-[inherit] pointer-events-none blur-[40px]"
                style={{
                  background: `radial-gradient(circle, rgba(0, 240, 255, 0.22) 0%, transparent 70%)`,
                  transform: 'scale(1.1)',
                }}
              />
              
              {/* Soft color spotlight inside the card */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit] pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.08) 0%, transparent 80%)`,
                }}
              />
              <h3 className="font-display text-xl font-bold text-white mb-6">
                {t.contact.form.title}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-white/50 uppercase tracking-wider font-mono">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.namePlaceholder}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white placeholder-white/30 hover:border-neon-cyan/35 hover:scale-[1.002] focus:border-neon-cyan/50 focus:bg-white/[0.04] focus:scale-[1.008] focus:shadow-[0_0_15px_#00f0ff] focus:outline-none transition-all duration-300 text-sm font-cairo"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-white/50 uppercase tracking-wider font-mono">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.emailPlaceholder}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white placeholder-white/30 hover:border-neon-cyan/35 hover:scale-[1.002] focus:border-neon-cyan/50 focus:bg-white/[0.04] focus:scale-[1.008] focus:shadow-[0_0_15px_#00f0ff] focus:outline-none transition-all duration-300 text-sm font-mono"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-white/50 uppercase tracking-wider font-mono">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white placeholder-white/30 hover:border-neon-cyan/35 hover:scale-[1.002] focus:border-neon-cyan/50 focus:bg-white/[0.04] focus:scale-[1.008] focus:shadow-[0_0_15px_#00f0ff] focus:outline-none transition-all duration-300 text-sm font-cairo resize-none"
                    required
                  />
                </div>

                {/* Status messages alert boxes */}
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-neon-emerald/10 border border-neon-emerald/20 flex items-center gap-3 text-neon-emerald text-sm font-cairo"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span>{t.contact.form.success}</span>
                  </motion.div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold bg-white text-dark-bg hover:bg-neon-cyan hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_25px_#00f0ff] disabled:bg-white/40 disabled:text-dark-bg/60 transition-all duration-300 cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t.contact.form.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 [dir='rtl']:rotate-180" />
                      <span>{t.contact.form.send}</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
