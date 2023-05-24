const banners = document.querySelector(".banners");
const slider = document.querySelector(".slider");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const content3 = document.querySelector(".content3");
let count = 1;
let count2 = 0;

let slideNum = 1;

slider.style.width = content1.clientWidth * 3 + "px";
const navigation_button1 = document.querySelector("#navigationButton1");
const navigation_button2 = document.querySelector("#navigationButton2");
const navigation_button3 = document.querySelector("#navigationButton3");

function moveSlide(slideNum) {
  slider.style.transform = `translateX(-${content1.clientWidth * slideNum}px)`;
}
function roopSlide() {
  if (count < 3) {
    count2 = 0;
    slider.style.transform = `translateX(-${content1.clientWidth * count}px)`;
    count++;
  } else {
    // 카운터를 2개 쓴 이유는 마지막 페이지에서 첫 페이지로 돌아올때 4초동안 머무는 경우가 있어서 2개 사용
    count2 = 0;
    slider.style.transform = `translateX(-${content1.clientWidth * count2}px)`;
    count = 1;
  }
}

setInterval(roopSlide, 4000);

navigation_button1.addEventListener("click", () => {
  moveSlide(0);
  count = 1;
});

navigation_button2.addEventListener("click", () => {
  moveSlide(1);
  count = 2;
});

navigation_button3.addEventListener("click", () => {
  moveSlide(2);
  count = 3;
});
