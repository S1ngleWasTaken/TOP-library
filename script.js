const addBookBtn = document.querySelector('#add-book-btn')
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const readInput = document.querySelector('#read-input');
const form = document.querySelector('form')
const submitBtn = document.querySelector('#submit-btn')
const warning = document.querySelector('.warning')


let formDisplayed = false;
let library = [];


let Book = function(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}
let displayForm = function(){
    if(formDisplayed === false){
        form.style.display = 'grid'
        formDisplayed = !formDisplayed
    }else{
        form.style.display = 'none'
        formDisplayed = !formDisplayed
    }
}

let isValid = function(){
    if(titleInput.value !== '' && authorInput.value !== ''){
        addBook();
        warning.style.display = 'none'
    }
    else{
        warning.style.display = 'block'
    }
}

let addBook = function(){
    displayForm()
    library.push(new Book(titleInput.value, authorInput.value, readInput.checked))
    console.log(library);
}

addBookBtn.addEventListener('click', displayForm)
submitBtn.addEventListener('click', isValid)



/* 
TITLE AUTHOR READ konstanty check
vypnout zapnout formular check
vytvořit objekt knihy check
vytvořit div knihy s jejim nazvem autorem a jestli to četl checkboxem




*/