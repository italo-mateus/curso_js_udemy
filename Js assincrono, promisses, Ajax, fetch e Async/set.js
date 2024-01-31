//Não indexada / Não aceita repetição

const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times)