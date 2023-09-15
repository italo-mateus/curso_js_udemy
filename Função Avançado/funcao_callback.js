function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

console.log(rand())

function f1() {
    setTimeout(function(){
        console.log('f1')
    }, rand())
}

f1()
console.log('olá mundo')