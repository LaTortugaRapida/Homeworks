function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
}

Book.prototype.getInfo = function() {
    return `Title: ${this.title}
    Author: ${this.author}
    Year: ${this.year}`;
};

Book.prototype.borrowBook = function() {
    if(this.isAvailable) {
        this.isAvailable = false;
        return "Book borrowed successfully!";
    }
    return "The book is unavailable!";
};

Book.prototype.returnBook = function() {
    if(!this.isAvailable) {
        this.isAvailable = true;
        return "Book returned successfully!";
    }
    return "The book is available!";
};

Book.prototype.matchesAuthor = function(authorName) {
    return authorName.toLowerCase() === this.author.toLowerCase();
};

Book.prototype.matchesTitle = function(word) {
    return this.title.toLowerCase().includes(word.toLowerCase());
};

function Library() {
    this.books = [];
};

Library.prototype.addBook = function(book) {
    this.books.push(book);
};

Library.prototype.removeBook = function(title) {
    let size = this.books.length;
    let flag = false;
    for(let i = 0; i < size; ++i) {
        if(this.books[i].title.toLowerCase() === title.toLowerCase()) {
            this.books.splice(i, 1);
            flag = true;
            break;
        }
    }
    if(!flag) { return "No books with matching title"; }

    return "The book was removed from the library!";
};

Library.prototype.findBookByTitle = function(title) {
    let size = this.books.length;
    for(let i = 0; i < size; ++i) {
        if(this.books[i].title.toLowerCase() === title.toLowerCase()) {
            return this.books[i];
        }
    }
    return null;
};

Library.prototype.findBooksByAuthor = function(authorName) {
    let matchingBooks = [];
    let size = this.books.length;
    for(let i = 0; i < size; ++i) {
        if(this.books[i].matchesAuthor(authorName)) {
            matchingBooks.push(this.books[i]);
        }
    }
    return matchingBooks;
};

Library.prototype.getAvailableBooks = function() {
    let availBooks = this.books.filter(book => book.isAvailable === true);
    return availBooks;
};

Library.prototype.borrowBook = function(title) {
    let book = this.findBookByTitle(title);
    if(book) {
        return book.borrowBook();
    } else { return "You can't borrow this book!"; }
};

Library.prototype.returnBook = function(title) {
    let book = this.findBookByTitle(title);
    if(book) {
        return book.returnBook();
    } else { return "The book is already here"; }
};

Library.prototype.showAllBooks = function() {
    this.books.forEach(book => {
        console.log(book.getInfo())
    });
};

Library.prototype.countBooks = function() {
    return this.books.length;
};

Library.prototype.countAvailableBooks = function() {
    return this.getAvailableBooks().length;
};

Library.prototype.searchBooks = function(word) {
    let booksContain = [];
    let size = this.books.length;
    for(let i = 0; i < size; ++i) {
        if(this.books[i].matchesTitle(word)) {
            booksContain.push(this.books[i]);
        }
    }
    return booksContain;
};

Library.prototype.getOldestBook = function() {
    let size = this.books.length;
    if(size === 0) { return null; }
    let oldest = this.books[0];

    for(let i = 1; i < size; ++i) {
        if(this.books[i].year < oldest.year) {
            oldest = this.books[i];
        }
    }
    return oldest;
};

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();
