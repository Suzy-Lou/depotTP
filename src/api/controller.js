const service = require("../service/service.js");
const auth = require("../auth/auth.js")
const crypto =  require("crypto-js")



exports.login = async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    //decrypter le mot de passe avec son sel

    const user = await service.getUser(email, password);
    if (!user){
        res.status(401).send('invalid credentials');
        return ;
    }


    const accessToken = auth.generateAccessToken(email);
    res.json({
        accessToken,
    });
}


exports.newUser = function (req, res) {
    const nom = req.body.nom;
    const mdp = req.body.mdp;
    const email = req.body.email;
    console.log(nom, mdp, email);
    if (service.searchUser(email)=="null"){
        res.status(400).send('un utilisateur avec la meme adresse mail existe déjà');
        return ;
    }
    else{
        service.createUser(nom, mdp, email);
    }

    res.status(201).send();
}

//todo ajouter le sel pour les mots de passe 

exports.getAddress = function (req, res) {
    const Etiquette_GES = req.body.Etiquette_GES;
    const Etiquette_DPE = req.body.Etiquette_DPE;
    const Code_Postal = req.body.Code_Postal;

    console.log(Etiquette_GES, Etiquette_DPE, Code_Postal);

    const result = service.getAddressServ(Etiquette_GES, Etiquette_DPE, Code_Postal);
    
    if (result=="null"){
        res.status(400).send('resultat non trouvé');
        return ;
    }
    else{
        service.getAddressServ(Etiquette_GES, Etiquette_DPE, Code_Postal);
    }

    res.status(201).send();



}