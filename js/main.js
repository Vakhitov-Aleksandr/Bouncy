// Menu
let menuTopBurger = document.querySelector('.menu-top__burger');
menuTopBurger.addEventListener('click', menuToggle);
function menuToggle() {
  menuTopBurger.classList.toggle('active');
  let menuTop = document.querySelector('.menu-top');
  menuTop.classList.toggle('open');
  
  let menuTopLinks = document.querySelectorAll('.menu-top__link');
  for (let index = 0; index < menuTopLinks.length; index++) {
    const menuTopLink = menuTopLinks[index];
    menuTopLink.addEventListener('click', function () {
      menuTop.classList.remove('open');
      menuTopBurger.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  if(menuTop.classList.contains('open')){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}