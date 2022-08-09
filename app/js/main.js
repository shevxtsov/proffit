$(document).ready(function() {

    //* Sliders --------------------------*//
    const sliderArrowPrev = '<svg class="slider-arrow slider-arrow__left" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" fill="#E31E1E"/><path d="M22.2929 39.2929C21.9024 39.6834 21.9024 40.3166 22.2929 40.7071L28.6569 47.0711C29.0474 47.4616 29.6805 47.4616 30.0711 47.0711C30.4616 46.6805 30.4616 46.0474 30.0711 45.6569L24.4142 40L30.0711 34.3431C30.4616 33.9526 30.4616 33.3195 30.0711 32.9289C29.6805 32.5384 29.0474 32.5384 28.6569 32.9289L22.2929 39.2929ZM58 39L23 39V41L58 41V39Z" fill="white"/></svg>';
    const sliderArrowNext = '<svg class="slider-arrow slider-arrow__right" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="80" height="80" fill="#E31E1E"/><path d="M58.7071 40.7071C59.0976 40.3166 59.0976 39.6834 58.7071 39.2929L52.3431 32.9289C51.9526 32.5384 51.3195 32.5384 50.9289 32.9289C50.5384 33.3195 50.5384 33.9526 50.9289 34.3432L56.5858 40L50.9289 45.6569C50.5384 46.0474 50.5384 46.6805 50.9289 47.0711C51.3195 47.4616 51.9526 47.4616 52.3431 47.0711L58.7071 40.7071ZM23 41L58 41L58 39L23 39L23 41Z" fill="white"/></svg>';
    

    var helpers = {
      addZeros: function (n) {
        // return (n < 10) ? + n : '' + n;
        return (n < 10) ? '0' + n : '' + n;
      }
    };
    
    function homeSlider() {
      var $slider = $('.home-slider');
      $slider.each(function() {
        var $sliderParent = $(this).parent();
        $(this).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          fade: true,
          nextArrow: '<svg class="slider-arrow slider-arrow__right" width="81" height="16" viewBox="0 0 81 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M74.3431 0.92888L80.7071 7.29284C81.0976 7.68336 81.0976 8.31653 80.7071 8.70705L74.3431 15.071C73.9526 15.4615 73.3195 15.4615 72.9289 15.071C72.5384 14.6805 72.5384 14.0473 72.9289 13.6568L77.5858 8.99995H0V6.99995H77.5858L72.9289 2.34309C72.5384 1.95257 72.5384 1.3194 72.9289 0.92888C73.3195 0.538355 73.9526 0.538355 74.3431 0.92888Z" fill="white"/></svg>',
          prevArrow: '<svg class="slider-arrow slider-arrow__left" width="81" height="16" viewBox="0 0 81 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.65685 15.0711L0.292893 8.70715C-0.0976327 8.31663 -0.0976327 7.68346 0.292893 7.29294L6.65685 0.928978C7.04738 0.538454 7.68054 0.538454 8.07107 0.928978C8.46159 1.3195 8.46159 1.95267 8.07107 2.34319L3.41422 7.00005L81 7.00005L81 9.00005L3.41422 9.00005L8.07107 13.6569C8.46159 14.0474 8.46159 14.6806 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711Z" fill="white"/></svg>',
        });
    
        if ($(this).find('.home-slider__item').length > 1) {
          $(this).siblings('.slides-numbers').show();
        }
    
        $(this).on('afterChange', function(event, slick, currentSlide){
          $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
        });
    
        var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));
    
      });
    
    };    
    homeSlider();


    $('.products-popular-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: sliderArrowPrev,
      nextArrow: sliderArrowNext,
    });


    $('.akcii-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<svg class="slider-arrow slider-arrow__left" width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z" fill="#E31E1E"/></svg>',
      nextArrow: '<svg class="slider-arrow slider-arrow__right" width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928937C28.9526 0.538413 28.3195 0.538413 27.9289 0.928937C27.5384 1.31946 27.5384 1.95263 27.9289 2.34315L33.5858 8.00001L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-1.74846e-07 9L35 9.00001L35 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="#E31E1E"/></svg>',
      dots: true,
      responsive:[
        {
          breakpoint:991,
          settings:{
            slidesToShow: 1
          }
        }
      ]
    });


    $('.goods-related-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<svg class="slider-arrow slider-arrow__left" width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z" fill="#E31E1E"/></svg>',
      nextArrow: '<svg class="slider-arrow slider-arrow__right" width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928937C28.9526 0.538413 28.3195 0.538413 27.9289 0.928937C27.5384 1.31946 27.5384 1.95263 27.9289 2.34315L33.5858 8.00001L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-1.74846e-07 9L35 9.00001L35 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="#E31E1E"/></svg>',
      dots: true,
      responsive:[
        {
          breakpoint:991,
          settings:{
            slidesToShow: 2
          }
        },
        {
          breakpoint:767,
          settings:{
            slidesToShow: 2
          }
        },
        {
          breakpoint:560,
          settings:{
            slidesToShow: 1
          }
        }
      ]
    });

    $('.large-photo-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<svg class="slider-arrow slider-arrow__left" width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="46" height="41" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 41)" fill="#F2F4F5"/><path d="M18.0032 21.2359L25.313 28.4627C25.778 28.9226 26.5319 28.9226 26.9966 28.4627C27.4614 28.0031 27.4614 27.2578 26.9966 26.7983L20.5286 20.4037L26.9964 14.0093C27.4612 13.5496 27.4612 12.8043 26.9964 12.3448C26.5316 11.8851 25.7778 11.8851 25.3128 12.3448L18.003 19.5717C17.7706 19.8016 17.6546 20.1025 17.6546 20.4037C17.6546 20.7049 17.7709 21.0061 18.0032 21.2359Z" fill="#E31E1E"/></svg>',
      nextArrow: '<svg class="slider-arrow slider-arrow__right" width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="46" y="41.0002" width="46" height="41" transform="rotate(-180 46 41.0002)" fill="#F2F4F5"/><path d="M27.9968 21.2361L20.687 28.4629C20.222 28.9228 19.4681 28.9228 19.0034 28.4629C18.5386 28.0034 18.5386 27.258 19.0034 26.7985L25.4714 20.4039L19.0036 14.0096C18.5388 13.5498 18.5388 12.8046 19.0036 12.345C19.4684 11.8853 20.2222 11.8853 20.6872 12.345L27.997 19.5719C28.2294 19.8018 28.3454 20.1028 28.3454 20.4039C28.3454 20.7052 28.2291 21.0063 27.9968 21.2361Z" fill="#E31E1E"/></svg>',
      asNavFor: '.mini-photo-slider'
    });
    $('.mini-photo-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      // prevArrow: '<img class="slider-arrow slider-arrow__left" src="images/arrow-left.svg" alt="">',
      // nextArrow: '<img class="slider-arrow slider-arrow__right" src="images/arrow-right.svg" alt="">',
      asNavFor: '.large-photo-slider',
      focusOnSelect: true,
      responsive:[
        {
          breakpoint:991,
          settings:{
            slidesToShow: 4
          }
        }
      ]
    });


    $('.reviews-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: sliderArrowPrev,
      nextArrow: sliderArrowNext,
      speed: 300,
      // fade: true
    });


    $('.clients-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 3,
      prevArrow: '<svg class="slider-arrow slider-arrow__left" width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM36 7L1 7V9L36 9V7Z" fill="#E31E1E"/></svg>',
      nextArrow: '<svg class="slider-arrow slider-arrow__right" width="36" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.7071 8.70711C36.0976 8.31659 36.0976 7.68342 35.7071 7.2929L29.3431 0.928937C28.9526 0.538413 28.3195 0.538413 27.9289 0.928937C27.5384 1.31946 27.5384 1.95263 27.9289 2.34315L33.5858 8.00001L27.9289 13.6569C27.5384 14.0474 27.5384 14.6805 27.9289 15.0711C28.3195 15.4616 28.9526 15.4616 29.3431 15.0711L35.7071 8.70711ZM-1.74846e-07 9L35 9.00001L35 7.00001L1.74846e-07 7L-1.74846e-07 9Z" fill="#E31E1E"/></svg>',
      dots: true,
      responsive:[
        {
          breakpoint:991,
          settings:{
            slidesToShow: 4
          }
        },
        {
          breakpoint:767,
          settings:{
            slidesToShow: 2
          }
        }
      ]
    });

    function featuresSlider() {
      $('.features-slider').slick({
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
        {
          breakpoint: 991,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });
    }

    $(document).ready(function() {
      scrollDes();
    
      $( window ).resize(function() {
        scrollDes();
      });
    })
    
    function scrollDes() {
      if ($(window).width() < 1350) {
        featuresSlider();
      }
    }

    $('.steps-box-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: '<a id="steps-next" class="steps-box__link slider-arrow slider-arrow__right">Следующий шаг</a>',
      prevArrow: '',
      fade: true,
      asNavFor: '.steps-slider-nav'
    });
    $('.steps-slider-nav').slick({
      autoplay: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.steps-box-slider',
      focusOnSelect: true,
    });



    //* Toggle Block ---------------- *//
    function clickToggle(block) {
      if (block.length) {
        // var $this = $(this);
        block.on('click', function () {
          $(this).toggleClass('is-active').next().slideToggle(300);
        });
      }
    }
    clickToggle($('.js-drop-click'));


    //* Tabs ---------------- *//
    $(function () {
      $("ul.tabs").on("click", "li:not(.is-active)", function () {
          $(this).addClass("is-active")
          .siblings()
          .removeClass("is-active")
          .closest("div.tabs-main")
          .find("div.tabs-content")
          .removeClass("is-active")
          .eq($(this).index()).addClass("is-active");
      });
    });


    //* Up button  --------------------------*//
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if ($('#upbutton').is(':hidden')) {
                $('#upbutton').css({opacity : 1}).fadeIn('slow');
            }
        } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
    });

    $('#upbutton').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 600);
    });


    //* Menu --------------------------*//
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.mobile_menu').slideToggle(500);
      $('body').toggleClass('is-fixed');
      $('#header').toggleClass('is-shadow');
    });
    // $('#close').click(function(){
    //     $(this).toggleClass('hide');
    //     $('.mobile-menu').slideToggle(500);
    // });

    // $('.mobile-menu a').click(function() {
    //     $('#nav-icon').toggleClass('open');
    //     $('.mobile-menu').slideToggle(500);
    // });

    $('.dropdown').click(function (e) {
      // $(this).toggleClass('open');
      e.preventDefault()
      var $this = $(this),
      menuDropdown = $('.menu-depth-1');
      menuDropdown.toggleClass('is-active');

      $this.toggleClass('is-active')

      $(document).mouseup(function (e) {
        if (!$this.is(e.target) && $this.has(e.target).length === 0 && !$this.is(e.target) && $this.has(e.target).length === 0) {
          menuDropdown.removeClass('is-active');
          $this.removeClass('is-active');
        }
      });
    });
    

    //* Modal ---------------- *//
    $('.callback__button').click(function(){
      $.fancybox.open($("#modal-callback"));
    });
    $('.sum__button').click(function(){
      $.fancybox.open($("#modal-sum"));
    });
    $('.zamer__button').click(function(){
      $.fancybox.open($("#modal-zamer"));
    });
  
    $(document).ready(function() {
      $('input[type="tel"]').mask("+7 (999) 999-99-99");
    });

    $(function() {
      $("input:file").change(function (){
        var fileName = $(this).val();
          $('.upload-file__check').addClass('active');
      });
    });

})

  //* Map pin  --------------------------*//
  function pin(id) {
    let a = $('.map_pin'),
      b = $('.address-block__item'),
      c = $('.map_pin_'+ id),
      d = $('.map_text_' + id);
  
    a.removeClass('is-active');
    b.removeClass('is-active');
    c.addClass('is-active');
    d.addClass('is-active');
  }