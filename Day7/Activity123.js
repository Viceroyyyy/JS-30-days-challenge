//Activity 1: Object Creation and Access

//TAsk 1
let book = {
    title:"IKIGAI",
    author:"Shweepy",
    year: 2009
}
console.log(book);

//Task 2

console.log(book.title);
console.log(book["author"]);

//Task 3
book.method = function () {
    console.log(`The name of the book is ${this.title} and the author is ${this.author}`);
}

console.log(book.method());

//Task 4

book.updateyear = (x) => {
     book.year = x;
}

book.updateyear(2004);
console.log(book.year);

//Task 5

const library = {
    name: "Admin Block Library",
    Books: [{
        name:"IKIGAI",
        year:"2004",
        author:"Shweepy"
    },
    {
        name:"It end with us",
        year:"2008",
        author:"Collen Hoover"
    }
    ]
};

console.log(library);

//Task 6
console.log(library.name);
for(let i=0; i<library.Books.length; i++) {
    console.log(library.Books[i].name);
}
// library.Books.forEach() => console.log(book.name);