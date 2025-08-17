import React from 'react';
import { Heart, Shield, Clock, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-vet-primary via-vet-secondary to-vet-accent"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-white/20 animate-bounce-gentle">
        <Heart className="w-8 h-8" />
      </div>
      <div className="absolute top-40 right-20 text-white/20 animate-pulse-soft">
        <Shield className="w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 text-white/20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
        <Award className="w-7 h-7" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Sevimli Dostlarınız İçin
            <span className="block text-vet-warm">Güvenilir Eller</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Hayvanlarınızın sağlığı ve mutluluğu için profesyonel veterinerlik hizmetleri
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-vet-warm hover:bg-vet-warm/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-large">
              Hizmetlerimizi Keşfedin
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-vet-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105">
              Acil Durum: 7/24
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-vet-warm mb-2">500+</div>
              <div className="text-sm md:text-base text-white/80">Mutlu Hayvan</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-vet-warm mb-2">24/7</div>
              <div className="text-sm md:text-base text-white/80">Acil Hizmet</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-vet-warm mb-2">10+</div>
              <div className="text-sm md:text-base text-white/80">Yıl Deneyim</div>
            </div>
            <div className="text-center animate-slide-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl md:text-4xl font-bold text-vet-warm mb-2">100%</div>
              <div className="text-sm md:text-base text-white/80">Güvenilir</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
