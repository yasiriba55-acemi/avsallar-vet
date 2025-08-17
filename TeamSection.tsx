import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Star, Award } from 'lucide-react';
import { teamData } from '../../data/teamData';

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : teamData.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < teamData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-vet-light to-blue-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-vet-primary/10 rounded-full mb-6">
            <Users className="w-8 h-8 text-vet-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Uzman Ekibimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deneyimli ve sevgi dolu veteriner hekimlerimiz ile tanışın
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamData.map((member, index) => (
                <div key={member.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-large p-8 md:p-12 mx-4">
                    <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
                      {/* Photo */}
                      <div className="relative">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-medium">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-vet-warm rounded-full flex items-center justify-center shadow-soft">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-vet-primary font-semibold mb-4">
                          {getSpecialty(member.id)}
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {getDescription(member.id)}
                        </p>
                        
                        {/* Stats */}
                        <div className="flex justify-center md:justify-start space-x-6 mb-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-vet-primary">
                              {getExperience(member.id)}+
                            </div>
                            <div className="text-sm text-gray-600">Yıl Deneyim</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-vet-warm text-vet-warm" />
                              ))}
                            </div>
                            <div className="text-sm text-gray-600">Hasta Memnuniyeti</div>
                          </div>
                        </div>

                        <button className="bg-vet-primary hover:bg-vet-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                          Randevu Al
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-medium hover:shadow-large flex items-center justify-center text-vet-primary hover:text-vet-warm transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-medium hover:shadow-large flex items-center justify-center text-vet-primary hover:text-vet-warm transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-vet-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getSpecialty(memberId: string): string {
  const specialties = {
    ahmet: 'Genel Veterinerlik & Cerrahi',
    ayse: 'Küçük Hayvan Hekimliği',
    mehmet: 'Acil Tıp & Yoğun Bakım',
  };
  return specialties[memberId as keyof typeof specialties] || 'Veteriner Hekim';
}

function getDescription(memberId: string): string {
  const descriptions = {
    ahmet: '15 yıllık deneyimi ile genel veterinerlik ve cerrahi operasyonlarda uzmanlaşmış. Hayvan sevgisi ve profesyonelliği ile tanınan Dr. Ahmet, her hastasına özel ilgi gösterir.',
    ayse: 'Küçük hayvan hekimliğinde 12 yıllık deneyime sahip. Özellikle kedi ve köpek hastalıkları konusunda uzman. Sabırlı ve anlayışlı yaklaşımı ile hem hayvanları hem de sahiplerini rahatlatır.',
    mehmet: 'Acil tıp ve yoğun bakım konularında 10 yıllık deneyime sahip. 7/24 acil servisimizin başında olan Dr. Mehmet, kritik durumlarda hızlı ve etkili müdahaleler gerçekleştirir.',
  };
  return descriptions[memberId as keyof typeof descriptions] || 'Deneyimli veteriner hekim.';
}

function getExperience(memberId: string): number {
  const experience = {
    ahmet: 15,
    ayse: 12,
    mehmet: 10,
  };
  return experience[memberId as keyof typeof experience] || 5;
}
