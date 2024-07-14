import mongoose from "mongoose";
import { bookSchema } from "./bookModel";
const userBooksSchema = new mongoose.Schema({
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
});
const userBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter valid name"],
    // unique: true,
  },
  books: [userBooksSchema],
  lateFees: {
    type: Number,
    // required: [true, "Please pro"],
    default: 0,
  },
  returnDate: { type: Date, required: true },
});
