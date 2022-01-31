var d = new Date();
const mesi =["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];

document.write(d);
document.write("<br>"+d.getDate());
document.write("<br>"+    d.getDate()   +"/"+   d.getMonth()+1    +"/"+    d.getFullYear());

// console.log(d.getMonth())
// console.log(mesi[0])
console.log(mesi[d.getMonth()])

document.getElementById("data").innerHTML="Oggi è il:"+d.getDate()+" "+mesi[d.getMonth()]+" "+d.getFullYear();