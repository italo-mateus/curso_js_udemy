function criarproduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarproduto('Notebook', 1000))