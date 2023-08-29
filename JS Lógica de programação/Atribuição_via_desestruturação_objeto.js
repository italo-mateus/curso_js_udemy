const pessoa = {
    //nome: 'Italo',
    sobrenome: 'Mateus',
    idade: 30,
    endereco: {
        rua: '1',
        numero: 3344
    }
}

// const nome = pessoa.nome
// console.log(nome)

const {nome, ...resto }= pessoa
console.log(resto)



