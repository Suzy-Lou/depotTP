const express = require('express')
require('dotenv').config();
const app = express();
const port = 4000;
const server = require('http')


const router = require("./src/loader/route.js");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected"));


app.use(express.json())

app.use(router.getRouter())



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
