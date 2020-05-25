// JavaScript Document

const ret=document.getElementById("ret")

const antal=document.getElementById("antal")

let menuerMN=JSON.parse(localStorage.getItem("menuer"))


ret.insertAdjacentHTML("beforeend",menuerMN+"<br> <br>");

antal.insertAdjacentHTML("beforeend",JSON.parse(localStorage.getItem("antalm"))+"<br> <br>")

