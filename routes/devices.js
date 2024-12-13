const router = require("express").Router()

router.get("/", (req, res) => {
    const devices = [{
        id: 123,
        nome: "Computador Médio Custo",
        processador: "i5 11400f",
        video: "RX 6750 XT",
    },
    {
        id: 122,
        nome: "Computador Baixo Custo",
        processador: "Xeon 2684",
        video: "RX 580"
    }
]
    res.json({
        success: true,
        devices: devices,
    }) 
})

router.post("/", (req, res) => {
    res.json(req.body)
    console.log(req.body)
})


module.exports = router