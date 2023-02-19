/*Function checkout:
Create a function named checkout that accepts 2 parameters named cardBalance and price. If the price is more than the card balance, return false; otherwise, return the new card balance.
The task here is to write the function checkout.*/

var  a;
var  b;
function checkout(cardBalance, price){
    if (price > cardBalance) { 
        return false; 
    } else { 
        return cardBalance - price; 
    }
}
console.log(checkout(a,b,40));

//What would be returned if we called checkout(500, 100, 40)?
//answer is 400 will returned.






/*Function speakFriend:
Write a function named speakFriend that takes one parameter. Use console.log() to print the requested information to the console.
Return the string "Access Denied" Except if the passed in value is equal to "Mellon", then return "Enter"*/
var a;
function speakFriend(a){
    if(a == "Mellon"){
        return "Enter";
    } 
    return "Access Denied";
}
console.log(speakFriend(a));

//In the Instructor's Solution, an else statement was not used. Why doesn't this function return "Access Denied" every time?
// answer is //function will end once returned. Anything after will be ignored and the function will exit.




/* Function loopUntilX:
Write a function named loopUntilX that takes one parameter. Within the function, write a loop that loops as many times as the passed in value, starting at 0. Within the loop, print the number of iterations to the console. Once the loop is done, return true.
The task here is to write the function loopUntilX. */
var x
function loopUntilX (x){
    for (i = 0; i < x; i++){
        console.log (i);
    } 
     return true;   
}
console.log(loopUntilX(x));

//What would be returned if the string "testing" were passed instead of a number?
// answer is TRUE.






/* Function returnSum:
Create a function named returnSum that accepts 3 integer parameters named num1, num2, and num3 and returns the sum of the three parameters.
The task here is to write the function returnSum.  */

var a;
var b; 
var c; 
function returnSum(num1, num2, num3){
    return num1 + num2 + num3;
}
console.log(returnSum(a,b,c));

//What would be returned if we run returnSum(2,3)?
//answer is NaN





/*Function sumOfTwo:
Write a function named sumOfTwo that takes two numbers as parameters and returns the sum. The variables num1 and num2 are declared and initialized, and used in the call to sumOfTwo.
The task here is to write the function sumOfTwo.*/
var num1 
var num2 
 function sumOfTwo(a, b){
    return a + b;
}
console.log(sumOfTwo(num1, num2));
/*What would be returned if only one parameter was passed?
Example: sumOfTwo(3);///   answer is NaN.*/





/*Function isBlue:
Create a function named isBlue. isBlue will take one parameter, and it will return true if it is passed "blue", otherwise it will return false.
The task here is to write the function isBlue.
The passed value can be "blue" with any of the letters capitalized as well. (i.e."Blue", "bLue", "BLUE", etc…) All forms of the word blue should return true. Use toLowerCase() on the passed value to accomplish this. For example, myVariable.toLowerCase() will convert whatever myVariable is to all lowercase.*/

/*var  isBlue
function isBlue(var1){
    return var1.toLowerCase() === "blue";
}
console.log(isBlue(a));*/

//If we wanted to use toUpperCase() what would we change?
//answer is C-  "blue" would become "BLUE"





/*Function findCircumference:
Create a function named findCircumference that returns the circumference of a circle if given the radius.
The formula to find the circumference of a circle is PI * 2r where r is the radius.*/




