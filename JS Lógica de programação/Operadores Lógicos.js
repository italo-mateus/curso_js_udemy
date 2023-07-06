/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões  precisam ser verdadeiras para retornar true (Vai retornar a primeira expressão verdadeira)( Caso tenha, vai retornar o valor da expressão falsa)

|| -> OR -> OU -> Só precisa de uma expressão verdadeira para retornar o valor verdadeiro (Caso todos forem avaliados em false, ele retornará o ultimo valor)

! -> NOT -> Não -> Inverte o valor da expressão
*/

const expressaoAnd = true && true && true;
const expressaoOr = true || false;


console.log(expressaoAnd);
console.log(expressaoOr);

const usuario = "Italo"
const senha = "123"

const vailogar = usuario === "Italo" && senha === "123"
console.log(vailogar)

console.log(!true)