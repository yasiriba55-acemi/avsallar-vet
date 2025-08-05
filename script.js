// Dil Değiştirme Fonksiyonu
function changeLanguage(lang) {
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');

  const translations = {
    tr: {
      title: 'Sevimli Dostlarınız İçin Güvenilir Eller',
      subtitle: 'Hayvanlarınız için uzman veterinerlik hizmetleri'
    },
    en: {
      title: 'Trusted Hands for Your Beloved Friends',
      subtitle: 'Expert veterinary services for your pets'
    },
    de: {
      title: 'Vertrauensvolle Hände für Ihre lieben Freunde',
      subtitle: 'Experten-Tierarztleistungen für Ihre Haustiere'
    },
    ru: {
      title: 'Надежные руки для ваших любимых друзей',
      subtitle: 'Профессиональные ветеринарные услуги для ваших питомцев'
    }
  };

  heroTitle.innerText = translations[lang].title;
  heroSubtitle.innerText = translations[lang].subtitle;
}

// Slider
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.slider .slide');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? 'block' : 'none';
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Otomatik Slider
let slideInterval;
function startAutoSlide() {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startAutoSlide();

  const slider = document.querySelector('.slider');
  slider.addEventListener('mouseenter', stopAutoSlide);
  slider.addEventListener('mouseleave', startAutoSlide);
});
