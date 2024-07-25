//Activity 1
//Task 1
const name = "Devesh";
const age= 22;

console.log(`My name is ${name} and my age is ${age} years`);

//Task2

const multilinestr = `This is a multiline string. I am writing this to complete
the daily task i.e ES6 features of the 30 day challenge of Javascript from Chai aur Code challenge.
This Task includes making a multiline string and logging the same.`

console.log(multilinestr);

// Activity 2 Destructuring
//Task 3 Array destructuring


//Task 4 Object Destructuring

const book = {
    title: "IKIGAI",
    author : "Shweepy"
};

const {title: TITLE} = book;
const {author: AUTHOR} = book;

console.log(TITLE, AUTHOR);

//Activity 3 Spread and Rest Operator

let arr=[1,2,3,4,5];
let arrstr = ["Devesh","Shweepy","Love"];

let newarr = [...arr, ...arrstr];
console.log(newarr);

//Task 6 Use Rest operator in a function to accept an arbitrary nnumber of arguements
function sum(...args){
    let summation = 0;
    for(let i=0; i<args.length; i++)
    {
        summation+=args[i];
    }
console.log(`The total sum is ${summation}`);
}

sum(1,2,3,4,5,12,13,14,15,17);