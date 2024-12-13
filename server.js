const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
const api = require("./routes/") // aqui estou pegando o "index.js", não está referenciado pq index é padrão
app.use("/api", api) // funciona como um middleware, linkando as rotas à api
const PORT = 3000


app.get("/", (req, res) => {
    res.json({
        success: true
    }) 
})

app.listen(PORT)

