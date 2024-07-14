import { useEffect, useState } from "react";

export const Books = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  console.log(books);
  const fetchBooks = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(
        ` https://www.googleapis.com/books/v1/volumes?q=search-terms&maxResults=10&key=AIzaSyBgENBNe09qS94jlmsfW9Gs1I5eO8tnSbs`
        // {
        //   headers: {
        //     "x-api-key": apiKey,
        //   },
        // }
      );
      // const response = await fetch(
      //   `https://api.api-ninjas.com/v1/recipe?query=burger`
      // );
      if (!response.ok) {
        throw new Error(`Error fetching recipes: ${response.status}`);
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  if (isFetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <div class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-8">Book Management</h1>
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-2xl font-bold">Book List</h2>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
            Add Book
          </button>
        </div>
        <div class="flex items-center mb-4">
          <input
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mr-4"
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
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Sort by: title ↑
            </button>
          </button>
        </div>
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  ISBN
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Title
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Author
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Publisher
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Year
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Genre
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Quantity
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              {/* {books.items.length > 0 ? (
                books.items.map((book) => {
                  return (
                    <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        {book.volumeInfo.industryIdentifiers.identifier[0]}
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Atomic Habits
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        James Clear
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Avery
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        2018
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Self-Help
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        8
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div
                          class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          data-v0-t="badge"
                        >
                          In Stock
                        </div>
                      </td>
                      <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                          Edit
                        </button>
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )} */}
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  978-0-593-35035-3
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Educated
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Tara Westover
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Random House
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2018
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Memoir
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  12
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    In Stock
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Edit
                  </button>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3">
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  978-0-593-35032-2
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  The Midnight Library
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Matt Haig
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Penguin Books
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2020
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Fiction
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  15
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    In Stock
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Edit
                  </button>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3">
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  978-0-593-35036-0
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  The Subtle Art of Not Giving a F*ck
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Mark Manson
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  HarperOne
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2016
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Self-Help
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  6
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    In Stock
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Edit
                  </button>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3">
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  978-0-593-35034-6
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  The Vanishing Half
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Brit Bennett
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Riverhead Books
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  2020
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  Fiction
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  0
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Out of Stock
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Edit
                  </button>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          aria-label="pagination"
          class="mx-auto flex w-full justify-center"
          role="navigation"
          currentpage="1"
          totalpages="1"
        ></nav>
      </div>
      <div>
        <div>
          <div>
            <div>Add Book</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <div>Update Book</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
