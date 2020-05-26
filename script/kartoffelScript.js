// JavaScript Document
"use strict"

const fremknap=document.getElementById("frem")

let antalk1=document.getElementById("antalk1")
let antalk2=document.getElementById("antalk2")
let antalk3=document.getElementById("antalk3")
let antalk4=document.getElementById("antalk4")




function plusfunktion1() {
	antalk1.stepUp(1);
}

function minusfunktion1(){
	antalk1.stepDown(1);
	
}

let kartoffler=[]

let antalk=[]



fremknap.addEventListener("click",function(){
 if(antalk1.value>0){

  kartoffler.push("Pommes Frites");
  antalk.push(antalk1.value);


 
  }
		if (antalk2.value>0){
			kartoffler.push("Bagt Kartoffel <br>m. Hvidløgssmør");
			antalk.push(antalk2.value);
			
		
		
	
	}
	
		if (antalk3.value>0){
			kartoffler.push("Bagt Kartoffel <br>m. Baconsmør");
			antalk.push(antalk3.value);
			
		
		
	
	}
		if (antalk4.value>0){
			kartoffler.push("Håndskårne Kartoffelbåde");
			antalk.push(antalk4.value);
			
		
		
	
	}
	
	
sessionStorage.setItem("kartoffler",kartoffler)
sessionStorage.setItem("antalk",antalk)
});

//////







function plusfunktion2() {
	antalk2.stepUp(1);
}

function minusfunktion2(){
	antalk2.stepDown(1);
	
}







function plusfunktion3() {
	antalk3.stepUp(1);
}

function minusfunktion3(){
	antalk3.stepDown(1);
	
}

//////


function plusfunktion4() {
	antalk4.stepUp(1);
}

function minusfunktion4(){
	antalk4.stepDown(1);
	
}



//////

