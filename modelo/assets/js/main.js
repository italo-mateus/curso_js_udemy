// Capturar evento de submit do formulário

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function (evento){
    evento.preventDefault();
    const inppeso = evento.target.querySelector('#Peso');
    const inpaltura = evento.target.querySelector('#Altura');

    const peso = Number(inppeso.value);
    const altura = Number(inpaltura.value);

    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    function getNivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc >=39.9)  return nivel[5];
        if(imc >=34.9)  return nivel[4];
        if(imc >=29.9)  return nivel[3];
        if(imc >=24.9)  return nivel[2];
        if(imc >=18.5)  return nivel[1];
        if(imc < 18.5)  return nivel[0];
};

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);

    function getImc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    };

});

function setResultado (msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';


    const p = criaP();
    if (isValid){
        p.classList.add('resultado')
    }
    else{
        p.classList.add('bad')
    }

    
    p.innerHTML = msg;
    resultado.appendChild(p)
}

function criaP (){
    const p = document.createElement('p');
    return p;
}
