//Toggle class active navbar menu
const navbarNav = document.querySelector(".navbar-nav");
//activation navbar menu
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//sidebar close (untuk mode tablet & smartphone)
const hamMenu = document.querySelector("#ham-menu");

//navbar addEvent
document.addEventListener("click", function (e) {
  //addEventLister = dimanapun di page >> (e)=event
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    //not hamMenu & not navBar area
    navbarNav.classList.remove("active");
  }
});
//===============================

//Search class
const searchForm = document.querySelector(".search-form");
//activation search
document.querySelector("#search").onclick = () => {
  searchForm.classList.toggle("active");
};

const searchButton = document.querySelector("#search");

//search addEvent
document.addEventListener("click", function (e) {
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
