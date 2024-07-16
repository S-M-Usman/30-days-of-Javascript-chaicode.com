/*Activity 1: For Loop
    Task 1: Write a program to print numbers from 1 to 10 using a for loop.
    Task 2:  Write a program to print the multiplication table of 5 using a for loop.
*/

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

for (let index = 1; index <= 10; index++) {
    console.log(index * 5);
}

/*Activity 2: While Loop
    Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
    Task 4: Write a program to print numbers from 10 to 1 using a while loop.
*/
while (index <= 10, index++) {
    sum += index;
    console.log(sum);
}

while (index >= 1, index--) {
    console.log(index);
}
/*Activity 3: Do...While Loop
    Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
    Task 6: Write a program to calculate the factorial of a number using a do...while loop.
*/
do {
    let index = 1;
    console.log(index);
    index++
} while (index <= 5 );

do {
    let index = 7;
    let factorial = 1 * index;
    console.log(factorial);
    index--;
} while (index > 0);
/*Activity 4: Nested Loops
    Task 7: Write a program to print the following pattern using a nested for loop.
*/
for (let index = 1; index <= 5; index++) {
    let pattern = "";
    for (let i = 0; i < index; i++) {
        pattern = "*"
    }
    console.log(pattern);
}
/*Activity 5: Loop Control Statements
    Task 8: Write a program that uses the `break` statement to exit a loop when a certain condition is met.
    Task 9: Write a program that uses the `continue` statement to skip the current iteration and proceed with the next iteration of the loop.
*/
let person= ['Ahmed', 'Ali', 'Usman', 'Hammad', 'Hussain'];
for (let index = 0; index < person.length; index++) {
    if (person[index] === 'Hammad') {
        break;
    }
    console.log(person[index]);
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < number.length; index++) {
    if (number[index] === 5) {
        continue;
    }
    console.log(number[index]);
}