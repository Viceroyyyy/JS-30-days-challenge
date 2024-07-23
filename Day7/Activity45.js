// Activity -4
//Task 7

let book = {
    title:"IKIGAI",
    author:"Shweepy",
    year: 2009
}

book.thismethod = function () {
console.log(`Books title is ${this.title} and year of publishing is ${this.year}`)
}

console.log(book.thismethod());

// Activity 5
// Task 8

for(const i in book)
{
    console.log(`book.${i} = ${book[i]}`);
}

//Task 9

console.log(Object.keys(book));
console.log(Object.values(book));