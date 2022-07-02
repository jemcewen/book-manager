import { useStore } from "./store";

export default function BookFilter() {

  const setFilter = useStore((state) => state.setFilter);

  return (
    <div>
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Read")}>Read</button>
      <button onClick={() => setFilter("Reading")}>Reading</button>
    </div>
  )
}