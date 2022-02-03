abstract class Lavoratore {
    codRedd: number;
    tasseInps: number;
    tasseIrpef: number;
    ral: number;

    constructor(codRedd: number, tasseInps: number, tasseIrpef: number, ral: number) {
        this.codRedd = codRedd;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.ral = ral;
    }

    calcoloRan():number{
        let utileTasse = this.ral*(this.codRedd/100);
        let pagatoInps = utileTasse*(this.tasseInps/100);
        let pagatoIrpef = utileTasse*(this.tasseIrpef/100);
        let ran=utileTasse-pagatoInps-pagatoIrpef
        return ran
    }
}
class LiberoProfessionista extends Lavoratore {
    constructor(ral: number) {
        super(78, 25.72, 5, ral)
    }
}
class Artigiano extends Lavoratore {
    constructor(ral: number) {
        super(67, 15, 35, ral)
    }
}
class Commerciante extends Lavoratore {
    constructor(ral: number) {
        super(40, 15, 35, ral)
    }
}

let luca = new LiberoProfessionista(35000);
console.log('Il reddito annuo lordo da libero professionista è '+luca.calcoloRan())

let paolo = new Artigiano(35000);
console.log('Il reddito annuo lordo da artigiano è '+paolo.calcoloRan())

let simone = new Commerciante(35000);
console.log('Il reddito annuo lordo da commerciante è '+simone.calcoloRan())