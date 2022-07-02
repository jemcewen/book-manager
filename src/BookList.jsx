import Book from "./Book";
import { useStore } from "./store";

export default function BookList() {

  const bookList = useStore((state) => state.bookList);
  const filter = useStore((state) => state.filter);

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
              <Book book={book} key={book.id}/>
            );
          })
        }
      </ul>
      
    </div>
  );
}