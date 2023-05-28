// const fs = require('fs');

// const jsonFile = fs.readFileSync('./data/db.json', 'utf8');
// const jsonData = JSON.parse(jsonFile);

// console.log(jsonData.categories);
// for (let i in jsonData.popular_projects) {
//   console.log(jsonData.popular_projects[i].id);
// }

// const $WrapperComponent = document.querySelector(".WrapperComponent");

// let list = '';

// for (let i in jsonData.popular_projects) {
//   list += `<div class="cardWrapper">
//             <div></div>
//             <div class="image-wrapper">
//               <a class="ProjectCardOnlyPercentage__StyledLink" href=` +  jsonData.popular_projects[i].url + `></a>
//             </div>
//             <span class="ProjectCardOnlyPercentage__RankLabel">` + jsonData.popular_projects[i].id + `</span>
//             <div class="infoWrapper">
//               <dl>
//                 <dd class="projectSubInfo">
//                   <span>` + jsonData.popular_projects[i].category + 
//                   `<a href="/">` + jsonData.popular_projects[i].creator + `</a>
//                   </span>
//                 </dd>
//                 <dt>
//                   <a href="/">
//                     <strong>` + jsonData.popular_projects[i].title + `</strong>
//                   </a>
//                 </dt>
//               </dl>
//               <div class="funding-status">
//                 <span class="percentage">` + jsonData.popular_projects[i].sponsorship_rate + `</span>
//               </div>
//             </div>
//           </div>`
// }

// console.log(list);
// $WrapperComponent.innerHTML = list;


const $Prev = document.querySelector(".Prev");
const $Next = document.querySelector(".Next");
const $SwiperWrapper = document.querySelector(".SwiperWrapper");
const $SwiperPagination = document.querySelector(".SwiperPagination strong")
const $slide = document.querySelectorAll('.SwiperWrapper div');
let count = 0;
let loopSlide;
let carouselSize = $slide[0].clientWidth; // 캐러셀 width 크기

if (!loopSlide) {
  loopSlide = setInterval(sliding, 4000);
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
  loopSlide = setInterval(sliding, 4000)
});

$Next.addEventListener("click", () => {
  clearInterval(loopSlide);
  count++;
  if (count > 3) {
    count = 0;
  }
  slideCount();
  move();
  loopSlide = setInterval(sliding, 4000)
});
