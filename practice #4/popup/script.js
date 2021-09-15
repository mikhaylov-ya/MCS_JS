const pop = document.body.querySelector('.popup');
const closePop = document.body.querySelector('.closePopup');
const openPop = document.body.querySelector('.request');
const openMenu = document.body.querySelector('.openMenu');
const closeMenu = document.body.querySelector('.closeMenu');
const menu = document.body.querySelector('.menu');

openPop.onclick = function() {
  pop.style['display'] = 'flex'
};

closePop.onclick = function() {
  pop.style['display'] = 'none'
};

openMenu.onclick = () => {
  menu.style.left = '0'
}

closeMenu.onclick = () => {
  menu.style.left = '-50vw'
}
