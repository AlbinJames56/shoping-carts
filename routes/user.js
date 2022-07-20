const { use } = require('bcrypt/promises');
const { response } = require('express');
var express = require('express');
var router = express.Router();
var productHelper = require("../helper/product-helper");
const userHelpers=require('../helper/user-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  productHelper.getAllProducts().then((products)=>{
    res.render('user/view-products', {products, admin:false });
   
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    let name = req.body.name
    console.log("Name:", response.name)
    res.render('./user/signupconfirm', { name })
  })
})

module.exports = router;
