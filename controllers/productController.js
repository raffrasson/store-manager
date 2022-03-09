const productService = require('../services/productService');

const getAll = async (_req, res, next) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const [product] = await productService.getById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    return res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
};