const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('./config')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
require('dotenv').config()
const PORT = process.env.PORT || 3750
app.use(cors(corsOptions))
app.use(express.json())
app.use('/list', require("./Routes/list"))
app.get('/',(req,res)=>{
    res.send("Welcome to Dreamlist")
})
mongoose.connect(process.env.DATABASE_URI, (err) => {
    if (err) return console.log(err)
    console.log("MongoDB connnected")
})
app.listen(PORT, () => {
    console.log(
        `The server is running on the port ${PORT}.`)
})