// tagged templates - processa o template dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}