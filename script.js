class Book {
  constructor(id, name, author, pages, isRead) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  addBookToLibrary() {
    myLibrary.push(this);
  }

  removeBookFromLibrary(event) {
    const index = myLibrary.findIndex(
      (book) => book.id === event.target.dataset.id
    );

    if (index !== -1) {
      myLibrary.splice(index, 1);
      renderLibrary();
    }
  }

  toggleRead() {
    this.isRead = !this.isRead;
    renderLibrary();
  }
}

// Variables
const myLibrary = [];
const book2 = new Book(crypto.randomUUID(), "Book 2", "Author 2", 200, true);
const book3 = new Book(crypto.randomUUID(), "Book 3", "Author 3", 300, false);

// Elements
const addButton = document.querySelector("#addButton");
const closeButton = document.querySelector("#closeButton");
const dialog = document.querySelector("dialog");

// Event Listeners
addButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("removeButton")) {
    myLibrary
      .find((book) => book.id === event.target.dataset.id)
      .removeBookFromLibrary(event);
  }
  if (event.target.classList.contains("toggleRead")) {
    myLibrary
      .find((book) => book.id === event.target.dataset.id)
      .toggleRead(event);
  }
});

// Functions
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
      <div class="read-container">
        <p>Read: ${book.isRead ? "Yes" : "No"}</p>
        <input type="checkbox" class="toggleRead" data-id="${book.id}" ${
      book.isRead ? "checked" : ""
    } />
      </div>
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
    book.addBookToLibrary();
    renderLibrary();
    addBookForm.reset();
    dialog.close();
  });
}

// Initialize
book2.addBookToLibrary();
book3.addBookToLibrary();
handleAddBookForm();
renderLibrary();
