//Toggle class active navbar menu
const navbarNav = document.querySelector('.navbar-nav');
//activation
document.querySelector('#ham-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//===============================


//sidebar close (untuk mode tablet & smartphone)
const hamMenu = document.querySelector('#ham-menu');

document.addEventListener('click', function(e) {                       //addEventLister = dimanapun di page >> (e)=event
    if(!hamMenu.contains(e.target) && !navbarNav.contains(e.target)){   //not hamMenu & not navBar area
        navbarNav.classList.remove('active');
    }
})
//===============================