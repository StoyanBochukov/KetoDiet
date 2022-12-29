const selected = document.querySelector('.selected');
const selectedImg = document.querySelector('.selectedImg');
const hamburger = document.getElementById('menu-open');
const closeMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.nav-mobile');
const buttons = document.querySelectorAll('[data-carousel-button]');
const dropDowns = document.querySelectorAll('[data-language-drop]');
const dropList = document.querySelectorAll('[data-drop-menu]');
const themeSwitch = document.querySelectorAll('[data-theme-button]');


hamburger.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('menu-open')
})
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-open')
})

dropDowns.forEach(drop =>{
    drop.addEventListener('click', () => {
        dropList.forEach(list => {
            list.classList.toggle('drop-down-open')
        })
    })
})


//Custom Slider
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0){
            newIndex = slides.children.length -1
        }
        if(newIndex >= slides.children.length){
            newIndex = 0
        }
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

 // Theme Color Personalize
themeSwitch.forEach(theme => {
    theme.addEventListener('click', () => {
        document.body.classList.toggle('dark')
    })
})


