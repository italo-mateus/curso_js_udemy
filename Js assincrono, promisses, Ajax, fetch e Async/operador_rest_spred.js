// Operador... rest (juntar) / spread (espalhar)
// usar rest como parametro da função

const funcionario = {nome: 'Maria', salario: 1300}
const clone = {ativo: true, ...funcionario} //Operador spread (...funcionario)
console.log(clone)

//Usando spread com array

const grupoA = ['João', 'Maria', 'Olivia']
const grupoFinal = ['Joana', ...grupoA, 'Italo']

console.log(grupoFinal)