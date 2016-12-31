// (function() {
	const $body = $('html,body');
	const $window = $(window);
	const scrollTo = function (selector) {
		const windowHeightPadded  = $window.height();
		const currentOffset = windowHeightPadded + $window.scrollTop();
		const dest = $(selector).offset().top;
		if (currentOffset <= dest) {
			$body.animate({
	            scrollTop: dest - 360
	        }, 800, "easeInOutExpo");
		}
	}
	// window['scrollTo'] = scrollTo;
// })();