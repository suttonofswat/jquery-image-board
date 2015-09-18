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
	var url = 'http://tiyfe.herokuapp.com/collections/fee';

	$imgForm.hide();
	setInterval(function () {
		$.get(url, function (response) {
			$imgList.html('');
			response.forEach(function (response) {
				$imgList.append('<div class="full"><div><img class="actualPic" src="' + response.photo + '"></div><div class="comments">' + response.caption + '</div></div>');
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

		if ((newImg.indexOf('png') !== -1 || newImg.indexOf('jpg') !== -1 || newImg.indexOf('gif') !== -1) && newDesc !== '') {
			$.post(url, {
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