"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <img src="/Rocana Grimaldo LOGO-03.png" alt="Roxana Grimaldo Logo" className="h-40 md:h-56 w-auto object-contain drop-shadow-2xl" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 uppercase"
        >
          {t.hero.title.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? 'text-primary-300 italic' : ''}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary-500 text-white rounded-sm text-sm font-medium uppercase tracking-[0.2em] hover:bg-primary-400 transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:shadow-[0_0_30px_rgba(219,39,119,0.5)]"
          >
            {t.hero.cta}
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-white/20 text-white rounded-sm text-sm font-medium uppercase tracking-[0.2em] hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            {t.hero.secondary}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
