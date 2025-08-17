import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-vet-dark to-vet-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-vet-warm rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🐾</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Avsallar Veteriner</h3>
                <p className="text-white/80">Kliniği</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Sevimli dostlarınızın sağlığı ve mutluluğu için 7/24 hizmetinizdeyiz. 
              Profesyonel ekibimiz ve modern ekipmanlarımızla güvenilir veterinerlik hizmetleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vet-warm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vet-warm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-vet-warm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {['Ana Sayfa', 'Hizmetlerimiz', 'Ekibimiz', 'Blog', 'İletişim'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-vet-warm transition-colors duration-200 flex items-center space-x-2">
                    <span>→</span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {['Genel Muayene', 'Aşılama', 'Cerrahi Operasyonlar', 'Diş Bakımı', 'Laboratuvar', 'Acil Müdahale'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-vet-warm transition-colors duration-200 flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-vet-warm mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Avsallar Mahallesi</p>
                  <p className="text-white/80">Serik, Antalya</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-vet-warm flex-shrink-0" />
                <div>
                  <p className="text-white/80">+90 242 XXX XX XX</p>
                  <p className="text-sm text-white/60">7/24 Acil Hizmet</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-vet-warm flex-shrink-0" />
                <p className="text-white/80">info@avsallarvet.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-vet-warm mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Pazartesi - Pazar</p>
                  <p className="text-white/80">08:00 - 20:00</p>
                  <p className="text-sm text-vet-warm font-semibold">Acil: 7/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Avsallar Veteriner Kliniği. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-vet-warm transition-colors duration-200">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-white/60 hover:text-vet-warm transition-colors duration-200">
                Kullanım Şartları
              </a>
              <a href="#" className="text-white/60 hover:text-vet-warm transition-colors duration-200">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
