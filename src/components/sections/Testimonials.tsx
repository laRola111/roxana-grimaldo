"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";

export function Testimonials() {
  const { language } = useLanguage();

  const reviews = {
    en: [
      {
        name: "Sophia Martinez",
        service: "Signature Glow Facial",
        text: "The experience was absolutely breathtaking. Roxana's hands are magic. My skin has never looked so clear and radiant.",
        rating: 5
      },
      {
        name: "Jessica Taylor",
        service: "Body Sculpting",
        text: "Highly professional and a luxurious ambiance. The results are real, and the care provided is top-tier.",
        rating: 5
      }
    ],
    es: [
      {
        name: "Sofía Martínez",
        service: "Facial Resplandor",
        text: "La experiencia fue absolutamente increíble. Las manos de Roxana son mágicas. Mi piel nunca lució tan limpia y radiante.",
        rating: 5
      },
      {
        name: "Jéssica Taylor",
        service: "Escultura Corporal",
        text: "Altamente profesional y un ambiente lujoso. Los resultados son reales y la atención es de primera clase.",
        rating: 5
      }
    ]
  };

  const activeReviews = reviews[language];

  return (
    <section id="testimonials" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-widest text-white uppercase mb-4"
          >
            {language === 'en' ? 'Client Love' : 'Testimonios'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            {language === 'en' ? 'What our clients say about the experience' : 'Lo que dicen nuestras clientas sobre la experiencia'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-8 rounded-sm relative border border-white/5"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-200 text-lg italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <h4 className="text-white font-medium tracking-wide uppercase text-sm">
                  {review.name}
                </h4>
                <p className="text-gold-400 text-xs uppercase tracking-widest mt-1">
                  {review.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
