import Book from "./Book";

export default function BookList({ bookList, filter, setFilter, handleToggle }) {

  const getFilteredBookList = (bookList, filter) => {
    return bookList.filter((book) => {
      if (filter === "Read") {
        return book.read;
      } else if (filter === "Reading") {
        return !book.read;
      } else {
        return book;
      }
    });
  }

  return (
    <div>
      <ul>
        {
          getFilteredBookList(bookList, filter).map((book) => {
            return (
              <Book book={book} setFilter={setFilter} handleToggle={handleToggle} />
            );
          })
        }
      </ul>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Read")}>Read</button>
      <button onClick={() => setFilter("Reading")}>Reading</button>
    </div>
  );
}