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
