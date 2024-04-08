$(window).on('load',function () {
  $(".preloader").fadeOut();

});
$(document).ready(function () {
  new WOW().init();

  // phone size menu onclick
  if ($(window).width() <= 991) {
    $('#menu-id').click((e) => {
      e.preventDefault();
      $('.menu-bars .bar').toggleClass('hide-icon');
      $('.menu-bars .times').toggleClass('hide-icon');
      $('.navgition').toggleClass('reset-left');
      $('body').toggleClass('overflow');
      $('.menu-bars').toggleClass('open-bars');
    });
    $('.nav-head .close-btn').click(() => {
      $('.navgition').removeClass('reset-left');

      $('.menu-bars .times').toggleClass('hide');
      $('body').removeClass('overflow');
    });

    

   
  }

  // fixed nav
  $stickyNav = $('.top-header');
  $(window).on('scroll load', () => {
    const scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass('fixed-nav');
    } else {
      $stickyNav.removeClass('fixed-nav');
    }
    if (scroll == 0) {
      $stickyNav.removeClass('fixed-nav');
    }
  });
  const $stickyheader = $('header');
  lastScroll = 0;
  $(window).on('scroll load', () => {
    const scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass('fixed-header', {
        duration: 1000,
      });
    } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
      $stickyheader.addClass('fixed-header', {
        duration: 1000,
      });
    } else {
      $stickyheader.removeClass('fixed-header', {
        duration: 500,
      });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass('fixed-header', {
        duration: 500,
      });
    }
  });

  /// ////// ** main-slider** /////////
  const specials = new Swiper('.main-slider .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.main-slider .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.main-slider .swiper-btn-next',
      prevEl: '.main-slider .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  /// /////////** footer transfer into accordion **//////////

  if ($(window).width() <= 914) {
    $('.nav-foot-header').addClass('footer-accordion');
    $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function () {
    const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
    $('.footer-accordion').not(this).removeClass('active');
    $(this).toggleClass('active');
    if ($(this).siblings().css('max-height') == '0px') {
      $(this).siblings().css('max-height', x);
      $(this).siblings('.nav-foot').css('padding-top', '15px');
    } else {
      $(this).siblings().css('max-height', '0');
      $(this).siblings('.nav-foot').css('padding-top', '0');
    }

    $('.footer-accordion').not(this).siblings().css('max-height', '0');
    $('.footer-accordion')
      .not(this)
      .siblings('.nav-foot')
      .css('padding-top', '0');
  });
  /// ///////** fixed arrow to top**//////////
  $('.arrow-top').click(() => {
    $('html,body').animate({
      scrollTop: 0,
    },
    1500);
  });
  $(this).scrollTop() >= 500
    ? $('.arrow-top').fadeIn(300)
    : $('.arrow-top').fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $('.arrow-top').fadeIn(300)
      : $('.arrow-top').fadeOut(300);
  });


  /// ////// **inside-trips-section** /////////
  var screen = new Swiper('.inside-trips .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.inside-trips .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.inside-trips .swiper-btn-next',
      prevEl: '.inside-trips .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **offers-slider** /////////
  var screen = new Swiper('.offers .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.offers .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.offers .swiper-btn-next',
      prevEl: '.offers .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /// ////// **outside-trips-slider** /////////
  var screen = new Swiper('.outside-trips .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
      el: '.outside-trips .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.outside-trips .swiper-btn-next',
      prevEl: '.outside-trips .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

 
  


});
