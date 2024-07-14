import mongoose from "mongoose";
export const bookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please provide user id"],
  },
  name: {
    type: String,
    required: [true, "Please enter valid email id"],
  },
  isbn: {
    type: String,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  author: {
    type: String,
    required: [true, "Please enter valid email id"],
  },
  publisher: {
    type: String,
    required: [true, "Please enter valid email id"],
  },
  year: {
    type: Number,
    required: [true, "Please enter valid email id"],
  },
  genre: {
    type: String,
    required: [true, "Please enter valid email id"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter valid email id"],
  },
  status: {
    type: String,
    enum: ["available", "not-available"],
    default: "available",
    required: true,
  },
});
export const Book = mongoose.model("Books", bookSchema);