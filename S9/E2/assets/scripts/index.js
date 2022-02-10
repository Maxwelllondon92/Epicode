var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
////// VARIABILI GLOBALI
var bookGenreList = [];
var bookList = [];
var filmGenreList = [];
var filmList = [];
var musicGenreList = [];
var musicList = [];
////// CALLBACK
checkWindow();
loadUser();
generateCatalogue();
////// EVENT HANDLERS
$(window).on("resize", checkWindow);
$('#ch-logoutBtn').on('click', logout);
$('#ch-categories').on('change', showCurrentCategory);
////// CLASSI
var Prodotto = /** @class */ (function () {
    function Prodotto(nome, prezzo, generi, immagine, EAN, anno) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.generi = generi;
        this.immagine = immagine;
        this.EAN = EAN;
        this.anno = anno;
    }
    return Prodotto;
}());
var Libri = /** @class */ (function (_super) {
    __extends(Libri, _super);
    function Libri(nome, prezzo, generi, immagine, EAN, anno, autore, editore) {
        var _this = _super.call(this, nome, prezzo, generi, immagine, EAN, anno) || this;
        _this.autore = autore;
        _this.editore = editore;
        return _this;
    }
    Libri.prototype.addToCart = function () {
        if (localStorage.currentUser) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.carrello.push(this);
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem('currentUser', currentUser);
        }
        else {
            window.location.href = "login.html";
        }
    };
    return Libri;
}(Prodotto));
var Film = /** @class */ (function (_super) {
    __extends(Film, _super);
    function Film(nome, prezzo, generi, immagine, EAN, anno, regista, attori, supporto) {
        var _this = _super.call(this, nome, prezzo, generi, immagine, EAN, anno) || this;
        _this.regista = regista;
        _this.attori = attori;
        _this.supporto = supporto;
        return _this;
    }
    Film.prototype.addToCart = function () {
        if (localStorage.currentUser) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.carrello.push(this);
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem('currentUser', currentUser);
        }
        else {
            window.location.href = "login.html";
        }
    };
    return Film;
}(Prodotto));
var Musica = /** @class */ (function (_super) {
    __extends(Musica, _super);
    function Musica(nome, prezzo, generi, immagine, EAN, anno, etichetta, artisti, supporto) {
        var _this = _super.call(this, nome, prezzo, generi, immagine, EAN, anno) || this;
        _this.etichetta = etichetta;
        _this.artisti = artisti;
        _this.supporto = supporto;
        return _this;
    }
    Musica.prototype.addToCart = function () {
        if (localStorage.currentUser) {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            currentUser.carrello.push(this);
            currentUser = JSON.stringify(currentUser);
            localStorage.setItem('currentUser', currentUser);
            // $('#liveToast').css('opacity',1);
            // $('#liveToast').show();
        }
        else {
            window.location.href = "login.html";
        }
    };
    return Musica;
}(Prodotto));
////// ELENCO FUNZIONI
setTimeout(function () {
    showCurrentCategory();
    fillGenres();
    // filterGenres(); 
    $('.ch-item-details').each(function (index) {
        $(this).on('click', function () {
            $(this).parent().siblings('.card-header').toggle();
        });
    });
    $('.fa-times').each(function (index) {
        $(this).on('click', function () {
            $(this).closest('div').toggle();
        });
    });
}, 500);
function checkWindow() {
    if (visualViewport.width >= 992) {
        //desktop
        $("#ch-filterBtn").hide();
        $('#ch-filters').removeClass('offcanvas offcanvas-bottom');
        $('#ch-filters').addClass('col-lg-3');
        $('#ch-filters').css("visibility", "visible");
        $('.ch-genres').children('ul').removeClass('flex-row flex-wrap');
        $('.ch-genres').children('ul').addClass('flex-column flex-nowrap');
    }
    else {
        //mobile
        $("#ch-filterBtn").show();
        $('#ch-filters').addClass('offcanvas offcanvas-bottom');
        $('#ch-filters').removeClass('col-lg-3');
    }
}
function showCurrentCategory() {
    $('.ch-genres').hide();
    $('.ch-product').hide();
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
        $('.ch-userLogged').show();
        $('.ch-noUserLogged').hide();
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        $('#ch-currentUser').text(currentUser.nome).css('text-transform', 'capitalize');
    }
    else {
        $('.ch-userLogged').hide();
        $('.ch-noUserLogged').show();
    }
}
function logout() {
    localStorage.removeItem('currentUser');
    loadUser();
}
function generateCatalogue() {
    $.ajax({
        url: "../assets/jsons/libri.json",
        dataType: 'json',
        success: function (json) {
            for (var items in json) {
                var book = new Libri(json[items].nome, json[items].prezzo, json[items].generi, json[items].immagine, json[items].EAN, json[items].anno, json[items].autore, json[items].editore);
                bookList.push(book);
                $('#ch-catalogue-container').append("\n                    <div id=\"ch-book-\" class=\"card col-md-4 ch-book-item ch-product\">\n                    <img src=\"".concat(book.immagine, "\" class=\"card-img-top img-fluid\" alt=\"").concat(book.nome, "\">\n                    <div class=\"card-header\">\n                    <a><i class=\"fas fa-times\"></i></a>\n                    <p><b class=\"fw-bold\">Generi: </b>").concat(json[items].generi, "</p>\n                    <p><b class=\"fw-bold\">Anno: </b>").concat(json[items].anno, "</p>\n                    <p><b class=\"fw-bold\">Autore: </b>").concat(json[items].autore, "</p>\n                    <p><b class=\"fw-bold\">Editore: </b>").concat(json[items].editore, "</p>\n                    <p><b class=\"fw-bold\">EAN: </b>").concat(json[items].EAN, "</p>\n                    <p><b class=\"fw-bold\">Prezzo: </b>").concat(json[items].prezzo, "\u20AC</p>\n                    </div>\n                    <div class=\"card-body\">\n                      <h3 class=\"card-title fs-5\">").concat(book.nome, "</h3>\n                      <p class=\"card-text mb-2\">di ").concat(book.autore, "</p>\n                      <a href=\"javascript:void(0)\" class=\"card-text mb-2 ch-item-details\">Dettagli</a>\n                    </div>\n                    <div class=\"card-footer\">\n                    <button type=\"button\" onclick=\"bookList[").concat([items], "].addToCart()\" class=\"btn btn-primary ch-addToCart\">Aggiungi al carrello</button>\n                    </div>\n                  </div> \n                  "));
                for (var i = 0; i < book.generi.length; i++) {
                    bookGenreList.push(book.generi[i]);
                }
            }
            bookGenreList = bookGenreList.filter(function (item, index, bookGenreList) {
                return bookGenreList.indexOf(item) == index;
            });
        }
    });
    $.ajax({
        url: "../assets/jsons/film.json",
        dataType: 'json',
        success: function (json) {
            for (var items in json) {
                var film = new Film(json[items].nome, json[items].prezzo, json[items].generi, json[items].immagine, json[items].EAN, json[items].anno, json[items].regista, json[items].attori, json[items].supporto);
                filmList.push(film);
                $('#ch-catalogue-container').append("\n                    <div id='ch-film-genres' class=\"card col-md-4 ch-film-item ch-product\">\n                    <img src=\"".concat(json[items].immagine, "\" class=\"card-img-top img-fluid\" alt=\"").concat(json[items].nome, "\">\n                    <div class=\"card-header\">\n                    <a><i class=\"fas fa-times\"></i></a>\n                    <p><b class=\"fw-bold\">Generi: </b>").concat(json[items].generi, "</p>\n                    <p><b class=\"fw-bold\">Anno: </b>").concat(json[items].anno, "</p>\n                    <p><b class=\"fw-bold\">Regista: </b>").concat(json[items].regista, "</p>\n                    <p><b class=\"fw-bold\">Supporto: </b>").concat(json[items].supporto, "</p>\n                    <p><b class=\"fw-bold\">EAN: </b>").concat(json[items].EAN, "</p>\n                    <p><b class=\"fw-bold\">Prezzo: </b>").concat(json[items].prezzo, "\u20AC</p>\n                    </div>\n                    <div class=\"card-body\">\n                      <h3 class=\"card-title fs-5\">").concat(json[items].nome, "</h3>\n                      <p class=\"card-text mb-2\">di ").concat(json[items].regista, "</p>\n                      <a href=\"javascript:void(0)\" class=\"card-text mb-2 ch-item-details\">Dettagli</a>\n                    </div>\n                    <div class=\"card-footer\">\n                    <button type=\"button\" onclick=\"filmList[").concat([items], "].addToCart()\" class=\"btn btn-primary ch-addToCart\">Aggiungi al carrello</button>\n                    </div>\n                  </div> \n                  "));
                for (var i = 0; i < json[items].generi.length; i++) {
                    filmGenreList.push(json[items].generi[i]);
                }
            }
            filmGenreList = filmGenreList.filter(function (item, index, filmGenreList) {
                return filmGenreList.indexOf(item) == index;
            });
        }
    });
    $.ajax({
        url: "../assets/jsons/musica.json",
        dataType: 'json',
        success: function (json) {
            for (var items in json) {
                var music = new Musica(json[items].nome, json[items].prezzo, json[items].generi, json[items].immagine, json[items].EAN, json[items].anno, json[items].etichetta, json[items].artisti, json[items].supporto);
                musicList.push(music);
                $('#ch-catalogue-container').append("\n                    <div class=\"card col-md-4 ch-music-item ch-product\">\n                    <img src=\"".concat(json[items].immagine, "\" class=\"card-img-top img-fluid\" alt=\"").concat(json[items].nome, "\">\n                    <div class=\"card-header \">\n                    <a><i class=\"fas fa-times\"></i></a>\n                    <p><b class=\"fw-bold\">Generi: </b>").concat(json[items].generi, "</p>\n                    <p><b class=\"fw-bold\">Anno: </b>").concat(json[items].anno, "</p>\n                    <p><b class=\"fw-bold\">Etichetta: </b>").concat(json[items].etichetta, "</p>\n                    <p><b class=\"fw-bold\">Supporto: </b>").concat(json[items].supporto, "</p>\n                    <p><b class=\"fw-bold\">EAN: </b>").concat(json[items].EAN, "</p>\n                    <p><b class=\"fw-bold\">Prezzo: </b>").concat(json[items].prezzo, "\u20AC</p>\n                    </div>\n                    <div class=\"card-body\">\n                      <h3 class=\"card-title fs-5\">").concat(json[items].nome, "</h3>\n                      <p class=\"card-text mb-2\">di ").concat(json[items].artisti, "</p>\n                      <a href=\"javascript:void(0)\" class=\"ch-item-details card-text mb-2\">Dettagli</a>\n                    </div>\n                    <div class=\"card-footer\">\n                    <button type=\"button\" onclick=\"musicList[").concat([items], "].addToCart()\" class=\"btn btn-primary ch-addToCart\">Aggiungi al carrello</button>\n                    </div>\n                  </div> \n                  "));
                for (var i = 0; i < json[items].generi.length; i++) {
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
    for (var i = 0; i < bookGenreList.length; i++) {
        console.log("ciao!");
        $('#ch-book-genres').children().append("\n        <li class=\"px-3 py-1\">\n            <input class=\"ch-checkbox\" type=\"checkbox\" name=\"genereLibro".concat(i, "\" id=\"genereLibro").concat(i, "\" value=\"").concat(bookGenreList[i], "\">\n            <label for=\"genereLibro").concat(i, "\">").concat(bookGenreList[i], "</label>\n        </li>\n        "));
    }
    for (var i = 0; i < filmGenreList.length; i++) {
        $('#ch-film-genres').children().append("\n        <li class=\"px-3 py-1\">\n            <input class=\"ch-checkbox\" type=\"checkbox\" name=\"genereFilm".concat(i, "\" id=\"genereFilm").concat(i, "\" value=\"").concat(filmGenreList[i], "\">\n            <label for=\"genereFilm").concat(i, "\">").concat(filmGenreList[i], "</label>\n        </li>\n        "));
    }
    for (var i = 0; i < musicGenreList.length; i++) {
        $('#ch-music-genres').children().append("\n        <li class=\"px-3 py-1\">\n            <input class=\"ch-checkbox\" type=\"checkbox\" name=\"genereMusica".concat(i, "\" id=\"genereMusica").concat(i, "\" value=\"").concat(musicGenreList[i], "\">\n            <label for=\"genereMusica").concat(i, "\">").concat(musicGenreList[i], "</label>\n        </li>\n        "));
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
