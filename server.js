const express=require('express')
const mongoose= require('mongoose')
const app=express()
const config=require('./config')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

app.use(cors(corsOptions))
app.use(express.json())
app.use('/list',require("./Routes/list"))

mongoose.connect(config.Mongo_url,(err)=>{
    if(err)return console.log(err)
    console.log("MongoDB connnected")
})
app.listen(3750,()=>{console.log(
    "The server is running on the port 3750.")})