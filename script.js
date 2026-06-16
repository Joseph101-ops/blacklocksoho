// FORM SUBMIT HANDLED BY FORMSPREE (no JS needed)

// CALL BUTTON
function callNow(){
window.location.href="tel:+442034416996";
}

// MAP BUTTON
function openMap(){
window.open(
"https://www.google.com/maps/search/?api=1&query=24+Great+Windmill+St+London+W1D+7LG",
"_blank"
);
}


// SCROLL ANIMATION (REVEAL SECTIONS)
const sections = document.querySelectorAll(".section");

const reveal = () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add("show");
}
});
};

window.addEventListener("scroll", reveal);
reveal();
