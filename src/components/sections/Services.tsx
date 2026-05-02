"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Sparkles, Activity, Sun, ShieldCheck } from "lucide-react";
import { useState } from "react";

export function Services() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getIcon = (id: string) => {
    if (id.includes('facial')) return <Sparkles className="w-8 h-8 text-gold-400" />;
    if (id.includes('body')) return <Activity className="w-8 h-8 text-gold-400" />;
    if (id.includes('laser')) return <Sun className="w-8 h-8 text-gold-400" />;
    return <ShieldCheck className="w-8 h-8 text-gold-400" />;
  };

  const categories = [
    { id: "all", label: t.services.categories.all },
    { id: "facials", label: t.services.categories.facials },
    { id: "body", label: t.services.categories.body },
    { id: "laser", label: t.services.categories.laser },
  ];

  const filteredItems = t.services.items.filter(
    item => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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

        {/* Category Pills Navigation (Sticky concept applied relative to section) */}
        <div className="flex justify-center mb-16 overflow-x-auto py-2 px-4 scrollbar-hide gap-4">
          <div className="flex bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? "bg-gold-500 text-black shadow-lg" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[minmax(350px,_auto)]">
          {filteredItems.map((service, index) => {
            const isFeatured = service.featured;
            // Map grid classes based on featured vs normal
            const gridSpan = isFeatured 
              ? "md:col-span-3 md:row-span-1" 
              : "md:col-span-3 md:row-span-1 lg:col-span-2";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`group glass p-8 rounded-lg border border-white/5 hover:border-gold-500/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${gridSpan}`}
              >
                {/* Badge component */}
                {service.badge && (
                  <span className="absolute top-4 right-4 bg-gold-500/10 text-gold-300 border border-gold-500/30 text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm font-semibold shadow-sm">
                    {service.badge}
                  </span>
                )}

                <div className="mb-6">
                  <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gold-500/10 transition-colors">
                    {getIcon(service.id)}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-white/10 flex justify-between items-center mt-6">
                  <span className="text-gold-300 font-bold text-lg">{service.price}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                    {service.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
