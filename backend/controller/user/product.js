const productModel = require("../../model/product")


exports.getProductsByCategory = async (req, res) => {
    try {
        const { category } = req.params.category;
        const products = await productModel.find({ category });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}