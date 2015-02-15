// CSS-Tricks
// http://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
	/** Performs a smooth page scroll to an anchor on the same page. */
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				if(target.selector != "#top"){
					$('html,body').animate({
						scrollTop: target.offset().top-$('#nav').height()
					}, 1000);
					return false;
				}else{
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		}
	});
	
		/** Shows graphics for navigation to top or bottom of page. */
	$(document).on('scroll', function(){
		var currentPos = $('body').scrollTop();
		if(currentPos != 0 && currentPos != $(document).height()-$(window).height()){
			$('#page').fadeIn('slow');
		}else{
			$('#page').hide();
		}
	});
});

