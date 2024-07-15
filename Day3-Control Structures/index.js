/* Activity 1: If-Else Statements
    Task 1: Write a program to check if a number is positive negaative or zero and log the result to the console.
    Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
*/
 
//---------------------------------------------------------
let num = 10 ;
if (num >0){
    console.log(`${num} is a positive number`);
}
else if (num <0){
    console.log(`${num} is a negative number`);
}
else{
    {`${num} is zero / equals to zero`}
}
// --------------------------------------------------------
let personAge = 38;
if (personAge>=18) {
    console.log('the person is eligible to vote');
}
else{
    console.log('Sorry,  the person is uneligibel to vote');
}
//-----------------------------------------------------------
/*Activity 2: Nested If-Else Statements
    Task 3: Write a program to find the largest of three numbers using nested if-else statements.
 */
let num1 = 23;
let num2 = 45;
let num3 = 58;
if (num1 > num3){
    if (num1 > num2){
        console.log(`num1 is the largest`);
    }
    else{
        console.log(`num 2 is the largest`);
    }
}
else {
    if(num3 >num2){
    console.log(`num3 is the largest`);}
    else{
        console.log(`num2 is largest`);
    }
}
/*Activity 3: Switch Case
    Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    Task 5:  Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
 */
let day = 1
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');    
        break;
    case 7:
        console.log('Sunday');
    default:
        console.log('Invalid day');
        break;
}
// -----------------------------------------------------------------------------------------
let score = 80;
switch(score){
    case 100:
        console.log('A+');
        break;
    case 90:
        console.log('A');
        break;
    case 80:
        console.log('B');
        break;
    case 70:
        console.log('C');
        break;
    case 60:
        console.log('D');
        break;
    default:
        console.log('F');
        break;
}
// -------------------------------------------------------------------------------------------------

/*Activity 4: Conditional (Ternary) Operator
    Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
 */
let num4 = 10;
let result = num4 % 2 == 0 ? 'Even' : 'Odd';
console.log(result);
/*Activity 5: Combining Conditions
    Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
 */
let year = 2020;
if (year % 4 == 0 && year % 100 != 0 || year % 400===0) {
    console.log('Leap year');
}
else {
    console.log('Not a leap year');
}