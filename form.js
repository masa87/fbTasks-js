const qs = (selector) => document.querySelector(selector);

const addBtn = qs(".addBtn");
const form = qs("#form");
const list = qs(".form__list");
const table = qs(".table__body");
// const title = qs('')

const BOOKS_KEY = "BOOKS_KEY";

const setItems = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};
const getItems = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

let books = getItems(BOOKS_KEY) === undefined ? [] : getItems(BOOKS_KEY);
console.log(books);

const addBook = (e) => {
  // e.preventDefault();
  books.push({
    title: `${form.elements[0].value}`,
    author: `${form.elements[1].value}`,
    priority: `${form.elements[2].value}`,
    category: `${form.elements[3].value}`,
  });
  setItems(BOOKS_KEY, books);
  render();
  form.reset();
};

const render = () => {
  console.log(books);

  table.innerHTML = "";
  books.forEach(({ title, author, priority, category }) => {
    table.innerHTML += `
    <tr class='table__rows'>
      <td class='table__drawer'>${title}</td>
      <td class='table__drawer'>${author}</td>
      <td class='table__drawer'>${priority}</td>
      <td class='table__drawer'>${category}</td>
    </tr>
    `;
  });
};

const validate = (e) => {
  e.preventDefault();
  if (
    form.elements[0].value.length < 1 ||
    form.elements[1].value.length < 3 ||
    form.elements[3].value == ""
  ) {
    alert("Wypełnij poprawnie wszystkie pola!");
    return;
  } else {
    addBook();
  }
};
render();
addBtn.addEventListener("click", validate);
