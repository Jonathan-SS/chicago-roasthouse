// JavaScript Document

const ret=document.getElementById("ret")

const antal=document.getElementById("antal")

const kartoffel=document.getElementById("kartoffel")

const antalka=document.getElementById("antalk")

const sauce=document.getElementById("sauce")

const antalsauc=document.getElementById("antalsau")

const salatt=document.getElementById("salat")

const antalsal=document.getElementById("antalsa")







let menuer=sessionStorage.getItem("menuer")

let antalm=sessionStorage.getItem("antalm")

let kartoffler=sessionStorage.getItem("kartoffler")

let antalk=sessionStorage.getItem("antalk")

let saucer=sessionStorage.getItem("sauce")

let antalsau=sessionStorage.getItem("antalsau")

let salater=sessionStorage.getItem("salat")

let antalsa=sessionStorage.getItem("antalsa")






ret.insertAdjacentHTML("beforeend",menuer+"<br> <br>");

antal.insertAdjacentHTML("beforeend",antalm+"<br> <br>")

kartoffel.insertAdjacentHTML("beforeend",kartoffler+"<br> <br>");

antalka.insertAdjacentHTML("beforeend",antalk+"<br> <br>")

sauce.insertAdjacentHTML("beforeend",saucer+"<br> <br>");

antalsauc.insertAdjacentHTML("beforeend",antalsau+"<br> <br>")

salatt.insertAdjacentHTML("beforeend",salater+"<br> <br>");

antalsal.insertAdjacentHTML("beforeend",antalsa+"<br> <br>")




