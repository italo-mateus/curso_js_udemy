const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true}))
app.use(routes)

// Padrão MVC

app.listen(3000, () => {
    console.log('Server executando na porta 3000')
})