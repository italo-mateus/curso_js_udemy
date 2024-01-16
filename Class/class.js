class Pessoa {
    constructor(nome, sobrenome){ 
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`Meu nome é ${this.nome} e meu sobrenome é ${this.sobrenome}`)
    }
}

const p1 = new Pessoa('Italo', 'Mateus')
console.log(p1.falar())