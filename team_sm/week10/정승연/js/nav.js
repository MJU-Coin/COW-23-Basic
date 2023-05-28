const nav = document.querySelectorAll(".nav_link");
const dropDown = document.querySelectorAll(".drop_down");
console.log(nav);

function handleMouseover(index) {
  dropDown[index].removeAttribute("style");
}

function handleMouseleave(index) {
  dropDown[index].setAttribute("style", "display:none");
}

for (let i = 0; i < nav.length; i++) {
  nav[i].addEventListener("mouseover", () => {
    handleMouseover(i);
  });
  nav[i].addEventListener("mouseleave", () => {
    handleMouseleave(i);
  });
  dropDown[i].addEventListener("mouseover", () => {
    handleMouseover(i);
  });
  dropDown[i].addEventListener("mouseleave", () => {
    handleMouseleave(i);
  });
}
