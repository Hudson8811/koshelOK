$(document).ready(function(){
  
  $('.mobile-menu-link-more').click(function(e){
    e.preventDefault();
    const $this = $(this);
    if(!$this.hasClass('active')){
      $('.mobile-submenu').slideUp();
      $('.mobile-menu-link-more').removeClass('active');
      $this.addClass('active');
      $this.siblings('.mobile-submenu').slideDown();
    } else{
      $this.removeClass('active');
      $this.siblings('.mobile-submenu').slideUp();
    }
  });

  $('.header-btn').click(function(e){
    e.preventDefault();
    if($(window).width() < 1001){
      const $this = $(this);
      $('.mobile-menu-wrapper').addClass('is-active');
      $('.mobile-overlay').addClass('is-active');
      $('.mobile-btns').addClass('is-active');
      $('body').addClass('hidden');
    }
  });

  $('.mobile-burger').click(function(e){
    e.preventDefault();
      $('.mobile-menu-wrapper').removeClass('is-active');
      $('.mobile-overlay').removeClass('is-active');
      $('.mobile-btns').removeClass('is-active');
      $('body').removeClass('hidden');
  });


    $(".reviews-slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        autoplay:false,
        prevArrow: '<div class="reviews-arrow reviews-arrow-prev"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.61426 14.228L2.00023 7.614L8.61426 0.999966" stroke="#E1E3F0" stroke-width="2"/></svg></div>',
        nextArrow: '<div class="reviews-arrow reviews-arrow-prev"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.61426 1L13.2283 7.61403L6.61426 14.2281" stroke="#E1E3F0" stroke-width="2"/></svg></div>',
        appendArrows: $('.reviews-tools'),
        responsive: [{
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
              }
            }
        ]
      });
      function setRevNum(){
          const allNum = $('.reviews-slider .slick-slide').length;
          const allNumDesc = Math.ceil(allNum / 3); 
          if($(window).width() < 769){
            $('.reviews-tools-dots .reviews-all_num').html(allNum);
            $('.reviews-tools-dots .reviews-current_num').html('01');
          } else{
            $('.reviews-tools-dots .reviews-all_num').html(allNumDesc);
            $('.reviews-tools-dots .reviews-current_num').html('01');
          }
          
      };
      setRevNum();

      if($('.clip-bg')){
        if($(window).width() < 769){
          $('.clip-bg:nth-child(1)').attr('viewBox', '0 0 335 365')
        }
      }

      $(window).resize(function(){
        setRevNum();

        if($('.clip-bg')){
          if($(window).width() < 769){
            $('.clip-bg:nth-child(1)').attr('viewBox', '0 0 335 365')
          }
        }
      })
      $('.reviews-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if($(window).width() < 769){
          const current = Math.ceil((nextSlide + 1));
          $('.reviews-tools-dots .reviews-current_num').html(current < 10 ? '0' + current : current);
        } else{
          const current = Math.ceil((nextSlide + 1) / 3);
          $('.reviews-tools-dots .reviews-current_num').html(current < 10 ? '0' + current : current);
        }
    });

    $('.faq-heading').click(function(){
        const $this = $(this);
        if(!$this.hasClass('active')){
            $('.faq-heading').removeClass('active');
            $('.faq-content').slideUp();
            $this.addClass('active');
            $this.siblings('.faq-content').slideDown();
        } else{
            $this.removeClass('active');
            $this.siblings('.faq-content').slideUp();
        }
    });

    $('[data-fancybox]').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		}
	});

    $("#slider-range").slider({
        range: "min",
        min: 1000,
        max: 15000,
        value: 4000,
        slide: function( event, ui ) {
          $( "#amount" ).val( ui.value + " грн");
        }
      });
      $( "#amount" ).val( $( "#slider-range" ).slider( "value" ) + " грн");

    $("#slider-range2").slider({
        range: "min",
        min: 1,
        max: 30,
        value: 1,
        slide: function( event, ui ) {
          $( "#amount2" ).val( ui.value + " дней");
        }
      });
      $( "#amount2" ).val( $( "#slider-range2" ).slider( "value" ) + " дней");

      $("#slider-range3").slider({
        range: "min",
        min: 1000,
        max: 15000,
        value: 4000,
        slide: function( event, ui ) {
          $( "#amount3" ).val( ui.value + " грн");
        }
      });
      $( "#amount3" ).val( $( "#slider-range3" ).slider( "value" ) + " грн");

    $("#slider-range4").slider({
        range: "min",
        min: 1,
        max: 30,
        value: 1,
        slide: function( event, ui ) {
          $( "#amount4" ).val( ui.value + " дней");
        }
      });
      $( "#amount4" ).val( $( "#slider-range4" ).slider( "value" ) + " дней");

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [50.439904, 30.309463],
                zoom: 12,
                controls: []
            }, {
                suppressMapOpenBlock: true
            });
    });
});