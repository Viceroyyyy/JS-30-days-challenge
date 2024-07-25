//Activity 4 Default Parameters 
//Task 7
const arrfunc = (num1,num2=1) =>{
    return num1*num2;
}

console.log(arrfunc(4,5));
console.log(arrfunc(5));

//Activity 5 Enhanced Object Literals
//Task 8 Use enhanced object literals to create an object with methods and properties,
// and log the object to the console

let name="Devesh";
let age=22;

let enhobj = {
    name,
    age,
    arrfunc
}

console.log(enhobj);
//Task 9: Create an object with computed property names
// based on variables and log the object to the console

const key1="firstName";
const key2="lastName";
const key3="age";

const person = {
    [key1]: "Devesh",
    [key2]: "Agnihotri",
    [key3]: 22
}

console.log(person);