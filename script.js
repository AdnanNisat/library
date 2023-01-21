// eslint-disable-next-line prefer-const
let removeButtonObject = document.querySelectorAll('.removeButton');

function Book(title, author, pageNo, read) {
    this.title = title;
    this.author = author;
    this.pageNo = pageNo;
    this.read = read;
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
    readButton.setAttribute('id', 'readButton');

   if(e.read){
        readButton.classList.add('read');
        readButton.appendChild(document.createTextNode('Read'));
    }else {
        readButton.classList.add('notread');
        readButton.appendChild(document.createTextNode('Unread'));
    }

    cardDiv.appendChild(readButton);
    const removeButton = document.createElement('button');
    removeButton.appendChild(document.createTextNode('Remove'));
    removeButton.setAttribute('class','removeButton');
    cardDiv.appendChild(removeButton);
}

function initiateRemoveButton() {
    removeButtonObject = document.querySelectorAll('.removeButton');
    removeButtonObject.forEach( (occurence) => {
        occurence.addEventListener('click', () => {
            occurence.parentNode.remove();
        });
    });
}

function initiateReadButton(){
    // eslint-disable-next-line prefer-const
    let object = document.querySelectorAll('#readButton');
    object.forEach( (e) => {
        if(!(e.getAttribute('listener') === 'true')){
            e.addEventListener('click', () =>{
            
                if(e.textContent === 'Read'){
                    e.textContent = 'Unread';
                    e.className = '';
                    e.classList.add('notread');
                }else{
                    e.textContent = 'Read';
                    e.className = '';
                    e.classList.add('read');
                }
            });
            e.setAttribute('listener', 'true');
        }
        }
);
}

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
    initiateReadButton();
})

addBookButton.addEventListener('click', () => {
    popUp.classList.remove('not_visible');
})


