//Módulo cliente acessa outros módulos

const moduloA = require ('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
