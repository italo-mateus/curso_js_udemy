let dobro = function (a) {
    return a * 2
}

//Obrigatoriamente ao colocar o bloco {} precisa coloca return
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
    console.log(dobro(Math.PI))