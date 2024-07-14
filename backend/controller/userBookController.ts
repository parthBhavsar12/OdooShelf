import { Request, Response } from "express";
import { User } from "../model/userModel";
import { Book } from "../model/bookModel";
import { Borrowing } from "../model/borrowSchema";
import mongoose from "mongoose";
// export const borrowBook = async (req: Request, res: Response) => {
//   const { userId, bookId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     const book = await Book.findById(bookId);

//     if (!user || !book) {
//       return res.status(404).json({ message: "User or book not found" });
//     }

//     if (book.quantity < 1) {
//       return res
//         .status(400)
//         .json({ message: "Book is not available for borrowing" });
//     }

//     // Calculate due date (e.g., 14 days from now)
//     const dueDate = new Date();
//     dueDate.setDate(dueDate.getDate() + 14);

//     // Create new Borrowing document
//     const borrowing = new Borrowing({
//       user: userId,
//       book: bookId,
//       borrowDate: new Date(),
//       dueDate: dueDate,
//     });
//     await borrowing.save();

//     // Update book availability
//     book.availableQuantity -= 1;
//     if (book.availableQuantity === 0) {
//       book.status = "not-available";
//     }
//     await book.save();

//     // Update user's current borrowings and borrow history
//     user.currentBorrowings.push(bookId);
//     user.borrowHistory.push({
//       book: bookId,
//       borrowDate: new Date(),
//       dueDate: dueDate,
//     });
//     await user.save();

//     res.status(201).json({ message: "Book borrowed successfully", borrowing });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const borrowBook = async (req: Request, res: Response) => {
  const { userId, bookId } = req.body;

  try {
    const user = await User.findById(String(userId));
    const book = await Book.findById(String(bookId));

    if (!user || !book) {
      return res.status(404).json({ message: "User or book not found" });
    }
    console.log(book);
    if (book.quantity < 1) {
      return res
        .status(400)
        .json({ message: "Book is not available for borrowing" });
    }

    // Calculate due date (e.g., 14 days from now)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 15);

    // Create new Borrowing document
    const borrowing = new Borrowing({
      user: userId,
      book: bookId,
      borrowDate: new Date(),
      dueDate: dueDate,
    });
    await borrowing.save();

    // // Update book availability
    // book.quantity -= 1;
    // if (book.quantity === 0) {
    //   book.status = "not-available";
    // }
    // await book.save();
    // Update book availability
    await Book.findByIdAndUpdate(bookId, {
      $inc: { quantity: -1 },
      $set: { status: book.quantity === 1 ? "not-available" : book.status },
    });
    // Update user's current borrowings and borrow history
    // user.currentBorrowings.push(bookId);
    // user.borrowHistory.push({
    //   book: bookId,
    //   borrowDate: new Date(),
    //   dueDate: dueDate,
    // });
    // await user.save();
    await User.findByIdAndUpdate(userId, {
      $push: {
        currentBorrowings: bookId,
        borrowHistory: {
          book: bookId,
          borrowDate: new Date(),
          dueDate: dueDate,
        },
      },
    });

    res.status(201).json({ message: "Book borrowed successfully", borrowing });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
export const getBorrowedBooks = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId; // Assuming you're passing userId as a route parameter

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // Validate if the userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fetch books using the IDs in currentBorrowings
    const borrowedBooks = await Book.find({
      _id: { $in: user.currentBorrowings },
    });

    res.status(200).json({
      status: "success",
      data: {
        borrowedBooks,
      },
    });
  } catch (error) {
    console.error("Error fetching borrowed books:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching borrowed books" });
  }
};
// app.post('/api/return', async (req, res) => {
//     const { userId, bookId } = req.body;

//     try {
//       const user = await User.findById(userId);
//       const book = await Book.findById(bookId);
//       const borrowing = await Borrowing.findOne({ user: userId, book: bookId, status: "borrowed" });

//       if (!user || !book || !borrowing) {
//         return res.status(404).json({ message: "User, book, or borrowing record not found" });
//       }

//       // Calculate late fee if applicable
//       const today = new Date();
//       let lateFee = 0;
//       if (today > borrowing.dueDate) {
//         const daysLate = Math.ceil((today - borrowing.dueDate) / (1000 * 60 * 60 * 24));
//         lateFee = daysLate * 1; // Assume $1 per day late fee
//       }

//       // Update borrowing record
//       borrowing.returnDate = today;
//       borrowing.status = "returned";
//       borrowing.lateFee = lateFee;
//       await borrowing.save();

//       // Update book availability
//       book.availableQuantity += 1;
//       book.status = "available";
//       await book.save();

//       // Update user's current borrowings and borrow history
//       user.currentBorrowings = user.currentBorrowings.filter(id => id.toString() !== bookId);
//       const historyEntry = user.borrowHistory.find(entry => entry.book.toString() === bookId && !entry.returnDate);
//       if (historyEntry) {
//         historyEntry.returnDate = today;
//         historyEntry.lateFee = lateFee;
//       }
//       await user.save();

//       res.json({ message: "Book returned successfully", lateFee });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
