// Инициализация AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
});

// Бургер
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger?.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.classList.toggle('is-open');
});

// Закрытие меню при клике по ссылке
nav?.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
  });
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
  if (!nav?.contains(e.target) && !burger?.contains(e.target)) {
    nav?.classList.remove('is-open');
  }
});