$(() => {
    let corso1;
    let durata1;
     let materia1;
    let materia2;
    let materia3;
    let materie = [];
    let conteggio = 0;
    let corsoVero;
    //
    let primoCorso = new Corso('liceo', 5, ['mate', 'filo', 'ita']);
    let secondoCorso = new Corso('informatico', 5, ['info', 'elettronica', 'mate']);
    let terzoCorso = new Corso('classico', 5, ['ita', 'filo', 'storia']);
    //console.log(primoCorso)

    // corsi esempio
    let nome = localStorage.getItem('nome')
    $('#benvenuto').html('<h2> Bevenuto ' + nome + '</h2>');
    $('#corsoEsempio').append('<p class="px-3">' + primoCorso.nome + ' ' + primoCorso.durata + ' ' + primoCorso.materie + '</p> ');
    $('#corsoEsempio').append('<p class="px-3">' + secondoCorso.nome + ' ' + secondoCorso.durata + ' ' + secondoCorso.materie + '</p> ');
    $('#corsoEsempio').append('<p class="px-3">' + terzoCorso.nome + ' ' + terzoCorso.durata + ' ' + terzoCorso.materie + '</p> ');


    // corsi veri

    var corsoVeroNome = localStorage.getItem('corsoVeroN');
    var corsoVeroDurata = localStorage.getItem('corsoVeroD');
    var corsoVeroMaterie = localStorage.getItem('corsoVeroM');

  
    if (corsoVeroNome != null && corsoVeroDurata != null && corsoVeroMaterie != null) {
        $('#creazione').html('<h1 id="creazione">Corso creato da' + nome + ' </h1> ');
        $('#creazione').append('<p>' + corsoVeroNome + ' ' + corsoVeroDurata + ' ' + corsoVeroMaterie + ' ' + '</p>')

    }


    $('#inviaggio').on('click', () => {

        corso1 = $('#nomeCorso').val();
        durata1 = $('#durataCorso').val();
     

        for (let i = 0; i < 3; i++) {
            materie[i] = $(`#materie${i} option:selected`).text();
        }

        corsoVero = new Corso(corso1, durata1, materie);

        localStorage.setItem("corsoVeroN", corsoVero.nome)
        localStorage.setItem("corsoVeroD", corsoVero.durata)
        localStorage.setItem("corsoVeroM", corsoVero.materie)

        materia1 = $("#materie0 option:selected").text();
        materia2 = $("#materie1 option:selected").text();
        materia3 = $("#materie2 option:selected").text();

        console.log(corso1, durata1, materia1, materie);

        console.log(corsoVero)
        if (!corso1) {
            window.alert('inserisci il nome del corso');
        }
        if (!durata1) {
            window.alert('inserisci la durata del corso');
        }
        if (materia1 == '' || materia2 == '' || materia3 == '') {
            conteggio++;
        }
        if (conteggio > 2) {
            window.alert('inserisci almeno una materia');
            conteggio = 0;
        }
        if (materia1 == materia2 || materia1 == materia3 || materia2 == materia3) {
            let temp = localStorage.getItem('nome');
            window.alert('inserisci materie diverse')
            localStorage.clear();
            localStorage.setItem('nome', temp);
            mUguali=true;
        }
    })


    $('select').on('change',function(){
        let controllo;
        controllo = this.text;
    })
    $('#Logout').on('click', function () {
        localStorage.clear();
        location.href = 'login.html';
    })
})

class Corso {
    nome;
    durata;
    materie = [];
    constructor(_nome, _durata, _materie) {
        this.nome ='Il corso: '+ _nome+' ';
        this.durata ='dura: '+ _durata+' ';
        this.materie ='e le materie sono: '+ _materie;
    }
}