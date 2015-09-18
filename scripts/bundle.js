(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var $navBtn = $('#navBtn');
	var $imgUrl = $('#imgUrl');
	var $imgDesc = $('#imgDesc');
	var $cancelBtn = $('#cancelBtn');
	var $submitBtn = $('#submitBtn');
	var $imgList = $('#imgList');
	var $imgForm = $('#imgForm');
	var $error = $('#error');
	var $loginForm = $('#loginForm');
	var $username = $('#username');
	var $password = $('#password');
	var $loginBG = $('.loginBG');
	var $suBtn = $('#suBtn');
	var $suForm = $('#suForm');
	var $suUN = $('#suUN');
	var $suPW = $('#suPW');
	var $name = $('.username');

	var url = 'http://tiyfe.herokuapp.com/collections/fee';
	var usersUrl = 'http://tiyfe.herokuapp.com/collections/feeUsers';

	$imgForm.hide();
	$suForm.hide();

	$loginForm.submit(function (e) {
		e.preventDefault();
		var newUN = $username.val();
		var newPW = $password.val();

		console.log(newUN);
		console.log(newPW);

		$.get(usersUrl, function (response) {
			for (var i = 0; i < response.length; i++) {
				if (response[i].username === newUN && response[i].password === newPW) {
					$loginBG.toggle('down');
				}
			}
		}, 'json');
	});
	$suBtn.click(function () {
		$loginForm.toggle('down');
		$suForm.toggle('up');
	});

	$suForm.submit(function (e) {
		e.preventDefault();
		var newSU = $suUN.val();
		var newSUPw = $suPW.val();

		$.post(usersUrl, {
			username: newSU,
			password: newSUPw
		}, 'json');
		$loginBG.hide();
	});

	setInterval(function () {
		$.get(url, function (response) {
			$imgList.html('');
			response.forEach(function (response) {
				$imgList.append('<div class="full col-md-offset-1 col-md-3 col-lg-2"><div><img class="actualPic img-responsive" src="' + response.photo + '"></div><div class="person">' + response.username + '</div><div class="comments">' + response.caption + '</div></div>');
			});
		}, 'json');
	}, 500);

	$navBtn.click(function () {
		$imgForm.toggle('slow');
		console.log('works');
	});

	$submitBtn.click(function (e) {
		e.preventDefault();
		var newImg = $imgUrl.val();
		var newDesc = $imgDesc.val();
		var newName = $name.val();

		if ((newImg.indexOf('png') !== -1 || newImg.indexOf('jpg') !== -1 || newImg.indexOf('gif') !== -1) && newDesc !== '') {
			$.post(url, {
				username: newName,
				photo: newImg,
				caption: newDesc

			}, 'json');
			$imgUrl.val('');
			$imgDesc.val('');
		} else {
			$error.html('Please enter in an image path and description.');
			$imgUrl.val('');
			$imgDesc.val('');
		};
	});

	$cancelBtn.click(function (e) {
		e.preventDefault();
		$imgUrl.val('');
		$imgDesc.val('');
		$imgForm.toggle('slow');
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map