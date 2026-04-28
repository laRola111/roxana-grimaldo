"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-xl md:text-2xl font-light tracking-widest text-gold-300 uppercase">
              Roxana Grimaldo
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-gold-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-gold-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
            
            <a
              href="#contact"
              className="bg-gold-500 hover:bg-gold-400 text-black px-6 py-2 rounded-sm text-sm font-medium transition-colors uppercase tracking-wider"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-sm text-gray-300"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-gold-400 text-center border-b border-white/5 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="p-4 flex justify-center">
               <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-gold-500 text-black px-6 py-3 rounded-sm text-sm font-medium uppercase tracking-wider"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
