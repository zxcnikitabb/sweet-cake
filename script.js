// Мобильное меню
const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
if (burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// Плавное появление при скролле
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product, .step, .review, .gallery-grid img, .about-inner > *, .hero-text > *, .hero-image').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
