const express = require('express')
const cors = require('cors')
 
const app = express()
app.use(cors());

const todo = ['comprar', 'vender', 'cocinar', 'planchar']
 
app.get('/lista-todo', function (req, res) {
  
    res.json({lista: todo});
})

app.post('/guardar-todo', function (req, res) {
    res.send('Hello World')
})

app.listen(3000);