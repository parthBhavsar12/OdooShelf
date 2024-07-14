import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please provide user id"],
  },
  name: {
    type: String,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  isbn: {
    type: String,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  author: {
    type: String,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  publisher: {
    type: String,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  year: {
    type: Number,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  genre: {
    type: String,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  quantity: {
    type: Number,
    required: [true, "Please enter valid email id"],
    unique: true,
  },
  status: {
    type: String,
    enum: ["available", "not-available"],
    default: "available",
    required: true,
  },
});
export const Book = mongoose.model("Books", bookSchema);
