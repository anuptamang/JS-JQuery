jQuery(function() {
	initGoogleMap();
});

//custom google map
function initGoogleMap() {
	jQuery('.google-map-holder').each(function() {
		var holder =jQuery(this);
		var mapHolder = holder.find('#map');
		var mapStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#faf7f5"},{"saturation":"43"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"saturation":"-10"},{"lightness":"36"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"17"},{"lightness":"25"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#c4e0ed"},{"visibility":"on"}]}];

		// Create the map
		var mapLat = mapHolder.data('lat');
		var mapLng = mapHolder.data('lng');
		var map = new google.maps.Map(mapHolder[0], {
			zoom: 13,
			styles: mapStyle,
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			center: new google.maps.LatLng(mapLat, mapLng)
		});

		// Add a marker
		var dataMarker = holder.find('.map-marker img');
		var dataMarkerSrc = dataMarker.prop('src');
		var dataMarkerWidth = dataMarker.width();
		var dataMarkerHeight = dataMarker.height();

		var customMarker = {
			url: dataMarkerSrc,
			scaledSize: new google.maps.Size(dataMarkerWidth, dataMarkerHeight)
		}

		var marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(mapLat, mapLng),
			optimized: false,
			icon: customMarker,
		});
		marker.addListener('click', toggleBounce);

		function toggleBounce() {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	});
}