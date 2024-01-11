const express = require('express')
const app = express()

// URL params
// Query string

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="post">
    nome do cliente: <input type="text" name="nome">
    <button> Enviar </button>
    </form>`)
})

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)

})

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
})

app.listen(3000, () => {
    console.log('Server executando na porta 3000')
})