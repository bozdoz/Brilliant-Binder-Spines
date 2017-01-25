(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var binder_spines = document.getElementsByClassName('binder-spine-graphic'),
	nav = document.getElementById('nav'),
	pills = nav && nav.getElementsByTagName('li'),
	tabs = nav && nav.getElementsByTagName('a') || [],
	tab_container = document.getElementById('tab-sections'),
	tab_sections = tab_container && tab_container.children || [],
	color = (function () {
		return (window.localStorage && 
			localStorage.getItem('color')) || '#ba0c2f'; 
	})();

setColor();

for (var i = 0, len = tabs.length; i < len; i++) {
	var tab = tabs[ i ];
	tab.addEventListener('click', function (e) {
		var id = this.href.split('#')[1];
		showElemById(id);
	});
}

if (window.location.hash) {
	showElemById(window.location.hash.split('#')[1]);
} else {
	showElemById('welcome');
}

function showElemById(id) {
	var elem = document.getElementById('tab-' + id);
	for (var i = 0, len = tab_sections.length; i < len; i++) {
		var tab_section = tab_sections[ i ],
			parent = tab_section.parentNode;
		if (tab_section === elem) {
			tab_section.style.display = 'block';
			parent.className = 'active';
		} else {
			tab_section.style.display = 'none';
			parent.className = 'active';
		}
	}

	if (!pills) return;

	for (var i = 0, len = pills.length; i < len; i++) {
		var pill = pills[ i ],
			child = pill.children[0];
		if (child.href.split('#')[1] == id) {
			pill.className = 'active';
		} else {
			pill.className = '';
		}
	}
	setColor();
}

for (var i = 0, len = binder_spines.length; i < len; i++) {
	var binder_spine = binder_spines[ i ];
	binder_spine.addEventListener('click', function () {
		color = getComputedStyle(this)['background-color'];

		setColor();
		if (window.localStorage) {
			localStorage.setItem('color', color);
		}
	});
}

function setColor () {
	document.body.style.backgroundColor = color;
	document.body.style.color = color;

	if (!pills) return;

	for (var i = 0, len = pills.length; i < len; i++) {
		var pill = pills[ i ],
			child = pill.children[0];
		if (pill.className == 'active') {
			child.style.backgroundColor = color;
			child.style.color = 'white';
		} else {
			child.style.color = color;
			child.style.backgroundColor = 'transparent';
		}
	}
}
},{}]},{},[1]);
