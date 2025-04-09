import Product from "../database/models/productModel.js";

export const addProductInDB = async (data) => {
  try {
    const product = new Product(data);
    return await product.save();
  } catch (error) {
    return error;
  }
};
