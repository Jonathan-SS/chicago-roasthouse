// JavaScript Document
"use strict"


const fremknap=document.getElementById("frem")

let antalsa1=document.getElementById("antalsa1")
let antalsa2=document.getElementById("antalsa2")





function plusfunktion(a) {
	a.stepUp(1);
}

function minusfunktion(a){
	a.stepDown(1);
	
}




let salat=[]

let antalsa=[]

let	salatpris=[]



fremknap.addEventListener("click",function(){
 if(antalsa1.value>0){

  salat.push("Hjemmelavet Coleslaw <br> <br>");
  antalsa.push(antalsa1.value+"<br> <br>");
	salatpris.push(antalsa1.value*20+"kr."+"<br> <br>");


 
  }
		if (antalsa2.value>0){
			salat.push("Mixed salat <br> <br>");
			antalsa.push(antalsa2.value+"<br> <br>");
			salatpris.push(antalsa2.value*22+"kr."+"<br> <br>");
		}
			
		
		

	
	
sessionStorage.setItem("salat",salat)
sessionStorage.setItem("salatpris",salatpris)
sessionStorage.setItem("antalsa",antalsa)
});

//////







