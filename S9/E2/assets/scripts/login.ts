$('.ch-subscribeBtn').on('click', function () {
    $('#ch-subscribe').toggle();
    $('#ch-login').toggle();
})

$('#ch-submitSubscribe').on('click', subscribe)
$('#ch-logInBtn').on('click', login)


class User {
    nome: string;
    password: string;
    carrello: any[]=[];
    salvati: any[]=[];
    constructor(_nome: string, _password: string) {
        this.nome = _nome,
            this.password = _password
    }
}

function login() {
    if (!localStorage.userList) {
        localStorage.setItem('userList', '[]')
    }
    let inputName: string = String($('#ch-username').val()).toLowerCase();
    let inputPassword: string = String($('#ch-password').val());
    let data = JSON.parse(localStorage.getItem('userList'));
    if (data.find(o => o.nome === inputName)) {
        //utente esistente
        let user = data.find(o => o.nome === inputName)
        if (user.password === inputPassword) {
            //esegui accesso
            localStorage.setItem('currentUser', JSON.stringify(user))
            window.location.href = "index.html";

        } else {
            //password errata
            $('#logMsg').text("La password è errata");
        }
    } else {
        //utente inesistente
        $('#logMsg').text("Utente non trovato");
    }
}


function subscribe() {
    if (!localStorage.userList) {
        localStorage.setItem('userList', '[]')
    }
    let inputName: string = String($('#ch-setUsername').val()).toLowerCase();
    let inputPassword: string = String($('#ch-setPassword').val());
    let confirmPassword: string = String($('#ch-passwordConfirm').val());
    if (inputPassword.length < 6) {
        $('#subMsg').text("La password deve essere di almeno 6 caratteri.");
    } else {
        if (inputPassword === confirmPassword) {
            let user = new User(inputName, inputPassword);
            let data = JSON.parse(localStorage.getItem('userList'));
            if (data.find(o => o.nome === inputName)) {
                $('#subMsg').text("Il nome utente inserito esiste già");
            } else {
                data.push(user);
                $('#subMsg').text("Utente Creato con Successo");
            }
            localStorage.setItem('userList', JSON.stringify(data));
        } else {
            $('#subMsg').text("Le due password inserite devono coincidere");
        }
    }
}
