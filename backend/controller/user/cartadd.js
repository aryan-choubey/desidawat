const cartModel = require("../../model/cart")

exports.addToCart = async(req,res)=>{
    try{
       const userId = req.userId
        const productId = req.params.id;

        if(!productId){
            res.status(400).json("provide is productId")
        }
        const findProduct = await cartModel.findOne({productId});
        if(findProduct){
            res.status("product already added")
        }
        const cartProduct = new cartModel({
            userId:userId,
            productId:productId
        });
        await cartProduct.save();
        res.status(200).json("product to cart"); 
    }catch(error){
        res.status(500).json({msg:"error from addToCart",message:error.message});
    }
}


exports.getCart = async(req,res)=>{
    try{    
    const userId = req.userId 
    const cartProducts = await cartModel.find({userId})
    .populate("productId")
    
    if(!cartProducts){
        res.status("No product in the cart");
    }

    res.status(200).json({msg:"cartProducts",cartProducts})
    }catch(error){
        res.status(500).json({msg:"error from getCart",message:error.message});
    }
}

exports.deleteProduct= async(req,res) =>{
    try{
        const productId = req.params.id;
        if(!productId){
            res.status("No product Id");
        }
        const deleteProduct = await cartModel.findOneAndDelete({productId:productId});
        res.status(200).json({msg:"product removed ",deleteProduct});
    }catch(error){
        res.status(500).json({msg:"error from deleteproduct",message:error.message})
    }
}