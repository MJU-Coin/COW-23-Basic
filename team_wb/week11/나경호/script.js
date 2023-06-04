const $body = document.querySelector("body");
const $Prev = document.querySelector(".Prev");
const $Next = document.querySelector(".Next");
const $SwiperWrapper = document.querySelector(".SwiperWrapper");
const $SwiperPagination = document.querySelector(".SwiperPagination strong")
const $slide = document.querySelectorAll('.SwiperWrapper div');
const $WrapperComponent = document.querySelector(".WrapperComponent");
const $FrontProjectCardListWrapperComponent = document.querySelector(".FrontProjectCardListWrapperComponent");
const $SearchButton = document.querySelector(".SearchButton");
const $modalSearchWrapper = document.querySelector(".modalSearchWrapper");
const $XButton = document.querySelector(".XButton");
const $Time = document.querySelector(".Time");
const $updateDate = document.querySelector(".updateDate");

let count = 0;
let loopSlide;
let carouselSize = $slide[0].clientWidth; // 캐러셀 width 크기

if (!loopSlide) {
  loopSlide = setInterval(sliding, 3000);
}

function move() {
  $SwiperWrapper.style.transform = `translateX(${-carouselSize * count}px)`;
}

function slideCount() {
  $SwiperPagination.innerText = count + 1;
}

function sliding() {
  count++;
  if (count > 3) {
    count = 0;
  }
  slideCount();
  move();
}

$Prev.addEventListener("click", () => {
  clearInterval(loopSlide);
  count--;
  if (count < 0) {
    count = 3;
  }
  slideCount();
  move();
  loopSlide = setInterval(sliding, 3000)
});

$Next.addEventListener("click", () => {
  clearInterval(loopSlide);
  count++;
  if (count > 3) {
    count = 0;
  }
  slideCount();
  move();
  loopSlide = setInterval(sliding, 3000)
});

$SearchButton.addEventListener("click", () => {
  $modalSearchWrapper.classList.remove('disabled');
  $body.style.overflow = "hidden";
});

$XButton.addEventListener("click", ()=> {
  $modalSearchWrapper.classList.add('disabled');
  $body.style.overflow = "visible";
});
const date = new Date();

let year = date.getFullYear().toString().slice(2, 4);
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();
let hour = date.getHours().toString();
let min = date.getMinutes().toString();

if (month.length == 1) {
  month = '0' + month;
}

if (day.length == 1) {
  day = '0' + day;
}

if (min.length == 1) {
  min = '0' + min;
}



$Time.innerText = `${year}.${month}.${day} ${hour}.${min} 기준`
$updateDate.innerText = `${month}.${day} ${hour}.${min} 기준`