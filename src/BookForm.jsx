import {useState} from "react";

export default function BookForm({ addBook }) {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(userInput);
    setUserInput("");
  }

  return (
    <form>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}