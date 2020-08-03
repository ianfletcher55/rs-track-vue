"use strict";
+function($, window){
	
	var dataWidgets = {};

	dataWidgets.init = function() {
		
		var sparkLineData1 = [134, 165, 141, 165, 147, 163, 181, 152, 185, 171, 203, 178, 257];

		$("#data-widgets-bars").sparkline( sparkLineData1,  
		{
			type: 'bar',
			width: '100',
			height: '40',
			barWidth: 3,
			barSpacing: 5,
			barColor: datawidgets.colors.primary,
		});
		
		$("#data-widgets-sparkline").sparkline( sparkLineData1,  
		{
			type: 'line',
			width: '120',
			spotColor: false,
			minSpotColor: false,
			maxSpotColor:false,
			lineWidth: 1.5,
			height: '40',
			fillColor: datawidgets.colors.successFaded,
			lineColor: datawidgets.colors.success
		});

		$('#map').vectorMap({
			map: 'world_mill',
			backgroundColor: datawidgets.colors.white,
			zoomOnScroll: false,
			regionStyle: {
				initial: {
					fill: '#e9eaee',
					'stroke-width': 0.5,
					'stroke': datawidgets.colors.white,
					'cursor': 'pointer'
				},
				hover: {
					'fill-opacity': 0.6
				}
			},
			markerStyle: {
                hover: {
                    r: 12,
                    stroke: datawidgets.colors.borderColor,
                    'stroke-width': 10
                }
            },

			markers: [{
				latLng: [40, -99],
				name: '52%',
				style: { 
					fill: datawidgets.colors.primary, 
					stroke: datawidgets.colors.primary, 
					'fill-opacity': 1, 
					'stroke-width': 8, 
					'stroke-opacity': 0.4, 
					'cursor': 'pointer', 
					r: 8
				}
			}, {
				latLng: [47.49, 19],
				name: '21%',
				style: { 
					fill: datawidgets.colors.success, 
					stroke: datawidgets.colors.success, 
					'fill-opacity': 1, 
					'stroke-width': 8, 
					'stroke-opacity': 0.4, 
					'cursor': 
					'pointer', 
					r: 8
				}
			}, {
				latLng: [37, 77],
				name: '10%',
				style: { 
					fill: datawidgets.colors.warning, 
					stroke: datawidgets.colors.warning,
					'fill-opacity': 1, 
					'stroke-width': 8, 
					'stroke-opacity': 0.4, 
					'cursor': 'pointer', 
					r: 8
				}
			}, {
				latLng: [-26, 137],
				name: '17%',
				style: { 
					fill: datawidgets.colors.danger, 
					stroke: datawidgets.colors.danger,
					'fill-opacity': 1, 
					'stroke-width': 8, 
					'stroke-opacity': 0.4, 
					'cursor': 'pointer', 
					r: 8
				}
			}]
		});
	};	

	window.dataWidgets = dataWidgets;

}(jQuery, window);

// initialize app
+function($) {
	dataWidgets.init();		
}(jQuery);
	


