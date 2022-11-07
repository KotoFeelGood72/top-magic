function backToTop()  {

	$(window).scroll(function(){
		if($(window).scrollTop() > 500) {
			$('.backToTop').show(100);
		} else {
			$('.backToTop').hide(100);
		}
	});
	
	$('.backToTop_link').click(function(){
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});
}