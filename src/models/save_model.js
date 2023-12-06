const mongoose = require('mongoose');

const saveSchema = new mongoose.Schema({
    "email": String,
    "address": String,
    "code_postal": Number,
    "ville": String,
    "longitude": Number,
    "latitude": Number,
    "DPE": String,
    "GES": String,

});

const sge_save = mongoose.model('sge_save', saveSchema);
module.exports = sge_save;