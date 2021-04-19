/*
Problem 1:
Write a JavaScript program to calculate the factorial of a number.
*/

/*
note: 
factorial of a number is the product of all the numbers from 1 to that number.
(example: factorial of 5 (5!) = 5 x 4 x 3 x 2 x 1 = 120)
factorial number cannot be a negative number.
factorial of 0 and 1 is equal to 1.
*/
/*
step 1: write a function(findFactorial) with a variable(num);
step 2: check to see if the input number is equal to 0 or 1
step 3: if the input number is equal to 0 or 1, return 1;
step 4: check to see if the input number is less than 0;
step 5: if the input number is less than 0, return 'Factorial cannot be a negative number';
step 6: write a "for" loop to multiply the input number by itself minus one to calculate the factorial of that input number;
step 7: return the factorial of that input number;
*/

//code starts here

function findFactorial(num) {
    if (num === 0) {                                        //check if the input number is equal to 0 or 1;
        return 1;                                           //return 1 if the input number is equal to 0 or 1;
    }
    return  num * findFactorial(num - 1)        
};

console.log(findFactorial(5));                              //output 120;
