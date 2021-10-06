const productsService = require("../services/products-service");

const controller = {
    index: (req, res) => {
        console.log(req.saludo);
        //filterByCategory
        const visitedProducts = productsService.filterByCategory("visited");
        //filterByCategory
        const inSaleProducts = productsService.filterByCategory("in-sale");

        res.render("index", {
            visitedProducts,
            inSaleProducts,
        });
    },
    search: (req, res) => {
        // Do the magic
    },
    admin: (req, res) => {
        res.send("Hola Admin: " + req.admin);
    },
};

module.exports = controller;
