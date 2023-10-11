//Getter e Setter são funções onde os valores são acessados

const sequencia = {
    _valor: 1, //Convenção do _ : Acesso apenas internamente
    get valor(){ return this._valor++},
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

