
const myLibrary = []
class Books {
  constructor(title, author, numberOfPages, isFinished) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isFinished = isFinished;
    };
  }


  class Library {
    constructor(){

    }
  //add book to library
  addBookToLibrary() {
    return myLibrary.push(book);
  }
  //add books to screen
  displayLibrary() {
    //loop through library and display all books
    for (let i = 0; i < myLibrary.length; i++) {
      $("#library").html(myLibrary);
    }
  }
}



//debug station
