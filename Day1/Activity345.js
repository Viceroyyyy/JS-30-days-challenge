let num=29
let love="Shweepy"
let sheCutie= true
// Now to declare an object ther are Three ways:-

//Way1----Best Way to use object
let car={
    carType:"Sedan",
    carModel:"BMW",
    carCost:20000000
}

//Way2 
let car2={}
car2.carModel="BMW"
car2.carCost=20000000
car2.carType="Sedan"

//Way3----
let car3= new Object()
car3.carModel="BMW"
car3.carCost=200

////////////////////////////////

//Declaring Arrayys

let carArray=["BMW","Porsche","Aston","Bentley","LandRover"]


console.table([typeof num,
    typeof love,
    typeof sheCutie,
    typeof carArray,
    typeof car])

console.log(num)
num=60
console.log(num)