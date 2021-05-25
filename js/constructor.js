// Consstructor 

function Book(title, author, year){
this.title = title;
this.author = author ;
this.year = year ; 
}

// get summary 
Book.prototype.getSummary = function (){
    return `${this.title} is written by ${this.author} in ${this.year}` ;
};

// by using prototype we will see getSummary in the prototype 


// get age
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year ; 
    return `This ${this.title} is  ${years} years old` ;

}

// Revise or change year 
Book.prototype.revise = function (newYear){
this.year = newYear;
this.revised = true ;
 
} 

// Instatiate an object
const book1 = new Book('book one','me','2020');
const book2 = new Book('book two ', 'myself', '2021');

console.log(book1);
console.log(book2);
console.log(book1.getAge());

book1.revise('2013');
console.log(book1.getAge());
console.log(book1);






