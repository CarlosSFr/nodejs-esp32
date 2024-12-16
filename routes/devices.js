const router = require("express").Router()
const Device = require("./../schema/device_schema")

router.get("/", async (req, res) => {
    try{
        const listaDevices = await Device.find()
        res.json({
            success: true,
            message: listaDevices,
        })
    }catch{
        res.json({
            success: false,
            message: "Não foi possível listar os computadores!",
        })
    }
})

router.post("/", async (req, res) => {
    const newDevice = new Device({
        nome: req.body.nome,
        processador: req.body.processador,
        video: req.body.video
    })
    try{
        const saveNewDevice = await newDevice.save()
        res.json({
            success: true,
            message: saveNewDevice,
        })
    }catch{
        res.json({
            success: false,
            message: "Não foi possível salvar no banco de dados!",
        })
    }
})


module.exports = router