# TP noté dev backend

Pour lancer le script il faut taper la commande npm run dev


git add -A
git commit -m "commentaire du commit"
git push

Pour faire les requetes : 

nouvel utilisateur : 
http://localhost:4000/tpnote/v1/newUser
{
  "nom": "nom",
  "mdp": "mot de passe",
  "email": "nom@mail.com"
}

connexion : 
http://localhost:4000/tpnote/v1/login
{
  "email": "marie@mail.com",
  "password": "hello"
}

recherche d'une adresse : 
http://localhost:4000/tpnote/v1/searchAddress
dans auth - bearer mettre le token


{
    "Etiquette_GES": "A",
    "Etiquette_DPE": "A",
    "Code_Postal": "72170"
}

longitude/latitude :
http://localhost:4000/tpnote/v1/searchLongLat
dans auth - bearer mettre le token

{
    "Etiquette_GES": "A",
    "Etiquette_DPE": "A",
    "Code_Postal": "72170"
}


sauvegarde de la recherche : 
http://localhost:4000/tpnote/v1/saveRequest
dans auth - bearer mettre le token

{
    "Etiquette_GES": "A",
    "Etiquette_DPE": "A",
    "Code_Postal": "72170"
}

Je me suis arretée à la partie où on enregistre la recherche dans la base de donnée mongoose
je ne gère donc pas des requêtes en double ni la suppression


.env
ACCESS_TOKEN_SECRET=XXXXXXXXXXXX
REFRESH_TOKEN_SECRET=XXXXXXXXXXXX
MONGO_URL=url
