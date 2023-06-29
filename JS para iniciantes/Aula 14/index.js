
//Funcionamento de uma função
/*function saudacao(nome) {
console.log(`Bom dia ${nome}`)
}

saudacao('Luiz')*/

function soma(a = 1,b = 1) { //Define valores a função
    const resultado = a + b
    return resultado //Nada é executado depois de return dentro da function
} 

console.log(soma(2 , 2))

// Arrow function 