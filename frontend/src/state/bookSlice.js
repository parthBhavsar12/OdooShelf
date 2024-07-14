import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addBookAPI,
  updateBookAPI,
  deleteBookAPI,
  searchBooksAPI,
  getAllBooksAPI,
  borrowBookAPI,
  fetchBorrowedBooks,
} from "../api/bookApi";

// Thunks
export const addBook = createAsyncThunk(
  "books/addBook",
  async (bookDetails, { rejectWithValue }) => {
    try {
      const response = await addBookAPI(bookDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const updateBook = createAsyncThunk(
//   "books/updateBook",
//   async ({ id, bookDetails }, { rejectWithValue }) => {
//     try {
//       const response = await updateBookAPI(id, bookDetails);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteBookAPI(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const searchBooks = createAsyncThunk(
  "books/searchBooks",
  async (query, { rejectWithValue }) => {
    try {
      const response = await searchBooksAPI(query);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const borrowBook = createAsyncThunk(
  "books/borrwoBook",
  async ({ userId, bookId }, { rejectWithValue }) => {
    try {
      console.log("Action creator received:", { userId, bookId });
      const response = await borrowBookAPI({ userId, bookId });
      console.log("book slice data: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAllBooks = createAsyncThunk(
  "books/getAllBooks",
  async (_, { rejectWithValue }) => {
    try {
      console.log("getAllBooks thunk");
      const response = await getAllBooksAPI();
      console.log("book slice data: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBorrwedBooks = createAsyncThunk(
  "restaurant/id",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetchBorrowedBooks(userId);
      console.log("book slice data: ", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateBook = createAsyncThunk(
  "books/updateBook",
  async (
    { id, name, isbn, author, publisher, year, genre, quantity, status },
    { rejectWithValue }
  ) => {
    try {
      console.log("update book in redux thunk: ", {
        id,
        name,
        isbn,
        author,
        publisher,
        year,
        genre,
        quantity,
        status,
      });
      const response = await updateBookAPI({
        id,
        name,
        isbn,
        author,
        publisher,
        year,
        genre,
        quantity,
        status,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// export const deleteBook = createAsyncThunk(
//   "books/deleteBook",
//   async (bookId, { rejectWithValue }) => {
//     try {
//       console.log("delete book in redux thunk: ", bookId);
//       const response = await deleteBookAPI(bookId);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
// Slice
export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: false,
    error: null,
    borrowedBook: [],
    borrowedBooks: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books.push(action.payload);
        state.error = null;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.books.findIndex(
          (book) => book.id === action.payload.id
        );
        if (index !== -1) {
          state.books[index] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter(
          (book) => book.id !== action.payload.id
        );
        state.error = null;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(searchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.error = null;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload.books;
        state.error = null;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(borrowBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(borrowBook.fulfilled, (state, action) => {
        state.loading = false;
        state.borrowedBook = action.payload;
        state.error = null;
      })
      .addCase(borrowBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBorrwedBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBorrwedBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.borrowedBooks = action.payload;
        state.error = null;
      })
      .addCase(getBorrwedBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
