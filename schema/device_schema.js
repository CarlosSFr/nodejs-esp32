const mongoose = require("mongoose")
const slug = require("slugify")

//import slug from "slug"

const { Schema } = mongoose

const device_schema = new Schema({
    nome: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true, default: () => {return slug(this.nome)}},
    processador: {type: String, required: true},
    video: {type: String, required: true},
})

module.exports = mongoose.model("devices", device_schema)