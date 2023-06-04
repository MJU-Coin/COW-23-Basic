const clockContainer = document.querySelector('.PopularListTitle'),
  clock = clockContainer.querySelector('span');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);

const nav = document.querySelector('.HeaderContentLayout');

// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
const navBottom = nav.getBoundingClientRect().bottom + window.scrollY;

window.addEventListener('scroll', function () {
  if (window.scrollY >= navBottom) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

let countSlide = 1;
const slide = () => {
  console.log('slide');
  if (countSlide === 1) {
    document.querySelector('.FirstSwiperSlide').style =
      'transform: translateX(-100%);';
    document.querySelector('.SecondSwiperSlide').style =
      'transform: translateX(-100%);';
    countSlide = 2;
  } else if (countSlide === 2) {
    document.querySelector('.SecondSwiperSlide').style =
      'transform: translateX(0%);';
    document.querySelector('.FirstSwiperSlide').style =
      'transform: translateX(0%);';
    countSlide = 1;
  }
};

setInterval(slide, 4 * 1000);
