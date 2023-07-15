/*const pessoa1 = {
    idade: 18,
    nome: 'Italo',
    Sobrenome: 'Mateus',
}*/

function criapessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criapessoa('Luiz', 'Otavio', 25)
const pessoa2 = criapessoa('Maria', 'Julia', 20)

console.log(pessoa1.nome)

