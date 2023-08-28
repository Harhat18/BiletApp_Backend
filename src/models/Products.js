import mongoose from "mongoose";
const PoductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  description: { type: String, required: true },
  adress: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String },
});

export const Product = mongoose.model("Product", PoductSchema);
