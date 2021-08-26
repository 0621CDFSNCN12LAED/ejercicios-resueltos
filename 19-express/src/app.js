//importar express
const express = require("express");

//importar path
const path = require("path");

//crear una app de express
let app = express();

//prendemos el servidor web
app.listen(3000);

//Carpeta de archivos estáticos
const pathToPublicFolder = path.join(__dirname, "../public");
const publicStaticMiddleware = express.static(pathToPublicFolder);
app.use(publicStaticMiddleware);

const mainRouter = require("./routes/main-routes");
app.use("/", mainRouter);
