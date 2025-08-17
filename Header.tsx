import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { navigationData, languageButtons } from '../../data/navigationData';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (itemId: string) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-vet-dark text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+90 539 347 55 07</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Avsallar, Antalya</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>7/24 Acil Hizmet</span>
            </div>
          </div>
          <div className="flex space-x-2">
            {languageButtons.map((lang) => (
              <button 
                key={lang.code} 
                className="px-3 py-1 border border-white/30 rounded hover:bg-white/10 transition-colors duration-200"
              >
                {lang.code}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium' 
          : 'bg-gradient-to-r from-vet-primary to-vet-secondary'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-vet-warm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🐾</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-vet-primary' : 'text-white'
                }`}>
                  Avsallar Veteriner
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Kliniği
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {navigationData.map((item) => (
                  <li 
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => item.submenu && handleMouseEnter(item.id)}
                    onMouseLeave={() => item.submenu && handleMouseLeave()}
                  >
                    <a 
                      href={item.href} 
                      className={`font-medium transition-all duration-200 hover:scale-105 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-vet-primary' 
                          : 'text-white hover:text-vet-warm'
                      }`}
                    >
                      {item.label}
                    </a>
                    {item.submenu && activeDropdown === item.id && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-large border border-gray-100 py-2 animate-fade-in">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.id}
                            href="#"
                            className="block px-4 py-2 text-gray-700 hover:bg-vet-light hover:text-vet-primary transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="hidden md:block bg-vet-warm hover:bg-vet-warm/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 shadow-soft">
                Randevu Al
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <nav>
                <ul className="space-y-4">
                  {navigationData.map((item) => (
                    <li key={item.id}>
                      <a 
                        href={item.href}
                        className="block text-gray-700 hover:text-vet-primary font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                      {item.submenu && (
                        <ul className="mt-2 ml-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id}>
                              <a
                                href="#"
                                className="block text-gray-600 hover:text-vet-primary text-sm transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full bg-vet-warm hover:bg-vet-warm/90 text-white px-6 py-3 rounded-full font-medium transition-all duration-200">
                    Randevu Al
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
