const fs = require("fs");

const userLogs = (req, res, next) => {
    fs.appendFileSync("path", `El usuario ingresó a la ruta: ${req.url}\n`);

    next();
};

module.exports = userLogs;
