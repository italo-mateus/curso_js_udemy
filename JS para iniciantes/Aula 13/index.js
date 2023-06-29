
//Os arrays também são indexados assim como nas strings Luiz = 0, Maria = 1, João = 2
const alunos = ['Luiz', 'Maria', 'João'];

//console.log(alunos)

//console.log(alunos[0]) /*Mostra o conteudo no arrey */
//console.log(alunos[1])
//console.log(alunos[2])

//alunos[0] = 'Italo'; /*Utilizamos esse método para trocar o nome num arrey */
//console.log(alunos)

//alunos [2] = 'Mateus'; /*Usado para alterar ou adicionar um valor no final do arrey */
//console.log(alunos)

//console.log(alunos.length) /*Conta os elementos do array */

//alunos[alunos.length] = 'Luiz' /*Adiciona mais um valor ao array no fim */
//console.log(alunos)

//alunos.push('Lucas') /*Adiciona mais um valor ao array no fim (Mais usado*/
//alunos.push('Otavio')
//alunos.push('Jonas')
//console.log(alunos[5])

//alunos.unshift('Luiza') /*Usado para adicionar um valor no começo do arrey */
//console.log(alunos)

//alunos.pop(); /*Vai excluir o ultimo valor do array */
//console.log(alunos)
//const removido = alunos.pop() /*Podemos armazenar o valor excluido dentro de uma variavel*/
//console.log(removido)

//alunos.shift() /*Vai excluir o primeiro valor do array */
//console.log(alunos)
//const exc = alunos.shift() /*Podemos armazenar o valor excluido dentro de uma variavel*/
//console.log(exc)

delete alunos[1] /*Vai excluir o valor deixando um indice em branco */
console.log(alunos) 
console.log(alunos[1])