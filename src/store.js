import create from "zustand";
import produce from "immer";
import data from "./data.json";
// Library for generating unique ids
import { v4 as uuid } from 'uuid'; 

export const useStore = create((set) => ({
  bookList: data,
  add: (bookTitle) => 
    set(
      produce((draft) => {
        if(bookTitle !== "") {
          draft.bookList.push({ id: uuid(), title: bookTitle, read: false});
        }
      })
  ),
  remove: (id) =>
    set(
      produce((draft) => {
        const index = draft.bookList.findIndex(book => book.id === id);
        if (index !== -1) draft.bookList.splice(index, 1)
      })
    ),
  edit: (id, newTitle) => 
    set(
      produce((draft) => {
        const index = draft.bookList.findIndex(book => book.id === id);
        if (index !== -1) draft.bookList[index].title = newTitle;
      })
    ),
  toggleRead: (id) => 
    set(
      produce((draft) => {
        const book = draft.bookList.find((book) => book.id === id);
        book.read = !book.read;
    })
  ),
  filter: "All",
  setFilter: (newFilter) => set({filter: newFilter})

}));