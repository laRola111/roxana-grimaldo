"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src="/logo-roxana-navbar-rosado.png" 
              alt="Roxana Grimaldo Logo" 
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm max-w-xs">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">
              {t.nav.services}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Tratamientos Faciales</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Body Sculpting</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Laser Therapy</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">
              Contacto
            </h4>
            <div className="flex items-center space-x-3 text-gray-400 text-sm mb-4">
              <MapPin className="w-4 h-4 text-gold-500" />
              <span>{t.footer.address}</span>
            </div>
             <div className="flex items-center space-x-3 text-gray-400 text-sm mb-4">
              <Mail className="w-4 h-4 text-gold-500" />
              <span>contacto@roxanagrimaldo.com</span>
            </div>
             <div className="flex items-center space-x-3 text-gray-400 text-sm mb-6">
              <Phone className="w-4 h-4 text-gold-500" />
              <span>+1 (123) 456-7890</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Roxana Grimaldo. {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">
            Diseñado por <a href="https://ruedalarolamedia.com/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline transition-colors">Rueda La Rola Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
