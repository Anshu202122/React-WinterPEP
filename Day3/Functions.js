// 1. Write a function calculateDiscount that takes two parameters: price and discount (with a default value of 10). The function should return the final price after applying the discount

function calculateDiscount(price, discount = 10) {
    let currDiscount = (discount / 100) * price;
    return price - currDiscount;
}
console.log('Final Price after discount', calculateDiscount(5000));
console.log('Final Price after discount', calculateDiscount(9000, 5));


// 2. Create a function mergeArrays that takes two arrays as parameters and returns a new array that combines both arrays using the spread operator

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
const a = [78, 90, 566, 46, 768];
const b = ["Hello", "Hi", "Welcome"];
console.log("Merged Array:", mergeArrays(a, b));


// 3. Write a function logArguments that takes any number of arguments and logs them to the console. Use rest parameters to collect the arguments.

function logArguments(...args) {
    for (const x of args) {
        console.log(x);
    }
}
console.log("Elements of Array:");
logArguments("Good Morning", 8790, 469.890, true, "Have a good day!");


// 4. Create a function createMessage that takes a default message and an indefinite number of names. The function should return an array of personalized messages for each name.

function createMessage(msg, names) {
    let namesArr = [];
    for (const name of names) {
        namesArr.push(msg + name);
    }
    return namesArr;
}
let names = ["Jack", "Alice", "Sam", "David", "Bob"];
console.log(createMessage("Hello ", names));


// 5. Define a function sum that takes three numbers as parameters and returns their sum. Use the spread operator to call this function with an array of numbers.

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
const nums = [90, 80, 6];
console.log("Sum of the elements of array:", sum(...nums));


// 6. Write a function createUserProfile that takes three parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). Return an object with these properties.

function createUserProfile(username, age = 25, country = "Unknown") {
    let obj = {
        'Username': username,
        'Age': age,
        'Country': country
    };
    return obj;
}
console.log("Default Parameters:", createUserProfile('Alice'));
console.log("User Defined Parameters:", createUserProfile('Claire', 20, 'India'));