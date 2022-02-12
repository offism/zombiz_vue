let main_head = document.querySelector(".main-head");
let navbar_menu = document.querySelector(".navbar-menu");

document.addEventListener('scroll', (e)=>{
if (window.scrollY >= main_head.offsetHeight) {
    navbar_menu.classList.add("sticky-nav")
 } else {
    navbar_menu.classList.remove("sticky-nav");
 }
})



//Counter 

let counters = document.querySelectorAll('.counter')
const speed = 200

counters.forEach(counter => {
const updateCount = ()=>{
let target = +counter.getAttribute('data-target')
let count = +counter.innerText
let inc = target / speed

if(count < target){
 counter.innerText = count + inc
 setTimeout(updateCount , 2)
} else{
   count.innerText = target
}
}

updateCount()
})