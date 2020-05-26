"use strict"



const fremknap=document.getElementById("frem")

let antalm1=document.getElementById("antalm1")


const antalm2=document.getElementById("antalm2")


const antalm3=document.getElementById("antalm3")

const antalm4=document.getElementById("antalm4")


const antalm5=document.getElementById("antalm5")


const antalm6=document.getElementById("antalm6")
////

function plusfunktion(a) {
	a.stepUp(1);
}

function minusfunktion1(a){
	a.stepDown(1);
	
}

let menuer=[]

let antalm=[]

let menupris=[]



fremknap.addEventListener("click",function(){
 if(antalm1.value>0){

  menuer.push("Chicago Roast<br>");
  antalm.push(antalm1.value);
 menupris.push(antalm1.value*75+"kr.");


 
  }
		if (antalm2.value>0){
			menuer.push("Chicago Roast Menu<br>");
			antalm.push(antalm2.value);
			menupris.push(antalm2.value*125+"kr."+"<br>");
			
		
		
	
	}
	
		if (antalm3.value>0){
			menuer.push("Spareribs<br>");
			antalm.push(antalm3.value);
			menupris.push(antalm3.value*75+"kr."+"<br>");
			
		
		
	
	}
		if (antalm4.value>0){
			menuer.push("Spareribs Menu<br>");
			antalm.push(antalm4.value);
			menupris.push(antalm4.value*125+"kr."+"<br>");
			
		
		
	
	}
	
	if (antalm5.value>0){
			menuer.push("Turkey Roast<br>");
			antalm.push(antalm5.value);
		menupris.push(antalm5.value*75+"kr."+"<br>");
			
		
		
	
	}
	
	if (antalm6.value>0){
			menuer.push("Turkey Roast Menu<br>");
			antalm.push(antalm6.value);
		menupris.push(antalm6.value*125+"kr."+"<br>");
			
		
		
	
	}
	
	
	
sessionStorage.setItem("menuer",menuer)
sessionStorage.setItem("antalm",antalm)
sessionStorage.setItem("menupris",menupris)
});

//////






