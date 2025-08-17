import React from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import TeamSection from '../sections/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
