$(() => {
    //Variabili Globali
    const email = $('#email');
    const password = $('#password');
    const passwordConfirm = $('#passwordConfirm');
    const radioPersona = $('#persona');
    const radioAzienda = $('#azienda');
    const nomeAzienda = $('#nomeAzienda');
    const nome = $('#nome');
    const cognome = $('#cognome');
    const tel = $('#tel');

    let emailSend;
    let passSend;
    let passConSend;
    let aziendaSend;
    let nameSend;
    let surnameSend;
    let telSend;


    //Handlers
    email.on('blur',function(){
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.val()))) {
                emailSend=false;
                email.next().text('Formato Email non valido')
            }else{
                emailSend=true;
                email.next().text('✔')
            }
    })
    password.on('blur',function(){
        if (password.val().length<6) {
            passSend=false;
                password.next().text('Formato password non valido (minimo 6 caratteri)')
            }else{
                passSend=true;
                password.next().text('✔')
            }
    })
    passwordConfirm.on('blur',function(){
        if (passwordConfirm.val()!=password.val()) {
            passConSend=false;
                passwordConfirm.next().text('Le password non corrispondono')
            }else if(password.val().length<6){
                passwordConfirm.next().text('Formato password non valido (minimo 6 caratteri)')
            }else{
                passConSend=true;
                passwordConfirm.next().text('✔')
            }
    })

    
    radioPersona.on('click',function(){
        nomeAzienda.prop('disabled',true)
    })
    radioAzienda.on('click',function(){
        nomeAzienda.prop('disabled',false)
    })
    if(radioPersona.is(':checked')){
        nomeAzienda.prop('disabled',true)
        aziendaSend=true
    }
    if(radioAzienda.is(':checked')){
        nomeAzienda.on('blur', function(){
            if (nomeAzienda.val().length<3) {
                aziendaSend=false;
                    nomeAzienda.next().text('Formato Azienda non valido (minimo 3 caratteri)')
                }else{
                    aziendaSend=true;
                    nomeAzienda.next().text('✔')
                }
        })
    }

    nome.on('blur', function(){
        if (nome.val().length<3) {
            nameSend=false;
                nome.next().text('Formato nome non valido (minimo 3 caratteri)')
            }else{
                nameSend=true;
                nome.next().text('✔')
            }
    })
    cognome.on('blur',function(){
        if (cognome.val().length<3) {
            surnameSend=false;
                cognome.next().text('Formato cognome non valido (minimo 3 caratteri)')
            }else{
                surnameSend=true;
                cognome.next().text('✔')
            }
    })

    tel.on('blur',function(){
        if(tel.val().indexOf('-')==3&&tel.val().length==11){
            telSend=true;
            tel.next().text('✔')
        }else{
            telSend=false;
            tel.next().text('Formato numero non valido')
        }
    })


    $('#submit').on('click', function () {
        if(emailSend&&passSend&&passConSend&&aziendaSend&&nameSend&&surnameSend&&telSend){
            alert("Form Corretto")
    }})


    $('#reset').on('click', function () {
        $('input').val('');
        $('span').text('');
    })

})