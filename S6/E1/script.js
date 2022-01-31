const nome =$('#nome')
const email =$('#email')
const conferma =$('#confirm-email')
const invia =$('#send')
const clear =$('#clear')
const richiesto = "*Campo Richiesto"
const diverso = "*Le email non coincidono"
$(()=>{
    invia.click(()=>{
        console.log("invio dati...")
        if(nome.val() == ""){
            nome.next().css({"color": "red"})
            nome.next().text(richiesto)
        }else{
            nome.next().css({"color": "green"})
            nome.next().text("✔")
        }

        if(email.val() == ""){
            email.next().css({"color": "red"})
            email.next().text(richiesto)
        }else{
            email.next().css({"color": "green"})
            email.next().text("✔")
        }

        if(email.val().toUpperCase() != conferma.val().toUpperCase()){
            conferma.next().css({"color": "red"})
            conferma.next().text(diverso)
        }else{
            conferma.next().css({"color": "green"})
            conferma.next().text("✔")
        }

        if(nome.val()!="" && email.val() != "" && email.val() == conferma.val()){
            alert("Form inviato correttamente")
            console.log("dati inviati")
        }
    })

    clear.click(()=>{
        nome.val("")
        nome.next().text("")
        email.val("")
        email.next().text("")
        conferma.val("")
        conferma.next().text("")
    })
})