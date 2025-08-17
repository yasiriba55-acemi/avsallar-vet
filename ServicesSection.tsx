import React from 'react';
import { Stethoscope, Syringe, Scissors, Smile, FlaskConical, Heart, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const serviceIcons = {
  examination: Stethoscope,
  vaccination: Syringe,
  surgery: Scissors,
  dental: Smile,
  laboratory: FlaskConical,
};

const serviceColors = {
  examination: 'from-blue-500 to-blue-600',
  vaccination: 'from-green-500 to-green-600',
  surgery: 'from-red-500 to-red-600',
  dental: 'from-yellow-500 to-yellow-600',
  laboratory: 'from-purple-500 to-purple-600',
};

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-vet-warm/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-vet-warm" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hizmet Kategorilerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sevimli dostlarınız için kapsamlı veterinerlik hizmetleri
          </p>
        </div>

        {/* Services Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16">
          {servicesData.map((service, index) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons];
            const colorClass = serviceColors[service.id as keyof typeof serviceColors];
            
            return (
              <div 
                key={service.id} 
                className="group cursor-pointer animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Round Icon Container */}
                <div className="relative mb-6">
                  {/* Main Circle with Image Background */}
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-soft group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-70 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    
                    {/* Icon in Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />}
                    </div>
                  </div>

                  {/* Small Floating Icon */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center group-hover:bg-vet-warm group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowRight className="w-5 h-5 text-vet-primary group-hover:text-white" />
                  </div>
                </div>

                {/* Service Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-vet-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {getServiceShortDescription(service.id)}
                  </p>
                  <div className="pt-2">
                    <span className="text-vet-primary font-semibold text-sm group-hover:text-vet-warm transition-colors duration-200">
                      Detayları Gör →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Emergency Service */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Heart className="w-10 h-10 text-white animate-pulse-soft" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center md:text-left">7/24 Acil Hizmet</h3>
              <p className="text-white/90 mb-6 text-center md:text-left">
                Acil durumlarda 24 saat kesintisiz hizmet. Sevimli dostlarınız için her an hazırız.
              </p>
              <div className="text-center md:text-left">
                <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-105">
                  Hemen Ara
                </button>
              </div>
            </div>
          </div>

          {/* Home Visit Service */}
          <div className="bg-gradient-to-r from-vet-primary to-vet-secondary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center md:text-left">Evde Bakım Hizmeti</h3>
              <p className="text-white/90 mb-6 text-center md:text-left">
                Hayvanınızın konforunu bozmadan evde muayene ve bakım hizmetleri.
              </p>
              <div className="text-center md:text-left">
                <button className="bg-white text-vet-primary px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-all duration-200 hover:scale-105">
                  Randevu Al
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { icon: '🏥', title: 'Yatılı Bakım', color: 'bg-blue-500' },
            { icon: '🚑', title: 'Ambulans', color: 'bg-red-500' },
            { icon: '🧪', title: 'Kan Tahlili', color: 'bg-purple-500' },
            { icon: '📱', title: 'Online Danışma', color: 'bg-green-500' }
          ].map((item, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-soft group-hover:shadow-medium`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h4 className="font-semibold text-gray-800 group-hover:text-vet-primary transition-colors duration-200">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-large p-8 md:p-12 max-w-3xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-br from-vet-warm to-vet-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Hangi Hizmete İhtiyacınız Var?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Uzman veteriner hekimlerimiz ile iletişime geçin ve sevimli dostunuz için en uygun hizmeti belirleyin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-vet-primary hover:bg-vet-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-medium">
                Ücretsiz Danışmanlık
              </button>
              <button className="border-2 border-vet-primary text-vet-primary hover:bg-vet-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105">
                Tüm Hizmetler
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getServiceShortDescription(serviceId: string): string {
  const shortDescriptions = {
    examination: 'Kapsamlı sağlık kontrolü ve genel muayene hizmetleri',
    vaccination: 'Koruyucu aşı programları ve hastalık önleme',
    surgery: 'Uzman cerrahi müdahale ve operasyon hizmetleri',
    dental: 'Ağız ve diş sağlığı bakım hizmetleri',
    laboratory: 'Hızlı test sonuçları ve laboratuvar analizleri',
  };
  
  return shortDescriptions[serviceId as keyof typeof shortDescriptions] || 'Profesyonel veterinerlik hizmeti';
}
