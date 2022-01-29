$(document).ready(function(){
		
	$('input.styler, select.styler').styler();
	
	 function slide_r()
	{
		$('.header-wrapper').css('height',$('.header-out').height()+'px');
		$('.footer-wrapper').css('height',$('.footer.footer-pages').outerHeight(true)+'px');
  
	}
	
	$(window).resize(function()
	{
		slide_r();
	});
	slide_r();
	
	$(window).on("load", function()
	{
		slide_r();
	});

	
  $('.main-menu__ico').click(function() {
    $( this ).closest('.main-menu').toggleClass('open');
    return false;
  });

});
