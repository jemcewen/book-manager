

export default function Book({ book, handleToggle }) {

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <li
      id={book.id}
      key={book.id + book.title}
      value={book.id}
      onClick={handleClick}
      className={book.read ? "book strike" : "book"}
    >
      {book.title}
    </li>
  );
}