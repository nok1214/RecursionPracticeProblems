/*
Problem 2
Write a JavaScript program to compute the sum of an array of integers.
*/

//code starts here

var myArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
var myArray2 = [3, 4, 6, 2, 4, 6];
var myArray3 = [11, 33, 12, 23];

function sumArray(arr) {
    if(arr.length == 1) {                               //set up our base case for our function to recurse with, arr.length 1 = arr[0];
    return arr[0];
    } else {
    return arr[0] + sumArray(arr.slice([1]));           //function calls upon itself and holds the first value of the array using .slice(), when if condition is true, function will return the sum of all the number;
    }
}

console.log(sumArray(myArray1));    //output 36;
console.log(sumArray(myArray2));    //output 25;
console.log(sumArray(myArray3));    //output 79;