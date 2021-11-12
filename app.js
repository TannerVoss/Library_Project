console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [{
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
}, ];

class Book {
    cosntructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.bookCount = books.length; //default books
        this.books = books; //array of books passed in
    }

    addBook() {
        console.log("addBook");
        const title = document.getElementById("title");
        const title = document.getElementById("author");
        const title = document.getElementById("read");
        const newBook = new Book(title.value, author.value, read.value);
        this.books.push(newBook);
        this.bookCount++;
        const tbody = document.createElement("tableBody");
        const newTr = document.createElement("tr");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");
        newTr.append(newTitle, newAuthor, newRead);
        tbody.appendChild(newTr);

    }


    markRead(bheckbox, id) {
            this.books.forEach(book => {
                    if (id === book.id) {
                        book.read = true;
                        checkbox.checked = true;
                        checkbox.disabled = true;
                    }
                }
            }


            const librar

            const form = document.getElementById("form");

            form.addEventListener("submit", (event) => {
                event.preventDefault();
                library.addBook();
            });