import { useState } from "react";
import { useStore } from "./store";

export default function BookForm() {

  const add = useStore((state) => state.add);

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    add(userInput);
    setUserInput("");
  }

  return (
    <form>
      <input type="text" value={userInput} onChange={handleChange} placeholder="Add a new book"/>
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}