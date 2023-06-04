const $prevButton = document.querySelector('.prev');
const $nextButton = document.querySelector('.next');
const $carouselImage = document.querySelector('.carousel-image');
const $carouselIndexIndicator = document.querySelector('.indexIndicator strong');

const $timeIndicator = document.querySelector('.main-nav-TimeIndicator');

const $navBar = document.querySelector('.header-nav-wrap');
const $mainLayout = document.querySelector('.main-layout');

let carouselIndex = 0;

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

// 캐러셀 이미지 자동 이동
let autoCarousel = setInterval(() => {
	carouselIndex += 1;
	if (carouselIndex === 4) {
		carouselIndex = 0;
	}
	$carouselIndexIndicator.innerText = carouselIndex+1;

	$carouselImage.style.transform = `translate3d(-${100 * carouselIndex}%, 0, 0)`;
}, 3500);

// 메인 네비게이션 바 시간 업데이트
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

// 스크롤시 상단 네비게이션 바 고정
window.onscroll = () => {
	if(window.scrollY > $navBar.offsetTop) {
		$navBar.classList.add('fixNav');
		$mainLayout.classList.add('fixMain');
	} else {
		$navBar.classList.remove('fixNav');
		$mainLayout.classList.remove('fixMain');
	}
}
