jQuery(function() {
	initLavaLampMenu();
});

//lavaLamp menu
function initLavaLampMenu() {
	var $win = jQuery(window);
	var body = jQuery('body, html');
	var resizeClass = 'resize-active';
	var item = jQuery('.nav-item');
	var lamp = jQuery('<li class="lava-lamp"></li>');
	var activeList = jQuery('.nav-item.active');
	var flag, timer;

	jQuery('.navigation').each(function() {
		var holder = jQuery(this);
		var currentList = activeList;
		var currentLeft;
		var currentWidth;

		body.on('mouseenter', '.nav-item', function() {
			var $this = jQuery(this);
			currentList = $this;
			updateLamp();
		});

		body.on('mouseleave', '.navigation', function() {
			currentList = activeList;
			updateLamp();
		});

		addLamp();

		function addLamp() {
			getCurrentProps();
			holder.append(lamp);
			addProps();
		}

		function updateLamp() {
			getCurrentProps();
			addProps();
		}

		function getCurrentProps() {
			currentLeft = currentList.position().left;
			currentWidth = currentList.css('width');
		}

		function addProps() {
			lamp.css({
				'position': 'absolute',
				'left': currentLeft,
				'top': '0',
				'bottom': '0',
				'width' : currentWidth,
				'pointer-events' : 'none',
				'z-index': '0',
				'transition': 'all 300ms linear'
			});
		}

		function resizeHandler() {
			updateLamp();

			var removeClassHandler = function() {
				flag = false;
				body.removeClass(resizeClass);
			};

			var resizeClassHandler = function() {
				if(!flag) {
					flag = true;
					body.addClass(resizeClass);
				}

				clearTimeout(timer);
				timer = setTimeout(removeClassHandler, 500);
			};

			resizeClassHandler();
		}

		$win.on('load', addLamp);
		$win.on('resize orientationchange', resizeHandler);
	});
}