const mySwiper = new Swiper('.hero-section .swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    on: {
        slideChangeTransitionStart: function () {
            const activeSlide = this.slides[this.activeIndex];
            const animations = activeSlide.querySelectorAll('.animate__animated');
            animations.forEach(element => {
                element.classList.remove('animate__animated');
                void element.offsetWidth;
                element.classList.add('animate__animated');
            });
        },
    },
});

let testimonialSwiper = new Swiper('.testimonial-section .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let logoSwiper = new Swiper('.logo-swiper .swiper-container', {
    slidesPerView: 2,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      480: {
        slidesPerView: 2,
      },
    },
  });

  // JavaScript to show the button when scrolling
  window.addEventListener("scroll", function () {
    var button = document.getElementById("whatsappButton");
    if (window.scrollY > 100) {
      button.classList.add("show-button");
    } else {
      button.classList.remove("show-button");
    }
  });

  //Portfolio Swipper
  var PortfolioSwiper = new Swiper(".portfolio-container .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });


  document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const closeMenu = document.querySelector('.close-menu');
    const navbarNav = document.querySelector('#navbarNav');
    const dropdowns = document.querySelectorAll('.dropdown');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.add('show');
    });

    closeMenu.addEventListener('click', function() {
        navbarNav.classList.remove('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbarNav.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarNav.classList.remove('show');
        }
    });

});
