"use strict"


//først bindes der et objekt til frem knappen
const fremknap=document.getElementById("frem")


//Der bliver lavet en plus og minus funktion, som bliver bundet til en button hver vha. onClick
//plus- og minusfunktionen er afhængig af a, a bliver bundet til et inputfelt i onClick
//ved hjælp af funktionerne stepUp og stepDown, ændre input feltet med 1

function plusfunktion(a) {
	a.stepUp(1);
}

function minusfunktion(a){
	a.stepDown(1);
	
}




//der bliver bundet et object til hver af inputfelterne på menu siden
const antalm1=document.getElementById("antalm1")


const antalm2=document.getElementById("antalm2")


const antalm3=document.getElementById("antalm3")

const antalm4=document.getElementById("antalm4")


const antalm5=document.getElementById("antalm5")


const antalm6=document.getElementById("antalm6")

//Der laves en række tomme arrays

let menuer=[]

let antalm=[]

let menupris=[]

let prism=[]


//hovedfunktion

//når der bliver trykket på fremknap bliver følgende funktion aktiveret:
//
fremknap.addEventListener("click",function(){
	
//Hvert enkelt inputfelts værdi bliver tjekket
 if(antalm1.value>0){
//hvis inputfeltets værdi er over 0, sker følgende 
//Der bliver tilføjet et tekst item til arrayet menuer
  menuer.push("Chicago Roast<br> <br>");
//værdien af inputfeltet tilføjes til arrayet 
  antalm.push(antalm1.value+"<br> <br>");
//værdien af inputfeltet, ganget med 
 menupris.push(antalm1.value*75+"kr."+"<br> <br>");



 
  }
		if (antalm2.value>0){
			menuer.push("Chicago Roast Menu<br> <br>");
			antalm.push(antalm2.value+"<br> <br>");
			menupris.push(antalm2.value*125+"kr."+"<br> <br>");
		
			
			
		
		
	
	}
	
		if (antalm3.value>0){
			menuer.push("Spareribs<br> <br>");
			antalm.push(antalm3.value+"<br> <br>");
			menupris.push(antalm3.value*75+"kr."+"<br> <br>");
			prism.push(antalm3.value*75);
			
		
		
	
	}
		if (antalm4.value>0){
			menuer.push("Spareribs Menu<br> <br>");
			antalm.push(antalm4.value+"<br> <br>");
			menupris.push(antalm4.value*125+"kr."+"<br> <br>");
	
			
		
		
	
	}
	
	if (antalm5.value>0){
			menuer.push("Turkey Roast<br> <br>");
			antalm.push(antalm5.value+"<br> <br>");
		menupris.push(antalm5.value*75+"kr."+"<br> <br>");

			
		
		
	
	}
	
	if (antalm6.value>0){
			menuer.push("Turkey Roast Menu<br>");
			antalm.push(antalm6.value+"<br>");
		menupris.push(antalm6.value*125+"kr."+"<br>");
	
			
		
		
	
	}
	
	
	
	
sessionStorage.setItem("menuer",menuer)
sessionStorage.setItem("antalm",antalm)
sessionStorage.setItem("menupris",menupris)
sessionStorage.setItem("prism",prism)
});

//////






