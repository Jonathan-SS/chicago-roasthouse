// JavaScript Document
"use strict"


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

