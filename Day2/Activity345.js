let num1=60
let num2=29

console.log(num1>num2) //Greater than operator
console.log(num1<num2) //Less than operator
console.log(num1>=num2) //Greater than equal to operator
console.log(num1<=num2)//Less than equal to operator
console.log(num1==num2) //Equal Equal to operator checks for only values
console.log(num1===num2) //Double Equal to operator checks both Datatypes as well as values

if(num1>num2 && num1===num2) //Using Logical AND operator
    console.log("Greater")

if(num1>num2 || num1<num2)  //Using Logical OR operator
    console.log("Operation Performed")

console.log(!(num1===num2)) //Using Logical NOT operator

let ternop = num1>=0? "Positive" : "Negative" //Using ternary operator

console.log(ternop)

