//Objeto literal
/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 18
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);*/

function criapessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criapessoa('Italo', 'Mateus', 22);
console.log(pessoa1.nome);