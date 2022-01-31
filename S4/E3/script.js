(function saluto(){
    console.log("Hello World!")
}) ();

(function succo(mele,pere){
    console.log("Succo con "+mele+" mele e "+pere+" pere.")
})(4,2);

(function succo(mele,pere){
    console.log("Succo con "+mele+" mele e "+pere+" pere.")
})(4);

(function succo(mele,pere){
    console.log("Succo con "+mele+" mele e "+pere+" pere.")
})(2);

(function anni(annoA,annoB,eta){
    console.log(annoB-annoA+eta)
}) (2021,2050,22);

(anni = (annoA,annoB,eta) => {console.log(annoB-annoA+eta)}) (2021,2050,30);

(function pensione(nome,anno,nascita,pensione){
    let eta = anno-nascita;
    let differ = pensione-eta;
    let out ="La pensione di "+nome+" è tra "+differ+" anni";
    console.log(out);
    alert(out);
}) ("Marco",2021,1992,70);

(pensione =(nome,anno,nascita,pensione)=>{
    let eta = anno-nascita;
    let differ = pensione-eta;
    let out ="La pensione di "+nome+" è tra "+differ+" anni";
    console.log(out);
    alert(out);
}) ("Alessio",2021,1959,70);

(torta =(mele,pere)=>{
    const fette = 3;
    let fetteMele = mele*fette;
    let fettePere = pere*fette;
    console.log("Torta con "+fetteMele+" fette di mela e "+fettePere+" fette di pera")
}) (3,5);

(calc=(numero)=>{
    var totale = (numero<3)? numero*3:numero*2;
    console.log(totale);
}) (4);