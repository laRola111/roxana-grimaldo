"use client";

import { motion } from "framer-motion";
import { Gift, Calendar } from "lucide-react";

export function GiftCardPromo() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-1 md:p-2 rounded-3xl border border-primary-500/20 shadow-2xl shadow-primary-500/10"
        >
          <div className="bg-black/80 rounded-[22px] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              
              {/* Image / Card Visual Side */}
              <div className="relative h-[300px] md:h-full min-h-[400px] bg-gradient-to-br from-primary-900 to-black p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-primary-500/20">
                <div className="absolute inset-0 bg-[url('/mockups/giftcard.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                    <Gift className="w-8 h-8 text-primary-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-primary-300 font-semibold tracking-widest uppercase text-sm">Promoción Especial</p>
                    <p className="text-white font-bold text-2xl tracking-wider">GIFT CARD</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-2 uppercase tracking-wide">
                    Facial <span className="font-bold text-primary-400">Gratis</span>
                  </h3>
                  <div className="flex items-center gap-2 text-primary-200 mt-4 bg-black/40 w-fit px-4 py-2 rounded-full border border-primary-500/30">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase tracking-wider">Válido hasta Junio</span>
                  </div>
                </div>
              </div>
              
              {/* Content / CTA Side */}
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6 uppercase tracking-wider text-balance">
                  Reclama tu <span className="text-primary-500 font-medium">Experiencia Facial</span>
                </h2>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Consiéntete con una limpieza facial completamente gratis. Descubre la máxima relajación y deja que tu piel brille. ¡Oferta por tiempo limitado!
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_30px_rgba(219,39,119,0.6)] uppercase tracking-widest w-fit"
                >
                  Reclamar Gift Card
                </a>
                
                <p className="text-xs text-gray-500 mt-6 uppercase tracking-widest">
                  *Aplican términos y condiciones. Uno por cliente.
                </p>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
