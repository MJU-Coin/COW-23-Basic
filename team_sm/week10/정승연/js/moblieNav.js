const getNav = document.querySelector(".get_mobile_nav_list");
const closeMobileList = document.querySelector(".close_moblie_list");
const mobileNavbar = document.querySelector(".mobile_nav_bar");
const mobileList = document.querySelector(".mobile_nav_list");

function handleClick() {
  mobileList.removeAttribute("style");
  mobileNavbar.setAttribute("style", "display:none"); // 리스트 보기 클릭하면 모바일 리스트 보여줌
}

function closeClick() {
  mobileList.setAttribute("style", "display:none");
  mobileNavbar.removeAttribute("style"); // X누르면 원래대로
}
getNav.addEventListener("click", handleClick);
closeMobileList.addEventListener("click", closeClick);
