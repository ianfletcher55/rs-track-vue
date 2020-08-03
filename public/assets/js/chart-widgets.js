"use strict";
+function($, window){
	
	var chartWidgets = {};

	chartWidgets.init = function() {
		
		//chart-widget-linear
		var chartWidget1Ctx = document.getElementById('chart-widget-linear').getContext('2d');		
		var chartWidget1_chart = new Chart(chartWidget1Ctx, {
			type: 'line',
			data: {
				labels: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "20:00", "22:00", "00:00"],
				datasets: [{
					label: ' Visitors',
					backgroundColor: datawidgets.colors.transparent,
					borderColor: datawidgets.colors.warning,
					data: [999, 1243, 1089, 1299, 1123, 1299, 1047, 1287, 1123, 1319, 1199, 1429]
				}],
			},
			options: {
				legend: {
					display: false
				},
				maintainAspectRatio: false,
				elements: {
					line: {
						tension: 0,
						borderWidth: 2
					}
				},
				scales: {
					xAxes: [{display: false}],
					yAxes: [{display: false}]
				}
			}
		});

		//chart-widget-bars
		var chartWidget2 = document.getElementById("chart-widget-bars");
		var chartWidget2Ctx = chartWidget2.getContext('2d');
		var chartWidget2Gradient = chartWidget2Ctx.createLinearGradient(0, 0, 0, 150);
		chartWidget2Gradient.addColorStop(0, datawidgets.colors.success);
		chartWidget2Gradient.addColorStop(1, datawidgets.colors.success);
		var chartWidget2Config = new Chart(chartWidget2Ctx, {
			type: 'bar',
			data: {
				labels: [ 'Aug 1st', 'Aug 2nd', 'Aug 3rd', 'Aug 4th', 'Aug 5th', 'Aug 6th', 'Aug 7th', 'Aug 8th', 'Aug 9th', 'Aug 10th', 'Aug 11th', 'Aug 12th', 'Aug 13th', 'Aug 14th', 'Aug 15th'],
				datasets: [{
					label: 'Online Sales',
					backgroundColor: chartWidget2Gradient,
					pointBackgroundColor: chartWidget2Gradient,
					hoverBackgroundColor: chartWidget2Gradient,
					data: [ 31, 38, 32, 40, 34, 30, 26, 31, 38, 42, 47, 32, 29, 23, 26, 33]
				},
				{
					label: 'Offline Sales',
					backgroundColor: '#eaeaea',
					pointBackgroundColor: '#eaeaea',
					data: [ 16, 22, 27, 31, 22, 18, 15, 17, 17, 10, 16, 21, 13, 8, 11, 20]
				}]
			},
			
			options: {
				legend: {
					display: false
				},
				scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        stacked: true
                    }],
                    yAxes: [{
                        display: false,
                        stacked: true,
                        gridLines: false
					}]
				},
				responsive: true,
				maintainAspectRatio: false
			}
		});

		//chart-widget-circle
		var chartWidget6Ctx = document.getElementById('chart-widgets-circle').getContext('2d');
		chartWidget6Ctx.height = 150;
		var chartWidget6Gradient = chartWidget6Ctx.createLinearGradient(0, 0, 0, 150);
		chartWidget6Gradient.addColorStop(0, datawidgets.colors.primary);
		chartWidget6Gradient.addColorStop(1, datawidgets.colors.primary);

		var donutConfig = new Chart(chartWidget6Ctx, {
			type: 'doughnut',
			data: {
				labels: [" Online Sales", " Offline Sales"],
				datasets: [{
					data: [542, 207],
					backgroundColor: [chartWidget6Gradient, datawidgets.colors.gray]
				}]
			},
			options: {
				elements: {
					center: {
						text: '70%',
						color: datawidgets.colors.dark,
						sidePadding: 70
					}
				},
				maintainAspectRatio: false,
				hover: {mode: null},
				legend: {
					display: false
				},
				cutoutPercentage: 90,
			}
		});

		//chart-widget-linear-bottom
		var chartWidget7Ctx = document.getElementById('chart-widgets-linear-bottom').getContext('2d');		
		var chartWidget7 = new Chart(chartWidget7Ctx, {
			type: 'line',
			data: {
				labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8", "Week 9", "Week 10", "Week 11", "Week 12"],
				datasets: [{
					label: ' Earnings',
					backgroundColor: datawidgets.colors.transparent,
					borderColor: datawidgets.colors.success,
					data: [3456, 4345, 3758, 4141, 3721, 4523, 4112, 4799, 4199, 4341, 4150, 4699]
				}],
			},
			options: {
				legend: {
					display: false
				},
				maintainAspectRatio: false,
				elements: {
					line: {
						tension: 0,
						borderWidth: 1.5
					}
				},
				scales: {
					xAxes: [{display: false}],
					yAxes: [{display: false}]
				}
			}
		});

		//chart-widget-small-circle
		var chartWidget8Ctx = document.getElementById('chart-widgets-small-circle').getContext('2d');
		chartWidget8Ctx.height = 150;
		var chartWidget8Gradient = chartWidget8Ctx.createLinearGradient(0, 0, 0, 150);
		chartWidget8Gradient.addColorStop(0, datawidgets.colors.success);
		chartWidget8Gradient.addColorStop(1, datawidgets.colors.success);

		var chartWidget8Gradient2 = chartWidget8Ctx.createLinearGradient(0, 0, 0, 150);
		chartWidget8Gradient2.addColorStop(0, datawidgets.colors.primary);
		chartWidget8Gradient2.addColorStop(1, datawidgets.colors.primary);

		var donutConfig = new Chart(chartWidget8Ctx, {
			type: 'doughnut',
			data: {
				labels: ["Balance", "Transferred", "Withdrawed"],
				datasets: [{
					data: [30, 20, 50],
					backgroundColor: [chartWidget8Gradient, chartWidget8Gradient2, datawidgets.colors.info]
				}]
			},
			options: {
				elements: {
                    arc: {
                        borderWidth: 4,
                    }
                },
				maintainAspectRatio: false,
				hover: {mode: null},
				legend: {
					display: false
				},
				cutoutPercentage: 78,
			}
		});

		//chart-widget-waves
		var chartWidget9Ctx = document.getElementById('chart-widgets-waves').getContext('2d');		
		var chartWidget9Gradient = chartWidget9Ctx.createLinearGradient(40, 0, 50, 170);
		chartWidget9Gradient.addColorStop(0, datawidgets.colors.primary);
		chartWidget9Gradient.addColorStop(1, datawidgets.colors.primaryFaded);
		var chartWidget9 = new Chart(chartWidget9Ctx, {
			type: 'line',
			data: {
				labels: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10"],
				datasets: [{
					label: ' Sold',
					backgroundColor: chartWidget9Gradient,
					borderColor: datawidgets.colors.primary,
					data: [60, 66, 62, 69, 65, 71, 67, 73, 68, 77]
				}],
			},
			options: {
				legend: {
					display: false
				},
				maintainAspectRatio: false,
				elements: {
					line: {
						tension: 0.4,
						borderWidth: 2
					}
				},
				scales: {
					xAxes: [{display: false}],
					yAxes: [{display: false}]
				}
			}
		});

		//chart-widget-bars
		var chartWidget10Chart = document.getElementById("chart-widgets-bars");
		var chartWidget10Ctx = chartWidget10Chart.getContext('2d');
		var chartWidget10 = new Chart(chartWidget10Ctx, {
			type: 'bar',
			data: {
				labels: [ 'Hand Bags', 'Shoes', 'Jewelry', 'T-Shirts'],
				datasets: [{
					label: ' Products',
					backgroundColor: [datawidgets.colors.success , datawidgets.colors.info, datawidgets.colors.primary, datawidgets.colors.warning],
					borderColor: datawidgets.colors.transparent,
					pointBackgroundColor: datawidgets.colors.primary,
					borderWidth: 4,
					data: [ 33, 27, 18, 22]
				}]
			},
			options: {
				legend: {
					display: false
				},
				scales: {
					xAxes: [{
						barPercentage: 0.6,
						gridLines: { color: datawidgets.colors.transparent }
					}],
					yAxes: [{display: false}]
				}	
			}
		});

		//chart-widgets-user
		var chartWidget11 = document.getElementById("chart-widgets-user");
		var chartWidget11Ctx = chartWidget11.getContext('2d');
		var chartWidget11Config = new Chart(chartWidget11Ctx, {
			 type: 'radar',
			 data: {
			 labels: ["Illustrating", "Managing", "Designing", "Planning", "Coding", "HTML", "CSS"],
			 datasets: [{
				 label: ' John Doe',
				 backgroundColor: datawidgets.colors.successFaded,
				 borderColor: datawidgets.colors.success,
				 pointBackgroundColor: datawidgets.colors.success,
				 data: [65, 59, 90, 81, 56, 55, 40]
			 }, {
				 label: ' Erika Doe',
				 backgroundColor: datawidgets.colors.infoFaded,
				 borderColor: datawidgets.colors.info,
				 pointBackgroundColor: datawidgets.colors.info,
				 data: [28, 48, 40, 19, 96, 27, 100]
			 }]
		   },
			 
			 options: {
				maintainAspectRatio: false,
				legend: {
					display: false
				},
				scale: {
					ticks: {
					   display: false
					}
				 }	
			 }
		});

		//chart-widget-compare
		var chartWidget12Ctx = document.getElementById('chart-widgets-compare').getContext('2d');		
		var chartWidget12 = new Chart(chartWidget12Ctx, {
			type: 'line',
			data: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [{
					label: ' Sales',
					backgroundColor: datawidgets.colors.transparent,
					borderColor: datawidgets.colors.success,
					data: [52, 66, 61, 76, 68, 74, 66, 73, 68, 72, 70, 78]
				},
				{
					label: ' Products',
					backgroundColor: datawidgets.colors.transparent,
					borderColor: datawidgets.colors.info,
					data: [48, 58, 54, 60, 63, 63, 60, 60, 58, 63, 60, 68]
				},
				{
					label: ' Costs',
					backgroundColor: datawidgets.colors.transparent,
					borderColor: datawidgets.colors.warning,
					data: [45, 50, 50, 50, 53, 53, 50, 52, 51, 54, 55, 50]
				}],
			},
			options: {
				legend: {
					display: false
				},
				maintainAspectRatio: false,
				elements: {
					line: {
						tension: 0.2,
						borderWidth: 1.5
					}
				},
				scales: {
					xAxes: [{gridLines: { color: datawidgets.colors.transparent }}],
					yAxes: [{gridLines: { color: datawidgets.colors.borderColor }}]
				}
			}
		});

		//chart-widget-bigwaves
		var chartWidget13Ctx = document.getElementById('chart-widgets-bigwaves').getContext('2d');		
		var chartWidget13 = new Chart(chartWidget13Ctx, {
			type: 'line',
			data: {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [{
					label: ' Monthly Profit',
					backgroundColor: datawidgets.colors.successFaded,
					borderColor: datawidgets.colors.success,
					data: [2223, 3417, 3079, 4517, 3625, 4311, 3424, 4147, 3815, 4219, 4026, 4969]
				}],
			},
			options: {
				legend: {
					display: false
				},
				maintainAspectRatio: false,
				elements: {
					line: {
						borderWidth: 1.5
					}
				},
				scales: {
					xAxes: [{display: false}],
					yAxes: [{gridLines: { color: datawidgets.colors.borderColor }}]
				}
			},
			scales: {
				yAxes: [{
					stacked: true,
					ticks: {
						min: 0,
						stepSize: 30,
					}
				}]
			}
		});

		
	};	

	window.chartWidgets = chartWidgets;

}(jQuery, window);

// initialize app
+function($) {
	chartWidgets.init();		
}(jQuery);
	


