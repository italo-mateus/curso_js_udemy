const data = new Date();
const diadasemana = data.getDay();

function terdiasemana(){
    let dia;

    switch(diadasemana){
        case 0:
            dia = 'Domingo';
            return dia;
        case 1:
            dia = 'Segunda-Feira';
            return dia;
        case 2:
            dia = 'Terça-Feira';
            return dia;
        case 3:
            dia = 'Quarta-Feira';
            return dia;
        case 4:
            dia = 'Quinta-Feira';
            return dia;
        case 5:
            dia = 'Sexta feira';
            return dia;
        case 6:
            dia = 'Sabado'
            return dia;
        default:
            dia = 'Nenhum dia encontrado'
            return dia;
    };
};



const paragrafo = document.querySelector('.exibir');
paragrafo.innerHTML = terdiasemana(diadasemana);




