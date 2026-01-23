// ============================================
// BRIMANY ATTORNEYS BLOG - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // Mobile Navigation
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  }

  // ============================================
  // Header Scroll Effect
  // ============================================
  const header = document.getElementById('header');

  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // WhatsApp Button Pulse Effect
  // ============================================
  const whatsappFloat = document.querySelector('.whatsapp-float');
  if (whatsappFloat) {
    setTimeout(() => {
      whatsappFloat.style.animation = 'pulse 2s ease-in-out 3';
    }, 3000);
  }

  // ============================================
  // Image Loading Enhancement
  // ============================================
  const images = document.querySelectorAll('img[loading="lazy"]');

  if ('loading' in HTMLImageElement.prototype) {
    images.forEach(img => {
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      });
    });
  } else {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      imageObserver.observe(img);
    });
  }

});

// ============================================
// CSS for Pulse Animation
// ============================================
const pulseStyles = document.createElement('style');
pulseStyles.textContent = `
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 15px 50px rgba(37, 211, 102, 0.3);
    }
  }

  img.loaded {
    animation: fadeIn 0.5s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0.5; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(pulseStyles);
