// ============================================= //
//		Это демо файл							 //
//		js код нужно перенсти					 //
//		в файл скриптовых инициализаций php		 //
// ============================================= //

if (window.jQuery !== undefined) {
	(function($){
		
		// если wHTML еще НЕ существует
		// к примеру, из-за асинхроности скриптов верстки
		if (undefined === window.wHTML) {
			window.wHTML = {};
		}
		
		// игнорируемые типы инпутов
		var ignoredInputsType = [
			'submit',
			'reset',
			'button',
			'image'
		];
		
		wHTML.formValidationAfterSubmit = function( $form, response ) {
			if (response.type == 'success' && response.message) {
				$.magnificPopup.close();
				
				wHTML.message({
					message: response.message,
					type: 'success'
				});
			}
			if (response.type == 'error' && response.message) {
				wHTML.message({
					message: response.message,
					type: 'error'
				});
			}
		}
		
		// $form - текушая форма (jquery element)
		wHTML.formValidationOnSubmit = function($form) {
			wHTML.preloaderShow();
			
			var actionUrl = $form.data('ajax');
			
			// оброботчик не указан - выходим
			if (typeof(actionUrl) != 'string') {
				console.warn('ajax оброботчик не указан');
				return;
			}
			
			// данные формы
			var formData = new FormData();
            formData.append('lang', $('.select__head').attr('data-lang'));
			
			// перебираем элементы
			$form.find('input, textarea, select').each(function(index, element) {
				
				var $element = $(element),
					tag = element.tagName.toLowerCase(),
					name = $element.data('name') || null,
					value = element.value,
					type = element.type;
				
				// нету имени - пропускаем
				if (null == name) {
					return true;
				}
				
				// фильттруем инпуты по типу
				if (ignoredInputsType.indexOf(type) >= 0) {
					return true;
				}
				
				switch( tag ) {
					case 'input':
						var notCheckbox = (type != 'checkbox');
						var checkedCheckbox = (type == 'checkbox' && element.checked);
						var notRadio = (type != 'radio');
						var checkedRadio = (type == 'radio' && element.checked);
						
						if (notCheckbox || checkedCheckbox) {
							
							if (type === 'file') {
								var files = element.files;
								for(var i = 0; i < files.length; i++) {
									var file = files[i];
									formData.append(file.name, file);
								}
								
							} else if (checkedRadio) {
								formData.append(name, value);
								
							} else if(type != 'radio') {
								formData.append(name, value);
							}
							
						}
						break;
					
					
					
					case 'textarea':
						formData.append(name, value);
						break;
					
					
					case 'select':
						var values = $element.val();
						var multiName = /\[\]$/;
						
						// если data-name="sameName[]" или select -> multiple
						if (multiName.test(name) || element.multiple) {
							name = name.replace(multiName, '');
							for (var i = 0; i < values.length; i++) {
								formData.append(name, values[i]);
							}
							
							// если data-name="sameName" или single
						} else {
							formData.append(name, values);
						}
						break;
				}
				
			});
			
			
			// TODO - переписать запрос и ответ
			var request = new XMLHttpRequest();;
            request.open("POST", '/form/' + actionUrl);
			request.onreadystatechange = function() {
				var status;
				var resp;
				if (request.readyState == 4) {
					status = request.status;
					resp = request.response;
					resp = JSON.parse(resp);
					
					wHTML.preloaderHide();
					
					if (status == 200) {
						if( resp.success ) {
							if (!resp.noclear) {
								wHTML.formValidationReset( $form );
							}
							if (resp.clear) {
								for(var i = 0; i < resp.clear.length; i++) {
									$('input[name="' + resp.clear[i] + '"]').val('');
									$('textarea[name="' + resp.clear[i] + '"]').val('');
								}
							}
							if (resp.insert && resp.insert.selector && resp.insert.html) {
								$(resp.insert.selector).html(resp.insert.html);
							}
							if ( resp.response ) {
                                $.magnificPopup.close();
								wHTML.message({
									message: resp.response,
									type: 'success'
								});
							}
						} else {
							if ( resp.response ) {
                                wHTML.message({
                                    message: resp.response,
                                    type: 'error'
                                });
							}
						}
						if( resp.redirect ) {
							if(window.location.href == resp.redirect) {
								window.location.reload();
							} else {
								window.location.href = resp.redirect;
							}
						}
						if (resp.reload){
							window.location.reload();
						}
						wHTML.formValidationAfterSubmit( $form, resp );
					} else {
						alert('Something went wrong,\nbut HTML fine ;)');
					}
				}
				
			};
			request.send(formData);
			return false;
		};
	})(jQuery);
}


// ///////////////////////////


// ============================================= //
//		Это демо файл							 //
//		js код нужно перенсти					 //
//		в файл скриптовых инициализаций php		 //
// ============================================= //

if (window.jQuery !== undefined) {
	(function($){
		
		// если wHTML еще НЕ существует
		// к примеру, из-за асинхроности скриптов верстки
		if (undefined === window.wHTML) {
			window.wHTML = {};
		}
		
		// игнорируемые типы инпутов
		var ignoredInputsType = [
			'submit',
			'reset',
			'button',
			'image'
		];
		
		wHTML.formValidationAfterSubmit = function( $form, response ) {
			if (response.type == 'success' && response.message) {
				$.magnificPopup.close();
				
				wHTML.message({
					message: response.message,
					type: 'success'
				});
			}
			if (response.type == 'error' && response.message) {
				wHTML.message({
					message: response.message,
					type: 'error'
				});
			}
		}
		
		// $form - текушая форма (jquery element)
		wHTML.formValidationOnSubmit = function($form) {
			wHTML.preloaderShow();
			
			var actionUrl = $form.data('ajax');
			
			// оброботчик не указан - выходим
			if (typeof(actionUrl) != 'string') {
				console.warn('ajax оброботчик не указан');
				return;
			}
			
			// данные формы
			var formData = new FormData();
            formData.append('lang', $('.select__head').attr('data-lang'));
			
			// перебираем элементы
			$form.find('input, textarea, select').each(function(index, element) {
				
				var $element = $(element),
					tag = element.tagName.toLowerCase(),
					name = $element.data('name') || null,
					value = element.value,
					type = element.type;
				
				// нету имени - пропускаем
				if (null == name) {
					return true;
				}
				
				// фильттруем инпуты по типу
				if (ignoredInputsType.indexOf(type) >= 0) {
					return true;
				}
				
				switch( tag ) {
					case 'input':
						var notCheckbox = (type != 'checkbox');
						var checkedCheckbox = (type == 'checkbox' && element.checked);
						var notRadio = (type != 'radio');
						var checkedRadio = (type == 'radio' && element.checked);
						
						if (notCheckbox || checkedCheckbox) {
							
							if (type === 'file') {
								var files = element.files;
								for(var i = 0; i < files.length; i++) {
									var file = files[i];
									formData.append(file.name, file);
								}
								
							} else if (checkedRadio) {
								formData.append(name, value);
								
							} else if(type != 'radio') {
								formData.append(name, value);
							}
							
						}
						break;
					
					
					
					case 'textarea':
						formData.append(name, value);
						break;
					
					
					case 'select':
						var values = $element.val();
						var multiName = /\[\]$/;
						
						// если data-name="sameName[]" или select -> multiple
						if (multiName.test(name) || element.multiple) {
							name = name.replace(multiName, '');
							for (var i = 0; i < values.length; i++) {
								formData.append(name, values[i]);
							}
							
							// если data-name="sameName" или single
						} else {
							formData.append(name, values);
						}
						break;
				}
				
			});
			
			
			// TODO - переписать запрос и ответ
			var request = new XMLHttpRequest();;
            request.open("POST", '/form/' + actionUrl);
			request.onreadystatechange = function() {
				var status;
				var resp;
				if (request.readyState == 4) {
					status = request.status;
					resp = request.response;
					resp = JSON.parse(resp);
					
					wHTML.preloaderHide();
					
					if (status == 200) {
						if( resp.success ) {
							if (!resp.noclear) {
								wHTML.formValidationReset( $form );
							}
							if (resp.clear) {
								for(var i = 0; i < resp.clear.length; i++) {
									$('input[name="' + resp.clear[i] + '"]').val('');
									$('textarea[name="' + resp.clear[i] + '"]').val('');
								}
							}
							if (resp.insert && resp.insert.selector && resp.insert.html) {
								$(resp.insert.selector).html(resp.insert.html);
							}
							if ( resp.response ) {
                                $.magnificPopup.close();
								wHTML.message({
									message: resp.response,
									type: 'success'
								});
							}
						} else {
							if ( resp.response ) {
                                wHTML.message({
                                    message: resp.response,
                                    type: 'error'
                                });
							}
						}
						if( resp.redirect ) {
							if(window.location.href == resp.redirect) {
								window.location.reload();
							} else {
								window.location.href = resp.redirect;
							}
						}
						if (resp.reload){
							window.location.reload();
						}
						wHTML.formValidationAfterSubmit( $form, resp );
					} else {
						alert('Something went wrong,\nbut HTML fine ;)');
					}
				}
				
			};
			request.send(formData);
			return false;
		};
	})(jQuery);
}
