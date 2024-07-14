import React, { useState, useEffect } from "react";

import { getBorrwedBooks } from "@/state/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "@/state/authSlice";

export const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth?.user?._id);
  const books = useSelector((state) => state);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        await dispatch(checkUser());
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    loadBorrowedBooks();
  }, [dispatch, userId]);
  const loadBorrowedBooks = async () => {
    setLoading(true);
    try {
      if (userId) {
        await dispatch(getBorrwedBooks(userId));
      }

      console.log(books);
      setBorrowedBooks(books.book.borrowedBooks.data.borrowedBooks);
      console.log(borrowedBooks);
      // setLoading(false);
      setError("Failed to load borrowed books");
    } catch (err) {
      // setLoading(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadBorrowedBooks();
  }, []);
  useEffect(() => {
    loadBorrowedBooks();
  }, [dispatch, userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Your Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>You haven't borrowed any books yet.</p>
      ) : (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Book Management</h1>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Book List</h2>
            </div>
            <div className="flex items-center mb-4">
              <input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-4"
                placeholder="Search books..."
                value=""
              />
              <button
                type="button"
                id="radix-:r4:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  Sort by: title ↑
                </button>
              </button>
            </div>
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      ISBN
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Title
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Author
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Publisher
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Year
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Genre
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  {books.map((book) => (
                    <tr
                      key={book.id}
                      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    >
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.isbn}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.name}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.author}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.publisher}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.year}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.genre}
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.quantity}
                      </td>
                      {/* <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div
                            className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            data-v0-t="badge"
                          >
                            {book.quantity > 0 ? "In Stock" : "Out of Stock"}
                          </div>
                        </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;
