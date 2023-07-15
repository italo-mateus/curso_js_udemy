const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala (){
        console.log(`A minha idade atual é ${this.idade}`)
    }
};

pessoa1.fala();