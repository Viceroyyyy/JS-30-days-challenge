//-----------Activity-4 Nested Loops-----------

//Task 7: Program to print pattern
let patternstr=""
for(let i = 1; i<=5; i++) 
{
    for(let j=1; j<=i; j++)
       patternstr += "* ";
    console.log(patternstr);
    patternstr = "";
}

//-------------Activity-5 Loop Control Statements ----------------------------------------------------

//Task-8 Print 1 to 10 but skip number 5 uing continue statement

for(let i = 1; i <=10; i++)
{
    if(i == 5)
        continue;
    console.log(i);
}

//Task-9 Print 1 to 10 and stop the loop when it reaches number 7

for(let i = 1; i <=10; i++)
    {
        if(i == 7)
            break;
        console.log(i);
    }
