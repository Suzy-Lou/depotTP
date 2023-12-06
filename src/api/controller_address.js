const service = require("../service/service_address.js");

exports.getAddress = async function (req, res) {
    const Etiquette_GES = req.body.Etiquette_GES;
    const Etiquette_DPE = req.body.Etiquette_DPE;
    const Code_Postal = req.body.Code_Postal;

    console.log(Etiquette_GES, Etiquette_DPE, Code_Postal);

    const result = await service.getAddressServ(Etiquette_GES, Etiquette_DPE, Code_Postal);

    if (result.length == 0){
        res.status(400).send('resultat non trouvé');
        return ;
    }
    else{
        res.json(result);    }

    res.status(201).send();
}

exports.getLongLat = async function (req, res) {

    const Etiquette_GES = req.body.Etiquette_GES;
    const Etiquette_DPE = req.body.Etiquette_DPE;
    const Code_Postal = req.body.Code_Postal;

    const longLat = await service.getLongLatServ(Etiquette_GES, Etiquette_DPE, Code_Postal);

    if (longLat == 0){
        res.status(400).send('aucun résultat trouvé');
        return ;
    }
    else{
        res.json(longLat);    }

    res.status(201).send();



}