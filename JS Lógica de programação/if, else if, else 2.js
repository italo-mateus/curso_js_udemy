const numero = 6

if (numero >= 0 && numero <= 5) {
    console.log('numero está entre 0 e 5')
}

else if (1 === 1){
    console.log('LITERAL')
}

else if (numero >= 6 && numero <= 8){
    console.log('numero esta entre 6 e 8') //É um valor verdadeiro que não é exibido porque o JS só exibe o primeiro valor verdadeiro que aparecer; fazer outro IF para aparecer o verdadeiro
}