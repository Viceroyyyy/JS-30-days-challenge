//-----------------Activity-1(For Loop) ----------------

//Task1 Print Number from 1 to 10 using for loops

for(let i=1;i<=10;i++)
    console.log(i);

//Task2  Print a multiplication Table of 5 using for loops

for (let i=1;i<=10;i++)
{ let num=5*i;
    console.log("5"+"*"+i+"="+num);
}

//--------------Activity-2(While-Loop)--------------

//Task-3 Calculate the sum of numbers from 10 to 1 using while loop

let i=1;
let sum=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

//Task-4 Print numbers from 10 to 1 using while loop

let num=10;
while(num>=1){
    console.log(num);
    num--; 
}

//--------------Activity-3(Do-While Loop)--------------------------------
//Task-5 Print numbers from 1 to 5 using do while loops

let j=1;
do{
    console.log(j);
    j++;
}while(j<=5);

//Task-6 Calculate factorial of a number using a do while loop

let facnum=5,fact=1;

do{
    fact=fact*facnum;
    facnum--;
}while(facnum>1);
console.log(fact);







