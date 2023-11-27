const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    sel : String,
    psw : String,

}); 

const sge_user = mongoose.model('sge_user', userSchema);
module.exports = sge_user;

