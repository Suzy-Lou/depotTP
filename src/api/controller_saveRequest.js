const { getLongLatServ } = require("../service/service_address.js");
const service = require("../service/service_saveRequest.js");


exports.saveRequest = async function (req, res) {
    const email = req.user.user;
    console.log(email);
    const Etiquette_GES = req.body.Etiquette_GES;
    const Etiquette_DPE = req.body.Etiquette_DPE;
    const Code_Postal = req.body.Code_Postal;
    const longitude = await getLongLatServ(Etiquette_GES, Etiquette_DPE, Code_Postal).longitude;
    const latitude = await getLongLatServ(Etiquette_GES, Etiquette_DPE, Code_Postal).latitude;
    const adresse = await getLongLatServ(Etiquette_GES, Etiquette_DPE, Code_Postal).adresse;

    await service.saveRequestServ(email, adresse, Code_Postal, longitude, latitude, Etiquette_DPE, Etiquette_GES);
    res.status(201).send("requete sauvegardée dans mongoose");

}

