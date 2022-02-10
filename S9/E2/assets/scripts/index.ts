////// VARIABILI GLOBALI
let bookGenreList: string[] = [];
let bookList: any[] = [];
let filmGenreList: string[] = [];
let filmList: any[] = [];
let musicGenreList: string[] = [];
let musicList: any[] = [];
////// CALLBACK
checkWindow();
loadUser();
generateCatalogue();

////// EVENT HANDLERS
$(window).on("resize", checkWindow);
$('#ch-logoutBtn').on('click', logout)
$('#ch-categories').on('change', showCurrentCategory)

////// CLASSI
abstract class Prodotto {
    nome: string;
    prezzo: number;
    generi: string[];
    immagine: string;
    EAN: string;
    anno: number;

    constructor(nome: string, prezzo: number, generi: string[], immagine: string, EAN: string, anno: number) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.generi = generi;
        this.immagine = immagine;
        this.EAN = EAN;
        this.anno = anno
    }
    abstract addToCart(): void;
}
class Libri extends Prodotto {
    nome: string;
    prezzo: number;
    generi: string[];
    immagine: string;
    EAN: string;
    anno: number;
    autore: string;
    editore: string;
    constructor(nome: string, prezzo: number, generi: string[], immagine: string, EAN: string, anno: number, autore: string, editore: string) {
        super(nome, prezzo, generi, immagine, EAN, anno)
        this.autore = autore;
        this.editore = editore;
    }
    addToCart(): void {
        if (localStorage.currentUser) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.carrello.push(this);
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem('currentUser', currentUser);
        } else {
            window.location.href = "login.html";
        }
    }
}
class Film extends Prodotto {
    nome: string;
    prezzo: number;
    generi: string[];
    immagine: string;
    EAN: string;
    anno: number;
    regista: string;
    attori: string[];
    supporto: string;
    constructor(nome: string, prezzo: number, generi: string[], immagine: string, EAN: string, anno: number, regista: string, attori: string[], supporto: string) {
        super(nome, prezzo, generi, immagine, EAN, anno);
        this.regista = regista;
        this.attori = attori;
        this.supporto = supporto;
    }
    addToCart(): void {
        if (localStorage.currentUser) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.carrello.push(this);
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem('currentUser', currentUser);
        } else {
            window.location.href = "login.html";
        }
    }
}
class Musica extends Prodotto {
    nome: string;
    prezzo: number;
    generi: string[];
    immagine: string;
    EAN: string;
    anno: number;
    etichetta: string;
    artisti: string[];
    supporto: string;
    constructor(nome: string, prezzo: number, generi: string[], immagine: string, EAN: string, anno: number, etichetta: string, artisti: string[], supporto: string) {
        super(nome, prezzo, generi, immagine, EAN, anno)
        this.etichetta = etichetta;
        this.artisti = artisti;
        this.supporto = supporto;
    }
    addToCart(): void {
        if (localStorage.currentUser) {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.carrello.push(this);
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem('currentUser', currentUser);
            // $('#liveToast').css('opacity',1);
            // $('#liveToast').show();
            
        } else {
            window.location.href = "login.html";
        }
    }
}

////// ELENCO FUNZIONI
setTimeout(function () {
    showCurrentCategory()
    fillGenres();
    // filterGenres(); 
    $('.ch-item-details').each(function(index){
        $(this).on('click', function(){
        $(this).parent().siblings('.card-header').toggle();
    })
    })
    $('.fa-times').each(function(index){
        $(this).on('click', function(){
        $(this).closest('div').toggle();
    })
    })
    
}, 500)
function checkWindow() {
    if (visualViewport.width >= 992) {
        //desktop
        $("#ch-filterBtn").hide();
        $('#ch-filters').removeClass('offcanvas offcanvas-bottom')
        $('#ch-filters').addClass('col-lg-3')
        $('#ch-filters').css("visibility", "visible");
        $('.ch-genres').children('ul').removeClass('flex-row flex-wrap');
        $('.ch-genres').children('ul').addClass('flex-column flex-nowrap');
    } else {
        //mobile
        $("#ch-filterBtn").show();
        $('#ch-filters').addClass('offcanvas offcanvas-bottom')
        $('#ch-filters').removeClass('col-lg-3')
    }
}
function showCurrentCategory() {
    $('.ch-genres').hide()
    $('.ch-product').hide()
    switch ($('#ch-categories').val()) {
        case 'libri':
            $('#ch-book-genres').show();
            $('#ch-catalogueTitle').text("Libri");
            $('.ch-book-item').show();
            break;
        case 'film':
            $('#ch-film-genres').show();
            $('#ch-catalogueTitle').text("Film");
            $('.ch-film-item').show();
            break;
        case 'musica':
            $('#ch-music-genres').show();
            $('#ch-catalogueTitle').text("Musica");
            $('.ch-music-item').show();
    }
}
function loadUser() {
    if (localStorage.currentUser) {
        $('.ch-userLogged').show()
        $('.ch-noUserLogged').hide()
        let currentUser = JSON.parse(localStorage.getItem('currentUser'))
        $('#ch-currentUser').text(currentUser.nome).css('text-transform', 'capitalize')
    } else {
        $('.ch-userLogged').hide()
        $('.ch-noUserLogged').show()
    }
}
function logout() {
    localStorage.removeItem('currentUser');
    loadUser()
}
function generateCatalogue(): void {
    $.ajax({
        url: `../assets/jsons/libri.json`,
        dataType: 'json',
        success: function (json) {
            for (let items in json) {
                let book = new Libri(
                    json[items].nome,
                    json[items].prezzo,
                    json[items].generi,
                    json[items].immagine,
                    json[items].EAN,
                    json[items].anno,
                    json[items].autore,
                    json[items].editore
                )
                bookList.push(book)

                $('#ch-catalogue-container').append(`
                    <div id="ch-book-" class="card col-md-4 ch-book-item ch-product">
                    <img src="${book.immagine}" class="card-img-top img-fluid" alt="${book.nome}">
                    <div class="card-header">
                    <a><i class="fas fa-times"></i></a>
                    <p><b class="fw-bold">Generi: </b>${json[items].generi}</p>
                    <p><b class="fw-bold">Anno: </b>${json[items].anno}</p>
                    <p><b class="fw-bold">Autore: </b>${json[items].autore}</p>
                    <p><b class="fw-bold">Editore: </b>${json[items].editore}</p>
                    <p><b class="fw-bold">EAN: </b>${json[items].EAN}</p>
                    <p><b class="fw-bold">Prezzo: </b>${json[items].prezzo}€</p>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title fs-5">${book.nome}</h3>
                      <p class="card-text mb-2">di ${book.autore}</p>
                      <a href="javascript:void(0)" class="card-text mb-2 ch-item-details">Dettagli</a>
                    </div>
                    <div class="card-footer">
                    <button type="button" onclick="bookList[${[items]}].addToCart()" class="btn btn-primary ch-addToCart">Aggiungi al carrello</button>
                    </div>
                  </div> 
                  `);
                for (let i = 0; i < book.generi.length; i++) {
                    bookGenreList.push(book.generi[i]);
                }
            }
            bookGenreList = bookGenreList.filter(function (item, index, bookGenreList) {
                return bookGenreList.indexOf(item) == index;
            });
        }
    });

    $.ajax({
        url: `../assets/jsons/film.json`,
        dataType: 'json',
        success: function (json) {
            for (let items in json) {
                let film = new Film(
                    json[items].nome,
                    json[items].prezzo,
                    json[items].generi,
                    json[items].immagine,
                    json[items].EAN,
                    json[items].anno,
                    json[items].regista,
                    json[items].attori,
                    json[items].supporto,
                )
                filmList.push(film)

                $('#ch-catalogue-container').append(`
                    <div id='ch-film-genres' class="card col-md-4 ch-film-item ch-product">
                    <img src="${json[items].immagine}" class="card-img-top img-fluid" alt="${json[items].nome}">
                    <div class="card-header">
                    <a><i class="fas fa-times"></i></a>
                    <p><b class="fw-bold">Generi: </b>${json[items].generi}</p>
                    <p><b class="fw-bold">Anno: </b>${json[items].anno}</p>
                    <p><b class="fw-bold">Regista: </b>${json[items].regista}</p>
                    <p><b class="fw-bold">Supporto: </b>${json[items].supporto}</p>
                    <p><b class="fw-bold">EAN: </b>${json[items].EAN}</p>
                    <p><b class="fw-bold">Prezzo: </b>${json[items].prezzo}€</p>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title fs-5">${json[items].nome}</h3>
                      <p class="card-text mb-2">di ${json[items].regista}</p>
                      <a href="javascript:void(0)" class="card-text mb-2 ch-item-details">Dettagli</a>
                    </div>
                    <div class="card-footer">
                    <button type="button" onclick="filmList[${[items]}].addToCart()" class="btn btn-primary ch-addToCart">Aggiungi al carrello</button>
                    </div>
                  </div> 
                  `);
                for (let i = 0; i < json[items].generi.length; i++) {
                    filmGenreList.push(json[items].generi[i]);
                }
            }
            filmGenreList = filmGenreList.filter(function (item, index, filmGenreList) {
                return filmGenreList.indexOf(item) == index;
            });
        }
    });

    $.ajax({
        url: `../assets/jsons/musica.json`,
        dataType: 'json',
        success: function (json) {
            for (let items in json) {
                let music = new Musica(
                    json[items].nome,
                    json[items].prezzo,
                    json[items].generi,
                    json[items].immagine,
                    json[items].EAN,
                    json[items].anno,
                    json[items].etichetta,
                    json[items].artisti,
                    json[items].supporto
                )
                musicList.push(music)

                $('#ch-catalogue-container').append(`
                    <div class="card col-md-4 ch-music-item ch-product">
                    <img src="${json[items].immagine}" class="card-img-top img-fluid" alt="${json[items].nome}">
                    <div class="card-header ">
                    <a><i class="fas fa-times"></i></a>
                    <p><b class="fw-bold">Generi: </b>${json[items].generi}</p>
                    <p><b class="fw-bold">Anno: </b>${json[items].anno}</p>
                    <p><b class="fw-bold">Etichetta: </b>${json[items].etichetta}</p>
                    <p><b class="fw-bold">Supporto: </b>${json[items].supporto}</p>
                    <p><b class="fw-bold">EAN: </b>${json[items].EAN}</p>
                    <p><b class="fw-bold">Prezzo: </b>${json[items].prezzo}€</p>
                    </div>
                    <div class="card-body">
                      <h3 class="card-title fs-5">${json[items].nome}</h3>
                      <p class="card-text mb-2">di ${json[items].artisti}</p>
                      <a href="javascript:void(0)" class="ch-item-details card-text mb-2">Dettagli</a>
                    </div>
                    <div class="card-footer">
                    <button type="button" onclick="musicList[${[items]}].addToCart()" class="btn btn-primary ch-addToCart">Aggiungi al carrello</button>
                    </div>
                  </div> 
                  `);
                for (let i = 0; i < json[items].generi.length; i++) {
                    musicGenreList.push(json[items].generi[i]);
                }
            }
            musicGenreList = musicGenreList.filter(function (item, index, musicGenreList) {
                return musicGenreList.indexOf(item) == index;
            });
        }
    });
}
function fillGenres() {
    for (let i = 0; i < bookGenreList.length; i++) {
        console.log("ciao!")
        $('#ch-book-genres').children().append(`
        <li class="px-3 py-1">
            <input class="ch-checkbox" type="checkbox" name="genereLibro${i}" id="genereLibro${i}" value="${bookGenreList[i]}">
            <label for="genereLibro${i}">${bookGenreList[i]}</label>
        </li>
        `)
    }
    for (let i = 0; i < filmGenreList.length; i++) {
        $('#ch-film-genres').children().append(`
        <li class="px-3 py-1">
            <input class="ch-checkbox" type="checkbox" name="genereFilm${i}" id="genereFilm${i}" value="${filmGenreList[i]}">
            <label for="genereFilm${i}">${filmGenreList[i]}</label>
        </li>
        `)
    }
    for (let i = 0; i < musicGenreList.length; i++) {
        $('#ch-music-genres').children().append(`
        <li class="px-3 py-1">
            <input class="ch-checkbox" type="checkbox" name="genereMusica${i}" id="genereMusica${i}" value="${musicGenreList[i]}">
            <label for="genereMusica${i}">${musicGenreList[i]}</label>
        </li>
        `)
    }
}
// function filterGenres(){
// //     $('.ch-checkbox').each(function (index) {
// //         $(this).on('click', function () {
// //             let filter = $(this).val();
// //             if ($(this).is(":checked")) {
// //                 let filteredBooks:string[]=[];
// //                 for(let i in bookList){
// //                     bookList.filter(filter)
// //                 }
// //             }
// //         })
// //     });
// }