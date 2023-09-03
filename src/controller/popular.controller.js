import { Popular } from "../models/PopularTicket.js";

export const getPopular = async (req, res) => {
  const popular = await Popular.find();
  res.status(200).json(popular);
};

export const postPopular = async (req, res) => {
  const { populerTicket, title } = req.body;
  const popular = new Popular({
    populerTicket,
    title,
  });
  await popular.save();
  res.status(201).json(popular);
};
export const patchPopular = async (req, res) => {
  try {
    const updatedPopular = await Popular.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedPopular) {
      return res.status(404).json({ message: "Popular not found" });
    }

    res.status(200).json(updatedPopular);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating Popular", error: error.message });
  }
};
export const deletePopular = async (req, res) => {
  try {
    const deletedPopular = await Product.findByIdAndDelete(req.params.id);
    if (!deletedPopular) {
      return res.status(404).json({ message: "Popular not found" });
    }
    res
      .status(200)
      .json({ message: "Popular deleted", product: deletedPopular });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting Popular", error: error.message });
  }
};
