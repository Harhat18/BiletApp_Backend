import { Product } from "../models/Products.js";

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};

export const postProduct = async (req, res) => {
  const { title, category, description, adress, date, image, price } = req.body;
  const product = new Product({
    title,
    category,
    description,
    adress,
    date,
    image,
    price,
  });
  await product.save();
  res.status(201).json(product);
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res
      .status(200)
      .json({ message: "Product deleted", product: deletedProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Product", error: error.message });
  }
};
