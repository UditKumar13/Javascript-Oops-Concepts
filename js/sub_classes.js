class Book {
    constructor(title,author,year){
        this.title = title ;
        this.author =author;
        this.year = year ;
    }

    getSummary() {
        return `${this.title} is written by ${this.author} in ${this.year}` ;
    }

}

//Magazine Subclass 

class Magazine extends Book{
    constructor(title, author, year, month){
        super(title,author,year);
        this.month = month;

    }
}

//Instantiate Magzine

const mag1 = new Magazine('Mag one', 'john doe' , '3456' , 'jan');
console.log(mag1);
console.log(mag1.getSummary());



