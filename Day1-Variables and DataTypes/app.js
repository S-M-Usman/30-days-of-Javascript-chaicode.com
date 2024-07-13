// Day 1 : Variables and Data Types 
// Tasks/Activities
/* Activity 1: Variables
    -Task1:Declare a variable using var and assign it a number,and log to the console
    -Task1:Declare a variable using let and assign it a string,and log to the console
*/
var userId = 89;
console.log(userId);
let userName = `Shaikh Muhammad Usman`
console.log(userName);
/* Activity 2: Constant Declaration
    -Task3:Declare a variable using const and assign it a boolean value,and log to the console
*/
const isLogin = false;
console.log(isLogin);
/* Activity 3: 
    -Task4:Create variables of different data types(number, string, boolean, object, array)and log each variable's type using the typeof operator
 */
let userEmail = "xyz@chaicode.com";
console.log(userEmail);
console.log(typeof userEmail);
let userAge = 49;
console.log(userAge);
console.log(typeof userAge);
let isActive = true;
console.log(isActive);
console.log(typeof isActive);
let userData = {
    userName :`Hitesh`,
    userId:90909,
    userDOB:2020 
}
console.log(userData);
console.log(typeof userData);
let userTypes = ['admin','standardUser','premiumUser']
console.log(userTypes);
console.log(typeof userTypes);
let userCart = undefined
console.log(userCart);
console.log(typeof userCart);
let userStatus = null
console.log(userStatus);
console.log(typeof userStatus);
let userProductRating = Symbol('hsdg',20)
console.log(userProductRating);
console.log(typeof userProductRating);
/* Activity 4: Reassigning Variables
   -Task5: Declare a variable using let, assign it an initial value, reassign a new value 
 */
let userCourse = '30 Days of Javascript'
console.log(userCourse);
userCourse = '100 Days of code'
console.log(userCourse);
/* Assignment 5: Understanding Const
    -Task6: Try reassigning a variable declared with const and obsrve the error
*/
const  userAddress = 'Jaipur'
console.log(userAddress);
userAddress ='lucknow'
console.log(userAddress);