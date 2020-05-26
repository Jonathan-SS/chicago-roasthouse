// JavaScript Document
"use strict"


//forside video knap funktioner

//
//denne funktioner er en afspil funktion, den bliver bundet til playknappen vha. onClick
//Den starter objekt a med .play()
//Den 'toggler' classen gem på både objekt b og c, hvilket betyder at den både kan tilføje og fjerne den igen. Alt efter om den er tilføjet
//
 function afspil(a,b,c) {
    a.play();
    b.classList.toggle("gem");
    c.classList.toggle("gem");

}

//
//denne funktioner er en pause funktion, den bliver bundet til pauseknappen vha. onClick
//Den pauser objekt a med .pause()
//
function pause(a,b,c) {
    a.pause();
    b.classList.toggle("gem");
    c.classList.toggle("gem");


}

