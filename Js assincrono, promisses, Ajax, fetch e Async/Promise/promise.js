// Na promise só pode receber um valor

let p = new Promise(function(resolve){
    resolve(['Ana', 'Beatriz'])
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraM = string => string.toLowerCase()

//Cada then recebe o resuiltado de uma promessa anterior

p
    .then (primeiroElemento)
    .then (primeiraLetra)
    .then (letraM)
    .then (console.log)

    