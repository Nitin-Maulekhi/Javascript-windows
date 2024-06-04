let score = "Nitin"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN (Not in Number)
// true => 1
// false => 0

let isLoggedIn = "Nitin"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// true => 1
// false => 0
// "" => false
// "Nitin" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
// console.log(typeof stringNumber);


//**************************Operations****************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);


let str1 = "Hello"
let str2 = " Nitin"

let str3 = str1 + str2
console.log(str3);

// Generally we don't write code in this way which we get problem to read the code.

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// // console.log(2 + 3 * 4 % 5);


// let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 

// console.log(num1, num2, num3);
// console.table([num1, num2, num3])


console.log(+true);
console.log(+"");


// Prefix Increment 

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// Postfix Increment

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
