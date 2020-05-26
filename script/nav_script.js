// JavaScript Document
"use strict"

//drop up menu
/*dopup lavet med inspiration fra:https://www.w3schools.com/howto/howto_js_dropdown.asp*/
//denne funktion binder navnet dropin til et element
const dropin = document.getElementById("mydropdown")

// funktionen klikfunktion, er bundet til en button vha. onClick
//Når den aktiveres 'toggler' den classen show på elementet dropin, som så viser dropupmenuen
//tilsvarende er dropupmenuen, vha. position, blevet tilpasset så den bliver til en drop down
function klikfunktion() {

    dropin.classList.toggle("show");
}
