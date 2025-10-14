const myLibrary = [];
const book2 = new Book(crypto.randomUUID(), "Book 2", "Author 2", 200);

const addButton = document.querySelector("#addButton");
const closeButton = document.querySelector("#closeButton");
const dialog = document.querySelector("dialog");

addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("removeButton")) {
    removeBook(event);
  }
});

function Book(id, name, author, pages) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function renderLibrary() {
  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      <h2>${book.name}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <button class="removeButton" data-id="${book.id}">Remove</button>
    `;
    bookContainer.appendChild(bookElement);
  });
}

function handleAddBookForm() {
  const addBookForm = document.querySelector("#addBookForm");
  addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = addBookForm.querySelector("input[name='title']").value;
    const author = addBookForm.querySelector("input[name='author']").value;
    const pages = addBookForm.querySelector("input[name='pages']").value;
    const book = new Book(crypto.randomUUID(), title, author, pages);
    addBookToLibrary(book);
    renderLibrary();
    addBookForm.reset();
    dialog.close();
  });
}

function removeBook(event) {
  const index = myLibrary.findIndex(
    (book) => book.id === event.target.dataset.id
  );

  if (index !== -1) {
    myLibrary.splice(index, 1);
    renderLibrary();
  }
}

addBookToLibrary(book2);
handleAddBookForm();
renderLibrary();
