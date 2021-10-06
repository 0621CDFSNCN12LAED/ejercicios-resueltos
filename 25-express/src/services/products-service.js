const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const productsService = {
    findAll() {
        const filteredProducts = products.filter((prod) => {
            return !prod.deleted;
        });
        return filteredProducts;
    },

    filterByCategory(category) {
        return this.findAll().filter((prod) => {
            return prod.category == category;
        });
    },

    findOneById(id) {
        const product = products.find((prod) => {
            return prod.id == id;
        });

        return product;
    },

    createOne(payload, image) {
        const lastProduct = products[products.length - 1];
        const biggestProductId = products.length > 0 ? lastProduct.id : 1;
        const product = {
            id: biggestProductId + 1,
            ...payload,
            price: Number(payload.price),
            discount: Number(payload.discount),
            image: image ? image.filename : "default-image.png",
        };
        products.push(product);
        this.save();
    },

    editOne(id, payload, image) {
        const product = this.findOneById(id);
        product.name = payload.name;
        product.description = payload.description;
        product.category = payload.category;
        product.price = Number(payload.price);
        product.discount = Number(payload.discount);

        if (image) {
            fs.unlinkSync(path.join(__dirname, "../../public", product.image));
            product.image = image.filename;
        }

        this.save();
    },

    destroyOne(id) {
        // const product = this.findOneById(id);
        // product.deleted = true;

        ///================================= otra opcion

        const product = products.find((prod) => {
            return prod.id == id;
        });

        //borrado del archivo de la imagen del producto
        // "/img/products/<nombre>"
        fs.unlinkSync(path.join(__dirname, "../../public", product.image));

        const productIndex = products.indexOf(product);

        products.splice(productIndex, 1);

        ///================================= otra opcion

        products = products.filter((prod) => {
            return prod.id != id;
        });

        this.save();
    },

    save() {
        const jsonString = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);
    },
};

module.exports = productsService;
