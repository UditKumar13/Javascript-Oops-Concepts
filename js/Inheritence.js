// Constructor 

function Book(title, author, year){
    this.title = title;
    this.author = author ;
    this.year = year ; 
    }

    // get summary 
Book.prototype.getSummary = function (){
    return `${this.title} is written by ${this.author} in ${this.year}` ;
};

    
    
    // constructor magzine
    function Magzine (title, author, year , month){
    Book.call (this,title, author, year);
    this.month = month ; 
    }

/// inherit prototype

 Magzine.prototype = Object.create (Book.prototype);
    
    // Insanitate the magzine object
    const mag1 = new Magzine('mag one', 'uk', '2018'  , 'july');
    console.log(mag1);
    Magzine.prototype.constructor  = Magzine ;
   console.log(mag1.getSummary());
 



