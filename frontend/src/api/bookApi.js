import axios from "axios";

export const addBookAPI = async (bookDetails) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/books/add-book",
      bookDetails,
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const borrowBookAPI = async ({ userId, bookId }) => {
  try {
    console.log("Action creator received:", { userId, bookId });
    const response = await axios.post(
      "http://localhost:3000/api/v1/books/borrow-book",
      { userId, bookId },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const fetchBorrowedBooks = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/books/borrowed-books/${userId}`,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching borrowed books:", error);
    throw error;
  }
};

// export const updateBookAPI = async (id, bookDetails) => {
//   try {
//     const response = await axios.put(
//       `http://localhost:3000/api/v1/books/update-book/${id}`,
//       bookDetails,
//       { withCredentials: true }
//     );
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };
export const updateBookAPI = async ({
  id,
  name,
  isbn,
  author,
  publisher,
  year,
  genre,
  quantity,
  status,
}) => {
  try {
    console.log("book details api: ", {
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
    const response = await axios.put(
      `http://localhost:3000/api/v1/books/${id}`,
      { id, name, isbn, author, publisher, year, genre, quantity, status },
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// export const deleteBookAPI = async (bookId) => {
//   try {
//     // console.log("book id: ", bookId);
//     const response = await axios.post(
//       http://localhost:3000/api/v1/books/delete-book,
//       { bookId: bookId },
//       { withCredentials: true }
//     );
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };

export const deleteBookAPI = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/books/delete-book/${id}`,
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchBooksAPI = async (query) => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/books/search-book",
      {
        params: { query },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllBooksAPI = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/books/get-all-books",
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
