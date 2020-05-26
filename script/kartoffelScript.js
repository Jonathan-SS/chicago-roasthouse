// JavaScript Document
"use strict"

const fremknap=document.getElementById("frem")

let antalk1=document.getElementById("antalk1")
let antalk2=document.getElementById("antalk2")
let antalk3=document.getElementById("antalk3")
let antalk4=document.getElementById("antalk4")




function plusfunktion(a) {
	a.stepUp(1);
}

function minusfunktion(a){
	a.stepDown(1);
	
}

let kartoffler=[]

let antalk=[]

let kartoffelpris=[]



fremknap.addEventListener("click",function(){
 if(antalk1.value>0){

  kartoffler.push("Pommes Frites<br>");
  antalk.push(antalk1.value);
 kartoffelpris.push(antalk1.value*25+"kr."+"<br>");


 
  }
		if (antalk2.value>0){
			kartoffler.push("Bagt Kartoffel <br>m. Hvidløgssmør<br>");
			antalk.push(antalk2.value);
			kartoffelpris.push(antalk2.value*20+"kr."+"<br>");
			
		
		
	
	}
	
		if (antalk3.value>0){
			kartoffler.push("Bagt Kartoffel <br>m. Baconsmør<br>");
			antalk.push(antalk3.value);
			kartoffelpris.push(antalk3.value*20+"kr."+"<br>");
			
		
		
	
	}
		if (antalk4.value>0){
			kartoffler.push("Håndskårne Kartoffelbåde<br>");
			antalk.push(antalk4.value);
			kartoffelpris.push(antalk4.value*25+"kr."+"<br>");
			
		
		
	
	}
	
	
sessionStorage.setItem("kartoffler",kartoffler)
sessionStorage.setItem("kartoffelpris",kartoffelpris)
sessionStorage.setItem("antalk",antalk)
});

//////



