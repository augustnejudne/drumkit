window.addEventListener('keydown', (event) => {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"`);
	const key = document.querySelector(`.box[data-key="${event.keyCode}"`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
});

window.addEventListener('keyup', (event) => {
	const key = document.querySelector(`.box[data-key="${event.keyCode}"`);
	if (!key) return;
	key.classList.remove('playing');
});

// const keys = document.querySelectorAll('.box');

// function removeTransition(e) {
// 	this.classList.remove('playing');
// }

// keys.forEach((key) => {
// 	key.addEventListener('transitionend', removeTransition);
// });
