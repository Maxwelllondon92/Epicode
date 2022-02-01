let idInit: number = 0
let accList: any[] = [];
let item: any;

class BasicAccount {
    id: number;
    holder: string;
    balance: number;
    constructor(_holder: string, _balanceInit: number) {
        this.holder = _holder;
        this.balance = _balanceInit
        this.id = idInit;
        idInit++
        accList.push(this)
    }
    protected deposito(ammontare: number): number {
        this.balance += ammontare
        return ammontare
    }
    public prelievo(ammontare: number): number {
        this.balance -= ammontare
        return ammontare
    }
    public saldo(): number {
        return this.balance;
    }
    protected tipo(): string {
        return 'Basic'
    }
}

class GoldAccount extends BasicAccount {
    constructor(_holder: string, _balanceInit: number) {
        super(_holder, _balanceInit)
    }
    public maturazione(tasso: number): number {
        return ((Number($('#ammontare').val()) * tasso) / 100);
    }
    protected deposito(ammontare: number): number {
        ammontare += this.maturazione(0.05)
        this.balance += ammontare
        return ammontare
    }
    protected tipo(): string {
        return 'Gold'
    }
}

new BasicAccount('Figlio', 0);
new GoldAccount('Madre', 0);

fillSelect()
loadAccount()

$('#conto').on('change', loadAccount)
$('#esegui').on('click', function () {
    if ($('#operazione option:selected').val() == 'preleva' && item.balance >= Number($('#ammontare').val())) {
        item.prelievo(Number($('#ammontare').val()))
        loadAccount()
    } else if ($('#operazione option:selected').val() == 'versa') {
        item.deposito(Number($('#ammontare').val()))
        loadAccount()
    } else {
        alert('Saldo insufficiente')
    }
})

function fillSelect() {
    for (let i = 0; i < accList.length; i++) {
        $('#conto').append('<option value="' + accList[i].holder + '">' + accList[i].holder + '</option>')
    }
}

function loadAccount() {
    item = accList[$('#conto').prop('selectedIndex')];
    $('#saldo').text(Math.round(item.saldo() * 100) / 100)
    $('#tipo').text(item.tipo())
}