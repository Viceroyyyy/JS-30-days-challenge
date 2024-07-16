///Activity1

let num1=-9
if(num1>0)
    console.log("Positive")
else if(num1<0)
    console.log("Negative")
else 
    console.log("Zero")

    //Eligibility to vote

let age=20
if(age>=18)
    console.log("Eligible to vote")
else
    console.log("Not Eligible to vote")

    //Activity-2 Nested if-else for finding the greatest element

let a=2,b=3,c=9
if(a>b)
{
    if(a>c)
        console.log("a-Greatest")
    else
        console.log("c-Greatest")
}
else
{
    if(b>c)
        console.log("b-Greatest")
    else
        console.log("c-Greatest")
}

//Activity-3 Switch Case for determinig the day of the week and assigning grade based on score

let day = 5
switch(day){
    case 1:
        console.log("Sunday")
    case 2:
        console.log("Monday")
    case 3:
        console.log("Tuesday")
    case 4:
        console.log("Wednesday")
    case 5:
        console.log("Thursday")
    case 6:
        console.log("Friday")
    case 7:
        console.log("Saturday")
}

let num=15
console.log(num%2==0?"Even Number":"Odd Number");

let Year=2000;

if(Year%4==0 && Year%100==0 && Year%400==0)
    console.log("It is a leap year");
else if(Year%4==0 && Year%100!=0 && Year%400!=0)
    console.log("It is a leap year");
else if(Year%4!=0)
    console.log("It is not a leap year");
else if(Year%4==0 && Year%100==0 && Year%400!=0)
    console.log("It is not a leap year");


