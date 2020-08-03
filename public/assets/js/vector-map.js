"use strict";
+function($, window){
	var vectorMap = {};

	vectorMap.init = function() {

		$('#world-map').vectorMap({
			map: 'world_mill',
			backgroundColor: datawidgets.colors.white,
			zoomOnScroll: false,
			hoverColor: datawidgets.colors.borderColor,
			regionStyle: {
				initial: {
					fill: datawidgets.colors.borderColor,
					'cursor': 'pointer'
				},
				hover: {
					fill: datawidgets.colors.dark,
					'fill-opacity': 0.3
				}
			}
		});
	};	
	window.vectorMap = vectorMap;

}(jQuery, window);

// initialize app
+function($) {
	vectorMap.init();		
}(jQuery);
