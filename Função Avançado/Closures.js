function retornafuncao() {
    const nome = 'Luiz'
    return function () {
        return nome
    }
}

const funcao = retornafuncao()
console.log(funcao)