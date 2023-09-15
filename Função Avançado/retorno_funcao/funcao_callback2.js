const notas = [7.7, 1.0, 8.0, 5.5]

// Sem callback

let notasbaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasbaixas.push(notas[i])
    }
}

console.log(notasbaixas)

const notasbaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasbaixas2)