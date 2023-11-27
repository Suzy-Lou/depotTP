const service = require("../service/service.js");
const auth = require("../auth/auth.js")
const crypto =  require("crypto-js")



exports.login = function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    //decrypter le mot de passe avec son sel

    
    psw = crypto.SHA256(password).toString();
    console.log(psw);


    const user = service.getUser(email, psw);
    
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
    //verifier que l'utilisateur n'existe pas déjà
    //si le mail existe pas afficher une erreur
    //sinon créer l'utilisateur
    if (service.searchUser(email)){
        res.status(400).send('un utilisateur avec la meme adresse mail existe déjà');
        return ;
    }
    else{
        service.createUser(nom, mdp, email);
    }

    res.status(201).send();
}

//todo ajouter le sel pour les mots de passe 

