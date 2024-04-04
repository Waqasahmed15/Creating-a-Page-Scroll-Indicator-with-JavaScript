// js begin
let indicator = document.querySelector(".scroll-indicator .progess");
// console.log(indicator);
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
// console.log(scrollHeight);
window.addEventListener("scroll", scroll);
function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}
//project done
