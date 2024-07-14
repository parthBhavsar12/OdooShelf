import { Request, Response } from "express";
import { User } from "../model/userModel";
import { Book } from "../model/bookModel";
export const AddBook = async (req: Request, res: Response) => {
  try {
    if (
      !req.body.name ||
      !req.body.isbn ||
      !req.body.author ||
      !req.body.publisher ||
      !req.body.year ||
      !req.body.quantity ||
      !req.body.userId ||
      !req.body.status
    ) {
      return res.status(400).json({
        status: "failed",
        message: "Please enter all the fields",
      });
    }
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(400).json({
        status: "failed",
        message: "user not found",
      });
    }
    if (user.role != "librarain") {
      return res.status(401).json({
        status: "failed",
        message: "Unauthorized access",
      });
    }
    const book = await Book.create({
      name: req.body.name,
      isbn: req.body.isbn,
      author: req.body.author,
      publisher: req.body.publisher,
      year: req.body.year,
      quantity: req.body.quantity,
      userId: req.body.userId,
      status: req.body.status,
    });
    res.status(201).json({
      status: "success",
      message: "Book details added successfully",
      book,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Failed to add book",
      error: error,
    });
  }
};
export const UpdateBook = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    if (
      !req.body.name ||
      !req.body.isbn ||
      !req.body.author ||
      !req.body.publisher ||
      !req.body.year ||
      !req.body.quantity ||
      !req.body.userId ||
      !req.body.status
    ) {
      return res.status(400).json({
        status: "failed",
        message: "please enter all the fields",
      });
    }
    const updatedBook = await Book.findByIdAndUpdate(
      userId,
      {
        $set: {
          name: req.body.name,
          isbn: req.body.isbn,
          author: req.body.author,
          publisher: req.body.publisher,
          year: req.body.year,
          quantity: req.body.quantity,
          userId: req.body.userId,
          status: req.body.status,
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedBook) {
      return res
        .status(404)
        .json({ message: "Could not update book information" });
    }
    return res.status(200).json({
      status: "success",
      message: "Book details added successfully",
      updatedBook,
    });
  } catch (error) {
    console.error(error.message); // Log errors for debugging purposes
    return res.status(500).json({
      status: "failed",
      message: "Failed to update profile. Please try again later.",
    });
  }
};
export const DeleteBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.body;
    if (!bookId) {
      return res.status(500).json({
        status: "failed",
        message: "Please provide book id",
      });
    }
    const deleteBook = await Book.findByIdAndDelete(bookId);
    if (!deleteBook) {
      return res.status(500).json({
        status: "failed",
        message: "book id not found",
      });
    }
    return res.status(201).json({
      status: "success",
      message: "Book details deleted successfully",
    });
  } catch (error) {
    console.error(error.message); // Log errors for debugging purposes
    return res.status(500).json({
      status: "failed",
      message: "Failed to delete book. Please try again later.",
    });
  }
};
export const SearchBooks = () => {};
