const nome = 'Italo'
const sobrenome = 'Mateus'
const idade = '21 anos'
const peso = 60
const altura = 1.75
let imc = altura * altura
imc = peso / imc

console.log(nome, sobrenome, 'tem', idade, 'pesa', peso, 'KG, tem', altura, 'de altura, e seu IMC é de', imc)

console.log(`${nome} ${sobrenome} tem ${idade}, pesa ${peso} KG, tem ${altura} de altura, e seu IMC é de ${imc}`)