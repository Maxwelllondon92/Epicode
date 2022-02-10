////// VARIABILI GLOBALI
var arrCart = [];
////// CLASSI
var CartItem = /** @class */ (function () {
    function CartItem(nome, prezzo, immagine) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.immagine = immagine;
    }
    CartItem.prototype.removeItem = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var cart = currentUser.carrello;
        var index = cart.findIndex(function (x) { return x.nome === _this.nome; });
        console.log(index);
        cart.splice(index, 1);
        currentUser = JSON.stringify(currentUser);
        localStorage.setItem('currentUser', currentUser);
        displayCart();
    };
    return CartItem;
}());
////// CALLBACK
loadUser();
displayCart();
////// EVENT HANDLERS
$('#ch-logoutBtn').on('click', logout);
// $('.ch-removeItem').each(function (index) {
//     $(this).on('click', function () {
//         let nome = $(this).siblings('h2').text()
//         let prezzo = $(this).siblings('p').text()
//         let immagine = $(this).siblings('img').attr('src')
//     })
// })
////// ELENCO FUNZIONI
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
function displayCart() {
    $('#ch-cartList').empty();
    arrCart = [];
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var cart = currentUser.carrello;
    var total = 0;
    for (var i in cart) {
        var prodotto = new CartItem(cart[i].nome, cart[i].prezzo, cart[i].immagine);
        arrCart.push(prodotto);
        $('#ch-cartList').append("\n        <div class=\"mb-3 w-50 p-2 rounded-3\">\n                <img class=\"float-start me-3\" src=\"".concat(prodotto.immagine, "\" alt=\"\">\n                <h2 class=\"fs-5\">").concat(prodotto.nome, "</h2>\n                <p><b>Prezzo: </b>").concat(prodotto.prezzo, "</p>\n                <button class=\"ch-removeItem btn btn-danger\" onclick=\"arrCart[").concat(i, "].removeItem()\"><i class=\"far fa-trash-alt\"></i> Rimuovi</button>\n            </div>\n        "));
        total += Number("".concat(prodotto.prezzo));
    }
    $('#ch-totalPrice').text(total);
}
