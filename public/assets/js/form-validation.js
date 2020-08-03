"use strict";
+function($, window){

	$( "#form-validation" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			inputName: {
				required: true
			},
			inputEmail: {
				required: true,
				email: true
			},
			inputSubject: {
				required: true
			},
			inputMessage: {
				required: true
			},
		}
	});

	$( "#form-validation2" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			inputName2: {
				required: true
			},
			inputEmail2: {
				required: true,
				email: true
			},
			inputSubject2: {
				required: true
			},
			inputMessage2: {
				required: true
			},
		}
	});

	$( "#form-validation3" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			inputName3: {
				required: true
			},
			inputEmail3: {
				required: true,
				email: true
			},
			inputSubject3: {
				required: true
			},
			inputMessage3: {
				required: true
			},
		}
	});

	$( "#form-validation-footer" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			inputName4: {
				required: true
			},
			inputEmail4: {
				required: true,
				email: true
			},
			inputMessage4: {
				required: true
			},
		}
	});

	$( "#login-form" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			usernameLogin: {
				required: true
			},
			passwordLogin: {
				required: true
			},
		}
	});

	$( "#register-form" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			emailRegister: {
				required: true,
				email: true
			},
			usernameRegister: {
				required: true
			},
			passwordRegister: {
				required: true
			},
			passwordRegisterConfirm: {
				required: true,
				equalTo: '#passwordRegister'
			},
		}
	});

	$( "#register-form-widget" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			emailRegisterWidget: {
				required: true,
				email: true
			},
			usernameRegisterWidget: {
				required: true
			},
			passwordRegisterWidget: {
				required: true
			},
		}
	});

	$( "#form-validation4" ).validate({
		ignore: ':hidden:not(:checkbox)',
		errorElement: 'label',
		errorClass: 'error',
		rules: {
			inputRequired: {
				required: true
			},
			inputMinLength: {
				required: true,
				minlength: 6
			},
			inputMaxLength: {
				required: true,
				minlength: 8
			}, 
			inputUrl: {
				required: true,
				url: true
			},
			inputRangeLength: {
				required: true,
				rangelength: [2, 6]
			},
			inputMinValue: {
				required: true,
				min: 8
			},
			inputMaxValue: {
				required: true,
				max: 6
			},
			inputRangeValue: {
				required: true,
				max: 6,
				range: [6, 12]
			},
			inputEmail: {
				required: true,
				email: true
			},
			inputPassword: {
				required: true
			},
			inputPasswordConfirm: {
				required: true,
				equalTo: '#password'
			},
			inputDigit: {
				required: true,
				digits: true
			},
			inputValidCheckbox: {
				required: true
			}
		}
	});

	var formValidation = {};

	formValidation.init = function() {

	};	
	window.formValidation = formValidation;

}(jQuery, window);

// initialize app
+function($) {
	formValidation.init();		
}(jQuery);
