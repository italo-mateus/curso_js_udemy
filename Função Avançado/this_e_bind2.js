function pessoa() {
    this.idade = 0

    setInterval(function () {
        this.idade++
         console.log(this.idade)
    }.bind(this), 2000)
}

new pessoa