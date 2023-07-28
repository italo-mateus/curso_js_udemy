const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
let diasemanatexto;

switch (diaSemana){
    case 0:
        diasemanatexto = 'Segunda';
        break;
        //Break serve para o interpretador sair do bloco de código (Funciona somente no Switch)
    case 1:
        diasemanatexto = 'terça';
        break;
        //default funciona como um else 
    default:
        diasemanatexto = 'Nenhum dia'
        break;
}

console.log(diasemanatexto)

