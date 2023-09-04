//Tentar executar esse programa 
try {
    console.log(naoexisto)

    //Caso não dê certo executar esse outro bloco de código
} catch (error) {
    console.log('Não existo')
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros')
    }
    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 1))
} catch (error) {
    console.log(error)
}