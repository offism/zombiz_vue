let main_head = document.querySelector(".main-head");
let navbar_menu = document.querySelector(".navbar-menu");
console.log(main_head.offsetHeight + navbar_menu.offsetHeight , window.pageYOffset);

document.addEventListener('scroll', (e)=>{
if (window.scrollY >= main_head.offsetHeight) {
    navbar_menu.classList.add("sticky")
 } else {
    navbar_menu.classList.remove("sticky");
 }
})


