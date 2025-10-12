const myLibrary = [];

function Book(id, name, author, pages) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book2 = new Book(crypto.randomUUID(), "Book 2", "Author 2", 200);
addBookToLibrary(book2);
console.log(myLibrary);
