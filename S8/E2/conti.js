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
var idInit = 0;
var accList = [];
var item;
var BasicAccount = /** @class */ (function () {
    function BasicAccount(_holder, _balanceInit) {
        this.holder = _holder;
        this.balance = _balanceInit;
        this.id = idInit;
        idInit++;
        accList.push(this);
    }
    BasicAccount.prototype.deposito = function (ammontare) {
        this.balance += ammontare;
        return ammontare;
    };
    BasicAccount.prototype.prelievo = function (ammontare) {
        this.balance -= ammontare;
        return ammontare;
    };
    BasicAccount.prototype.saldo = function () {
        return this.balance;
    };
    BasicAccount.prototype.tipo = function () {
        return 'Basic';
    };
    return BasicAccount;
}());
var GoldAccount = /** @class */ (function (_super) {
    __extends(GoldAccount, _super);
    function GoldAccount(_holder, _balanceInit) {
        return _super.call(this, _holder, _balanceInit) || this;
    }
    GoldAccount.prototype.maturazione = function (tasso) {
        return ((Number($('#ammontare').val()) * tasso) / 100);
    };
    GoldAccount.prototype.deposito = function (ammontare) {
        ammontare += this.maturazione(0.05);
        this.balance += ammontare;
        return ammontare;
    };
    GoldAccount.prototype.tipo = function () {
        return 'Gold';
    };
    return GoldAccount;
}(BasicAccount));
new BasicAccount('Figlio', 0);
new GoldAccount('Madre', 0);
fillSelect();
loadAccount();
$('#conto').on('change', loadAccount);
$('#esegui').on('click', function () {
    if ($('#operazione option:selected').val() == 'preleva' && item.balance >= Number($('#ammontare').val())) {
        item.prelievo(Number($('#ammontare').val()));
        loadAccount();
    }
    else if ($('#operazione option:selected').val() == 'versa') {
        item.deposito(Number($('#ammontare').val()));
        loadAccount();
    }
    else {
        alert('Saldo insufficiente');
    }
});
function fillSelect() {
    for (var i = 0; i < accList.length; i++) {
        $('#conto').append('<option value="' + accList[i].holder + '">' + accList[i].holder + '</option>');
    }
}
function loadAccount() {
    item = accList[$('#conto').prop('selectedIndex')];
    $('#saldo').text(Math.round(item.saldo() * 100) / 100);
    $('#tipo').text(item.tipo());
}
