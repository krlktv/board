'use strict';

const board = document.querySelector('#board'),
	colors = ['#375e97', '#fb6542', '#ffbb00', '#3f681c', '#00cffa', '#ff0038', '#ffce38'];

const SQARES_NUMBER = 500;

for (let i = 0; i < SQARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');
	square.addEventListener('mouseover', setColor);
	square.addEventListener('mouseleave', removeColor);
	board.append(square);
}

function setColor(event) {
	const element = event.target,
		color = getRandomColor();
	element.style.background = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
	const element = event.target;
	element.style.background = '#1d1d1d';
	element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}