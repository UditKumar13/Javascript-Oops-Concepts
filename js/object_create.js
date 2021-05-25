//OBJECT  of protos 
const bookProtos = {
getSummary : function(){
    return `${this.title} is written by ${this.author} in ${this.year}` ;
},

getAge : function(){
    const years = new Date().getFullYear() - this.year ; 
    return `This ${this.title} is  ${years} years old` ;

}
}

//Create onbjects 
//method 1 
/*
const book1 = Object.create(bookProtos);
book1.title = 'book one ';
book1.author='uk';
book1.year='1997';

console.log(book1);
*/
//Method 2 

const book1 =  Object.create(bookProtos,{
    title : {value:' book onen'},
    author :{value:'uk'},
    year :{value:'1998'}
});

console.log(book1);





