// JavaScript Document

//der bliver bundet et objekt til en masse div elementer i hurven

const ret=document.getElementById("ret")

const antal=document.getElementById("antal")

const kartoffel=document.getElementById("kartoffel")

const antalka=document.getElementById("antalk")

const sauce=document.getElementById("sauce")

const antalsauc=document.getElementById("antalsau")

const salatt=document.getElementById("salat")

const antalsal=document.getElementById("antalsa")

const menupris=document.getElementById("menupris")

const kartofpris=document.getElementById("kartoffelpris")

const saucepris=document.getElementById("saucepris")

const salatpris=document.getElementById("salatpris")

const samletpris=document.getElementById("samletpris")


//Der bliver bundet et objekt til hver af de lister der er blevet gemt på de foregående sider
//listerne bliver hentet ind ved at getItem, samt den 'items' key



let menuer=sessionStorage.getItem("menuer")

let antalm=sessionStorage.getItem("antalm")

let kartoffler=sessionStorage.getItem("kartoffler")

let antalk=sessionStorage.getItem("antalk")

let saucer=sessionStorage.getItem("sauce")

let antalsau=sessionStorage.getItem("antalsau")

let salater=sessionStorage.getItem("salat")

let antalsa=sessionStorage.getItem("antalsa")

let menupri=sessionStorage.getItem("menupris")

let kartofpri=sessionStorage.getItem("kartoffelpris")

let saupri=sessionStorage.getItem("saucepris")

let salapri=sessionStorage.getItem("salatpris");


//indholdet af hver liste bliver så skrevet til det korresponderende objekt
//kommaerne bliver fjernet fra det der bliver skrevet ved at bruge .replace
// .replace fungerer ved at man først fortæller hvad man vil erstatte, derefter skrives der et 'g' som ortaller at det er gældende //'globalt', uden det ville den kun fjerne det første komma
//derefter skrives et komma, og den man vil erstatte med skrive i ' '


ret.insertAdjacentHTML("beforeend",menuer.replace(/,/g, ''));

antal.insertAdjacentHTML("beforeend",antalm.replace(/,/g, ''))

kartoffel.insertAdjacentHTML("beforeend",kartoffler.replace(/,/g, ''));

antalka.insertAdjacentHTML("beforeend",antalk.replace(/,/g, ''))

sauce.insertAdjacentHTML("beforeend",saucer.replace(/,/g, ''));

antalsauc.insertAdjacentHTML("beforeend",antalsau.replace(/,/g, ''))

salatt.insertAdjacentHTML("beforeend",salater.replace(/,/g, ''));

antalsal.insertAdjacentHTML("beforeend",antalsa.replace(/,/g, ''))

menupris.insertAdjacentHTML("beforeend",menupri.replace(/,/g, ''))

kartofpris.insertAdjacentHTML("beforeend",kartofpri.replace(/,/g, ''))

saucepris.insertAdjacentHTML("beforeend",saupri.replace(/,/g, ''))

salatpris.insertAdjacentHTML("beforeend",salapri.replace(/,/g, ''))







//denne funktion isolerer først alle tal i den givne streng(str)
//derefter bruger den en for loop til at ligge alle de tal sammen med den givne sum(sum1)
//til sidst retunerer den den givne sum (sum1)
    
 function sumPris(str,sum1) {
    var numbers = str.match(/\d+/g).map(Number);
    for (var i = 0; i < numbers.length; i++) {
        sum1 += numbers[i]
    }
	
	return sum1;
}

//der dannes et objekt til hver madkategori som skal indeholde summen af dens priser

let sumM=0

let sumK=0

let sumsau=0

let sumsal=0


//til sidst udskrives der til objektet samletpris 
//For at der kan blive udskrevet noget til samletpris skal der være en værdi til hver 'str' og 'sum1'
//Hvis vi havde mere tid, kunne vi have lavet en funktion, som kunne udskrive sumen ligemeget hvad

samletpris.insertAdjacentHTML("beforeEnd", sumPris(menupri,sumM)+sumPris(kartofpri,sumK)+ sumPris(saupri,sumsau)+ sumPris(salapri,sumsal)+" kr.")

