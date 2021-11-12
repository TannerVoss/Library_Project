/*
let title = document.createElement("#title");
let author = document.createElement("#author");
let hasRead = document.createElement("#read");
let form = document.createElement("form");
let tbody = document.createElement("#table > tbody");

form.addEventListener("submit", (event) => {
    let tr = document.createElement("tr");
    let tdTitles = document.createElement("td");
    tdTitle.textContent = title.value;
    let tdAuthor = document.createElement("td");
    tdAuthor.textContent = author.value;
    let tdRead = document.createElement("td");
    let readLibraryCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = hasRead.checked;
    tdRead.appendChild(readCheckbox);

    tr.append(tdTitle, tdAuthor, tdRead);
    tbody.appendChild(tr);

    title.value = "";
    author.value = "";
    hasRead.checked = false;
});
*/
//refactor to have classes

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
    toggleRead() {
        this.read = !this.read;
    }
}

class Library {
    constructor() {
        this.DOMelements = {
            let title: document.querySelector("#title"),
                let author: document.querySelector("#author"),
                    let hasRead: document.querySelector("#read"),
                        form: document.querySelector("form"),
                        tbody: document.querySelector("#table >tbody"),
        };

        this.bookCount = 1;
        this.books = [new Book("Name of the Wind", "Patrick Rothfuss", true)];
    }

    addBook(title, author, read) {
        let newBook = new Book(title, author, read);
        this.books.push(newBook);

        this.updateDOM(newBook);

    }

    updateDOM(book) {
        let tr = document.createElement("tr");
        let tdTitles = document.createElement("td");
        tdTitle.textContent = title.value;
        let tdAuthor = document.createElement("td");
        tdAuthor.textContent = author.value;
        let tdRead = document.createElement("td");
        let readLibraryCheckbox = document.createElement("input");
        readCheckbox.type = "checkbox";
        readCheckbox.checked = read;

        tdRead.appendChild(readCheckbox);

        tr.append(tdTitle, tdAuthor, tdRead);
        tbody.appendChild(tr);
    }
}

new Library();