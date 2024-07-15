/*Activity 1: Arithmetic Operations
    Task 1: Write a program to add two numbers and log results to the console
    Task 2: Write a program to subtract numbers and log results yo the console
    Task 3: Write a program to multiply two numbers and log results to the console
    Task 4: Write a program to divide two numbers and log results to the console
    Task 5: Write a program to find the remainder two numbers and log results to the console
*/
let num1 = 8;
let num2 = 64;
console.log(num1+num2);       // add 
console.log(num2-num1);      // subtarct
console.log(num1 * num2);   // multiply
console.log(num2 /num1);   //divide
console.log(num2 % num1); //modulus(remainder)

/*Activity 2: Assignment Operators
    Task 6: Use the += operator to add a number to a varible and log the result to the console
    Task 7: Use the -= operator to subtract a number to a varible and log the result to the console
*/
let num3 = 43;
let num4 =78;
 num3 += num4
 console.log(num3);
 num3-=num4 
 console.log(num3);
/*Activity 3: Comparison Operators 
    Task 8: Write a program to compare two number using > and < and log to the console
    Task 9: Write a program to compare two number using >= and <= and log to the console
    Task 10: Write a program to compare two number using == and === and log to the console
*/
 let num5 = 10;
 let num6 =20;
 let num7 = "10";
 console.log(num5 >num6); 
 console.log(num5 >=num6);
 console.log(num5 < num6);
 console.log(num5<=num6);
 console.log(num5==num7 );
 console.log(num5 === num7);


/*Activity 4: Logical Operators
    Task 11: Write a program that uses the && operator to combine two conditions and log its result to the console
    Task 12: Write a program that uses the || operator to combine two conditions and log its result to the console
    Task 13: Write a program that uses the ! operator to combine two conditions and log its result to the console
 */

let num8 = 25;
let num9 = 45;

console.log(num8 === 24 && num9 >40);
console.log(num8 === 24 || num9 >40);
console.log(!num9 === num9 );
/*Activity 5: Ternary Operators
    Task 14: Write a program that uses ternary opeartor to check if the number is positive or negative and logs the result
 */

let num = 10
num>0? console.log('positive') : console.log('negative');
