const miPrimerMiddleware = (admins) => {
    return (req, res, next) => {
        const usuarioActual = req.query.cualquiera;
        if (admins.includes(usuarioActual)) {
            req.admin = usuarioActual;
            next();
        } else {
            res.send("No tienes los privilegios para ingresar");
        }
    };
};

module.exports = miPrimerMiddleware;
