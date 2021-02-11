$(document).ready(function(){
    $(".reviews-slider").slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        autoplay:false,
        prevArrow: '<div class="reviews-arrow reviews-arrow-prev"><svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.61426 14.228L2.00023 7.614L8.61426 0.999966" stroke="#E1E3F0" stroke-width="2"/></svg></div>',
        nextArrow: '<div class="reviews-arrow reviews-arrow-prev"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.61426 1L13.2283 7.61403L6.61426 14.2281" stroke="#E1E3F0" stroke-width="2"/></svg></div>',
        appendArrows: $('.reviews-tools')
      });
      function setRevNum(){
          const allNum = $('.reviews-slider .slick-slide').length;
          $('.reviews-tools-dots .reviews-all_num').html(allNum);
          $('.reviews-tools-dots .reviews-current_num').html('01');
      };
      setRevNum();
      $('.reviews-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const current = Math.ceil((nextSlide + 1) / 3);
        $('.reviews-tools-dots .reviews-current_num').html(current < 10 ? '0' + current : current);
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

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [50.439904, 30.309463],
                zoom: 12,
                // Также доступны наборы 'default' и 'largeMapDefaultSet'
                // Элементы управления в наборах подобраны оптимальным образом
                // для карт маленького, среднего и крупного размеров.
                controls: []
            }, {
                suppressMapOpenBlock: true
            });
    });
});