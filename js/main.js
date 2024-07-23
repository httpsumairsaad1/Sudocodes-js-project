//ui pic set

//active nav bar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
//nav hide
let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse'); 
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navcollapse.classList.remove("show"); //show call by JS when use click the navbar button
    })
})

//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, s, e, d){
        let obj = document.getElementById(id),
        current = s,
        range = e - s,
        increment = e > s? 1: -1,
        step = Math.abs(Math.floor(d/range)),
        timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if( current == e){
            clearInterval(timer);
           }
        }, step);
    }
    counter("count1", 0, 1781, 3000);
    counter("count2", 10, 1000, 3000);
    counter("count3", 0, 1039, 3000);
    counter("count4", 0, 3000, 3000);
});