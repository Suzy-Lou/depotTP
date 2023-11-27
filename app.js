const express = require('express')
require('dotenv').config();
const app = express();
const port = 4000;
const server = require('http')


const router = require("./src/loader/route.js");

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://student:ensim@clusterdpe.dly181i.mongodb.net/dpe?retryWrites=true&w=majority').then(() => console.log("connected"));


app.use(express.json())

app.use(router.getRouter())



app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
