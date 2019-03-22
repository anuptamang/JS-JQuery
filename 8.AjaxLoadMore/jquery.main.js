jQuery(function() {
	initLoadMore();
});

//ajax load more post
function initLoadMore() {
	jQuery('.load-more-holder').each(function() {
		var moreHolder = jQuery(this);
		var postBlock = moreHolder.find('.target-holder');
		var removeClass = 'btn-remove';
		var newItem = 'new-item';
		var selectorLinkMore = 'a.load-more';

		moreHolder.on('click', selectorLinkMore, function(e) {
			e.preventDefault();
			var link = jQuery(this);
			var href = link.attr('href');
			href += href.indexOf( '?' ) === -1 ? '?' : '&';
			href += 'ajax=1';

			jQuery.get(href, function(source) { 
				$source = jQuery(source);
				postBlock.append($source.addClass(newItem));

				if ($source.filter(selectorLinkMore).length) {
					link.removeClass(removeClass);
					link.attr('href', $source.filter(selectorLinkMore).attr('href'));
					$source.filter(selectorLinkMore).remove();
				} else {
					link.addClass(removeClass);
				}
				setTimeout(function() {
					$source.removeClass(newItem);
				}, 200);
			})
		})
	});
}