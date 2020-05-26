// JavaScript Document
"use strict"


const fremknap=document.getElementById("frem")

let antalsau1=document.getElementById("antalsau1")
let antalsau2=document.getElementById("antalsau2")
let antalsau3=document.getElementById("antalsau3")
let antalsau4=document.getElementById("antalsau4")




function plusfunktion1() {
	antalsau1.stepUp(1);
}

function minusfunktion1(){
	antalsau1.stepDown(1);
	
}

let sauce=[]

let antalsau=[]

let saucepris=[]



fremknap.addEventListener("click",function(){
 if(antalsau1.value>0){

  sauce.push("Bearnaise Sauce<br>");
  antalsau.push(antalsau1.value+"<br>");
saucepris.push(antalsau1.value*15+"kr."+"<br>");


 
  }
		if (antalsau2.value>0){
			sauce.push("Kold Spareribs Sauce<br>");
			antalsau.push(antalsau2.value+"<br>");
			saucepris.push(antalsau2.value*15+"kr."+"<br>");
			
		
		
	
	}
	
		if (antalsau3.value>0){
			sauce.push("Whiskey Sauce<br>");
			antalsau.push(antalsau3.value+"<br>");
			saucepris.push(antalsau3.value*15+"kr."+"<br>");
			
		
		
	
	}
		if (antalsau4.value>0){
			sauce.push("Rødvins Sauce<br>");
			antalsau.push(antalsau4.value+"<br>");
			saucepris.push(antalsau4.value*15+"kr."+"<br>");
			
		
		
	
	}
	
	
sessionStorage.setItem("sauce",sauce)
sessionStorage.setItem("antalsau",antalsau)
sessionStorage.setItem("saucepris",saucepris)
});

//////







function plusfunktion2() {
	antalsau2.stepUp(1);
}

function minusfunktion2(){
	antalsau2.stepDown(1);
	
}







function plusfunktion3() {
	antalsau3.stepUp(1);
}

function minusfunktion3(){
	antalsau3.stepDown(1);
	
}

//////


function plusfunktion4() {
	antalsau4.stepUp(1);
}

function minusfunktion4(){
	antalsau4.stepDown(1);
	
}



//////



