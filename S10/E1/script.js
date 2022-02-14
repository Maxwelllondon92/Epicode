// Variabili Globali

// Callbacks
getPage();

// Handlers
$(window).on('hashchange', getPage);

// Funzioni
function getPage() {
    $('section').hide();
    switch (window.location.hash) {
        case '#home':
            //mostra home
            if (!(sessionStorage.getItem('home'))) {
                let getHome = new Promise(function (resolve) {
                    let req = new XMLHttpRequest();
                    req.open('GET', 'json/ranking10.json');
                    req.onload = function () {
                        if (req.status == 200 && this.readyState == 4) { // in caso di successo
                            resolve(req.response)
                        }
                    };
                    req.send();
                });

                getHome.then(
                    function (value) {
                        sessionStorage.setItem('home', value)
                        let content = JSON.parse(sessionStorage.getItem('home'));
                        console.log(content);
                        fillHome(content);
                    });
            }else{
                let content = JSON.parse(sessionStorage.getItem('home'));
                fillHome(content);
            }

            function fillHome(content) {
                $('#home').empty();
                for (let i in content) {
                    $('#home').append(`
                        <div class="card mt-3" style="width: 9rem;">
                            <img src="images/PlayerImage${Number(i) + 1}.png" class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title">${content[i].name}</h5>
                            </div>
                        </div>
                        `)
                }
            }
            $('#home').show();
            break;
        case '#classifica':
            //mostra classifica
            if (!(sessionStorage.getItem('classifica'))) {
                let getClassifica = new Promise(function (resolve) {
                    let req = new XMLHttpRequest();
                    req.open('GET', 'json/ranking.json');
                    req.onload = function () {
                        if (req.status == 200 && this.readyState == 4) { // in caso di successo
                            resolve(req.response)
                        }
                    };
                    req.send();
                });

                getClassifica.then(
                    function (value) {
                        sessionStorage.setItem('classifica', value)
                        let content = JSON.parse(sessionStorage.getItem('classifica'));
                        console.log(content);
                        fillClassifica(content);
                    });
            }else{
                let content = JSON.parse(sessionStorage.getItem('classifica'));
                fillClassifica(content);
            }

            function fillClassifica(content) {
                $('#classificaTable').empty();
                for (let i in content) {
                    $('#classificaTable').append(`
                    <tr>
                        <th>${content[i].name}</th>
                        <td>${content[i].position}</td>
                        <td>${content[i].points}</td>
                    </tr>
                    `)
                }
            }
            $('#classifica').show();
            break;
        case '#tornei':
            //mostra tornei
            if (!(sessionStorage.getItem('tornei'))) {
                let getTornei = new Promise(function (resolve) {
                    let req = new XMLHttpRequest();
                    req.open('GET', 'json/tornei.json');
                    req.onload = function () {
                        if (req.status == 200 && this.readyState == 4) { // in caso di successo
                            resolve(req.response)
                        }
                    };
                    req.send();
                });

                getTornei.then(
                    function (value) {
                        sessionStorage.setItem('tornei', value)
                        let content = JSON.parse(sessionStorage.getItem('tornei'));
                        console.log(content);
                        fillTornei(content);
                    });
            }else{
                let content = JSON.parse(sessionStorage.getItem('tornei'));
                fillTornei(content);
            }

            function fillTornei(content) {
                $('#torneiTable').empty();
                for (let i in content) {
                    $('#torneiTable').append(`
                    <tr>
                        <th>${content[i].name}</th>
                        <td>${content[i].area_name}</td>
                        <td>${content[i].court}</td>
                    </tr>
                    `)
                }
            }
            $('#tornei').show();
            break;
        case '#form':
            //mostra form
            $('#form').show();
            break;
        default:
            //mostra home
            window.location.hash = '#home';
            getPage()
    }
}
