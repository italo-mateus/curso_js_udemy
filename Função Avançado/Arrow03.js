let comparacomthis = function (param){
    console.log(this === param)
}

comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj)

let comparacomthisarrow = param => console.log(this === param)