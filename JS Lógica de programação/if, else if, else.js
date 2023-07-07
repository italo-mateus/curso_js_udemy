/*
IF - Pode ser usado sozinho
else - Sempre que utilizo else, tem um IF antes (Depende do IF)
pode existir varios else if
so pode ter um else na checagem
*/

const hora = '18';

if(hora >=0 && hora <= 11){
    console.log('Bom dia!');
}

else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde!');
}

else if(hora >= 18 && hora <= 23){
    console.log('Boa noite!');
}

else {
    console.log('Olá')
}