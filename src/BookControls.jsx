import { useState } from "react";
import { useStore } from "./store"

export default function BookControls({book}) {

  const remove = useStore((state) => state.remove);
  const edit = useStore((state) => state.edit);
  
  const [editing, setEditing] = useState(false);
  const [userInput, setUserInput] = useState(book.title);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    edit(book.id, userInput);
    setEditing(false);
  }

  return (
    <div>
      <button onClick={() => remove(book.id)}>Remove</button>
      <button onClick={() => setEditing(true)}>Edit</button>

      {
        editing && 
        <form>
          <input type="text" value={userInput} onChange={handleChange} placeholder="Add a new book"/>
          <button onClick={handleSubmit}>Save</button>
        </form>
      }
    </div>
  )
}