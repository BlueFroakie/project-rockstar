// const ui = new UI();
// const book = new Book();
const submitBtn = document.querySelector("input[value='submit']");
const titleSelector = document.querySelector("#title");
const authorSelector = document.querySelector("#author");
const ISBNSelector = document.querySelector("#isbn");
const tableBody = document.querySelector("#book-list");

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
};

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const newTitle = titleSelector.value;
    const newAuthor = authorSelector.value;
    const newISBN = ISBNSelector.value;
    const newBook = new Book(newTitle, newAuthor, newISBN);
    // ui.showBooks(book);
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.ISBN}</td>
    <td></td>`;
    tableBody.appendChild(newRow);
});