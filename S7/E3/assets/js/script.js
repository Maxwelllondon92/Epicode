$(() => {
    $('#sidebarBtn').on('click', function () {
        $('#sidebar').slideToggle('fast');
    })
    // Variabili Globali
    const nInput = $('#nInput');
    const nOutput = $('#nOutput');
    //Callback
    accordion();

    //Event Handler
    $('#btnConvert').on('click', function () {
        let num = parseInt(nInput.val());
        conversion(num);
    });

    $('#btnClear').on('click', function () {
        nInput.val('');
        nOutput.val('');
    })

    $('#change').on('click', function () {
        const input = $('#valInput option:selected');
        const output = $('#valOutput option:selected');
        $('#valInput').val(output.val());
        $('#valOutput').val(input.val());
        let num = parseInt(nInput.val());
        conversion(num);
    })

    //funzione di conversione
    function conversion(n) {
        const input = $('#valInput option:selected');
        const output = $('#valOutput option:selected');
        let values = {
            eur: 1,
            usd: 1.13,
            gbp: 0.838,
            jpy: 128.66,
            cny: 7.145
        };
        let valIn = values[input.val()];
        let valOut = values[output.val()];
        let result = Math.round((n * (1 / valIn) * valOut) * 1000) / 1000;
        nOutput.val(result);
    }
});


//INDICE FUNZIONI
function goto(link) {
    if ($('#' + link).is(':hidden')) {
        $('.page').fadeOut('fast');
        $('#' + link).fadeIn('fast');
    };
    $('#sidebar').slideUp('fast');
}
function accordion() {

    const accordionLink = $('.accordion-head');
    const accordionItem = $('.accordion-item').find('.accordion-body');

    accordionLink.each(function (index) {
        $(this).on('click', () => {
            console.log('accordion');
            if ($(this).siblings('.accordion-body').is(':visible')) {
                $(this).siblings('.accordion-body').slideUp();
            } else {
                accordionItem.slideUp()
                $(this).siblings('.accordion-body').slideDown();
            };
        });
    });
}