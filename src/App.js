import { useState } from "react";
import data from "./data.json";
import BookForm from "./BookForm";
import BookList from "./BookList";

export default function App() {

  const [bookList, setBookList] = useState(data);
  const [filter, setFilter] = useState("All");

  const addBook = (bookTitle) => {
    const newBook = { id: bookList.length + 1, title: bookTitle, read: false };
    const newList = [...bookList, newBook];
    setBookList(newList);
  }

  const handleToggle = (id) => {
    let mapped = bookList.map((book) => {
      return book.id === Number(id)
        ? { ...book, read: !book.read }
        : { ...book }
    });
    setBookList(mapped);
  }

  return (
    <div className="App">
      <BookForm addBook={addBook} />
      <BookList
        bookList={bookList}
        filter={filter}
        setFilter={setFilter}
        handleToggle={handleToggle}
      />
    </div>
  );
}