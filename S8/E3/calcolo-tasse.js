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
var Lavoratore = /** @class */ (function () {
    function Lavoratore(codRedd, tasseInps, tasseIrpef, ral) {
        this.codRedd = codRedd;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.ral = ral;
    }
    Lavoratore.prototype.calcoloRan = function () {
        var utileTasse = this.ral * (this.codRedd / 100);
        var pagatoInps = utileTasse * (this.tasseInps / 100);
        var pagatoIrpef = utileTasse * (this.tasseIrpef / 100);
        var ran = utileTasse - pagatoInps - pagatoIrpef;
        return ran;
    };
    return Lavoratore;
}());
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista(ral) {
        return _super.call(this, 78, 25.72, 5, ral) || this;
    }
    return LiberoProfessionista;
}(Lavoratore));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(ral) {
        return _super.call(this, 67, 15, 35, ral) || this;
    }
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(ral) {
        return _super.call(this, 40, 15, 35, ral) || this;
    }
    return Commerciante;
}(Lavoratore));
var luca = new LiberoProfessionista(35000);
console.log('Il reddito annuo lordo da libero professionista è ' + luca.calcoloRan());
var paolo = new Artigiano(35000);
console.log('Il reddito annuo lordo da artigiano è ' + paolo.calcoloRan());
var simone = new Commerciante(35000);
console.log('Il reddito annuo lordo da commerciante è ' + simone.calcoloRan());
