const nome = 'Luiz'
const sobrenome = 'Miranda'

const falanome = function(){
    console.log(nome, sobrenome)
}

module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falanome = falanome
console.log(module.exports)