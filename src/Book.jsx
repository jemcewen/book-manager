import BookControls from "./BookControls";
import { useStore } from "./store"

export default function Book({ book }) {

  const toggleRead = useStore((state) => state.toggleRead);
  const {id, title, read} = book;

  const handleClick = (e) => {
    e.preventDefault();
    toggleRead(id);
  };

  return (
    <>
      <li
        id={id}
        onClick={handleClick}
        className={read ? "book strike" : "book"}
      >
        {title}
      </li>
      <BookControls book={book} />
    </>
  );
}