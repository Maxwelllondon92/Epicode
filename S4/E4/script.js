var fraseEpica = "Un anello per trovarli, un anello per ghermirli, un anello per domarli, e nel buio incatenarli."
console.log(fraseEpica.toUpperCase());
console.log(fraseEpica.toLowerCase());
console.log(fraseEpica.split(", "))

var battuta0 = "Alla prima luce del quinto giorno."
var battuta1 = "All'alba guarda ad est."
console.log(battuta0.concat(" ",battuta1))

var hobbits =["Frodo","Sam","Merry","Pipino"]
var toMordor = hobbits.slice(0,2)
var toIsengard = hobbits.slice(2,4)
console.log(toMordor)
console.log(toIsengard)

var guerrieri =["Legolas","Ghimli","Gandalf"]
console.log(guerrieri.length)
console.log(guerrieri[2])
console.log(guerrieri.length-1)
guerrieri.splice(2,1,"Aragorn")
console.log(guerrieri)

var anno =3018
var nati = {
    Frodo : 2968,
    Gandalf: 0,
    Aragorn: 2931
}
console.log(anno-nati.Frodo)
console.log(anno-nati.Gandalf)
console.log(anno-nati.Aragorn)

var cattivi=["Sauron","Saruman"]
cattivi.push("Shelob")
console.log(cattivi)
console.log(cattivi.length)
console.log(cattivi.includes("Sauron"))
console.log(cattivi.includes("Sauron",2))
cattivi.push(cattivi.length)
console.log(cattivi)