"use strict";
+function($, window){

	var googleMap = {};

	googleMap.init = function() {

		var latitude = 25.777008, longitude = -80.131425, mapZoom = 16;
		var contentString = '<h4>Info Window</h4>'+
							'<div class="m-t-10">' +
							'<p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>' +
							'</div>';

		// Map Configuration
		var markerMapConfig = {
			center: new google.maps.LatLng(latitude, longitude),
				zoom: mapZoom,
				styles: [
					{
						"featureType": "landscape.man_made",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f7f1df"
							}
						]
					},
					{
						"featureType": "landscape.natural",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#d0e3b4"
							}
						]
					},
					{
						"featureType": "landscape.natural.terrain",
						"elementType": "geometry",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.business",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.medical",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#fbd3da"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#bde6ab"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffe15f"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#efd151"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#ffffff"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "black"
							}
						]
					},
					{
						"featureType": "transit.station.airport",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#cfb2db"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#a2daf2"
							}
						]
					}
				],
			  mapTypeId: 'roadmap'
		};

		

		// Create Map
		var customMarkerMap = new google.maps.Map(document.getElementById('custom-marker-map'), {
			zoom: 16,
			center: new google.maps.LatLng(latitude, longitude),
			mapTypeId: 'roadmap'
		});


		// Marker
		var customMarker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			icon: 'assets/images/map-marker.png',
			map: customMarkerMap,
			visible: true
		});

	};	
	window.googleMap = googleMap;

}(jQuery, window);

// initialize app
+function($) {
	googleMap.init();		
}(jQuery);
