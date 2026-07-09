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
              <li><a href="#services" className="hover:text-primary-400 transition-colors">{t.nav.services === "Servicios" ? "Extensiones de pestañas" : "Eyelash Extensions"}</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">{t.nav.services === "Servicios" ? "Diseño de cejas" : "Eyebrow Design"}</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">{t.nav.services === "Servicios" ? "Limpiezas faciales" : "Facials"}</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">
              Contacto
            </h4>
            <div className="flex items-center space-x-3 text-gray-400 text-sm mb-4">
              <MapPin className="w-4 h-4 text-primary-500" />
              <span>{t.footer.address}</span>
            </div>
             <div className="flex items-center space-x-3 text-gray-400 text-sm mb-4">
              <Mail className="w-4 h-4 text-primary-500" />
              <span>Grimaldoroxana91@gmail.com</span>
            </div>
             <div className="flex items-center space-x-3 text-gray-400 text-sm mb-4">
              <Phone className="w-4 h-4 text-primary-500" />
              <span>(512) 316-5784</span>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61588905056262" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" title="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/grimaldoroxana91?utm_source=qr&igsh=MWN4cnI3MXI4dGZyZg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" title="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@roxana_grimaldo?_r=1&_t=ZS-95s94Uf0oOV" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-500 transition-colors" title="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.15-.15-.22-.23v6.62c-.03 2.1-.81 4.26-2.52 5.53-1.72 1.28-4.08 1.67-6.13 1.08-2.02-.59-3.77-2.18-4.43-4.14-.81-2.42-.31-5.26 1.35-7.14 1.57-1.78 4.14-2.52 6.44-1.92v4.18c-1.12-.39-2.44-.18-3.37.58-.87.72-1.25 1.88-1.03 2.97.23 1.13.99 2.13 2.05 2.54 1.06.41 2.3.16 3.12-.6.76-.7 1.05-1.78.99-2.78V0h-.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Roxana Grimaldo. {t.footer.rights}</p>
          <p className="mt-2 md:mt-0">
            Diseñado por <a href="https://ruedalarolamedia.com/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline transition-colors">Rueda La Rola Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
