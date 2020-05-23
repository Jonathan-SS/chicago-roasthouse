// JavaScript Document



//forside video knap
const vid = document.getElementById("video")
const knap = document.getElementById("playknap")
const pause = document.getElementById("pauseknap")



knap.addEventListener("click", function () {
    vid.play();
    knap.classList.toggle("gem");
    pause.classList.toggle("vis");

});

pause.addEventListener("click", function () {
    vid.pause();
    knap.classList.toggle("gem");
    pause.classList.toggle("vis");


});






//drop up menu
/*dopup lavet med inspiration fra:https://www.w3schools.com/howto/howto_js_dropdown.asp*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropin = document.getElementById("mydropdown")

function klikfunktion() {

    dropin.classList.toggle("show");
}
