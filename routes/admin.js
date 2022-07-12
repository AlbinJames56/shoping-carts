var express = require("express");
//const{render}=require('../app')
var router = express.Router();
var productHelper = require("../helper/product-helper");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "I phone 13 pro max",
      category: "Mobile phone",
      description:
        "17 cm (6.7-inch) Super Retina XDR display with ProMotion for a faster, more responsive feel",
      price: "1,12,999 Rs",
      image: "https://m.media-amazon.com/images/I/61IJBsHm97L._SX679_.jpg",
    },
    {
      name: "Google pixel 6 pro",
      category: "Mobile phone",
      description:
        "Released 2021, October 28, 210g, 8.9mm thickness ,Android 12, 128GB/256GB/512GB storage, no card slot",
      price: "79,999 Rs",
      image:
        "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg",
    },
    {
      name: "OnePlus 10 pro",
      category: "Mobile phone",
      description:
        "Released 2022, January 13, 201g, 8.6mm thickness, Android 12, OxygenOS 12.1, ColorOS 12.1 ,128GB/256GB/512GB storage, no card slot",
      price: "63,999 Rs",
      image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-10-pro-1.jpg",
    },
    {
      name: "Xiaomi 12 pro",
      category: "Mobile phone",
      description:
        "Released 2021, December 31 , 204g, 8.2mm thickness ,Android 12, 128GB/256GB/512GB storage, no card slot",
      price: "56,599 Rs",
      image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-12-1.jpg",
    },
  ];

  res.render("admin/view-products", { products, admin: true });
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
    express.render("admin/add-products");
  });
});

module.exports = router;
