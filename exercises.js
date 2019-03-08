/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

//make a for loop and decrement through the string while assigning to another array

function firstReverse(str){
    // use an if statement to check if the parameter is a string using the typeof keyword
    // if the typeof keyword does not return the correct string then the function ceases 
    // at the if statement and returns null.
    // if the typeof keyword does return the correct string then the function continues.
    if (typeof str != "string"){
        return null;
    }
    // declare an array variable to hold the characters of the string parameter
    // in reverse order.
    var strArr = [];
    // use a for loop to count from the index of the last character in the
    // string parameter to the first character of the string parameter. 
    for (count = str.length - 1; count >= 0; count--){
        //console.log(count + " " + str.charAt(count));
        //in each loop the character at the current index is copied
        //into the coressponding array variable.
        strArr.push(str.charAt(count));
    }
    // use the join function to concatenate each element of the array into
    // a single string with no seperating characters.
    return strArr.join("");
}

 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
function alphaOrder(str){
    // start by declaring an array to hold the string's characters.
    var strArr = [];
    // use an if statement that will cease the function and return null if
    // typeof does not return the desired value
    if (typeof str != "string"){
        return null;
    }
    // use a for loop to seperate all the characters of the string in their current
    // order and fill an array with those characters.
    for (count = 0; count < str.length; count++){
        strArr.push(str.charAt(count));
    }
    // use the sort function to arrange the elements of the array in alphabetical 
    // order according to the content of the element.
    strArr.sort();
    // use the join function to concatenate the contents of the array into
    // a single string with the contents with no separating character
    // and return its value.
    return strArr.join("");
}

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */
function vowelCount(numArg){
    // use if statement to see if typeof returns the desired value. If the
    // check fails then the function ceases and returns null.
    if (typeof numArg != "string")
    {
        return null;
    }
    // declare a variable to hold the count of vowels in the string.
    var results = 0;
    // declare a variable that holds a copy of the parameter, but converts all
    // letters to lowercase, which allows the function to find vowels regardless
    // of whether the string given to the parameter uses upper or lowercase letters.
    // Using a separate variable also lets given data remain unchanged.
    var numArgCopy = numArg.toLowerCase();
    // use a for loop to check each character in the string parameter.
    for (count = 0; count < numArgCopy.length; count++)
    {
        // use a series of if-else statements to check if the character at 
        // the corressponding index in the string parameter matches the 
        // value contained in the statements expression.
        // If the character matches then increment the vowel count by one and
        // skip the remaining if-else statements, therefore proceeding to the
        // next loop for the next character.
        if (numArgCopy.charAt(count) === "a")
        {
            results++;
        } 
        else if (numArgCopy.charAt(count) === "e")
        {
            results++;
        } 
        else if (numArg.charAt(count) === "i")
        {
            results++;
        } 
        else if (numArg.charAt(count) === "o")
        {
            results++;
        } 
        else if (numArg.charAt(count) === "u")
        {
            results++;
        }
    }
    // after each character in the string parameter is checked the function
    // returns the value of vowel count.
    return results;
    
}

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */

 // its acutally a number being passed in.
function timeConvert(strParam){
    // first use an if statement to check if the typeof keyword returns a
    // value of "number". If so then continue the function, otherwise cease
    // execution.
    if (typeof strParam != "number"){
        return null;
    }
    //console.log(strParam);
    // determine the remainder of the strParam divided by the amount of minutes
    // in an hour. Store that amount in the minutes variable.
    var minutes = strParam % 60;
    //console.log(minutes);
    // subtract the value of minutes from the function parameter and store in
    // hours variable. 
    var hours = strParam - minutes;
    // now divide hours by the amount of minutes in an hour. by subtracting 
    // earlier what would of been the remainder of this operation, we get 
    // hours as a whole number.
    hours = hours / 60;
    //console.log(hours);
    // concatenate the values of minutes and hours into a single string
    // separate with colon.
    return hours.toString() + ":" + minutes.toString();
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */

 function repeatString(strParam, numParam){
     // use an if statement to check if the first parameter is a string.
     // if the parameter isn't a string then return null and cease function.
    if (typeof strParam != "string"){
        return null;
    }
    // use an if statement to check if the second parameter is a number
    // if the parameter isn't a string then return null and cease function.
    if (typeof numParam != "number"){
        return null;
    }
    // use an if statement that checks if the second parameter is a positive number
    if (numParam >= 0){
        // use the repeat function to construct a new string copied the amount
        // specified by the second parameter and store in a variable.
        var result = strParam.repeat(numParam);
        // return the value of the result variable.
        return result;
    // follow with if else that checks if the second parameter is a negative number 
    } else if (numParam < 0){
        // return empty string
        return "";
    }
    
 }


/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
