const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
nome = ""
  response.render ('att')
})

app.post('/nome', (request, response) =>{
    nome = `Bom dia, ${request.body.Nome}`
    response.render ('att',{nome})
})
const PORT = 8080
app.listen(PORT, ()=> {})
  console.log (`Servidor rodando em ${PORT}`);
