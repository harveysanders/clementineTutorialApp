'use strict'

(function () {
	var addButton = document.querySelector('.btn-add');
	var deleteButton = document.querySelector('.btn-delete');
	var click = document.querySelector('#click-nbr');
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
	
})();