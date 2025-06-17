// script.js for Our Doctors section animation and navbar toggle

document.addEventListener('DOMContentLoaded', function() {
  // Animate doctor cards
  const cards = document.querySelectorAll('.doctor-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });

  // Navbar toggle for mobile
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('flex');
      navMenu.classList.toggle('flex-col');
      navMenu.classList.toggle('absolute');
      navMenu.classList.toggle('top-16');
      navMenu.classList.toggle('right-4');
      navMenu.classList.toggle('shadow-lg');
      navMenu.classList.toggle('rounded');
      navMenu.classList.toggle('p-4');
    });
    document.querySelectorAll('#nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth < 768) navMenu.classList.add('hidden');
      });
    });
  }
});
