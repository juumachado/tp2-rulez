const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/conta', (request, response) => {
  response.render ('conta')
})


app.get('/tudonoback', (request, response) => {
   var resultado = ""
    response.render ('sol',{resultado})
})

app.post('/soma', (request, response) => {
  resultado = parseFloat(request.body.n1) + parseFloat(request.body.n2)
  response.render ('sol',{resultado})
})

app.post('/sub', (request, response) => {
  resultado = parseFloat(request.body.n1) - parseFloat(request.body.n2)
  response.render ('sol',{resultado})
})

app.post('/mult', (request, response) => {
  resultado = parseFloat(request.body.n1) * parseFloat(request.body.n2)
  response.render ('sol',{resultado})
})

app.post('/div', (request, response) => {
  resultado = parseFloat(request.body.n1) / parseFloat(request.body.n2)
  response.render ('sol',{resultado})
})

const PORT = 8080
app.listen(PORT, ()=> {})
  console.log (`Servidor rodando em ${PORT}`);
