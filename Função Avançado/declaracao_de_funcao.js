// Declaração de função (Function hoisting)

function falaoi (){
    console.log('Olá mundo')
}

// Firt-Class objects (Objeto de primeira classe)
//Function expression
const ola = function(){
    console.log('Sou um dado')
}

function executafuncao(funcao){
    funcao()
}

executafuncao(ola)

// Arrow function
const arrow = () => {
    console.log('Sou  uma função arrow')
}

arrow()

// Dentro de um Objeto

const obj = {
    falar: function(){
        console.log('Dentro de um objeto')
    }
}

obj.falar()