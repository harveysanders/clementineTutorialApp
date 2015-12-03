//'use strict'; //use strict is not a function??

(function () {
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var clickNbr = document.querySelector('#click-nbr');
	var apiUrl = 'http://localhost:3000/api/clicks';

	function ready (fn) {
		if (typeof fn !== 'function') {
			return;
		}

		if (document.readyState === 'complete') {
			return fn();
		}
		document.addEventListener('DOMContentLoaded', fn, false); //read more for better understanding
	}

	function ajaxRequest (method, url, callback) {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onReadyStateChange = function() {
			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				callback(xmlhttp.response);
			}
		};
		xmlhttp.open(method, url, true);
		xmlhttp.send();
	}
	
	function updateClickCount (data) {
		var clicksObject = JSON.parse(data);
		clickNbr.innerHTML = clicksObject.clicks;
	}

	ready(ajaxRequest('GET', apiUrl, updateClickCount));

	addButton.addEventListener('click', function() {
		ajaxRequest('POST', apiUrl, function() {
			ajaxRequest('GET', apiUrl, updateClickCount)
		});
	}, false);

	deleteButton.addEventListener('click', function() {
		ajaxRequest('DELETE', apiUrl, function() {
			ajaxRequest('GET', apiUrl, updateClickCount);
		});
	}, false);

})();