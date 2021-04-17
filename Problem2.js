/*
Problem 2
Write a JavaScript program to compute the sum of an array of integers.
*/

//code starts here

var myArray1 = [1, 2, 3, 4, 5, 6, 7, 8];
var myArray2 = [3, 4, 6, 2, 4, 6];
var myArray3 = [11, 33, 12, 23];

function findArraySum(arr) {
    var sum = 0;
    for(let i of arr)                   //using "for/of" loop here to loop through the values of an iterable objects;
    sum += i;                           //set up paremeter to add each value insdie the array;
    return sum;                         //returns the sum of the input array;
};

console.log(findArraySum(myArray1));    //output 36;
console.log(findArraySum(myArray2));    //output 25;
console.log(findArraySum(myArray3));    //output 79;