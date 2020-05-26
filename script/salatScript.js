// JavaScript Document
"use strict"


const fremknap=document.getElementById("frem")

let antalsa1=document.getElementById("antalsa1")
let antalsa2=document.getElementById("antalsa2")





function plusfunktion1() {
	antalsa1.stepUp(1);
}

function minusfunktion1(){
	antalsa1.stepDown(1);
	
}





function plusfunktion2() {
	antalsa2.stepUp(1);
}

function minusfunktion2(){
	antalsa2.stepDown(1);
	
}


let salat=[]

let antalsa=[]



fremknap.addEventListener("click",function(){
 if(antalsa1.value>0){

  salat.push("Hjemmelavet Coleslaw <br>");
  antalsa.push(antalsa1.value);


 
  }
		if (antalsa2.value>0){
			salat.push("Mixed salat <br>");
			antalsa.push(antalsa2.value);
		}
			
		
		

	
	
sessionStorage.setItem("salat",salat)
sessionStorage.setItem("antalsa",antalsa)
});

//////







