const express = require('express')
const mustacheExpress = require('mustache-express')
const path = require('path')
const calcRoutes = require('./src/routes/calcRoutes')
const exp = require('constants')
const { Console } = require('console')

const app = express()
const PORT = 8080

//Configurando Mustache
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', path.join(__dirname, 'src/views'))

//Middleware
app.use(express.urlencoded({extended: true}))

//Rotas
app.use('/', calcRoutes)

//Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})