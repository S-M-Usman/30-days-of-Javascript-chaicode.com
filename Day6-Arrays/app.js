/* Activity 1: Array Creation and Access
    Task 1:Create an array of numbers from 1 to 5 and log the array to the console.
    Task 2:Access the first and last elements of the array and log them to the console
*/
let numArr = [1, 2, 3, 4, 5];
console.log(numArr);
console.log(numArr[0], numArr[numArr.length - 1]);

/*Activity 2: Array Methods (Basic)
    Task 3:Use the `push` method to add a new number to the end of the array and log the updated array.
    Task 4:Use the `pop` method to remove the last number from the array and log the updated array.
    Task 5:Use the `shift` method to remove the first element from the array and log the updated array.
    Task 6:Use the `unshift` method to add a new number to the beginning of the array and log the updated array.
*/
let numArr2=[...numArr]
numArr2.push(6);
console.log(numArr);
numArr2.pop();
console.log(numArr);
numArr2.shift();
console.log(numArr);
numArr2.unshift(0);
console.log(numArr);

/*Activity 3: Array Methods (Intermediate)
    Task 7:Use the `map` method to create a new array where each number is doubled and log the new array.
    Task 8:Use the `filter` method to create a new array with only even numbers and log the new array.
    Task 9:Use the `reduce` method to calculate the sum of all numbers in the array and log the result.
*/
let numArr3=[...numArr];
numArr3.map((num)=>num * 2);
console.log(numArr);
numArr3.filter((num)=>num % 2 === 0);
console.log(numArr);
numArr3.reduce((acc, num)=>acc + num);
console.log(numArr);
/*Activity 4: Array iteration
    Task 10:Use a `for` loop to iterate over the array and log each element to the console.
    Task 11:Use the `forEach` method to iterate over the array and log each element to the console.
*/
let numArr4=[...numArr];
for (let index = 0; index < numArr4.length; index++) {
    const element = array[index];
    
}
numArr4.forEach((num)=>console.log(num));
/*Activity 5: Multi-dimensional Arrays
    - Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
    - Task 13:Access and log a specific element from the two-dimensional array.
*/
let matrix = [
    ["A","B","C"],
    ["D","E","F"],
    ["G","H","I"],
    ["J","K","L"],
    ["M","N","O"],
    ["P","Q","R"],
    ["S","T","U"],
    ["V","W","X"],
    ["Y","Z",],
];
console.log(matrix);
console.log(matrix[4][2]);
