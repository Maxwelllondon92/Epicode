function User(name, lastname, age) {
    this.name = name || '---';
    this.lastname = lastname || '---';
    this.type = 'Studente';
    this.age = age || 18;
    this.car = [];
    this.fullname = function () {
        return this.name + this.lastname + this.type;
    }
}

let u1 = new User('Mario', 'Rossi', 25);
console.log(u1);

let u2 = new User('Giuseppe', 'Verdi', 41);
console.log(u2);

let u3 = new User('Martina', 'Bianchi', 23);
console.log(u3);

let u4 = new User('Luigi');
console.log(u4);

User.prototype.addCar = function (auto) {
    this.car.push(auto);
}

u2.addCar('Fiat 500');


class Utente {

    constructor(name, lastname, age) {
        this.name = name || '---';
        this.lastname = lastname || '---';
        this.type = 'Studente';
        this.age = age || 18;
        this.car = [];
        this.fullname = function () {
            return this.name + this.lastname + this.type;
        }
    }

}

Utente.prototype.addCar = function (auto) {
    this.car.push(auto);
}

let u6 = new Utente('GIovanni', 'Gialli', 59);
console.log(u6);