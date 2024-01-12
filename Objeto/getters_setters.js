//Metodo GET Obtem o valor e SET configura o valor recebido na chave do objeto
// Utilizando GET e SET não faz sentido utilizar o value e writable

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        get: function(){
            return estoque
        },
        set: function(valor){
            console.log(valor)
        }
    })
}

const produto1 = new Produto('Arroz', 12, 1)
console.log(produto1)
produto1.estoque = 'O valor é 1000'
console.log(produto1.estoque)
