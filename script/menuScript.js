"use strict"



const fremknap=document.getElementById("frem")

let antalm1=document.getElementById("antalm1")




function plusfunktion1() {
	antalm1.stepUp(1);
}

function minusfunktion1(){
	antalm1.stepDown(1);
	
}

let menuer=[]

let antalm=[]

let menupris=[]



fremknap.addEventListener("click",function(){
 if(antalm1.value>0){

  menuer.push("Chicago Roast");
  antalm.push(antalm1.value);
 menupris.push(antalm1.value*75);


 
  }
		if (antalm2.value>0){
			menuer.push("Chicago Roast Menu<br>");
			antalm.push(antalm2.value);
			menupris.push(antalm2.value*125);
			
		
		
	
	}
	
		if (antalm3.value>0){
			menuer.push("Spareribs<br>");
			antalm.push(antalm3.value);
			
		
		
	
	}
		if (antalm4.value>0){
			menuer.push("Spareribs Menu<br>");
			antalm.push(antalm4.value);
			
		
		
	
	}
	
	if (antalm5.value>0){
			menuer.push("Turkey Roast<br>");
			antalm.push(antalm5.value);
			
		
		
	
	}
	
	if (antalm6.value>0){
			menuer.push("Turkey Roast Menu<br>");
			antalm.push(antalm6.value);
			
		
		
	
	}
	
	
	
sessionStorage.setItem("menuer",menuer)
sessionStorage.setItem("antalm",antalm)
sessionStorage.setItem("menupris",menupris)
});

//////




const antalm2=document.getElementById("antalm2")




function plusfunktion2() {
	antalm2.stepUp(1);
}

function minusfunktion2(){
	antalm2.stepDown(1);
	
}






//////

//////




const antalm3=document.getElementById("antalm3")




function plusfunktion3() {
	antalm3.stepUp(1);
}

function minusfunktion3(){
	antalm3.stepDown(1);
	
}

//////




const antalm4=document.getElementById("antalm4")




function plusfunktion4() {
	antalm4.stepUp(1);
}

function minusfunktion4(){
	antalm4.stepDown(1);
	
}



//////




const antalm5=document.getElementById("antalm5")




function plusfunktion5() {
	antalm5.stepUp(1);
}

function minusfunktion5(){
	antalm5.stepDown(1);
	
}



//////




const antalm6=document.getElementById("antalm6")




function plusfunktion6() {
	antalm6.stepUp(1);
}

function minusfunktion6(){
	antalm6.stepDown(1);
	
}

