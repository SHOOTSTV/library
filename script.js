const myLibrary = [];

const book2 = new Book(crypto.randomUUID(), "Book 2", "Author 2", 200);
const book3 = new Book(crypto.randomUUID(), "Book 3", "Author 3", 300);
const book4 = new Book(crypto.randomUUID(), "Book 4", "Author 4", 400);
const book5 = new Book(crypto.randomUUID(), "Book 5", "Author 5", 500);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
console.log(myLibrary);

function Book(id, name, author, pages) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = "";
  myLibrary.forEach((book) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      <h2>${book.name}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
    `;
    bookContainer.appendChild(bookElement);
  });
}

displayBooks();
