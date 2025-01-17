const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material) => material.length));

// Write an arrow function called square that takes a number as an argument and returns its square.

const square = num => num * num;
console.log(square(8));


// Given an array of numbers, use an arrow function to create a new array that contains the squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].

const squareArray = (arr) => {
    let ansArr = [];
    for (const a of arr) {
        ansArr.push(a * a);
    }
    return ansArr;
}
const nums = [10, 7, 9, 12]
console.log(squareArray(nums));


// Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".

const reverseString = (str) => {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString("hello"));
console.log(reverseString("welcome"));


// Create a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number. For example: const result = chainable(5).add(3).multiply(2); // result should be 16

const chainable = (a) => {
    return {
        ans: a,
        add: function (num) {
            this.ans += num;
            return this;
        },
        multiply: function (num) {
            this.ans *= num;
            return this;
        },
        result: function () {
            return this.ans;
        }
    }
}
console.log(chainable(5).result());
console.log(chainable(14).add(4).result());
console.log(chainable(4).add(5).multiply(6).result());