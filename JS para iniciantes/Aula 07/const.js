/*
Regras para criar constantes
1 - Não podemos criar constantes com palavras reservadas EX: let, var etc...
2 - constantes precisam ter nomes significativos (Boas praticas)
3 - Não pode começar o nome de uma constante com número
4 - Não podem conter espaços ou traços
5 - Utilizamos camelCase
6 - JS é case-sensitive
7 - Não podemos modificar o valor de uma constante
*/

const nome ='joão';
console.log(nome);

const Pn = 5;
const Sn = 5;
const conta = Pn * Sn;
console.log(conta);

const conta2 = conta * 2;
console.log(conta2);

let ContaTriplicada = conta * 3;
ContaTriplicada = ContaTriplicada + 1;
console.log(ContaTriplicada);

console.log(typeof(conta2)) //Checar o tipo de variavel