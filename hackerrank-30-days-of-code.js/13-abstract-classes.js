class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  display() {
    console.log('Implement the \'display\' method!')
  }
}

class MyBook extends Book {
    /**
    *   Class Constructor
    *
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    constructor(title, author, price){
        super(title, author);
        this.price = price
    }
    /**
    *   Method Name: display
    *
    *   Print the title, author, and price in the specified format.
    **/
    display(){
        console.log('Title: ' + this.title + '\n' + 'Author: ' + this.author + '\n' + 'Price: ' + this.price);
    }
}

// Output
// Title: The Alchemist
// Author: Paulo Coelho
// Price: 248
