const dpe = require('../models/modelDPE.js')


exports.getAddressServ = async function(Etiquette_GES,Etiquette_DPE,Code_Postal){
    let address = await dpe.find({ "Etiquette_GES": Etiquette_GES,"Etiquette_DPE": Etiquette_DPE,"Code_postal_(BAN)": Code_Postal }).then((results) => {
      return results.map(result => result["Adresse_(BAN)"]);
      });
  
      let addressFiltered=[];
      address.forEach(result => {
        addressFiltered.push(result);
      });
  
      return addressFiltered;
  
  }

exports.getLongLatServ = async function(Etiquette_GES, Etiquette_DPE,Code_Postal){
    const address = await exports.getAddressServ(Etiquette_GES, Etiquette_DPE, Code_Postal);

    let geolocalisation = [];
    console.log("nb d'addresses :  "+address.length);

    for (let i=0;i<address.length;i++){
        console.log("geolocalisation en cours pour l'adresse: "+address[i]);

        const url = `https://nominatim.openstreetmap.org/search?q=${address[i]}&format=jsonv2`;
        console.log(url)
        const response = await fetch(url);
        const dataBrut = await response.json();
        console.log(dataBrut);

        if (dataBrut.length>0){
            console.log("geolocalisation trouvée pour l'adresse: "+address[i]);
            let adresse = `adresse:${address[i]}`;
            let longitude = `longitude:${dataBrut[0].lon}`;
            let latitude = `latitude:${dataBrut[0].lat}`
            geolocalisation.push({adresse,longitude,latitude});
        }
        else{
            console.log("geolocalisation non trouvée pour l'adresse: "+address[i]);
        }

    }
        return geolocalisation;

}