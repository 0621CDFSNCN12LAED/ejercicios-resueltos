const productsService = require("../services/products-service");

const controller = {
    index: (req, res) => {
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
};

module.exports = controller;
