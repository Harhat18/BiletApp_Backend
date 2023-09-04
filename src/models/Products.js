import mongoose from "mongoose";
const PoductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String },
    description: { type: String, required: true },
    price: { type: String, required: true },
    adress: { type: String, required: true },
    place: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    startHour: { type: String, required: true },
    images: [],
    lat: { type: String },
    lng: { type: String },
    categoryPrice: {
      type: [
        {
          category: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", PoductSchema);
