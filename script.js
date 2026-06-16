// RESERVATION FORM
document.getElementById("bookingForm").addEventListener("submit", function(e){
e.preventDefault();
alert("Reservation successful! We will contact you shortly.");
this.reset();
});

// CALL BUTTON
function callNow(){
window.location.href = "tel:+442034416996";
}

// GOOGLE MAPS
function openMap(){
window.open(
"https://www.google.com/maps/search/?api=1&query=24+Great+Windmill+St+London+W1D+7LG",
"_blank"
);
}