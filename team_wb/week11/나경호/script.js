const $Prev = document.querySelector(".Prev");
const $Next = document.querySelector(".Next");
const $SwiperWrapper = document.querySelector(".SwiperWrapper");
const $SwiperPagination = document.querySelector(".SwiperPagination strong")
const $slide = document.querySelectorAll('.SwiperWrapper div');
const $WrapperComponent = document.querySelector(".WrapperComponent");
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
