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
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== Simple carousel for project images =====
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(c => {
    const images = c.querySelectorAll('img');
    let current = 0;
    
    const prevBtn = c.querySelector('.prev');
    const nextBtn = c.querySelector('.next');
    
    images[current].classList.add('active');

    prevBtn.addEventListener('click', () => {
      images[current].classList.remove('active');
      current = (current - 1 + images.length) % images.length;
      images[current].classList.add('active');
    });

    nextBtn.addEventListener('click', () => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    });
  });

});