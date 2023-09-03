import mongoose from "mongoose";
const PopularSchema = new mongoose.Schema({
  populerTicket: { type: String },
  title: { type: String },
});

export const Popular = mongoose.model("Popular", PopularSchema);
