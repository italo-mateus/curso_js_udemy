//Utilizando new Map nós conseguimos utilizar diferentes tipos de chaves

const tech = new Map()
tech.set('react', {framework: false})
tech.set('angular', {framework: true})

console.log(tech.react)
console.log(tech.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])
