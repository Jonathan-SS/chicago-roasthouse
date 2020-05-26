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



fremknap.addEventListener("click",function(){
 if(antalsau1.value>0){

  sauce.push("Bearnaise Sauce");
  antalsau.push(antalsau1.value);


 
  }
		if (antalsau2.value>0){
			sauce.push("Kold Spareribs Sauce");
			antalsau.push(antalsau2.value);
			
		
		
	
	}
	
		if (antalsau3.value>0){
			sauce.push("Whiskey Sauce");
			antalsau.push(antalsau3.value);
			
		
		
	
	}
		if (antalsau4.value>0){
			sauce.push("Rødvins Sauce");
			antalsau.push(antalsau4.value);
			
		
		
	
	}
	
	
sessionStorage.setItem("sauce",sauce)
sessionStorage.setItem("antalsau",antalsau)
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



