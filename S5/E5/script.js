var books = [
    {
        "titolo":"Guida galattica per autostoppisti",
        "prezzo":42
    },
    {
        "titolo":"L'alchimista",
        "prezzo":8
    },
    {
        "titolo":"Il signore degli anelli",
        "prezzo":20
    },
    {
        "titolo":"La storia infinita",
        "prezzo":14
    },
    {
        "titolo":"Harry potter e il prigioniero di Azkaban",
        "prezzo":30
    },
    {
        "titolo":"20.000 leghe sotto i mari",
        "prezzo":20
    },
    {
        "titolo":"Assasin's creed 2",
        "prezzo":11
    },
    {
        "titolo":"Metro redux",
        "prezzo":25
    },
    {
        "titolo":"SonderKommando",
        "prezzo":22
    },
    {
        "titolo":"La torre nera - La chiamata dei tre",
        "prezzo":17
    }
]
var show;
var data = document.getElementById("data");;
var selectBooks = document.getElementById("book");
var price = document.querySelector("#prezzo i");
var cart = document.getElementById("cart")

show += "<option value='' disabled selected>Scegli un Libro</option>"
        for (var i in books) {
            show += '<option value= "'+ books[i].titolo +'">' + books[i].titolo + '</option>'
        }
        selectBooks.innerHTML = show;

selectBooks.addEventListener("change",function (){
    for(var i in books){
        if (selectBooks.value==books[i].titolo){
            price.innerHTML=books[i].prezzo
        }
    }
})

function add(){
    if(selectBooks.value != "")
    cart.innerHTML+="<div class=cartItem><p>"+selectBooks.value+"</p><p>"+price.innerHTML+"€</p><hr></div>"
}