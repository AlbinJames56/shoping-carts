var express = require("express");
//const{render}=require('../app')
var router = express.Router();
var productHelper = require("../helper/product-helper");

/* GET users listing. */
router.get("/", function (req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    res.render("admin/view-products", { products, admin: true });
  })

  
});
router.get("/add-products", (req, res) => {
  res.render("admin/add-products",{admin:true});
});
router.post("/add-products", (req, res) => {
  productHelper.addProduct(req.body, (id) => {
    let image = req.files.Image;
    console.log(id);
    image.mv("./public/images/" + id + ".jpg", (err) => {
      if (!err) {
        res.render("admin/add-products");
      } else {
        console.log(err);
      }
    });
    //express.render("admin/add-products");
  });
});

module.exports = router;
