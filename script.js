const myLibrary = [];

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
    return `The book ${title} by ${author} is a ${genre} with ${pages}. You have ${read} it.`
};

function addBookToLibrary() {
    
}