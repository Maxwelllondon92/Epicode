const btnAvanti = document.getElementById("btnAvanti");
const btnIndietro = document.getElementById("btnIndietro");
const btnPlay = document.getElementById("btnPlay");
const icoPlay = document.querySelector("#btnPlay i")
const cube1 = document.getElementById("cube-1");
const cube2 = document.getElementById("cube-2");
const cube3 = document.getElementById("cube-3");
var play = false;
var n = 0;
var interval;
//console.log(btnIndietro);
btnAvanti.addEventListener("click", cambiaImmagine);
btnIndietro.addEventListener("click", cambiaImmagine);
btnPlay.addEventListener("click", autoPlay);

btnAvanti.addEventListener("mouseover", anteprimaIN);
btnIndietro.addEventListener("mouseover", anteprimaIN);

btnAvanti.addEventListener("mouseout", anteprimaOUT);
btnIndietro.addEventListener("mouseout", anteprimaOUT);

function cambiaImmagine() {
    if (this.id == "btnAvanti" && play == false) {
        n = n + 90;
    } else if (this.id == "btnIndietro" && play == false) {
        n = n - 90;
    } else {
        console.error("Errore parametro")
    }
    rotateElement(n);
}

function anteprimaIN() {
    if (this.id == "btnAvanti" && play == false) {
        n = n + 35;
    } else if (this.id == "btnIndietro" && play == false) {
        n = n - 35;
    } else {
        console.error("Errore parametro")
    }
    rotateElement(n)
}
function anteprimaOUT() {
    if (this.id == "btnAvanti" && play == false) {
        n = n - 35;
    } else if (this.id == "btnIndietro" && play == false) {
        n = n + 35;
    } else {
        console.error("Errore parametro")
    }
    rotateElement(n)
}

function autoPlay() {

    if (play == false) {
        play = true;
        interval = setInterval(function () {
            n += 90;
            rotateElement(n)
        }, 1000)
        icoPlay.classList.remove("fa-play");
        icoPlay.classList.add("fa-pause");

    } else {
        play = false;
        clearInterval(interval);

        rotateElement(n);

        icoPlay.classList.remove("fa-pause");
        icoPlay.classList.add("fa-play");


    }
}

function rotateElement(n) {
    cube1.style.transform = "rotateY(" + n + "deg)";
    setTimeout(function () { cube2.style.transform = "rotateY(" + n + "deg)"; }, 150)
    setTimeout(function () { cube3.style.transform = "rotateY(" + n + "deg)"; }, 300)
}