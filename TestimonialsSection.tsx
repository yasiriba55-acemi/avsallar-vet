import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    pet: 'Hayvan',
    rating: 5,
    text: 'Çok memnun kaldım. Veteriner hekim çok ilgili ve deneyimli. Hayvanımın sağlığı için en iyi bakımı aldık. Kesinlikle tavsiye ederim.'
  },
  {
    id: 2,
    name: 'Fatma Demir',
    pet: 'Kedi',
    rating: 5,
    text: 'Harika bir hizmet! Kedimin aşıları için gittik, çok temiz ve hijyenik bir ortam. Doktor çok sabırlı ve anlayışlı davrandı.'
  },
  {
    id: 3,
    name: 'Mehmet Özkan',
    pet: 'Köpek',
    rating: 5,
    text: 'Acil durumda gece geç saatte gittik, hemen müdahale ettiler. Köpeğim şimdi çok iyi. Gerçekten 7/24 hizmet veriyorlar.'
  },
  {
    id: 4,
    name: 'Ayşe Kaya',
    pet: 'Muhabbet Kuşu',
    rating: 5,
    text: 'Küçük hayvanlar konusunda da çok deneyimliler. Muhabbet kuşumun tedavisi çok başarılı geçti. Teşekkür ederim.'
  },
  {
    id: 5,
    name: 'Ali Şahin',
    pet: 'Kedi',
    rating: 5,
    text: 'Modern ekipmanları var ve çok temiz bir klinik. Kedimin operasyonu çok başarılı geçti. Fiyatları da uygun.'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-vet-green/10 rounded-full mb-6">
            <Quote className="w-8 h-8 text-vet-green" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mutlu Müşterilerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sevimli dostlarının sağlığını bize emanet eden ailelerden gelen yorumlar
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-large p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-vet-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Quote className="w-8 h-8 text-vet-primary" />
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-vet-warm text-vet-warm" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800 text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-vet-primary font-medium">
                        {testimonial.pet} Sahibi
                      </p>
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
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-vet-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Siz de sevimli dostunuzun sağlığını bize emanet edin
          </p>
          <button className="bg-vet-primary hover:bg-vet-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-large">
            Randevu Al
          </button>
        </div>
      </div>
    </section>
  );
}
