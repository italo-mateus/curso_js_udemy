// defineProperty - Trava o valor uma chave do objeto
// definePropeties - Trava o valor de todas as chaves do objeto

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        writable: false, //Se pode alterar o valor
        configurable: true, //Se poderá ser reconfigurado ou apagado em outro lugar 
    })
}

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            writable: true,
            configurable: true
        },
        preço: {
            enumerable: true,
            writable: true,
            configurable: true
        },
        estoque: {
            enumerable: true,
            writable: true,
            configurable: true
        }
})

const produto1 = new Produto('Arroz', 12, 1)
console.log(produto1)