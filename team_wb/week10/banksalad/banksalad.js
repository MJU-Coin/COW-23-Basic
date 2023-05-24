// 버튼을 눌러서 캐러셀 이동
// 버튼 2를 누르면

document.querySelector("#move-to-p2").addEventListener("click", function () {
  document.querySelector(".carousel.pages").style.transform ==
    "translate(-100vw)";
});

// 버튼 3를 누르면

document.querySelector("#move-to-p2").addEventListener("click", function () {
  document.querySelector(".carousel.pages").style.transform ==
    "translate(-200vw)";
});

// 버튼 1를 누르면

document.querySelector("#move-to-p2").addEventListener("click", function () {
  document.querySelector(".carousel.pages").style.transform ==
    "translate(-0vw)";
});

// 캐러셀 자동 이동을 위한 함수
function autoMoveCarousel() {
  var currentIndex = 0;
  var carouselContainer = document.querySelector(".carousel-1-container");
  var carouselWidth = carouselContainer.clientWidth;
  var moveDistance = -carouselWidth;

  setInterval(function () {
    currentIndex++;
    if (currentIndex > 2) {
      currentIndex = 0;
    }
    carouselContainer.style.transform = `translateX(${
      currentIndex * moveDistance
    }px)`;
  }, 4000);
}

// 페이지 로드 시 캐러셀 자동 이동 함수 호출
window.onload = function () {
  autoMoveCarousel();
};

// pre, next 버튼
