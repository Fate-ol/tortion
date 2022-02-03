$(document).ready(function() {


  function slide_r() {
    $('.header-wrapper').css('height', $('.header-out').height() + 'px');
    $('.footer-wrapper').css('height', $('.footer.footer-pages').outerHeight(true) + 'px');
  }

  $(window).resize(function() {
    slide_r();
  });
  slide_r();

  $(window).on("load", function() {
    slide_r();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 120) {
      $('.header-out').addClass("fix");
    } else {
      $('.header-out').removeClass("fix");
    }
  });

  $('.main-menu__ico').click(function() {
    $(this).closest('.main-menu').toggleClass('open');
    return false;
  });


  $('.main-menu a[href*="#"]').click(function() {
    $('#main-menu').removeClass('open');
  });


	$('.quotes-slider').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1,
    fade: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
	});



});