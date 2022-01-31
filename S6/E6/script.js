$(() => {
    // Variabili Globali

    //Callback
    aumentaBox();
    accordion();
    caricaFile();

    //Function
    function aumentaBox() {
        $('#btn-1').on('click', function () {
            console.log('Avvio Animazione...');
            const box = $('.js-altezza-larghezza-container');
            box.animate({
                'width': '300px',
                'height': '300px'
            }, 'fast');
        });
    }

    function accordion() {
        const accordionLink = $('.accordion').find('li');
        const accordionItem = $('.accordion').find('li').find('p');

        accordionLink.each(function (index) {
            $(this).on('click', () => {
                if ($(this).find('p').is(':visible')) {
                    $(this).find('p').slideUp()
                } else {
                    accordionItem.slideUp()
                    $(this).find('p').slideDown()
                }
            });
        });
    }

    // function caricaFile() {
    //     $('#btn-2').on('click', function () {
    //         let percent = 0;
    //         let caricamento = setInterval(function () {
    //             if (percent < 100) {
    //                 percent++;
    //                 $('#progress').css({ 'width': percent + "%" })
    //                 $('#percentage').text(percent + "%");
    //             }else{
    //                 $('#percentage').append('<br>Caricamento Terminato!');
    //                 clearInterval(caricamento);
    //             }
    //         }, 20)
    //     });
    // }



    function caricaFile() {
        $('#btn-2').on('click', function () {
            $('#progress').animate({
                width: '100%'
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (x) {
                    $('#percentage').text(Math.round(x) + '%');
                },
                complete: function(){
                    $('#percentage').append('<br>Caricamento Terminato!');
                }
            });
        });
    }

});