const router = require("express").Router()

router.get("/", (req, res) => {
    const devices = [{
        id: 123,
        nome: "Computador",
        processador: "i5 11400f",
        video: "RX 6750 XT",
    }]
    res.json({
        success: true,
        devices: devices,
    }) 
})

module.exports = router