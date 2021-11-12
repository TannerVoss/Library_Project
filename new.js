console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const book = [{
    id: 1, //first book
    title: "Harry Potter and The Deathly Hallows",
    author: "J.K. Rowling",
    read: true,
}, ];

class Book {
    cosntructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.nextId = book.length; //default books
        this.book = book; //array of books passed in
    }
    addBook() { //book constructor to create new book, pass into book array, create new row and new cells and display to DOM


        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");


        this.nextId++; // increment book count BEFORE creating new instance so. Next book is (2), etc 


        const newBook = new Book(this.nextId, title.value, author.value, read.checked); // access value of elements to pass in to create new book.

        this.book.push(newBook); // pass book into Book array

        const tbody = document.getElementById("tableBody"); //select tablebody, to append table rows to

        const newTr = document.createElement("tr"); // new table row

        const newTitle = document.createElement("td"); // new td cells
        const newAuthor = document.createElement("td");
        const newRead = document.createElement("td");

        newTitle.textContent = title.value;
        newAuthor.textContent = author.value;

        const newCheckbox = document.createElement("input");
        newCheckbox.id = newBook.id;
        newCheckbox.type = "checkbox"; //create checkbox for "read" property it TD cell
        newCheckbox.checked = read.checked; //able to add book that has been read
        newCheckbox.disabled = read.checked; // checkbox disabled IF it was already read. Will not be if they enter book that was unread.

        newCheckbox.addEventListener("click", event => {
            this.markRead(event.target, parseInt(event.target.id)); //pass in ID to find the book. ID of event target is already set to books ID so they will match
        });


        newRead.appendChild(newCheckbox); //append new checkbox to newRead

        newTr.appendChild(newTitle); //append the td's to the table rows
        newTr.appendChild(newAuthor); //append the td's to the table rows
        newTr.appendChild(newRead); //append the td's to the table rows

        tbody.appendChild(newTr); //append to TB



    }


    markRead(checkbox, id) { // if checkbox is checked, mark as read. Unable to unread book
        console.log(checkbox);
        console.log(id);
        this.book.forEach(book => {
            if (id === book.id) { // will be searching for book id, so id needs to match what the book id is. Number = number.
                book.read = true;
                checkbox.disabled = true;
            }
        })
    }
}

//create library
const library = new Library(book); //pass in array 'books' 


//set button to submit information to the form

const form = document.getElementById("form"); // select form

form.addEventListener("submit", (event) => { //listen for submission, then initiate event
    event.preventDefault(); // stops from refreshing page, sends info to form
    library.addBook(); //whenever form is submitted, adds book
});