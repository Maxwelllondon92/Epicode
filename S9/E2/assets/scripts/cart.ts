////// VARIABILI GLOBALI
let arrCart: any[] = [];
////// CLASSI
class CartItem {
    nome: string;
    prezzo: number;
    immagine: string;
    constructor(nome: string, prezzo: number, immagine: string) {
        this.nome = nome;
        this.prezzo = prezzo;
        this.immagine = immagine;
    }

    removeItem(): void {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let cart = currentUser.carrello;
        let index = cart.findIndex(x => x.nome === this.nome);
        console.log(index)
        cart.splice(index, 1)
        currentUser = JSON.stringify(currentUser)
        localStorage.setItem('currentUser',currentUser)
        displayCart()
    }
}
////// CALLBACK
loadUser();
displayCart();
////// EVENT HANDLERS
$('#ch-logoutBtn').on('click', logout)
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
function displayCart() {
    $('#ch-cartList').empty()
    arrCart=[];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let cart = currentUser.carrello;
    let total: number = 0;
    for (let i in cart) {
        let prodotto = new CartItem(
            cart[i].nome,
            cart[i].prezzo,
            cart[i].immagine,
        )
        arrCart.push(prodotto)
        $('#ch-cartList').append(`
        <div class="mb-3 w-50 p-2 rounded-3">
                <img class="float-start me-3" src="${prodotto.immagine}" alt="">
                <h2 class="fs-5">${prodotto.nome}</h2>
                <p><b>Prezzo: </b>${prodotto.prezzo}</p>
                <button class="ch-removeItem btn btn-danger" onclick="arrCart[${i}].removeItem()"><i class="far fa-trash-alt"></i> Rimuovi</button>
            </div>
        `)
        total += Number(`${prodotto.prezzo}`);
    }
    $('#ch-totalPrice').text(total)
}
