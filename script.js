const libraryDiv = document.querySelector('#library');
const addBookBtn = document.querySelector('#add-book-btn')
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const readInput = document.querySelector('#read-input');
const form = document.querySelector('form')
const submitBtn = document.querySelector('#submit-btn')
const warning = document.querySelector('.warning')

let formDisplayed = false;
let library = [];


let Book = function (title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}
let displayForm = function () {
    if (formDisplayed === false) {
        form.style.display = 'grid'
        formDisplayed = !formDisplayed
    } else {
        form.style.display = 'none'
        formDisplayed = !formDisplayed
    }
}

let isValid = function () {
    if (titleInput.value !== '' && authorInput.value !== '') {
        addBook();
        warning.style.display = 'none'
    }
    else {
        warning.style.display = 'block'
    }
}

let addBook = function () {
    displayForm()
    library.push(new Book(titleInput.value, authorInput.value, readInput.checked))
    createLibrary()
    console.log(library);
    titleInput.value = '';
    authorInput.value = '';
    readInput.checked = false;
}

let createLibrary = function () {
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = library[library.length-1].read;
    let title = document.createTextNode(library[library.length-1].title);
    let author = document.createTextNode(library[library.length-1].author);
    h1.appendChild(title);
    h2.appendChild(author);
    div.append(h1, h2, checkbox)
    div.classList.add('bookCard')
    libraryDiv.appendChild(div)
}


addBookBtn.addEventListener('click', displayForm)
submitBtn.addEventListener('click', isValid)



/* 
TITLE AUTHOR READ konstanty check
vypnout zapnout formular check
vytvořit objekt knihy check
vytvořit div knihy s jejim nazvem autorem a jestli to četl checkboxem
-- for loopa na library



*/