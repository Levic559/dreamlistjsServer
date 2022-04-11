const mongoose = require('mongoose')
const { Schema } = mongoose

const listSchema = new Schema({
    id: { type: String },
    title: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
    time: { type: String },
    complete: false
});



const List = mongoose.model("list", listSchema)

module.exports = List
