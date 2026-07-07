/* ============================
   WINX-LAND
   SCRIPT.JS
   PART 1
============================ */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

cards.forEach(card=>{

observer.observe(card);

});

/* Navbar küçülmesi */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scroll");

}else{

header.classList.remove("scroll");

}

});

/* Mouse ışık efekti */

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

const x = e.clientX/window.innerWidth*100;

const y = e.clientY/window.innerHeight*100;

hero.style.background=
`radial-gradient(circle at ${x}% ${y}%,
rgba(255,255,255,.10),
#101010 35%,
#050505 100%)`;

});
