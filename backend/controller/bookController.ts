import { Request, Response } from "express";
import { User } from "../model/userModel";
import { Book } from "../model/bookModel";
export const AddBook = async (req: Request, res: Response) => {
  try {
    if (
      !req.body.name ||
      !req.body.isbn ||
      !req.body.author ||
      !req.body.genre ||
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
    if (user.role != "librarian") {
      return res.status(401).json({
        status: "failed",
        message: "Unauthorized access",
      });
    }
    const book = await Book.create({
      name: req.body.name,
      isbn: req.body.isbn,
      author: req.body.author,
      genre: req.body.genre,
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
// export const UpdateBook = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.body;
//     if (
//       !req.body.name ||
//       !req.body.isbn ||
//       !req.body.author ||
//       !req.body.publisher ||
//       !req.body.year ||
//       !req.body.quantity ||
//       !req.body.userId ||
//       !req.body.status
//     ) {
//       return res.status(400).json({
//         status: "failed",
//         message: "please enter all the fields",
//       });
//     }
//     const updatedBook = await Book.findByIdAndUpdate(
//       userId,
//       {
//         $set: {
//           name: req.body.name,
//           isbn: req.body.isbn,
//           author: req.body.author,
//           publisher: req.body.publisher,
//           year: req.body.year,
//           quantity: req.body.quantity,
//           userId: req.body.userId,
//           status: req.body.status,
//         },
//       },
//       { new: true } // Return the updated document
//     );

//     if (!updatedBook) {
//       return res
//         .status(404)
//         .json({ message: "Could not update book information" });
//     }
//     return res.status(200).json({
//       status: "success",
//       message: "Book details added successfully",
//       updatedBook,
//     });
//   } catch (error) {
//     console.error(error.message); // Log errors for debugging purposes
//     return res.status(500).json({
//       status: "failed",
//       message: "Failed to update profile. Please try again later.",
//     });
//   }
// };
// export const DeleteBook = async (req: Request, res: Response) => {
//   try {
//     const { bookId } = req.body;
//     if (!bookId) {
//       return res.status(500).json({
//         status: "failed",
//         message: "Please provide book id",
//       });
//     }
//     const deleteBook = await Book.findByIdAndDelete(bookId);
//     if (!deleteBook) {
//       return res.status(500).json({
//         status: "failed",
//         message: "book id not found",
//       });
//     }
//     return res.status(201).json({
//       status: "success",
//       message: "Book details deleted successfully",
//     });
//   } catch (error) {
//     console.error(error.message); // Log errors for debugging purposes
//     return res.status(500).json({
//       status: "failed",
//       message: "Failed to delete book. Please try again later.",
//     });
//   }
// };
export const UpdateBook = async (req: Request, res: Response) => {
  try {
    const { id, name, isbn, author, publisher, year, genre, quantity, status } =
      req.body;
    console.log("update book controller: ", id);

    if (
      !id ||
      !name ||
      !isbn ||
      !author ||
      !publisher ||
      !year ||
      !genre ||
      !quantity ||
      !status
    ) {
      return res.status(400).json({
        status: "failed",
        message: "Please enter all the fields",
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: {
          name,
          isbn,
          author,
          publisher,
          year,
          genre,
          quantity,
          status,
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
      message: "Book details updated successfully",
      updatedBook,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: "failed",
      message: "Failed to update book. Please try again later.",
    });
  }
};

export const DeleteBook = async (req: Request, res: Response) => {
  try {
    // console.log("book controller for delete: ", req.body);
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
export const SearchBooks = async (req: Request, res: Response) => {
  try {
    const query = String(req.query.query);
    if (!query) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide a search query",
      });
    }

    // Perform a case-insensitive search using regular expressions
    const books = await Book.find({
      $or: [
        { name: { $regex: new RegExp(query, "i") } },
        { author: { $regex: new RegExp(query, "i") } },
        { isbn: { $regex: new RegExp(query, "i") } },
        { publisher: { $regex: new RegExp(query, "i") } },
        { genre: { $regex: new RegExp(query, "i") } },
      ],
    });

    res.status(200).json({
      status: "success",
      message: "Books retrieved successfully",
      books,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to search books",
      error: error.message,
    });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    if (books.length <= 0) {
      return res.status(200).json({
        status: "failed",
        message: "No books found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Books retrieved successfully",
      books,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch books",
      error: error.message,
    });
  }
};
