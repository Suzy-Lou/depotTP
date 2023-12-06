const save = require('../models/save_model.js')


exports.saveRequestServ = async function (email, adresse, Code_Postal, longitude, latitude, Etiquette_DPE, Etiquette_GES) {
    
        const saveRequest = new save({
            "email": email,
            "address": adresse,
            "code_postal": Code_Postal,
            "longitude": longitude,
            "latitude": latitude,
            "DPE": Etiquette_DPE,
            "GES": Etiquette_GES
        
        }); 
        saveRequest.save().then(() => console.log("requete sauvegardée"));


    }


