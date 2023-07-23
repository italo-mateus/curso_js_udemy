function meuescopo (){
    const formulario = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeevento (evento){

        evento.preventDefault();

        const nome = formulario.querySelector('.nome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${peso.value} ${altura.value}</P>`
    }

    formulario.addEventListener('submit', recebeevento);

}

meuescopo();