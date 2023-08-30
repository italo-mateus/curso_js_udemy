// For in -> Lê os indices ou chaves do objeto

// const pessoa = ['Maçã', 'Pera', 'Uva']
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }
// for (let i in frutas) {
//     console.log(frutas[i])
// }

const pessoa = {
    nome: 'Luiz',
    Sobrenome: 'Otávio',
    idade: 20
}

// for (let i in pessoa)
// console.log(i)

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}