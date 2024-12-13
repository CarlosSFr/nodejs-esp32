const express = require("express")
const app = express()
const api = require("./routes/") // aqui estou pegando o "index.js", não está referenciado pq index é padrão
app.use("/api", api) // funciona como um middleware, linkando as rotas à api
const PORT = 3080

app.get("/", (req, res) => {
    res.json({
        success: true
    }) 
})

app.listen(PORT)