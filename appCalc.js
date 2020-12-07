/**    écran    */
let screen = document.getElementById("screen");

/** récupération des touches */
// let ouvPar = document.getElementById("ouvPar");
// let fermPar = document.getElementById("fermPar");
let modul = document.getElementById("modulo");
let div = document.getElementById("div");
let nbr7 = document.getElementById("chfr7");
let nbr8 = document.getElementById("chfr8");
let nbr9 = document.getElementById("chfr9");
let multi = document.getElementById("multi");
let nbr4 = document.getElementById("chfr4");
let nbr5 = document.getElementById("chfr5");
let nbr6 = document.getElementById("chfr6");
let sous = document.getElementById("sous");
let nbr1 = document.getElementById("chfr1");
let nbr2 = document.getElementById("chfr2");
let nbr3 = document.getElementById("chfr3");
let add = document.getElementById("add");
let nbr0 = document.getElementById("chfr0");
// let dot = document.getElementById("dot");
let raz = document.getElementById("raz");
let equal = document.getElementById("equal");

/** function click */
// ouvPar.addEventListener("click", function (){
//     screen.innerHTML += "(";
// })
// fermPar.addEventListener("click", function (){
//     screen.innerHTML += ")";
// })
modul.addEventListener("click", function (){
    screen.innerHTML += "%";
})
div.addEventListener("click", function (){
    screen.innerHTML += "/";
})
nbr7.addEventListener("click", function (){
    screen.innerHTML += 7;
})
nbr8.addEventListener("click", function (){
    screen.innerHTML += 8;
})

nbr9.addEventListener("click", function (){
    screen.innerHTML += 9;
})

multi.addEventListener("click", function (){
    screen.innerHTML += "*";
})

nbr4.addEventListener("click", function (){
    screen.innerHTML += 4;
})

nbr5.addEventListener("click", function (){
    screen.innerHTML += 5;
})

nbr6.addEventListener("click", function (){
    screen.innerHTML += 6;
})

sous.addEventListener("click", function (){
    screen.innerHTML += "-";
})

nbr1.addEventListener("click", function (){
    screen.innerHTML += 1;
})

nbr2.addEventListener("click", function (){
    screen.innerHTML += 2;
})

nbr3.addEventListener("click", function (){
    screen.innerHTML += 3;
})

add.addEventListener("click", function (){
    screen.innerHTML += "+";
})

nbr0.addEventListener("click", function (){
    screen.innerHTML += 0;
})

// dot.addEventListener("click", function (){
//     screen.innerHTML += ".";
// })

raz.addEventListener("click", function (){
    screen.innerHTML = "";
})

equal.addEventListener("click", function (){

})
