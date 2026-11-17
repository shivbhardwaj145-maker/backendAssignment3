const express = require("express");
const route = express.Router();
const {
    getProducts,
    getProductById,
    AddProduct,
    UpdateProduct,
    DeleteProduct,
    getLowStockAlerts,
    getCategorySummary
} = require("../controllers/productController.js");

route.get("/reports/low-stock" , getLowStockAlerts);
route.get("/reports/category-summary" , getCategorySummary);

route.get("/" , getProducts);
route.get("/:id" , getProductById);
route.post("/" , AddProduct);
route.put("/:id" , UpdateProduct);
route.delete("/:id" , DeleteProduct);

module.exports = route;
