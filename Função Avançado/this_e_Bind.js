const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falardepessoa = pessoa.falar.bind(pessoa) //bind serve para amarrar um componente ao objeto
falardepessoa()
