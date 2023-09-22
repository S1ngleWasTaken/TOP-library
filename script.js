const addBookBtn = document.querySelector('#add-book-btn')
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const readInput = document.querySelector('#read-input');
const form = document.querySelector('form')


let formDisplayed = false;
let library = [];


let Book = function(title, author, rating){
    this.title = title;
    this.author = author;
    this.rating = rating;
}
let displayForm = function(){
    if(formDisplayed === false){
        form.style.display = 'grid'
        formDisplayed = !formDisplayed
        console.log(formDisplayed);
    }else{
        form.style.display = 'none'
        formDisplayed = !formDisplayed
    }
}
addBookBtn.addEventListener('click', displayForm)
console.log(library);



/* 
TITLE AUTHOR READ konstanty check
vypnout zapnout formular
vytvořit objekt knihy
vytvořit div knihy s jejim nazvem autorem a jestli to četl checkboxem




*/