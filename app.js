const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT
const localhost = process.env.IP
const server = require('http')


const router = require("./src/loader/route.js");

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(() => console.log("connected"));


app.use(express.json())

app.use(router.getRouter())


console.log(localhost);
app.listen(port,localhost,()=>{
	
    console.log(`Example app listening on port ${port}`)
})
