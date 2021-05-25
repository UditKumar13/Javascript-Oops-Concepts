console.log('javascript oops');


const s1= 'Hello';
console.log(typeof s1);
// string
const s2 = new String ('Hello');
console.log(typeof s2) ;
// object

//window.alert("Lets do the buisness");

console.log(navigator.appVersion);
// gives info abt the system 


//Object Literal 
const book1 = {
    title : 'Book one ',
    author : 'udit kumar',
    year : 2013,
    getSummary : function(){
        return `${this.title} is written by ${this.author} in ${this.year}` ;

    }
}

console.log(book1.title);
let str = book1.getSummary();
console.log(str);


console.log(Object.values(book1));
console.log(Object.keys(book1));

