// JavaScript Document

const ret=document.getElementById("ret")

const antal=document.getElementById("antal")

let menuerMN=JSON.parse(sessionStorage.getItem("menuer"))


ret.insertAdjacentHTML("beforeend",menuerMN+"<br> <br>");

antal.insertAdjacentHTML("beforeend",JSON.parse(sessionStorage.getItem('antalm'))+"<br> <br>")
