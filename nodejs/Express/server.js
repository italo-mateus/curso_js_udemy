const express = require('express')
const app = express()

app.get('http://itao', (req, res) => {
    res.send('hello world!')
})

app.listen(3000, () => {
    console.log('Servidor executando na porta 3000')
})