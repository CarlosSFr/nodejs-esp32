const router = require("express").Router()
const deviceSchema = require("./../schema/device_schema")

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
    const device = new deviceSchema({
        nome: req.body.nome,
        processador: req.body.processador,
        video: req.body.video
    })
    device.save()
    .then((data) => {
        res.json({
            success: true,
            message: data,
        })
    })
    .catch((err) =>{
        res.json({
            success: false,
            message: err,
        })
    })
})


module.exports = router