import { Product } from "../models/Products.js";

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};
