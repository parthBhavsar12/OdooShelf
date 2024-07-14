import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBook } from "./AddBook";
import { UpdateBook } from "./UpdateBook";
import { getAllBooks, deleteBook } from "@/state/bookSlice";

// import { DeleteBook } from "./DeleteBook";

export const Books = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  console.log("returned books", books);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        await dispatch(getAllBooks());
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      console.log("book id in book: ", bookId);
      await dispatch(deleteBook(bookId));
      // Optionally, you can re-fetch the books after deletion:
      // await dispatch(getAllBooks());
    } catch (error) {
      console.log(error);
    }
  };

  const openAddDialog = () => setIsAddOpen(true);
  const closeAddDialog = () => setIsAddOpen(false);
  const openEditDialog = () => setIsEditOpen(true);
  const closeEditDialog = () => setIsEditOpen(false);
  const openDeleteDialog = () => setIsDeleteOpen(true);
  const closeDeleteDialog = () => setIsDeleteOpen(false);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Book Management</h1>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Book List</h2>
          <button
            onClick={openAddDialog}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Add Book
          </button>
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
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&amp;_tr:last-child]:border-0">
              {books &&
                books.map((book) => (
                  <tr
                    key={book.id}
                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                  >
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {book.isbn}
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      {book.title}
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
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <div
                        className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        data-v0-t="badge"
                      >
                        {book.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </div>
                    </td>
                    <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                      <button
                        onClick={openEditDialog}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {isAddOpen && (
        <AddBook
          isOpen={isAddOpen}
          setIsOpen={setIsAddOpen}
          closeDialog={closeAddDialog}
          openDialog={openAddDialog}
        />
      )}
      {isEditOpen && (
        <UpdateBook
          isOpen={isEditOpen}
          setIsOpen={setIsEditOpen}
          closeDialog={closeEditDialog}
          openDialog={openEditDialog}
        />
      )}
      {isDeleteOpen && (
        <DeleteBook
          isOpen={isDeleteOpen}
          setIsOpen={setIsDeleteOpen}
          closeDialog={closeDeleteDialog}
          openDialog={openDeleteDialog}
        />
      )}
    </div>
  );
};

export default Books;
