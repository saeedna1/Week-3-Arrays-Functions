//Week 3 - Arrays


/* Write a Function to Print the Elements of an Array:
Write a function called printArray that accepts an array as an argument, and contains a loop that will print each value of the passed in array.
Do not edit (or hardcode the change to) the array in its current state. You must edit by using a method of the Array object.
Note: arrays are mutable in JavaScript, so you can use a method to add a new name to an array. */

function printArray(array) {
    for(let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
}
//Which of the following adds a new value to the end of an array? Answer is Push.





/* Array Fun:
Using the given function, gradList, add the following names to the passed array: "Mary", "Steven", "Eddie". Then, sort the remaining students from Z-A, and return the modified array.
The passed array is the graduates variable. First add the names to the graduates array using push. Then sort the names and finally return the reversed array. */


/*var push;
var grads;

function gradList(graduates){
    graduates.push ("Mary","Steven","Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
}
console.log(gradList(grads));*/


//Which of the following will return the last position of an element if found in an array?
//answer is = lastIndexOf





/*Add an Element to the Student List Array:
Given the array studentList, add the name "Mary".
Do not edit (or hardcode the change to) the array in its current state. You must edit by using a method of the Array object.
Note: arrays are mutable in JavaScript, so you can use a method to add a new name to an array.*/
let studentList = ["Allen", "Jessica", "Eddie", "Sarah"]
studentList.push("Mary");
function checkArray(){
    return studentList.sort()
}
console.log(checkArray());
//Which of the following will return "Jessica" in the following array?
// answer is list[2]




/*Grocery List Array:
Create an array called groceryList and add "granola", "milk", and "eggs"*/
let groceryList = ["granola", "milk", "eggs"];
console.log(groceryList);
//What is the index of "Eddie" in the following array?
//list = ["Eddie", "Sarah", "Jessica"] answer is .0.





/*Write a Function to Reverse an Array:
Write a function called reverseArray that accepts an array as an argument. Within the function, reverse the array. Return the reversed array.
You must use a method of the Array object.*/

function reverseArray (array){
    let myrray = ["Hello", "Goodbay", "Eddie"];
    return array.reverse();
}
console.log(reverseArray);

//Which of the following sorts an array alphabetically? answer is (Sort).






/*Replace an Element of An Array:
Given the attendanceList array, replace the first element in the array with "Steven".
Remember, arrays are 0 base index, meaning the first element is in position 0. For example, array[0] accesses the first element.*/

//attendanceList[0] = "Steven";
//console.log(attendanceList);

//Which of the following adds a new value to the end of an array?  A= PUSH



//Week 4 - Arrow Functions
/* Monthly Payment:
Convert the following function myFunction into an arrow function. Refer to the new function as monthlyPayment.*/

/*function myFunction(yearlyPayment){
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
} */

    let monthlyPayment = yearlyPayment => (yearlyPayment / 12).toFixed(2);
console.log(monthlyPayment(a));




