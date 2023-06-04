// carousel
const $rightBtn = document.getElementById('carousel-btn-right');
const $leftBtn = document.getElementById('carousel-btn-left');
const $carousel = document.getElementById('carousel');
const $pagination = document.getElementById('pagination');
let currentSlide = 1;

$rightBtn.addEventListener('click', () => {
   clickRight();
   currentSlide ++;
});

$leftBtn.addEventListener('click', () => {
    clickLeft();
    currentSlide --;
});

const clickRight = () => {
    if(currentSlide === 1) {
        $carousel.style.transform = 'translateX(-20%)';
        $pagination.innerHTML = '<p>2/5</p>';
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(-40%)';
        $pagination.innerHTML = '<p>3/5</p>';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-60%)';
        $pagination.innerHTML = '<p>4/5</p>';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-80%)';
        $pagination.innerHTML = '<p>5/5</p>';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(0)';
        $pagination.innerHTML = '<p>1/5</p>';
        currentSlide = 0;
    }
}

const clickLeft = () => {
    if(currentSlide === 1) {
        $carousel.style.transform = 'translateX(-80%)';
        $pagination.innerHTML = '<p>5/5</p>';
        currentSlide = 6;
    }
    if(currentSlide === 2) {
        $carousel.style.transform = 'translateX(0)';
        $pagination.innerHTML = '<p>1/5</p>';
    }
    if(currentSlide === 3) {
        $carousel.style.transform = 'translateX(-20%)';
        $pagination.innerHTML = '<p>2/5</p>';
    }
    if(currentSlide === 4) {
        $carousel.style.transform = 'translateX(-40%)';
        $pagination.innerHTML = '<p>3/5</p>';
    }
    if(currentSlide === 5) {
        $carousel.style.transform = 'translateX(-60%)';
        $pagination.innerHTML = '<p>4/5</p>';
    }
}

setInterval(() => {
    clickRight();
    currentSlide ++;
}, 4000);

// current time
const $currentTime = document.getElementById('current-time');
let today = new Date();
let year = today.getFullYear() - 2000;
let month = today.getMonth() + 1;
let date = today.getDate();
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

$currentTime.innerText = year + "." + month + "." + date 
                        + " " + hour + ":" + min + ":" + sec + "기준";

// category menu
const $categoryBtn = document.getElementById('category');
const $categoryMenu = document.getElementById('category-menu-container');

$categoryBtn.addEventListener('mouseover', () => {
    $categoryMenu.style.display = 'flex';
});

$categoryMenu.addEventListener('mouseleave', () => {
    $categoryMenu.style.display = 'none';
});

// search-menu
const $searchBtn = document.getElementById('search-svg');
const $exit = document.querySelector('#header-svg2');
const $main = document.querySelector('.main-container');
const $footer = document.querySelector('footer');
const $searchContainer = document.querySelector('.search-container');

$searchBtn.addEventListener('click', () => {
    console.log('hi');
    $searchContainer.style.visibility = 'visible';
    $main.style.visibility = 'hidden';
    $footer.style.visibility = 'hidden';
});

$exit.addEventListener('click', () => {
    $searchContainer.style.visibility = 'hidden';
    $main.style.visibility = 'visible';
    $footer.style.visibility = 'visible';
});