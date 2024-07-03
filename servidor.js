const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    let n1 = 5 * 9
    response.send(`O resutaltado é: ${n1}`)
})
app.listen(8080)
