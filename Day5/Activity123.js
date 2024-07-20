//Activity-1
//Task 1
function evenODD(num){
    if(num%2==0)
        console.log("Even Number");
    else
    console.log("Odd Number");
}

evenODD(29);

//Task 2

const square = (num) => num*num;

console.log(square(2));

//Activity 2

//Task 2

((num1,num2)=>{
    if(num1>num2)
        console.log(`${num1} is greater`);
    else
    console.log(`${num2} is greater`);
})(10,12);


(function strconcatenation(str1,str2){
    console.log(`Final result after concatenation of ${str1} and ${str2} is ${str1+str2}`);
})("Annanya"," Agnihotri");

//Activity 3

//Task-5 Arrow FUnction to calculate the sum of two functions

let sum = (num1,num2) =>{
    let sum=num1+num2;
    console.log(sum);
}
sum(29,60);

//Task 6 
let chkstr = (str,key) =>{
 for(let i=0;i<str.length;i++)
 {
    if(str.charAt(i)==key)
        return true;
 }
 return false;
}

console.log(chkstr("Shweepy","h"));