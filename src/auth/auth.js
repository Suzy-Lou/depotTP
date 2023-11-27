const jwt = require('jsonwebtoken')

// chargement du fichier d'env



exports.generateAccessToken = function (user) {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 600 });
}
