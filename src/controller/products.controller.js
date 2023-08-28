import { Product } from "../models/Products.js";

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting Product", error: error.message });
  }
};
export const postProduct = async (req, res) => {
  const {
    title,
    category,
    description,
    adress,
    location,
    date,
    image,
    price,
    place,
  } = req.body;
  const product = new Product({
    title,
    category,
    description,
    adress,
    location,
    date,
    image,
    price,
    place,
  });
  await product.save();
  res.status(201).json(product);
};
export const patchProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating Product", error: error.message });
  }
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
