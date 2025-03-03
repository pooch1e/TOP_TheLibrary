
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
    //clear previous library
    $("#library-container").html("");

    //loop through library and display all books
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i]; //saving each object to this variable at index i
      console.log(myLibrary[i]); //log elements to console
      let card = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Author: ${book.author}</p>
          <p class="card-text">Pages: ${book.numberOfPages}</p>
          <button class="btn btn-primary">${book.isFinished ? "Finished" : "Not Finished"}</button>
        </div>
      </div>
    `;

    $("#library-container").append(card);
    }
  }
}


thisLibrary = new Library();
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
