const router = require("express").Router()
require("./../mongoDB/mongoconn")

const devices = require("./devices")
router.use("/devices", devices)

router.get("/", (req, res)=>{
    res.json({
        success: false,
        message: "This page is reserved."
    })
})

module.exports = router 