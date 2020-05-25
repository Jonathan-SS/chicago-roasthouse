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

sessionStorage.setItem("menuer",JSON.stringify(menuer))
sessionStorage.setItem("antalm",JSON.stringify(antalm))



fremknap.addEventListener("click",function(){
	
	
		if (antalm1.value>0){
			menuer.push("Chicago Roast");
			antalm.push(antalm1.value);
			
		
		
	
	}
	
	location.href="kurv.html"
	
});


//////






function plusfunktion2() {
	document.getElementById("antalm2").stepUp(1);
}

function minusfunktion2(){
	document.getElementById("antalm2").stepDown(1);
	
}


fremknap.addEventListener("click",function(){
	
	
		if (antalm2.value>0){
			sessionStorage.setItem("menu","Chicago Roast menu "+antal2.value)
			
		
		
	
	}
	location.href="kurv.html"
	
	
});
/////






function plusfunktion3() {
	document.getElementById("antalm3").stepUp(1);
}

function minusfunktion3(){
	document.getElementById("antalm3").stepDown(1);
	
}


fremknap.addEventListener("click",function(){
	
	
		if (antalm3.value>0){
			sessionStorage.setItem("menu","Spare Ribs"+antalm3.value)
			
		
		
	
	}
	location.href="kurv.html"
	
	
});
/////





function plusfunktion4() {
	document.getElementById("antalm4").stepUp(1);
}

function minusfunktion4(){
	document.getElementById("antalm4").stepDown(1);
	
}


fremknap.addEventListener("click",function(){
	
	
		if (antalm4.value>0){
			sessionStorage.setItem("menu","Spare Ribs menu "+antalm4.value)
			
		
		
	
	}
	location.href="kurv.html"
	
	
});
/////






function plusfunktion5() {
	document.getElementById("antalm5").stepUp(1);
}

function minusfunktion5(){
	document.getElementById("antalm5").stepDown(1);
	
}


fremknap.addEventListener("click",function(){
	
	
		if (antalm5.value>0){
			sessionStorage.setItem("menu","Turkey Roast"+antalm5.value)
			
		
		
	
	}
	location.href="kurv.html"
	
	
});
/////



const antalm6=document.getElementById("antalm6")

function plusfunktion6() {
	document.getElementById("antalm6").stepUp(1);
}

function minusfunktion6(){
	document.getElementById("antalm6").stepDown(1);
	
}


fremknap.addEventListener("click",function(){
	
	
		if (antalm6.value>0){
			sessionStorage.setItem("menu","Turkey Roast menu"+antalm6.value)
			
		
		
	
	}
	location.href="kurv.html"
	
	
});
/////


