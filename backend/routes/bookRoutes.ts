import express from "express";
import {
  AddBook,
  DeleteBook,
  getAllBooks,
  SearchBooks,
  UpdateBook,
} from "../controller/bookController";
import { borrowBook, getBorrowedBooks } from "../controller/userBookController";
export const bookRouter = express.Router();
bookRouter.post("/add-book", AddBook);
bookRouter.put("/:id", UpdateBook);
bookRouter.post("/delete-book", DeleteBook);
bookRouter.get("/search-book", SearchBooks);
bookRouter.get("/get-all-books", getAllBooks);
bookRouter.post("/borrow-book", borrowBook);
bookRouter.get("/borrowed-books/:userId", getBorrowedBooks);
