//Week 3: Coding Assignment

//URL: Github: https://github.com/saeedna1/Week-3-Arrays-Functions.git
//URL: Video: https://drive.google.com/file/d/1R9Bhinlhw25mAY_Golco6v5X7kw6R8FH/view?usp=share_link

/* Comment: 
in this assignment i start to grasp the process and concept of coding in JS,


/* 1 -  The answer to all questions must be printed to your Browser’s console -- using console.log():
     . Do not use numbers to reference the last element, find it programmatically, 
     . ages[7] – ages[0] is not allowed!*/

     
// 1 - Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


// 1.a - Programmatically subtract the value of the first element in the array from the value in the last element of the array 
let averAge = ages.length -1;
let ageDifference = ages[averAge] - ages [0];
console.log("Age difference", ageDifference);


// 1.b - Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(40);
averAge = ages.length - 1;
ageDifference = ages[averAge] - ages [0];
console.log("New age difference", ageDifference);


// 1.c - Use a loop to iterate through the array and calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++){
    sum += ages[i];
}
let average = sum / ages.length;
console.log("Average age", average);



// 2 - Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];



// 2.a - Use a loop to iterate through the array and calculate the average number of letters per name. 
let totalLetters = 0;
for(let i = 0; i < names.length; i++){
    totalLetters += names[i].length; 
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name", averageLetters);



// 2.b - Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatenatedNames = " ";
for (let i = 0; i < names.length; i++){
    concatenatedNames += names[i] + " ";
}
console.log("concatenatedNames", concatenatedNames. trim());



// 3 - How do you access the last element of any array?
let myArray = [1, 2, 3, 4, 5, 6, 7,];
let lastElement = myArray.slice (-1)[0] ;
console.log(lastElement);



// 4 - How do you access the first element of any array?
myArray = [1, 2, 3, 4, 5, 6, 7];
let firsElement = myArray.slice(0)[0];
console.log(firsElement);



// 5 - Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);



// 6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
nameLengths = [3, 5, 3, 5,4, 3,];
sum = 0;
for (let i = 0; i < nameLengths.length;  i++){
    sum +=nameLengths[i]
}
console.log(sum);



// 7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function repeatWord(word, n){
    return word.repeat(n); 
}
console.log(repeatWord('Hello', 3));



// 8 - Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
  }
  let fullName = getFullName("Saeed", "Adem");
console.log(fullName);



// 9 - Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function sumGreaterThan100(array) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum > 100;
  }
  let numbers = [30, 40, 50];
let isSumGreaterThan100 = sumGreaterThan100(numbers);
console.log(isSumGreaterThan100);  



// 10 - Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageNum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }
  let nums = [20, 30, 40, 50];
let averageOfSum = averageNum(nums);
console.log(averageOfSum);



// 11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let arr1 = 35
let arr2 = 25
function findAverage(arr1, arr2){
    for(let i = 0; i < avr.length; i++){  
    }
      return arr1 === arr2;
}
console.log(arr1 >= arr2);  




// 12 - Write a function called willBuyDrink that takes a boolean isHotOutside,and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside,moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    } else {
        moneyInPocket === isHotOutside;
        return true;
    } 
}
console.log(willBuyDrink());



// 13 - Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.

// Comment: this function is created to calculate the current time to provide us with a result of greetings. I created this function and (if and else)  because I understand more likely.

function getGreeting() {                     
    let now = new Date();
    let hour = now.getHours();
  
    if (hour >= 5 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else if (hour >= 18 && hour < 22) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }
  let greeting = getGreeting();
console.log(greeting); 