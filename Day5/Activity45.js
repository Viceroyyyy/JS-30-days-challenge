// Activity-4
//Task 7

(function prod(num1,num2){
    console.log(num1*num2);
})(5,6);

//Task 8

(function nameAndAge(name,age){
    console.log(`Name is ${name} and age is ${age}`);
})("Devesh",22);

//Activity 5
//Task 9
//Higher Order Function---- Calls A function inside a function

//Task 9

function Horderfunc(func,num){
    for(var i=1;i<=num;i++){
        func(i);
    }
}
 function higherorder(num1){
    console.log(`Call ${num1}`);
}

Horderfunc(higherorder,6);

//Task 10

function task10(func1,func2,num){
    let result = func1(num);
    console.log(result);
    let result2 = func2(result);
     console.log(result2);
}

function task10func1(num){
return num+10;
}
function task10func2(num){
return num-10;
}

task10(task10func1,task10func2,6);
