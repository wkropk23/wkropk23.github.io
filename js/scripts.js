document.addEventListener('DOMContentLoaded', () => {

  // ===== Smooth scrolling for nav links =====
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ===== Simple carousel for slides with captions =====
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(c => {
    const slides = c.querySelectorAll('.carousel-slide');
    let current = 0;

    const prevBtn = c.querySelector('.prev');
    const nextBtn = c.querySelector('.next');

    slides[current].classList.add('active');

    prevBtn.addEventListener('click', () => {
      slides[current].classList.remove('active');
      current = (current - 1 + slides.length) % slides.length;
      slides[current].classList.add('active');
    });

    nextBtn.addEventListener('click', () => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    });
  });

  // ===== Shrink header on scroll =====
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

});