// Activity-1:Array Creation and access

//Task 1:
let arr=[1,2,3,4,5];
console.log(arr);

//Task 2:
console.log(arr[0],arr[arr.length-1]);;

// Activity 2:Array Methods(Basic Operations)
//Task 3:Use push method
arr.push(6);
arr.push("Devesh");

//Task 4: Use pop method

console.log(arr.pop());
arr.pop();
console.log(arr);

///Task 5: Use shift method
console.log(arr.shift());

//Task6: Use unshift method
arr.unshift("Shweepy");
console.log(arr);

//Activity 3: Array Methods(Intermediate Operations)
/*
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.   */
let arrmap= [2,3,4,5,6];


function double(num) {
    return num*2;
}
console.log(arrmap.map(double));
///      OR
let newarrmap= arrmap.map(double);
console.log(newarrmap);

//Task 8

// Filter Method is similar to Map method the difference is that when we have to apply any kind of filter then this method is used
//Filters are like whether a number is odd or even,greater or smaller etc
console.log(arrmap.filter((x)=> x%2==0));

//Task 9

/*
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.


*/
//Method-1 to use reduce
console.log(arrmap.reduce((sum,num)=> sum+=num))

//Method 2 to use reduce 
let numreduce = arrmap.reduce(getSum,0)

function getSum(sum,num) {
    return sum+=num;
}

console.log(numreduce);

//Activity-4 Array Iteration
//Task 10-Using normal for loop
for(let i=0;i<arrmap.length;i++)
{
    console.table(arrmap[i]);
}
//Task-11 Uing normal for Each Loop

arrmap.forEach((x)=>console.log(x));

//Activity 5 Multidimensional arrays
//Task12- Create A 2D array and log the entire array
let arr2D=[[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2D);
//Task-13 Multidimensional arrays specific element access
console.log(arr2D[2][2]);

