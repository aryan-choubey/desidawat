const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name:{
        type:String, 
        required:true
    },
    Price:{
        type:Number,
        requrired:true
    },
    Category:{
        type:String,
        required:true
    },
    image:[{
        type:String,
    }],
    Description:{
        type:String,
        required:true
    }
});

const productModel = new mongoose.model("products",productSchema);

module.exports = productModel;