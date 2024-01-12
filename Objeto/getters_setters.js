function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        writable: false,
        configurable: true, 
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