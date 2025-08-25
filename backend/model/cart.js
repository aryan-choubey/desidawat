const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"   
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products" 
    }
});

const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;
