/**
 * Neon Editorial - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Neon Editorial initialized');

  // Dropdown logic is handled by CSS (group-hover), 
  // but we can add mobile menu logic here if needed.
  
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Newsletter form handling
  const newsletterForm = document.querySelector('form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      if (email) {
        alert(`Thank you for joining! We've sent a confirmation to ${email}`);
        newsletterForm.reset();
      }
    });
  }
});
