// The answer to all questions must be printed to your Browser’s console -- using console.log():
//Question 1

console.log(`-------------------------
1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. \n`);
// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 64, 2, 8, 28, 93];
// to print the new array 
console.log(ages);

console.log(`-------------------------
    1a.  Programmatically subtract the value of the first element in the array from the value in the last element of the array. Should return 90 \n`);
	
// •	Do not use numbers to reference the last element, find it programmatically, 
// •	ages[7] – ages[0] is not allowed!

// print (array at the index of the array length -1, which is the last element) minus the element at index 0(the 1st element in the array)
console.log((ages[ages.length -1]) - ages[0]);

console.log(`-------------------------
    1b.  Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths). \n`);
// the unshift method adds the new elements to the beginning of the array
ages.unshift(45, 6);                                  

// for myself to check that the elements were added to the array
console.log(`This is the new array: ` + ages);


// because the new elements were added to the array, the first element subracted from the last element will be different since the first element will be different
console.log(`The new first element subtracted from the last element: \n`)
console.log((ages[ages.length -1]) - ages[0]);

console.log(`-------------------------
    1c. Use a loop to iterate through the array and calculate the average age. Should be 29 \n`);

// empty variable to hold the sum as it's being added
let sum = 0;
 // for loop to iterate over the numbers in the array
for (var i = 0; i < ages.length; i++) {
  // sum will now equal sum + the array at the iteration
  sum += ages[i];
}
// log the sum to the console for myself to check
//console.log(sum);
//log the sum divided by the length of the array for the avg and use Math.round() to round the answer
console.log('The average is ' + Math.round(sum / ages.length)); // should log 29


// Question 2 

console.log(`-------------------------
2.	Create an array called names that contains the following values: Sam, Tommy, Tim, Sally, Buck, Bob. \n`);

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// print the array to the console
console.log(names);

console.log(`-------------------------
  2a.	Use a loop to iterate through the array and calculate the average number of letters per name. \n`); 
  // create empty variable to hold sum
  let sumOfLetters = 0;  
  // iterate through the array to the end of of the length of the array
  for (let i = 0; i < names.length; i++) {
    // add each name length to the sum  
    sumOfLetters += names[i].length;
  }
// log the number of names / the sum of the letters
console.log('The sum of the letters is : ' + sumOfLetters);// for my own check
console.log('The average numbers of letters is ' + (Math.round(sumOfLetters / names.length))); // rounded the answer. should return 4

console.log(`-------------------------
 2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.\n`); 
// for loop name of name array
 for (n of names) {
  //not sure if this is correct BUT it works! will continue to research to make sure I understand why 
  // log the names array and join with the space in the parenthesis
  console.log(names.join(' '));
}
 

console.log(`-------------------------
3.	How do you access the last element of any array? \n`); 
// at the array at the array.length -1: the array length is 7 so the last element is at index 6.
console.log ('console.log(ages[ages.length -1])');

console.log(`-------------------------
4.	How do you access the first element of any array? \n`);
// at the array at the zero index
console.log('console.log(ages[0])');

console.log(`-------------------------
5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array. \n`);
// create new array to equal the iteration (map function) of the names array returning the names.length
let nameLengths = names.map(names => names.length);
// log the new array of name lengths
console.log(nameLengths); // should log [3, 5, 3, 5, 4, 3]

console.log(`-------------------------
6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. \n`);
// create new variable for the sum of the previous nameLength array in Question5
let nameSum = 0;
// using the forEach to iterate over the array and add the number at the index to the sum and increment & logging the sum
nameLengths.forEach(element => {
  nameSum += element;
})
console.log('The sum of the array is : ' + nameSum);

console.log(`-------------------------
7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’). \n`);
// use an arrow fuction to take two params as args
let repeatName = (word, n) => {
  // create empty string variable
  let result = ' ';
  // iterate as long as i is less than n 
  for (let i = 0; i < n; i++) {
    // the result equals the result plus the word iterated n times
    result += word;
  }
  // return the result outside of the for loop
  return result;
}    
// log the function with the params
console.log(repeatName('Hello', 3));   // should log HelloHelloHello 
    
   
console.log(`-------------------------
8. Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space. \n`);
// use arrow function with two name params and return the params with space btwn. 
let fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
// log the two params
console.log(fullName('John', 'Smith'));

console.log(`-------------------------
9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. \n`);
// create an array of numbers
    let nums = [1, 2, 300];

    // empty variable to hold sum as it is being added; initial value set a 0 for addition
    let sum1 = 0;    
    // use forEach and arrow function to add num to sum1 at each iteration
    nums.forEach(num => {
      sum1 += num;
    });
    // for my own check I log out sum1
    console.log('The average is: ' + sum1);
    // find the avg and set to variable
    let avgOfArray = sum1 / nums.length;
    // if the avg is greater than 100 log true
    if (avgOfArray > 100) {
      console.log(true); // should print true
    }
      
  console.log(`-------------------------
 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array. \n`);
// ceate a function with array as the param
 function avgElement(array){
  // for loop iterate over array 
  for (let i = 0; i < array.length; i++) {
    // empty variable for sum
    let sum = 0;
    // add the element at the array at the index to the sum and check that the i is less than the array length
    sum += array[i];
    // make a new array equal to the sum divided by the array length
    newArray = sum / array.length;
  }
  // return the new array 
  return 'The average of the elements is ' + newArray;
}
// my check for function
let result = avgElement([8, 3, 4]);
console.log(result); // should return 5

console.log(`-------------------------
11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array. \n`);
// create 2 arrays and 2 sum variables set to 0
let array1 = [75, 1];
let array2 = [10, 7];
let array1Sum = 0;
let array2Sum = 0; 
 //find the avg of array1 using arrow funct and forEach 
 array1.forEach(num => {
  // teh array1Sum is added each iteration to the num
  array1Sum += num;
 })
 // find the avg of array2 using arrow funct and forEach
 array2.forEach(nums => {
  // the array2Sum is added each iteration to the num
  array2Sum += nums;
 })
 // if sum1 > sum2
 if (array1Sum > array2Sum) {
  // log 'true'
  console.log('The array1 is greater than array2: ' + true);
 }



console.log(`-------------------------
12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.\n`);
//the function takes two params
function willBuyDrink(isHotOutside, moneyInPocket) {
  // if it is hot outside and the money is greater than 10.50
  if (isHotOutside && moneyInPocket > 10.50) {
    // return the boolean true
    return true;
    // else return no drink today for myself for a check
  } else {
      return "No drink today";
  }
}
// check that the function works by passing in two args and log the result
let buyDrink = willBuyDrink(true, 10.59);
console.log(buyDrink); //should return true


console.log(`-------------------------
13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it. \n`);
// I need to easily convert to degrees Celsius from degree Fahrenheit. I am a chemist.
// arrow function taking in one param. return the answer to the equation
// It worked!!!  My first actually needed function for myself! 
let convertToCelsius = degree => (5/9) + (degree - 32);  

// check the function
console.log(convertToCelsius(79) + ' Celsius'); // should be 48 Celsius 