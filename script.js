const myLibrary = [];

function Book(title, author, pageNo, read) {
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function display(e) {
    const cardContainer = document.getElementById('card_container');
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardContainer.appendChild(cardDiv);
    const title = document.createElement('h4');
    title.appendChild(document.createTextNode(e.title));
    cardDiv.appendChild(title);
    const author = document.createElement('h4');
    author.appendChild(document.createTextNode(e.author));
    cardDiv.appendChild(author);
    const pageNo = document.createElement('h4');
    pageNo.appendChild(document.createTextNode(e.pageNo));
    cardDiv.appendChild(pageNo);
    const readButton = document.createElement('button');
    readButton.appendChild(document.createTextNode('Read'));
    cardDiv.appendChild(readButton);
    const removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode('Remove'));
    cardDiv.appendChild(removeButton);
}

function displayBook() {
    myLibrary.forEach(element => {
        display(element);
    });
}

const gameOfThrones = new Book("The Game of Thrones", 'G.R.R.M', 762, true);
const angelsAndDemons = new Book("Angels and Demons", 'Dan Brown', 234, false);

addBookToLibrary(gameOfThrones);
addBookToLibrary(angelsAndDemons);
displayBook();