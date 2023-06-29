/*function funcao(){
    console.log(arguments[0]);
}
funcao('Valor', 1, 2, 3);*/

//arguments que sustenta todos os argumentos enviados


/*function soma() {
    let total = 0;
    for ( let arguemento of arguments){
        total += arguemento;
    }
    console.log(total);
}

soma(1, 2, 3, 4, 5);*/

function funcao (a, b = 0){
    console.log(a + b);   

}

funcao(1); 

