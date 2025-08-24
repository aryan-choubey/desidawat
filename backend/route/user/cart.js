const express = require("express")
const {validateUser} = require("../../middleware/authmiddleware")
const {addToCart,getCart,deleteProduct} = require("../../controller/user/cartadd");

const router = express.Router();

router.post("/addToCart",validateUser,addToCart);
router.get("/getCartProdut",validateUser,getCart);
router.get("/deleteCartProduct/:id",validateUser,deleteProduct);

module.exports = router;