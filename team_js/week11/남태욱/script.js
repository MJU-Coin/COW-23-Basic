const $prevButton = document.querySelector('.prev');
const $nextButton = document.querySelector('.next');
const $carouselImage = document.querySelector('.carousel-image');
const $carouselIndexIndicator = document.querySelector('.indexIndicator strong');

const $timeIndicator = document.querySelector('.main-nav-TimeIndicator');

let carouselIndex = 0;

const translateCarousel = () => {}

$prevButton.addEventListener('click', () => {
	if (carouselIndex === 0) {
		carouselIndex = 4;
	}
	carouselIndex -= 1;
	$carouselIndexIndicator.innerText = carouselIndex+1;

	$carouselImage.style.transform = `translate3d(-${100 * carouselIndex}%, 0, 0)`;
});

$nextButton.addEventListener('click', () => {
	carouselIndex += 1;
	if (carouselIndex === 4) {
		carouselIndex = 0;
	}
	$carouselIndexIndicator.innerText = carouselIndex+1;

	$carouselImage.style.transform = `translate3d(-${100 * carouselIndex}%, 0, 0)`;
});

let autoCarousel = setInterval(() => {
	carouselIndex += 1;
	if (carouselIndex === 4) {
		carouselIndex = 0;
	}
	$carouselIndexIndicator.innerText = carouselIndex+1;

	$carouselImage.style.transform = `translate3d(-${100 * carouselIndex}%, 0, 0)`;
}, 3500);

let displayTime = setInterval(() => {
	let currentTime = new Date();

	let year = currentTime.getFullYear().toString().slice(-2);
	let month = ('0' + (currentTime.getMonth() + 1)).slice(-2);
	let day = ('0' + currentTime.getDate()).slice(-2);

	let hours = ('0' + currentTime.getHours()).slice(-2);
	let minutes = ('0' + currentTime.getMinutes()).slice(-2);
	let seconds = ('0' + currentTime.getSeconds()).slice(-2);

	$timeIndicator.innerText = `${year}.${month}.${day} ${hours}:${minutes}:${seconds} 기준`;
} , 1000);
