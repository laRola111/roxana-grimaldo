"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Sparkles, Activity, Sun } from "lucide-react";

export function Services() {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'facial': return <Sparkles className="w-8 h-8 text-gold-400" />;
      case 'sculpting': return <Activity className="w-8 h-8 text-gold-400" />;
      case 'laser': return <Sun className="w-8 h-8 text-gold-400" />;
      default: return <Sparkles className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-widest text-white uppercase mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass p-8 rounded-lg hover:border-gold-500/50 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                {getIcon(service.id)}
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="pt-6 border-t border-white/10 flex justify-between items-center mt-auto">
                <span className="text-gold-300 font-medium">{service.price}</span>
                <span className="text-sm text-gray-500 uppercase tracking-widest">{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
