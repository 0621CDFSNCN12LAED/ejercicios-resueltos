const productsService = require("../services/products-service");

const controller = {
    // Root - Show all products
    index: (req, res) => {
        const filteredProducts = productsService.findAll();
        res.render("products", { products: filteredProducts });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = productsService.findOneById(req.params.id);
        if (product) {
            res.render("detail", { product });
        } else {
            //error
        }
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("product-create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        productsService.createOne(req.body, req.file);
        res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        const product = productsService.findOneById(req.params.id);
        res.render("product-edit-form", { product });
    },
    // Update - Method to update
    update: (req, res) => {
        productsService.editOne(req.params.id, req.body, req.file);
        res.redirect("/products");
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        productsService.destroyOne(req.params.id);

        res.redirect("/products");
    },
};

module.exports = controller;
