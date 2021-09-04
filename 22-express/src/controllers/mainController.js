const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    //Filtro los productos en dos arrays
    // array1 = los últimos visitados
    // array2 = los productos en oferta
    const visitedProducts = products.filter((prod) => {
      return prod.category == "visited";
    });
    const inSaleProducts = products.filter((prod) => {
      return prod.category == "in-sale";
    });

    //renderizar la vista index con esos arrays
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
