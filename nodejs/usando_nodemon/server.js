const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    nome do cliente: <input type="text" name="nome"
    <button> Enviar </button>
    </form>`)
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})