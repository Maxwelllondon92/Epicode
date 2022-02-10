$('.ch-subscribeBtn').on('click', function () {
    $('#ch-subscribe').toggle();
    $('#ch-login').toggle();
});
$('#ch-submitSubscribe').on('click', subscribe);
$('#ch-logInBtn').on('click', login);
var User = /** @class */ (function () {
    function User(_nome, _password) {
        this.carrello = [];
        this.salvati = [];
        this.nome = _nome,
            this.password = _password;
    }
    return User;
}());
function login() {
    if (!localStorage.userList) {
        localStorage.setItem('userList', '[]');
    }
    var inputName = String($('#ch-username').val()).toLowerCase();
    var inputPassword = String($('#ch-password').val());
    var data = JSON.parse(localStorage.getItem('userList'));
    if (data.find(function (o) { return o.nome === inputName; })) {
        //utente esistente
        var user = data.find(function (o) { return o.nome === inputName; });
        if (user.password === inputPassword) {
            //esegui accesso
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = "index.html";
        }
        else {
            //password errata
            $('#logMsg').text("La password è errata");
        }
    }
    else {
        //utente inesistente
        $('#logMsg').text("Utente non trovato");
    }
}
function subscribe() {
    if (!localStorage.userList) {
        localStorage.setItem('userList', '[]');
    }
    var inputName = String($('#ch-setUsername').val()).toLowerCase();
    var inputPassword = String($('#ch-setPassword').val());
    var confirmPassword = String($('#ch-passwordConfirm').val());
    if (inputPassword.length < 6) {
        $('#subMsg').text("La password deve essere di almeno 6 caratteri.");
    }
    else {
        if (inputPassword === confirmPassword) {
            var user = new User(inputName, inputPassword);
            var data = JSON.parse(localStorage.getItem('userList'));
            if (data.find(function (o) { return o.nome === inputName; })) {
                $('#subMsg').text("Il nome utente inserito esiste già");
            }
            else {
                data.push(user);
                $('#subMsg').text("Utente Creato con Successo");
            }
            localStorage.setItem('userList', JSON.stringify(data));
        }
        else {
            $('#subMsg').text("Le due password inserite devono coincidere");
        }
    }
}
