const diadasemana = new Date('16-07-2023 00:00:00');
const terdia = diadasemana.getDay();

function terdiasemana (terdia){
    let diasemana;
    
    switch (terdia){
        case 0:
            diasemana = 'Domingo';
                return diasemana;
        case 1:
            diasemana = 'Segunda';
                return diasemana;
        case 2:
            diasemana = 'Terça';
                return diasemana;
        default:
            diasemana = 'Nada encontrado';
                return diasemana;
    };
};

const dd = terdiasemana(terdia);

console.log(dd);

console.log(diadasemana);