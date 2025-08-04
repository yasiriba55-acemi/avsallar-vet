function changeLanguage(lang) {
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');

  if (lang === 'tr') {
    heroTitle.innerText = 'Sevimli Dostlarınız İçin Güvenilir Eller';
    heroSubtitle.innerText = 'Hayvanlarınız için uzman veterinerlik hizmetleri';
  } else if (lang === 'en') {
    heroTitle.innerText = 'Trusted Hands for Your Beloved Friends';
    heroSubtitle.innerText = 'Expert veterinary services for your pets';
  } else if (lang === 'de') {
    heroTitle.innerText = 'Vertrauensvolle Hände für Ihre lieben Freunde';
    heroSubtitle.innerText = 'Experten-Tierarztleistungen für Ihre Haustiere';
  } else if (lang === 'ru') {
    heroTitle.innerText = 'Надежные руки для ваших любимых друзей';
    heroSubtitle.innerText = 'Профессиональные ветеринарные услуги для ваших питомцев';
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
