// Declaração de função (Function hoisting)
// First-class objects (Objetos de primeira classe)
// Como declarar uma função

function falaOi(){
    console.log('Oie');
}
falaOi();

const souUmDado = function (){
    console.log(`Sou um dado`);
};
souUmDado();

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

