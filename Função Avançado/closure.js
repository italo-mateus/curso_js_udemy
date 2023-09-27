// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite acessar e manipular variaveis externass a função

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())