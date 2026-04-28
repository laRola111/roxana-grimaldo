"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop" 
                alt="Roxana Grimaldo" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/30 z-0 rounded-sm"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-widest text-white uppercase mb-4">
              {t.about.title}
            </h2>
            <h3 className="text-xl text-gold-400 mb-8 font-light italic">
              {t.about.subtitle}
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              {t.about.content}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {t.about.stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-light text-gold-300 mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
