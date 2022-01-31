$(() => {
    //Variabili Globali
    const email = $('#email');
    const radioPersona = $('#persona');
    const radioAzienda = $('#azienda');
    const nomeAzienda = $('#nomeAzienda');
    const nome = $('#nome');
    const cognome = $('#cognome');
    const tel = $('#tel');

    let emailSend;
    let aziendaSend;
    let nameSend;
    let surnameSend;
    let telSend;

    reset()
    function reset() {
        $('#contacts input').val('');
        $('#contacts #persona').prop('checked',true);
        $('#contacts span').text('');
    }

    //Handlers
    email.on('blur',function(){
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.val()))) {
                emailSend=false;
                email.next().text('Formato Email non valido');
                email.next().css('color','red');
            }else{
                emailSend=true;
                email.next().text('✔');
                email.next().css('color','green');
            }
    })

    radioPersona.on('click',function(){
        nomeAzienda.prop('disabled',true);
        aziendaSend=true;
    })
    radioAzienda.on('click',function(){
        nomeAzienda.prop('disabled',false);
        aziendaSend=false;
    })
    if(radioPersona.is(':checked')){
        nomeAzienda.prop('disabled',true);
        aziendaSend=true;
    }
    if(radioAzienda.is(':checked')){
        nomeAzienda.on('blur', function(){
            if (nomeAzienda.val().length<3) {
                aziendaSend=false;
                    nomeAzienda.next().text('Formato Azienda non valido (minimo 3 caratteri)');
                    nomeAzienda.next().css('color','red');
                }else{
                    aziendaSend=true;
                    nomeAzienda.next().text('✔');
                    nomeAzienda.next().css('color','green');
                }
        })
    }

    nome.on('blur', function(){
        if (nome.val().length<3) {
            nameSend=false;
                nome.next().text('Formato nome non valido (minimo 3 caratteri)');
                nome.next().css('color','red');
            }else{
                nameSend=true;
                nome.next().text('✔');
                nome.next().css('color','green');
            }
    })
    cognome.on('blur',function(){
        if (cognome.val().length<3) {
            surnameSend=false;
                cognome.next().text('Formato cognome non valido (minimo 3 caratteri)');
                cognome.next().css('color','red');
            }else{
                surnameSend=true;
                cognome.next().text('✔');
                cognome.next().css('color','green');
            }
    })

    tel.on('blur',function(){
        if(tel.val().indexOf('-')==3&&tel.val().length==11){
            telSend=true;
            tel.next().text('✔');
            tel.next().css('color','green');
        }else{
            telSend=false;
            tel.next().text('Formato numero non valido');
            tel.next().css('color','red');
        }
    })


    $('#submit').on('click', function (e) {
        e.preventDefault();
        console.log(emailSend);
        console.log(aziendaSend);
        console.log(nameSend);
        console.log(surnameSend);
        console.log(telSend);
        if(emailSend==true&&aziendaSend==true&&nameSend==true&&surnameSend==true&&telSend==true){
            alert("Form Corretto");
    }else{
        alert("Form non compilato correttamente");
    }
})
    $('#reset').on('click', reset);

})