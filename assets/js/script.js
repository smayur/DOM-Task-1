var menu = document.querySelector('.navbar');
var burger = document.querySelector('.burger');

burger.addEventListener('click', function(){ 
  //Toggle nav
  burger.classList.toggle('navtoggle');
  menu.classList.toggle("show-menu");
  menu.classList.toggle("hide-menu");
});