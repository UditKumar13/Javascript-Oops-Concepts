class Book {
    constructor(title,author,year){
        this.title = title ;
        this.author =author;
        this.year = year ;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}` ;
    }

    revise (newYear){
        this.year = newYear;
        this.revised =true ;

    }

    static topBookstore(){
        return 'Noble and Gas '
    }

}




//Instantiate Object

const book1 = new Book('book one ' , 'uk' , '1998');

console.log(book1);
book1.revise('2018');
console.log(book1);

console.log(Book.topBookstore());

