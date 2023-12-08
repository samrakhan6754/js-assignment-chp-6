
// // Practice 6.1

// // Step 1: Create a grid array variable
// let grid = [];

// // Step 2: Set a value of 64 for the number of cells
// const numCells = 64;

// // Step 3: Set a counter to 0
// let counter = 0;

// // Step 4: Create a global variable to be used for the row array
// let row = [];

// // Step 5-13: Create a loop to generate the grid
// for (let i = 0; i <= numCells; i++) {
//     // Step 6: Add an outer if statement using modulo to check if the counter is divisible by 8
//     if (counter % 8 === 0) {
//         // Step 7: Inside the outer if statement, add another if statement to check if the row is undefined
//         if (row !== undefined) {
//             // If the row has been defined, add the row to the main grid array
//             grid.push(row);
//         }
//         // If the counter is divisible by 8, clear the row array
//         row = [];
//     }

//     // Step 9: Increment the main counter by 1
//     counter++;

//     // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
//     let tempValue = counter;
//     row.push(tempValue);

//     // Step 11: Check if the value of the counter is equal to the total number of columns
//     if (counter === 8) {
//         // If it is, add the current row to the grid
//         grid.push(row);
//     }
// }

// // Step 13: Output the grid into the console
// console.log(grid);

// // Practice 6.2

// // Step 1: Create a function that adds two numbers
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// // Step 2: Set up two different variables with two different values
// let variable1 = 5;
// let variable2 = 8;

// // Step 3: Use the function on the two variables and output the result
// console.log(`Result of adding ${variable1} and ${variable2}: ${addNumbers(variable1, variable2)}`);

// // Step 4: Create a second call to the function using two more numbers as arguments
// let anotherVariable1 = 10;
// let anotherVariable2 = 3;

// console.log(`Result of adding ${anotherVariable1} and ${anotherVariable2}: ${addNumbers(anotherVariable1, anotherVariable2)}`);


// Practice 6.3

// Step 1: Set up two variables containing number values
// let number1 = 10;
// let number2 = 5;

// // Step 2: Set up a variable to hold an operator, either + or -
// let operator = "+";

// Step 3: Create a function to perform addition or subtraction based on the operator
// function calculate(num1, num2, operation) {
//     if (operation === "+" || !operation) {
//         return num1 + num2;
//     } else if (operation === "-") {
//         return num1 - num2;
//     } else {
//         return "Invalid operator. Please use + or -.";
//     }
// }

// // Step 4: Call the function with console.log() using your variables and output the response
// console.log(`Result of ${number1} ${operator} ${number2}: ${calculate(number1, number2, operator)}`);

// // Step 5: Update the operator value and call the function again with new arguments
// operator = "-";
// console.log(`Result of ${number1} ${operator} ${number2}: ${calculate(number1, number2, operator)}`);


// Practice 6.4

// // Step 1: Set up an empty array to store the values that will be calculated within the loop
// let resultsArray = [];

// // Step 2-7: Create a loop, a function, and store results in an array
// for (let i = 0; i < 10; i++) {
//     // For the first value, multiply the value of the loop count by 5
//     let value1 = i * 5;
//     // For the second value, multiply the value of the loop counter by itself
//     let value2 = i * i;

//     // Step 3: Create a function that returns the added values of the two parameters
//     function calculateAndReturnSum(num1, num2) {
//         return num1 + num2;
//     }

//     // Step 4: Call the calculation function and store the returned result in a response variable
//     let response = calculateAndReturnSum(value1, value2);

//     // Step 5: Push the result values into the array as it iterates through the loop
//     resultsArray.push(response);
// }

// // Step 6: Output the value of the array into the console
// console.log(resultsArray);

// // Practice 6.5

// // Step 1: Create a variable value with let and assign a string value of 1000 to it
// let value = 1000;

// // Step 2: Create an IIFE function and print the local value to the console
// (function() {
//     let value = "Inside IIFE 1";
//     console.log(value); // Output: Inside IIFE 1
// })();

// // Step 3: Create an IIFE expression, assign it to a new result variable, and print the result
// let result = (function() {
//     let value = "Inside IIFE 2";
//     return value;
// })();
// console.log(result); // Output: Inside IIFE 2

// // Step 4: Create an anonymous function that has a parameter and prints the value as part of a string sentence
// (function(parameterValue) {
//     let value = `Inside Anonymous Function: ${parameterValue}`;
//     console.log(value);
// })("Passed-in Value");
// // Output: Inside Anonymous Function: Passed-in Value

// // Practice 6.5

// // Step 1-3: Create a recursive function to calculate the factorial
// function calculateFactorial(number) {
//     // Step 2: Check if the argument value is 0
//     if (number === 0) {
//         return 1;
//     } else {
//         // Return the value of the argument multiplied by the result from the recursive call
//         console.log(`Calculating factorial for ${number}`);
//         return number * calculateFactorial(number - 1);
//     }
// }

// // Step 3: Invoke the function with an argument to find the factorial
// let result = calculateFactorial(5); // Change the number to see different results
// console.log(`Factorial result: ${result}`);

// Practice 6.6

// // Step 1: Set the start variable at a value of 10
// let start = 10;

// // Step 2-9: Create a countdown function
// function countdown(value) {
//     // Step 3: Output the current value of the countdown into the console
//     console.log(`Countdown: ${value}`);

//     // Step 4-5: Check conditions for continuing or ending the loop
//     if (value < 1) {
//         return; // Step 4: Return the function if the value is less than 1
//     } else {
//         // Step 6: Continue the loop by calling the function within itself
//         countdown(value - 1);
//     }

//     // Step 7-9: Create a second countdown
//     if (value > 0) {
//         // Step 8: Decrease the value of the countdown by 1
//         value--;

//         // Step 9: Use return to return the function, invoking it again until the condition is no longer true
//         return countdown(value);
//     }
// }

// // Step 10: Invoke the countdown function with the start value
// countdown(start);

// practice 6.7

// // Step 1: Set a variable name and assign a function expression to it
// let printArgument = function(arg) {
//     console.log(arg);
// };

// // Step 2: Pass an argument into the function expression
// printArgument("Function Expression Argument");

// // Step 3: Create the same function as a normal function declaration
// function printArgumentDeclaration(arg) {
//     console.log(arg);
// }

// // Pass an argument into the function declaration
// printArgumentDeclaration("Function Declaration Argument");

// Practice 6.8

// Step 1: Set a variable name and assign a function expression to it
let printArgument = function(arg) {
    console.log(arg);
};

// Step 2: Pass an argument into the function expression
printArgument("Function Expression Argument");

// Step 3: Create the same function as a normal function declaration
function printArgumentDeclaration(arg) {
    console.log(arg);
}

// Pass an argument into the function declaration
printArgumentDeclaration("Function Declaration Argument");





