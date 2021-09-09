const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products", { products });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.find((prod) => {
            return prod.id == req.params.id;
        });
        res.render("detail", { product });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("product-create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        const lastProduct = products[products.length - 1];
        const biggestProductId = products.length > 0 ? lastProduct.id : 1;
        const product = {
            id: biggestProductId + 1,
            ...req.body,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.file ? req.file.filename : "default-image.png",
        };
        products.push(product);
        const jsonString = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);
        res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        const product = products.find((prod) => {
            return prod.id == req.params.id;
        });
        res.render("product-edit-form", { product });
    },
    // Update - Method to update
    update: (req, res) => {
        const product = products.find((prod) => {
            return prod.id == req.params.id;
        });

        product.name = req.body.name;
        product.description = req.body.description;
        product.category = req.body.category;
        product.price = Number(req.body.price);
        product.discount = Number(req.body.discount);
        product.image = req.file ? req.file.filename : product.image;

        const jsonString = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);
        res.redirect("/products");
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        res.send("estas en: destroy" + req.params.id);
    },
};

module.exports = controller;
