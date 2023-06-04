//banner 자동 넘기기
const $bannerimageContainer = document.querySelector('.bannerimageContainer');
const $bannerimage = document.querySelector('.bannerimage');
const $page = document.querySelector('#page');
let slide = 0;
let count = 1;
$bannerimageContainer.style.transition = `transform 0.3s`;
const changePage = function () {
  if (slide < 3) {
    slide++;
    $bannerimageContainer.style.transform = `translateX(${
      -$bannerimage.clientWidth * slide
    }px)`;
  } else {
    slide = 0;
    count = 1;
    $bannerimageContainer.style.transform = `translateX(${
      -$bannerimage.clientWidth * slide
    }px)`;
    $page.textContent = count;
    return;
  }
  count++;
  $page.textContent = count;
};
setInterval(changePage, 3000);

//배너 버튼으로 넘기기
const $leftbutton = document.querySelector('#leftbutton');
const $rightbutton = document.querySelector('#rightbutton');

$leftbutton.addEventListener('click', () => {
  if (slide > 0) {
    slide--;
    $bannerimageContainer.style.transform = `translateX(${
      -$bannerimage.clientWidth * slide
    }px)`;
  } else {
    slide = 3;
    count = 4;
    $bannerimageContainer.style.transform = `translateX(${
      -$bannerimage.clientWidth * slide
    }px)`;
    $page.textContent = count;
    return;
  }
  count--;
  $page.textContent = count;
});

$rightbutton.addEventListener('click', changePage);

//현재시간 구하기

const timecheck = function (time) {
  if (time < 10) {
    return '0' + time;
  } else {
    return time;
  }
};
setInterval(() => {
  const $time = document.querySelector('.time');
  const nowDate = new Date();
  const year = nowDate.getFullYear();
  const month = nowDate.getMonth() + 1;
  const day = nowDate.getDate();
  const hour = nowDate.getHours();
  const minutes = nowDate.getMinutes();
  const seconds = nowDate.getSeconds();
  $time.textContent = `${timecheck(year) - 2000}.${timecheck(
    month
  )}.${timecheck(day)} ${timecheck(hour)}:${timecheck(minutes)}:${timecheck(
    seconds
  )}`;
}, 1000);

//검색창 만들기
const $SearchContainer = document.querySelector('.SearchContainer');
const $searchinput = document.querySelector('.searchinput');
$searchinput.onfocus = function (e) {
  $SearchContainer.style.display = 'block';
};

const $closebutton = document.querySelector('.closebutton');

$closebutton.addEventListener('click', () => {
  $SearchContainer.style.display = 'none';
});
