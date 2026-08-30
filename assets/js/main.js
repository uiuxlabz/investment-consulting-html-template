/**
 * INVESTA — Investment Consulting & Wealth Management
 * Main JavaScript — interactions, animations, form handling
 */

(function () {
  'use strict';

  /* ==========================================================================
     Reduced Motion Preference
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getMotionDuration() {
    return prefersReducedMotion.matches ? 0 : undefined;
  }

  /* ==========================================================================
     Header Scroll Effect
     ========================================================================== */
  const header = document.querySelector('.header');

  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ==========================================================================
     Burger / Mobile Navigation
     ========================================================================== */
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav__link');

  function toggleMobileNav() {
    if (!burger || !mobileNav) return;
    burger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileNav() {
    if (burger) burger.classList.remove('active');
    if (mobileNav) mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (burger) {
    burger.addEventListener('click', toggleMobileNav);
  }

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  /* ==========================================================================
     Active Navigation Link
     ========================================================================== */
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  setActiveNavLink();

  /* ==========================================================================
     Dynamic Year [data-year]
     ========================================================================== */
  function setDynamicYear() {
    var yearElements = document.querySelectorAll('[data-year]');
    var currentYear = new Date().getFullYear();
    yearElements.forEach(function (el) {
      el.textContent = currentYear;
    });
  }

  setDynamicYear();

  /* ==========================================================================
     IntersectionObserver — Reveal Animations
     ========================================================================== */
  function initRevealAnimations() {
    var revealElements = document.querySelectorAll('.reveal');

    if (!revealElements.length) return;

    if (prefersReducedMotion.matches) {
      revealElements.forEach(function (el) {
        el.classList.add('revealed');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  initRevealAnimations();

  /* ==========================================================================
     Stats Counter Animation
     ========================================================================== */
  function animateCounters() {
    var counters = document.querySelectorAll('[data-count]');

    if (!counters.length) return;

    if (prefersReducedMotion.matches) {
      counters.forEach(function (counter) {
        var target = parseInt(counter.getAttribute('data-count'), 10);
        var suffix = counter.getAttribute('data-suffix') || '';
        counter.textContent = target.toLocaleString() + suffix;
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var counter = entry.target;
            var target = parseInt(counter.getAttribute('data-count'), 10);
            var suffix = counter.getAttribute('data-suffix') || '';
            var duration = 2000;
            var startTime = null;

            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              var current = Math.floor(eased * target);
              counter.textContent = current.toLocaleString() + suffix;

              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                counter.textContent = target.toLocaleString() + suffix;
              }
            }

            requestAnimationFrame(step);
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  animateCounters();

  /* ==========================================================================
     Form Handling [data-form]
     ========================================================================== */
  function initForms() {
    var forms = document.querySelectorAll('[data-form]');

    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var okMsg = form.querySelector('.form-ok');
        var errMsg = form.querySelector('.form-err');

        // Hide previous messages
        if (okMsg) okMsg.classList.remove('visible');
        if (errMsg) errMsg.classList.remove('visible');

        // Basic validation
        var requiredFields = form.querySelectorAll('[required]');
        var isValid = true;

        requiredFields.forEach(function (field) {
          if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#e74c3c';
          } else {
            field.style.borderColor = '';
          }

          // Email validation
          if (field.type === 'email' && field.value.trim()) {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
              isValid = false;
              field.style.borderColor = '#e74c3c';
            }
          }
        });

        if (!isValid) {
          if (errMsg) errMsg.classList.add('visible');
          return;
        }

        // Simulate form submission
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending...';
        }

        setTimeout(function () {
          if (okMsg) okMsg.classList.add('visible');
          form.reset();

          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
          }

          // Auto-hide success message after 5s
          setTimeout(function () {
            if (okMsg) okMsg.classList.remove('visible');
          }, 5000);
        }, 1200);
      });
    });
  }

  initForms();

  /* ==========================================================================
     Smooth Scroll for Anchor Links
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
        });
      }
    });
  });

  /* ==========================================================================
     Testimonials Horizontal Scroll — Auto-scroll
     ========================================================================== */
  var testimonialTrack = document.querySelector('.testimonials__track');
  if (testimonialTrack && !prefersReducedMotion.matches) {
    var scrollDirection = 1;
    var scrollSpeed = 0.5;

    function autoScrollTestimonials() {
      if (!testimonialTrack) return;

      testimonialTrack.scrollLeft += scrollSpeed * scrollDirection;

      if (testimonialTrack.scrollLeft >= testimonialTrack.scrollWidth - testimonialTrack.clientWidth) {
        scrollDirection = -1;
      } else if (testimonialTrack.scrollLeft <= 0) {
        scrollDirection = 1;
      }

      requestAnimationFrame(autoScrollTestimonials);
    }

    // Start auto-scroll after 3s delay
    var autoScrollTimer = setTimeout(function () {
      autoScrollTimer = requestAnimationFrame(autoScrollTestimonials);
    }, 3000);

    // Pause on hover
    testimonialTrack.addEventListener('mouseenter', function () {
      if (autoScrollTimer) cancelAnimationFrame(autoScrollTimer);
    });

    testimonialTrack.addEventListener('mouseleave', function () {
      autoScrollTimer = requestAnimationFrame(autoScrollTestimonials);
    });
  }

})();
