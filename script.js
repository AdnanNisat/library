const myLibrary = [];
// eslint-disable-next-line prefer-const
let removeButtonObject = document.querySelectorAll('.removeButton');

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
    removeButton.setAttribute('class','removeButton');
    cardDiv.appendChild(removeButton);
}

function displayBook() {
    myLibrary.forEach(element => {
        display(element);
    });
}

function initiateRemoveButton() {
    removeButtonObject = document.querySelectorAll('.removeButton');
    removeButtonObject.forEach( (occurence) => {
        occurence.addEventListener('click', () => {
            occurence.parentNode.remove();
        });
    });
}


const gameOfThrones = new Book("The Game of Thrones", 'G.R.R.M', 762, true);
const angelsAndDemons = new Book("Angels and Demons", 'Dan Brown', 234, false);

addBookToLibrary(gameOfThrones);
addBookToLibrary(angelsAndDemons);
displayBook();

const addBookButton = document.getElementById('add_book');
const popUpSubmit = document.getElementById('popup_submit');
const popUp = document.getElementById('popup');

popUpSubmit.addEventListener('click', () => {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pageNo = document.getElementById('pages').value;
    const readBox = document.getElementById('checkbox').checked;

    popUp.classList.add('not_visible');
    const book = new Book(title, author, pageNo, readBox);
    display(book);
    initiateRemoveButton();
})

addBookButton.addEventListener('click', () => {
    popUp.classList.remove('not_visible');
})

