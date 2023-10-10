// Forma literal
const obj1 = {}

// Objeto em JS
const obj2 = new Object

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }

}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())