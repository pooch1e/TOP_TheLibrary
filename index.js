
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
  let title = $("#title").val();
  let author = $("#author").val();
  let numberOfPages = $("#numberOfPages").val();
  let isFinished = $('#isFinished').prop('checked');
  
  //create new object
  let newBook = new Books(title, author, numberOfPages, isFinished);
  console.log(newBook);
  myLibrary.push(newBook)
  console.log(myLibrary);
  this.displayLibrary(); //render to screen
  }
  //add books to screen
  displayLibrary() {
    //loop through library and display all books
    for (let i = 0; i < myLibrary.length; i++) {
      console.log(myLibrary[i]); //log elements to console
      
    }
  }
}


thisLibrary = new Library;
//debug station
//grab book button  
$("#new-book-btn").on('click', () => {
  $("#new-book-form").css("display", "flex");
})

//grab submit button
$("#new-book-form").on("submit", (event) => {
  event.preventDefault();
  alert("submit debug")
  thisLibrary.addBookToLibrary();
});
