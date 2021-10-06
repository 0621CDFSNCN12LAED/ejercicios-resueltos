// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/images/products"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const uploader = multer({
    storage,
});

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create);
const result = uploader.single("image");
router.post("/", result, productsController.store);

/*** GET ONE PRODUCT ***/
router.get("/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/edit/:id", productsController.edit);
//PUT /products/15
router.put("/:id", uploader.single("image"), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);

module.exports = router;
