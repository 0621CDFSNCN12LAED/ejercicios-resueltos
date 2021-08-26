const path = require("path");

module.exports = {
  home: (req, res) => {
    //La carpeta en donde estoy (__dirname), moverme a views, y apuntar a home.html
    res.sendFile(path.join(__dirname, "../views/home.html"));
  },
  about: (req, res) => {
    //La carpeta en donde estoy (__dirname), moverme a views, y apuntar a about.html
    res.sendFile(path.join(__dirname, "../views/about.html"));
  },
};
