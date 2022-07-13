var db=require('../config/connection')
var collection=require('../config/collections')
const { PRODUCT_COLLECTION } = require('../config/collections')
const async = require('hbs/lib/async')
const { ObjectId } = require('mongodb')
module.exports={
    addProduct:(product,callback)=>{
        console.log(product)
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            console.log(data)
            
            callback(data.ObjectId)
        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let product=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray();
            resolve(product)
        })
    }
}