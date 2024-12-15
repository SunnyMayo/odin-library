/* Initial variable creation */

const library = document.querySelector("#library");
const addNewBook = document.getElementById("add-btn");
const refreshBtn = document.getElementById("refresh");
const dialog = document.getElementById("add-dialog");
const confirmBtn = dialog.querySelector("#submit-new");
const cancelBtn = dialog.querySelector("#cancel-new");

/* Creates an array to store all books */

const myLibrary = [];

/* Object constructor to create new book objects with required fields */

function Book(title, author, pages, genre, read) {
    this.id = myLibrary.length + 1
    this.title = (title);
    this.author = (author);
    this.pages = (pages);
    this.genre = (genre);
    this.read = read;
};

/* Create new book and store in myLibrary */

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBook(book);
};

/* Loops through myLibrary and displays in bookCard */

function displayBook(book) {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const specs = document.createElement("ul");
    const read = document.createElement("button");

    card.className = "book-card";
    library.appendChild(card);

    title.className = "title";
    author.className = "author";
    specs.className = "specs";
    read.className = "status";

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(specs);
    card.appendChild(read);

    title.innerHTML = book.title;
    author.innerHTML = book.author;

    const pages = document.createElement("li");
    const genre = document.createElement("li");
    specs.appendChild(pages);
    specs.appendChild(genre);

    pages.innerHTML = `Pages: ${book.pages}`;
    genre.innerHTML = `Genre: ${book.genre}`;

    if (book.read === true) {
        read.classList.add('read');
        read.textContent = 'Read';
    } else {
        read.textContent = 'Unread';
    };

    read.addEventListener("click", () => {
        if (read.textContent === 'Read') {
            read.textContent = 'Unread';
        } else {
            read.textContent = 'Read';
        };

        read.classList.toggle('read');
    });
};

/* Show dialog box */
addNewBook.addEventListener("click", () => {
    dialog.showModal();
});

/* Cancel button closes without adding new book due to formmethod="dialog" */

/* function to reset form after submission */

function resetForm() {
    dialog.querySelector("#title").value = "";
    dialog.querySelector("#author").value = "";
    dialog.querySelector("#pages").value = "";
    dialog.querySelector("#genre").value = "";
    dialog.querySelector("#read").checked = false;
}

cancelBtn.addEventListener("click", () => {
    resetForm();
    dialog.close();
});

/* confirm button adds new book to library */
confirmBtn.addEventListener("click", () => {
    const title = dialog.querySelector("#title").value;
    const author = dialog.querySelector("#author").value;
    const pages = dialog.querySelector("#pages").value;
    const genre = dialog.querySelector("#genre").value;
    const read = dialog.querySelector("#read").checked;

    const newBook = new Book(title, author, pages, genre, read);

    addBookToLibrary(newBook);

    resetForm();

    dialog.close();
});
