const $navigationButton1 = document.querySelector('.navigationButton1');
const $navigationButton2 = document.querySelector('.navigationButton2');
const $navigationButton3 = document.querySelector('.navigationButton3');
const $carouselSlide = document.querySelector('.carouselSlide');
const $slide = document.querySelectorAll('.carouselSlide li');
const $prev2 = document.querySelectorAll('.prev2');
const $next2 = document.querySelectorAll('.next2');
const $prev3 = document.querySelectorAll('.prev3');
const $next3 = document.querySelectorAll('.next3');
const $prev4 = document.querySelectorAll('.prev4');
const $next4 = document.querySelectorAll('.next4');
const $prev5 = document.querySelectorAll('.prev5');
const $next5 = document.querySelectorAll('.next5');
const $prev6 = document.querySelectorAll('.prev6');
const $next6 = document.querySelectorAll('.next6');
const pickedContent2 = [".pickedContent2_1", ".pickedContent2_2", ".pickedContent2_3"];
const pickedContent3 = [".pickedContent3_1", ".pickedContent3_2"];
const pickedContent4 = [".pickedContent4_1", ".pickedContent4_2"];
const pickedContent5 = [".pickedContent5_1", ".pickedContent5_2", ".pickedContent5_3"];
const pickedContent6 = [".pickedContent6_1", ".pickedContent6_2", ".pickedContent6_3"];
let prev2Index = 0;
let next2Index = 0;
let prev3Index = 0;
let next3Index = 0;
let prev4Index = 0;
let next4Index = 0;
let prev5Index = 0;
let next5Index = 0;
let prev6Index = 0;
let next6Index = 0;
let count = 0;
let loopSlide;
let carouselSize = $slide[0].clientWidth; // 캐러셀 width 크기

console.log(
    " /$$                           /$$                           /$$                 /$$\n" +
    "| $$                          | $$                          | $$                | $$\n" +
    "| $$$$$$$   /$$$$$$  /$$$$$$$ | $$   /$$  /$$$$$$$  /$$$$$$ | $$  /$$$$$$   /$$$$$$$\n" +
    "| $$__  $$ |____  $$| $$__  $$| $$  /$$/ /$$_____/ |____  $$| $$ |____  $$ /$$__  $$\n" +
    "| $$  \\ $$  /$$$$$$$| $$  \\ $$| $$$$$$/ |  $$$$$$   /$$$$$$$| $$  /$$$$$$$| $$  | $$\n" +
    "| $$  | $$ /$$__  $$| $$  | $$| $$_  $$  \\____  $$ /$$__  $$| $$ /$$__  $$| $$  | $$\n" +
    "| $$$$$$$/|  $$$$$$$| $$  | $$| $$ \\  $$ /$$$$$$$/|  $$$$$$$| $$|  $$$$$$$|  $$$$$$$\n" +
    "|_______/  /\\_______/|__/  |__/|__/  \\__/|_______/  \\_______/|__/ \\_______/ \\_______/"
)

// console.log(carouselSize);

// next 버튼을 눌렀을 때 count가 carousel.length-1과 같아지면 count를 -1로
// 변경하고 count를 더해 다시 처음으로 슬라이드한다.

if (!loopSlide) {
    loopSlide = setInterval(sliding, 4000);
}

function move() {
    $carouselSlide.style.transform = `translateX(${-carouselSize * count}px)`;
}

function sliding() {
    if (count >= $slide.length - 1) {
        count = -1;
    }
    count++;
    buttonActive();
    move();
    clearInterval(loopSlide);
}

function buttonActive() {
    if (count == 0) {
        $navigationButton2.classList.remove('activeNavigationButton');
        $navigationButton3.classList.remove('activeNavigationButton');
        $navigationButton1.classList.add('activeNavigationButton');
    }
    else if (count == 1) {
        $navigationButton1.classList.remove('activeNavigationButton');
        $navigationButton3.classList.remove('activeNavigationButton');
        $navigationButton2.classList.add('activeNavigationButton');
    }
    else {
        $navigationButton1.classList.remove('activeNavigationButton');
        $navigationButton2.classList.remove('activeNavigationButton');
        $navigationButton3.classList.add('activeNavigationButton');
    }
}

$navigationButton1.addEventListener("click", () => {
    console.log("first");
    clearInterval(loopSlide);
    count = 0;
    buttonActive();
    move();
    loopSlide = setInterval(sliding, 4000)
});

$navigationButton2.addEventListener("click", () => {
    console.log("second");
    clearInterval(loopSlide);
    count = 1;
    buttonActive();
    move();
    loopSlide = setInterval(sliding, 4000)
});

$navigationButton3.addEventListener("click", () => {
    console.log("third");
    clearInterval(loopSlide);
    count = 2;
    buttonActive();
    move();
    loopSlide = setInterval(sliding, 4000)
});

function prevButton(index, pickContent) {
    document.querySelector(pickContent[index]).classList.remove('active');
    index--;
    if (index < 0) {
        index = pickContent.length - 1;
    }
    document.querySelector(pickContent[index]).classList.add('active');
    return index;
}

function nextButton(index, pickContent) {
    document.querySelector(pickContent[index]).classList.remove('active');
    index++;
    if (index > pickContent.length - 1) {
        index = 0;
    }
    document.querySelector(pickContent[index]).classList.add('active');
    return index;
}


$prev2.forEach(function(el) { el.addEventListener("click", function () {
    prev2Index = prevButton(prev2Index, pickedContent2);
})});
$next2.forEach(function(el) { el.addEventListener("click", function () {
    next2Index = nextButton(next2Index, pickedContent2);
})});

$prev3.forEach(function(el) { el.addEventListener("click", function () {
    prev3Index = prevButton(prev3Index, pickedContent3);
})});
$next3.forEach(function(el) { el.addEventListener("click", function () {
    next3Index = nextButton(next3Index, pickedContent3);
})});

$prev4.forEach(function(el) { el.addEventListener("click", function () {
    prev4Index = prevButton(prev4Index, pickedContent4);
})});
$next4.forEach(function(el) { el.addEventListener("click", function () {
    next4Index = nextButton(next4Index, pickedContent4);
})});

$prev5.forEach(function(el) { el.addEventListener("click", function () {
    prev5Index = prevButton(prev5Index, pickedContent5);
})});
$next5.forEach(function(el) { el.addEventListener("click", function () {
    next5Index = nextButton(next5Index, pickedContent5);
})});

$prev6.forEach(function(el) { el.addEventListener("click", function () {
    prev6Index = prevButton(prev6Index, pickedContent6);
})});
$next6.forEach(function(el) { el.addEventListener("click", function () {
    next6Index = nextButton(next6Index, pickedContent6);
})});





