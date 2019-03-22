jQuery(function() {
	initVideoHover();
});

//video hover function
function initVideoHover() {
	var touchDevice = navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i);
		
	var body = jQuery('body,html');
	var activeClass = 'hover-active';
	var videoHolder = '.video-thumb';
	var timeOutDuration = 5000;
	
	jQuery('.video-thumb').each(function() {
		var holder = jQuery(this);
		var videoObj = holder.find('.video');
		var video = videoObj[0];
		var timeOut;

		if(!touchDevice) {
			body.on('mouseenter', videoHolder , function(e) {
				playVideo();
				clearTimeout(timeOut);
				timeOut = setTimeout(stopVideo , timeOutDuration);
			});

			body.on('mouseleave', videoHolder , function(e) {
				stopVideo();
			});
		}

		function playVideo() {
			holder.addClass(activeClass);
			video.play();
		}

		function stopVideo() {
			holder.removeClass(activeClass);
			video.pause();
			video.currentTime = 0;
		}
	});
}