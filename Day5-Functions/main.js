/*Activity 1: Function Declaration
    Task 1:Write a function to check if a number is even or odd and log the result to the console.
    Task 2:Write a function to calculate the square of a number and return the result.
*/
 
function oddOrEven(num) {
    if (typeof num === "number"){
        num / 2 == 0? console.log(`${num} is even`):console.log(`${num} is odd`);
    }
}
oddOrEven(110)

function squareCalculator(num){
    if(typeof num === "number"){
        return `the square of ${num} is ${num **2}`
    }
    return
}
let squaredNumber = squareCalculator(14)
console.log(squaredNumber);

/*Activity 2: Function Expression
    Task 3:Write a function expression to find the maximum of two numbers and log the result to the console.
    Task 4:Write a function expression to concatenate two strings and return the result.
*/
let maxNum = function(num1, num2){
    num1 > num2? console.log(`${num1} is greater than ${num2}`) : console.log(`${num2} is greater than ${num1}`);
}
maxNum(10, 5);

let stringConcat = function(str1, str2){
    if (typeof str1 === "string" && typeof str2 === "string"){;
        return str1.concat(str2);
    }
    return
}
let result = stringConcat("hello ", "world")
console.log(result);
/*Activity 3: Arrow Function
    Task 5:Write an arrow function to calculate the sum of two numbers and return the result.
    Task 6:Write an arrow function to check if a string contains a specific character and return a boolean value.
*/
let sum = (num1, num2) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }
    return
}
let result = sum(10, 5)
console.log(result)

let contains = (str, char) => {
    if(typeof str === "string" && typeof char === "string"){    
     if(str.includes(char)){
        return true 
     }
      return false
    }   
    return                                  
}
let result = contains("hello", "l")
console.log(result)

/*Activity 4: Function Parameters and Default Values
    Task 7:Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
    Task 8:Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
*/
let product = (num1, num2 = 1) => {
   if (num2){
     if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 * num2
     }
     return
   }
   else{
    if(num1 && typeof num1 === "number"){
        return num1 * num2
    }
    return
   }
}
let result=product(10, 5)
console.log(result);
result = product(57)//default value
console.log(result);

let greeting = (name, age = 18) => {
    if(age){
        if(typeof name === "string" && typeof age === "number"){
            return `Hello ${name}, you are ${age} years old`
        }

    }
    else{
        if(typeof name === "string"){
            return `Hello ${name} you are ${age} years old`
        }
    }
    return
}
let result = greeting("Hitesh") //default value
console.log(result);
result = greeting("Usman", 20)
console.log(result);
/*Activity 5: Higher-Order Functions
*/
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
let numbers = 5;
let myFunc = (func, num) => {   
    for (let index = 0; index < num; index++) {
        func();
    }
};
myFunc(() => console.log("Hello World"), numbers);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
let myFunc2 = (func1, func2, value) => {  
    return func1(func2(value));
};
let result = myFunc2(num => num * 2, num => num + 5, 10);
console.log(result); // Should output (10 + 5) * 2 = 30

