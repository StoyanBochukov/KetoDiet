const dropDown = document.querySelector('.drop-down');
const dropDownMobile = document.querySelector('.drop-down-mobile')
const dropDownList = document.querySelector('.drop-down_list');
const dropDownListMobile = document.querySelector('.drop-down_list-mobile')
const selected = document.querySelector('.selected');
const selectedImg = document.querySelector('.selectedImg');
const hamburger = document.getElementById('menu-open')
const closeMenu = document.querySelector('.close')
const mobileMenu = document.querySelector('.nav-mobile')
const themeSwitch = document.getElementById('themeSwitch')
const themeSwitchMobile = document.getElementById('themeSwitch-mobile')
const body = document.querySelector('body')

hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('menu-open')
})
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open')
})
dropDown.addEventListener('click', () => {
    dropDownList.classList.toggle('drop-down-open')
})
dropDownMobile.addEventListener('click', () => {
    dropDownListMobile.classList.toggle('drop-down-open')
})

//Slider
const swiper = new Swiper(".mySwiper", {
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

 // Theme Color Personalize
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})
themeSwitchMobile.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

