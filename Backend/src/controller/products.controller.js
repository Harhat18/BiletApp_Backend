import { Product } from "../models/Products.js";

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};

export const postProduct = async (req, res) => {
  const {
    name,
    category,
    description,
    adress,
    startDate,
    endDate,
    images,
    map,
  } = req.body;
  const product = new Product({
    name,
    category,
    description,
    adress,
    startDate,
    endDate,
    images,
    map,
  });
  await product.save();
  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Point.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted", point: deletedProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Product", error: error.message });
  }
};
