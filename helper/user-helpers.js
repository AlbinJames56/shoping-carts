var db = require("../config/connection");
var collection = require("../config/collections");
const bcrypt = require('bcrypt')
const { promise } = require("bcrypt/promises");
const async = require("hbs/lib/async");
module.exports = {
  doSignup: (userData) => {
    return new Promise(async (resolve, reject) => {
      userData.password = await bcrypt.hash(userData.password, 10);    
      db.get()
        .collection(collection.USER_COLLECTION)
        .insertOne(userData)
        .then((response) => {
          resolve(response);
  
        });
    });
  },
};
