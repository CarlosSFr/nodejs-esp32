const mongoose = require("mongoose")

const { Schema } = mongoose

const device_schema = new Schema({
    nome: String,
    processador: String,
    video: String,
})

module.exports = mongoose.model("devices", device_schema)