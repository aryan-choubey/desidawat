const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId
    }
});

const cartModel = new mongoose.model("banners",cartSchema);
module.exports =  cartModel;