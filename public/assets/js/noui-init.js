"use strict";
+function($, window){

	var horizontalPrimary = document.getElementById('horizontal-primary');
	var horizontalSuccess = document.getElementById('horizontal-success');
	var horizontalInfo = document.getElementById('horizontal-info');
	var horizontalWarning = document.getElementById('horizontal-warning');
	var horizontalDanger = document.getElementById('horizontal-danger');

	var verticalPrimary = document.getElementById('vertical-primary');
	var verticalSuccess = document.getElementById('vertical-success');
	var verticalInfo = document.getElementById('vertical-info');
	var verticalWarning = document.getElementById('vertical-warning');
	var verticalDanger = document.getElementById('vertical-danger');

	var rangeSlider = document.getElementById('range-slider');
	var dragSlider = document.getElementById('drag-slider');
	var stepSlider = document.getElementById('step-slider');


	noUiSlider.create(horizontalPrimary, {
		start: 70,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});


	noUiSlider.create(horizontalSuccess, {
		start: 40,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizontalInfo, {
		start: 80,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizontalWarning, {
		start: 50,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(horizontalDanger, {
		start: 30,
		connect: "lower",
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalPrimary, {
		start: 70,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalSuccess, {
		start: 40,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalInfo, {
		start: 80,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalWarning, {
		start: 50,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(verticalDanger, {
		start: 30,
		connect: "lower",
		orientation: 'vertical',
		step: 1,
		range: {
			'min': 0,
			'max': 100
		}
	});

	noUiSlider.create(rangeSlider, {
		connect: true,
		behaviour: 'tap',
		start: [ 100, 900 ],
		range: {
			'min': [ 0 ],
			'max': [ 1000 ]
		}
	});

	var nodes = [
		document.getElementById('range-min'), // 0
		document.getElementById('range-max')  // 1
	];

	// Display the slider value and how far the handle moved
	// from the left edge of the slider.
	rangeSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
		nodes[handle].innerHTML = '$' + values[handle] ;
	});

	noUiSlider.create(stepSlider, {
		start: 70,
		connect: "lower",
		range: {
			min: 0,
			max: 100
		},
		pips: {
			mode: 'values',
			values: [0,10,20,30,40,50,60,70,80,90,100],
			density: 10
		}
	});

	var sliders = {};

	sliders.init = function() {

	};	
	window.sliders = sliders;

}(jQuery, window);

// initialize app
+function($) {
	sliders.init();		
}(jQuery);