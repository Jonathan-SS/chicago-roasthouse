// JavaScript Document
"use strict"

//drop up menu
/*dopup lavet med inspiration fra:https://www.w3schools.com/howto/howto_js_dropdown.asp*/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropin = document.getElementById("mydropdown")


function klikfunktion() {

    dropin.classList.toggle("show");
}