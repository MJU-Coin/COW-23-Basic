// // const fs = require("fs");

// // const jsonFile = fs.readFileSync(
// //   "/Users/won/Desktop/week11/data/db.json",
// //   "utf8"
// // );
// // const jsonData = JSON.parse(jsonFile);

const fs = require("fs");
const jsonFilePath = "/Users/won/Desktop/week11/data/db.json";
const jsonFile = fs.readFileSync(jsonFilePath, "utf8");

const data = JSON.parse(jsonFile);
const categories = data.categories;
const notable_projects = data.notable_projects;
const popular_projects = data.popular_projects;

const navBar = document.querySelector(".nav-container");
const dropContainer = document.querySelector(".drop-bar-container");
const category = document.querySelector(".nav-item-category");

// categories.map((category) => {
//   let dropbarList = document.createElement("li");
//   let dropbarListTitle = document.createElement("a");
//   const drop_bar = document.querySelector(".drop_bar");

//   drop_bar.appendChild(dropbarList);
//   dropbarList.appendChild(dropbarListTitle);
//   dropbarListTitle.innerText = category;
// });

// 캐러셀
// function autoMoveCarousel() {
//   var currentIndex = 0;
//   var carouselContainer = document.querySelector(".carousel-1-container");
//   var carouselWidth = carouselContainer.clientWidth;
//   var moveDistance = -carouselWidth;

//   setInterval(function () {
//     currentIndex++;
//     if (currentIndex > 2) {
//       currentIndex = 0;
//     }
//     carouselContainer.style.transform = `translateX(${
//       currentIndex * moveDistance
//     }px)`;
//   }, 4000);
// }

// // 페이지 로드 시 캐러셀 자동 이동 함수 호출
// window.onload = function () {
//   autoMoveCarousel();
// };

const bannerWrapper = document.querySelector(".banner-wrapper");
bannerWrapper.classList.add("banner-animation");

// function createProjects(project, id) {
//   project.map((project) => {
//     const notable = document.querySelector(".notable_projects");
//     const popular = document.querySelector(".popular_projects");
//     let project_wrapper = document.createElement("div");
//     let project_image = document.createElement("div");
//     let project_content = document.createElement("div");
//     let project_info = document.createElement("div");
//     let project_category = document.createElement("a");
//     let project_title = document.createElement("a");
//     let project_achieve = document.createElement("a");
//     let project_url = document.createElement("a");

//     project_url.setAttribute("href", `${project.url}`);
//     project_url.setAttribute("class", "url");
//     project_image.appendChild(project_url);

//     project_wrapper.appendChild(project_image);

//     if (id == 1) {
//       notable.appendChild(project_wrapper);
//       project_image.style.backgroundImage = `url(./images/notable_project${
//         project.id + 1
//       }.jpg)`;
//     } else if (id == 2) {
//       popular.appendChild(project_wrapper);
//       let ranking = document.createElement("div");
//       ranking.setAttribute("class", "ranking");
//       ranking.innerHTML = project.id + 1;
//       project_wrapper.appendChild(ranking);
//       project_image.style.backgroundImage = `url(./images/popular_project${
//         project.id + 1
//       }.jpg)`;
//     }

//     project_wrapper.appendChild(project_content);
//     project_content.appendChild(project_info);
//     project_info.appendChild(project_category);
//     project_content.appendChild(project_title);
//     project_content.appendChild(project_achieve);

//     project_wrapper.setAttribute("class", "project_wrapper");
//     project_image.setAttribute("class", "project_image");
//     project_content.setAttribute("class", "project_content");
//     project_info.setAttribute("class", "project_info");
//     project_title.setAttribute("class", "project_title");
//     project_title.setAttribute("href", project.url);
//     project_achieve.setAttribute("class", "project_achieve");
//     project_category.setAttribute("class", "project_category");

//     project_category.innerHTML = `${project.category} | ${project.creator}`;
//     project_title.innerHTML = `${project.title}`;
//     project_achieve.innerHTML = `${project.sponsorship_rate}%달성`;
//     project_image.setAttribute("id", project.id);

//     project_image.style.backgroundRepeat = "no-repeat;";
//     project_image.style.backgroundSize = "cover";
//     project_image.style.backgroundPosition = "center center";
//   });
// }
