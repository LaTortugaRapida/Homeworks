class Book {
    #title;
    #author;
    #year;
    #isAvailable = true;
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year; 
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        if(value !== '') {
            this.#title = value;
        } else { throw new Error("Title cannot be empty!"); }
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        if(value !== '') {
            this.#author = value;
        } else { throw new Error("Author can't be empty!");}
    }

    get year() {
        return this.#year;
    }

    set year(value) {
        if(value > 0) {
            this.#year = value;
        } else { throw new Error("Year must be positive!");}
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    borrowBook() {
        if(this.#isAvailable) {
            this.#isAvailable = false;
            return "Book borrowed successfully!";
        }
        return "The book is unavailable!";
    }
    
    returnBook() {
        if(!this.#isAvailable) {
            this.#isAvailable = true;
            return "Book returned successfully!";
        }
        return "The book was already available!";
    }

    matchesTitle(word) {
        let substr = word.toLowerCase();
        let str = this.title.toLowerCase();
        return str.includes(substr);
    }

    getInfo() {
        return `title: ${this.title}
        author: ${this.author}
        year: ${this.year}
        the book is available: ${this.#isAvailable}`
    }
}

class Reader {
    #name;
    #borrowedBooks;
    constructor(name) {
        this.name = name;
        this.#borrowedBooks = [];
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if(value !== '') {
            this.#name = value;
        } else { throw new Error("Name can't be empty");}
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }

    get borrowedBooksCount() {
        return this.#borrowedBooks.length;
    }

    takeBook(book) {
        if(book.isAvailable) {
            book.borrowBook();
            this.#borrowedBooks.push(book);
            return "Book is taken now!";
        }
        return "This reader can't take this book!" 
    }

    hasBook(book) {
        return this.borrowedBooks.includes(book);
    }

    giveBackBook(book) {
        if(this.hasBook(book)) {
            this.#borrowedBooks = this.#borrowedBooks.filter((item => item !== book));
            book.returnBook();
            return `The book ${book.title} is removed from reader's book list!`;
        }
        return "The book was not borrowed by this reader!";
    }

    showBorrowedBooks() {
        return this.borrowedBooks.map(book => book.title);
    }

    getInfo() {
        return `${this.name} has ${this.borrowedBooksCount} borrowed books`;
    }
}

class Library {
    #name;
    #books;
    #readers;
    constructor(name) {
        this.name = name;
        this.#books = [];
        this.#readers = [];
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if(value !== '') {
            this.#name = value;
        } else { throw new Error("Name can't be empty");}
    }

    get books() {
        return this.#books;
    }

    get readers() {
        return this.#readers;
    }

    addBook(book) {
        this.#books.push(book);
    }

    registerReader(reader) {
        this.#readers.push(reader);
    }

    findBookByTitle(title) {
        let str = title.toLowerCase();
        let book = this.books.find(item => item.title.toLowerCase() === str)
        if(book) {
            return book;
        }
        return null;
    }

    findBooksByAuthor(authorName) {
        let name = authorName.toLowerCase()
        return this.books.filter(book => book.author.toLowerCase() === name);
    }

    giveBookToReader(title, reader) {
        let book = this.findBookByTitle(title);
        if (!book) {
            return "There is no such book in this library!";
        }
        if (reader.hasBook(book)) {
            return "Reader already has this book!";
        }
        reader.takeBook(book);
    }

    acceptBookFromReader(title, reader) {
        let book = this.findBookByTitle(title);
        if (!book) {
            return "There is no such book in this library!";
        }
        return reader.giveBackBook(book);
    }

    showAvailableBooks() {
        return this.books.filter(book => book.isAvailable === true);
    }

    showAllBooks() {
        return this.books.map(book => book.getInfo());
    }

    getLibraryInfo() {
        return `${this.name}: ${this.books.length} books, ${this.readers.length} readers`;
    }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
library.giveBookToReader("The Hobbit", reader2);

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());


