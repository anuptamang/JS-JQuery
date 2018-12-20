jQuery(function() {
	initOpenClose();
});

//open-close init
function initOpenClose() {
	jQuery('.open-close').each(function(){
		var body = jQuery(document);
		var item = jQuery(this);
		var activeClass = 'active';
		var opener = item.find('.opener');
		var slide = item.find('.slide');
		var siblings = item.siblings('.open-close');
		var siblingsSlide = siblings.children('.slide');

		opener.on('click', function(e){
			e.preventDefault();
			openerAction();
		});

		body.on('click', function(e) {
			if(!jQuery(e.target).is(item) && !jQuery(e.target).closest(item).length){
				slide.slideUp(200);
				hideSlide();
			}
		});

		function initialSlide(){
			slide.slideUp(0);

			if (item.hasClass(activeClass)) {
				slide.slideDown(0);
			}
		}
		initialSlide();

		function hideSlide(){
			item.removeClass(activeClass);
		}

		function showSlide(){
			item.addClass(activeClass);
			siblings.removeClass(activeClass);
		}
		
		function switchSlide() {
			if (item.hasClass(activeClass)){
				hideSlide();
				slide.slideUp(200);
			}

			else {
				showSlide();
				slide.slideDown(200);
				siblingsSlide.slideUp(200);
			}
		}

		function openerAction(){
			switchSlide();
		}
	});
}