//// Variabili 
const menuButton = document.getElementById("menuButton");
const menuList = document.getElementById("menuList");
const textEdit = document.getElementById("textEdit");
const elementiLista = document.querySelectorAll("#lista li")

var size = getComputedStyle(textEdit).fontSize;
console.log(size);



//// Menu Toggle ////
menuButton.addEventListener('click', function(){
    menuList.classList.toggle("hide")
});


//// TextEdit ////
/*function incrementaFont(){
    textEdit.classList.toggle("bigFont");
}*/

function decrementaFont(){
    textEdit.classList.toggle("smallFont");
}

function cambiaColore(){
    textEdit.classList.toggle("orange");
}
function maiuscoloFont(){
    textEdit.classList.toggle("uppercase");
}

function hide(){
    textEdit.classList.toggle("transparent")
}

for (i=0;i<elementiLista.length;i++){

    elementiLista[i].addEventListener('mouseover',function(){
        this.style.color = 'red';
    })
    elementiLista[i].addEventListener('mouseout',function(){
        this.style.color = 'black';
    })
    elementiLista[i].addEventListener('click',function(){
        this.classList.toggle("cancel")
    })

}

