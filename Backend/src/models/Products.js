import mongoose from "mongoose";
const PoductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  adress: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  images: { type: Object },
  map: { type: Object },
});

PoductSchema.pre("save", function (next) {
  this.datetime.setHours(this.datetime.getHours() + 3);
  next();
});

export const Product = mongoose.model("Product", PoductSchema);
