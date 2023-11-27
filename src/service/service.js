const login = require('../models/user.json')
const fs = require("fs")

const user = require('../models/user_model.js')
const bcrypt = require('bcrypt')




exports.getUser = async function(email, password){
    //let user = fs.readFileSync('./src/models/user.json');

    let user = await user.find({ $and: [{ email: { $regex: email } }, { password: { $regex: type } }] }).exec();
    
    let filteredUser = user.filter(user => {
        let match = true;
        if (email && !user.email.toLowerCase().includes(email.toLowerCase())) {
          match = false;
        }
        if (password && !user.password.includes(password)) {
          match = false;
        }
        return match;
      });
      
    return filteredUser[0];
  
  }

  exports.searchUser = async function(email){

    let user = await user.find( [{ email: { $regex: email } }] ).exec();
    
    let filteredUser = user.filter(user => {
        let match = true;
        if (email && !user.email.toLowerCase().includes(email.toLowerCase())) {
          match = false;
        }
        return match;
      });
      
    return filteredUser[0];
  
  }



exports.createUser = async function(nom,psw,email,){

    let sel = await bcrypt.genSalt(10);
    let pswcrypt = await bcrypt.hash(psw,sel);
    const newUser = new user({
        nom: nom,
        sel:sel,
        psw: pswcrypt,
        email: email,
    });
    newUser.save().then(() => console.log("user created"));
}
  