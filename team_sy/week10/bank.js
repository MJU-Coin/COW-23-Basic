const $left = document.querySelectorAll('.left');
const $right = document.querySelectorAll('.right');
let count = 0;

$left.forEach((left) => {
  left.addEventListener('click', (event) => {
    let $imgs;
    if (event.target.id === 'left2') {
      $imgs = document.querySelector('#secondimgs');
    } else if (event.target.id === 'left3') {
      $imgs = document.querySelector('#thirdimgs');
    } else if (event.target.id === 'left4') {
      $imgs = document.querySelector('#fourthimgs');
    } else if (event.target.id === 'left5') {
      $imgs = document.querySelector('#fifthimgs');
    } else if (event.target.id === 'left6') {
      $imgs = document.querySelector('#sixthimgs');
    }
    const imgLength = parseInt($imgs.clientWidth / 204.5);
    if (count > 0) {
      count--;
      $imgs.style.transform = `translateX(${-204.5 * count}px)`;
    } else {
      count = imgLength - 1;
      $imgs.style.transform = `translateX(${-204.5 * count}px)`;
    }
  });
});
$right.forEach((right) => {
  right.addEventListener('click', (event) => {
    let $imgs;
    if (event.target.id === 'right2') {
      $imgs = document.querySelector('#secondimgs');
    } else if (event.target.id === 'right3') {
      $imgs = document.querySelector('#thirdimgs');
    } else if (event.target.id === 'right4') {
      $imgs = document.querySelector('#fourthimgs');
    } else if (event.target.id === 'right5') {
      $imgs = document.querySelector('#fifthimgs');
    } else if (event.target.id === 'right6') {
      $imgs = document.querySelector('#sixthimgs');
    }
    const imgLength = parseInt($imgs.clientWidth / 204.5);
    if (count < imgLength - 1) {
      count++;
      $imgs.style.transform = `translateX(${-204.5 * count}px)`;
    } else {
      count = 0;
      $imgs.style.transform = `translateX(${-204.5 * count}px)`;
    }
  });
});

const $slideScreen = document.querySelector('#slideScreen');
const $button1 = document.querySelector('#button1');
const $button2 = document.querySelector('#button2');
const $button3 = document.querySelector('#button3');

$slideScreen.style.transition = `transform 0.5s`;
$button1.style.width = '32px';
let slide = 0;
setInterval(() => {
  if (slide < 2) {
    if (slide === 0) {
      $button2.style.width = '32px';
      $button1.style.width = '8px';
      $button3.style.width = '8px';
    } else if (slide === 1) {
      $button3.style.width = '32px';
      $button1.style.width = '8px';
      $button2.style.width = '8px';
    }
    slide++;
    $slideScreen.style.transform = `translateX(${-1903 * slide}px)`;
  } else {
    if (slide === 2) {
      $button1.style.width = '32px';
      $button2.style.width = '8px';
      $button3.style.width = '8px';
    }
    slide = 0;
    $slideScreen.style.transform = `translateX(${-1903 * slide}px)`;
  }
}, 4000);

$button1.addEventListener('click', () => {
  slide = 0;
  $slideScreen.style.transform = `translateX(${-1903 * slide}px)`;

  $button1.style.width = '32px';
  $button2.style.width = '8px';
  $button3.style.width = '8px';
});
$button2.addEventListener('click', () => {
  slide = 1;
  $slideScreen.style.transform = `translateX(${-1903 * slide}px)`;
  $button2.style.width = '32px';
  $button1.style.width = '8px';
  $button3.style.width = '8px';
});
$button3.addEventListener('click', () => {
  slide = 2;
  $slideScreen.style.transform = `translateX(${-1903 * slide}px)`;
  $button3.style.width = '32px';
  $button1.style.width = '8px';
  $button2.style.width = '8px';
});
