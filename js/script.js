//Toggle class active navbar menu
const navbarNav = document.querySelector('.navbar-nav');
//activation
document.querySelector('#ham-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

//===============================

//Search Class
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus(); //membuat searchbox langsung aktif
  e.preventDefault(); //event => agar ketika di klik tidak ke home#, biasa sering digunakan untuk submit data form.
};
//=====================================

//Cart Class
const cartNav = document.querySelector('.shop-cart');
document.querySelector('#shopping-cart').onclick = (e) =>{
  cartNav.classList.toggle('active');
  e.preventDefault();
}

//ModalBox Class
//menggunakan class selector, bukan ID. untuk memilih semua action yang sama
const modalBox = document.querySelector('#box-modal');
const storedDetailButtons = document.querySelectorAll('.store-detail');

//menggunakan looping. forEach = jika kita forEach, maka setiap btn didalamnya, maka onclick
storedDetailButtons.forEach((btn) => {
  //seperti onclick biasa namun didalam looping
  btn.onclick = (e) => {
    modalBox.classList.toggle('active');
    e.preventDefault();
  }
})

window.onclick = (e) => {
  if (e.target === modalBox){
    modalBox.classList.remove('active');
    e.preventDefault();
  }
}

//Close Button
const closeButton = document.querySelector('.close-icon');

closeButton.onclick = (e) => {
  modalBox.classList.remove('active');
  e.preventDefault();
}

//sidebar close (untuk mode tablet & smartphone)
const hamMenu = document.querySelector('#ham-menu');
const searchButton = document.querySelector('#search-button');
const cartButton = document.querySelector('#shopping-cart');

document.addEventListener('click', function (e) {
  //addEventLister = dimanapun di page >> (e)=event
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    //not hamMenu & not navBar area
    navbarNav.classList.remove('active');
  }

  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if(!cartNav.contains(e.target) && !cartButton.contains(e.target)){
    cartNav.classList.remove('active');
  }
});