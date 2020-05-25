"use strict"



const fremknap=document.getElementById("frem")

const antalm1=document.getElementById("antalm1")




function plusfunktion1() {
	antalm1.stepUp(1);
}

function minusfunktion1(){
	antalm1.stepDown(1);
	
}

var menuer=["bla","bla"]

var antalm=["4","4"]

localStorage.setItem("menuer",JSON.stringify(menuer))
localStorage.setItem("antalm",JSON.stringify(antalm))



fremknap.addEventListener("click",function(){
	
	
		if (antalm1.value>0){
			menuer.push("Chicago Roast");
			antalm.push(antalm1.value);
			
		
		
	
	}
	
	
});


//////




const antalm2=document.getElementById("antalm2")




function plusfunktion2() {
	antalm2.stepUp(1);
}

function minusfunktion2(){
	antalm2.stepDown(1);
	
}



fremknap.addEventListener("click",function(){
	
	
		if (antalm3.value>0){
			menuer.push("Chicago Roast");
			antalm.push(antalm3.value);
			
		
		
	
	}
	
	
});


//////

//////




const antalm3=document.getElementById("antalm3")




function plusfunktion3() {
	antalm3.stepUp(1);
}

function minusfunktion3(){
	antalm3.stepDown(1);
	
}



fremknap.addEventListener("click",function(){
	
	
		if (antalm3.value>0){
			menuer.push("Spareribs");
			antalm.push(antalm3.value);
			
		
		
	
	}
	
	
});



//////




const antalm4=document.getElementById("antalm4")




function plusfunktion4() {
	antalm4.stepUp(1);
}

function minusfunktion4(){
	antalm4.stepDown(1);
	
}


fremknap.addEventListener("click",function(){
	
	
		if (antalm4.value>0){
			menuer.push("Spareribs menu");
			antalm.push(antalm4.value);
			
		
		
	
	}
	
	
});
//////




const antalm5=document.getElementById("antalm5")




function plusfunktion5() {
	antalm5.stepUp(1);
}

function minusfunktion5(){
	antalm5.stepDown(1);
	
}




fremknap.addEventListener("click",function(){
	
	
		if (antalm5.value>0){
			menuer.push("Chicago Roast");
			antalm.push(antalm5.value);
			
		
		
	
	}
	
	
});
//////




const antalm6=document.getElementById("antalm6")




function plusfunktion6() {
	antalm2.stepUp(1);
}

function minusfunktion6(){
	antalm2.stepDown(1);
	
}



fremknap.addEventListener("click",function(){
	
	
		if (antalm6.value>0){
			menuer.push("Chicago Roast");
			antalm.push(antalm6.value);
			
		
		
	
	}
	
	
});