// JavaScript Document

const ret=document.getElementById("ret")

const antal=document.getElementById("antal")

const kartoffel=document.getElementById("kartoffel")

const antalka=document.getElementById("antalk")

const sauce=document.getElementById("sauce")

const antalsauc=document.getElementById("antalsau")

const salatt=document.getElementById("salat")

const antalsal=document.getElementById("antalsa")

const menupris=document.getElementById("menupris")

const kartofpris=document.getElementById("kartoffelpris")

const saucepris=document.getElementById("saucepris")

const salatpris=document.getElementById("salatpris")

const samletpris=document.getElementById("samletpris")






let menuer=sessionStorage.getItem("menuer")

let antalm=sessionStorage.getItem("antalm")

let kartoffler=sessionStorage.getItem("kartoffler")

let antalk=sessionStorage.getItem("antalk")

let saucer=sessionStorage.getItem("sauce")

let antalsau=sessionStorage.getItem("antalsau")

let salater=sessionStorage.getItem("salat")

let antalsa=sessionStorage.getItem("antalsa")

let menupri=sessionStorage.getItem("menupris")

let kartofpri=sessionStorage.getItem("kartoffelpris")

let saupri=sessionStorage.getItem("saucepris")

let salapri=sessionStorage.getItem("salatpris");



ret.insertAdjacentHTML("beforeend",menuer+"<br> <br>");

antal.insertAdjacentHTML("beforeend",antalm+"<br> <br>")

kartoffel.insertAdjacentHTML("beforeend",kartoffler+"<br> <br>");

antalka.insertAdjacentHTML("beforeend",antalk+"<br> <br>")

sauce.insertAdjacentHTML("beforeend",saucer+"<br> <br>");

antalsauc.insertAdjacentHTML("beforeend",antalsau+"<br> <br>")

salatt.insertAdjacentHTML("beforeend",salater+"<br> <br>");

antalsal.insertAdjacentHTML("beforeend",antalsa+"<br> <br>")

menupris.insertAdjacentHTML("beforeend",menupri+"<br> <br>")

kartofpris.insertAdjacentHTML("beforeend",kartofpri+"<br> <br>")

saucepris.insertAdjacentHTML("beforeend",saupri+"<br> <br>")

salatpris.insertAdjacentHTML("beforeend",salapri+"<br> <br>")






