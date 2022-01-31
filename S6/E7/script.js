$(() => {

    $('.js-get-weather-info-btn').on('click', function () {
        const searchTerm = $('.js-input-city').val();
        if (!searchTerm) {
            $('.js-error-input-city').show();
            return;
        }

        const btnEl = $(this);
        btnEl.prop('disabled', true).text('Sto Caricando...');
        const weatherStackKey = 'd678552dae79b983dbcc15790e08cc57'

        $.ajax({
            url: `http://api.weatherstack.com/current?access_key=${weatherStackKey}&query=${searchTerm}`,
            success: function (resp) {
                if (resp.hasOwnProperty('current')) {
                    const HTML = `<p>Temperatura: ${resp.current.temperature}</p><p>Info Meteo:${resp.current.weather_descriptions.join('')}</p><p>Umidità:${resp.current.humidity}</p><p>Velocità Vento:${resp.current.wind_speed}</p><p>Direzione Vento:${resp.current.wind_dir}</p><p>Pressione:${resp.current.pressure}</p><p>Luogo:${resp.location.name},${resp.location.country}</p>`;
                    $('.js-weather-data').html(HTML);
                }else{
                    $('.js-weather-data').html('<p>Dati non disponibili</p>');
                }
                btnEl.prop('disabled',false).text('Che tempo fa?');
            },error:function(err){
                btnEl.prop('disabled',false).text('Che tempo fa?');
                $('.js-weather-data').html('<p>Dati non disponibili</p>');
            }
        })
    });
    $('.js-input-city').on('focus',function(){
        $('.js-error-input-city').hide();
    })

})