// Write a JavaScript function to check if a given string is a palindrome 
// (reads the same forwards and backwards). 

function checkPalindrome(word) {
    reverseWord = word.split("").reverse().join("");
    result = (word == reverseWord);
    return result

    // for (i=0; i<word.length; i++){
    //     if (word[i]!=reverseWord[i]) {
    //         return false
    //     }
    // }
    // return true
}

// result = checkPalindrome("statss")
// console.log(result)

// 4. Write a JavaScript program to reverse a given string. 
function reverseString(word) {
    reverse_word = []
    for (i=0;i<word.length;i++) {
        reverse_word.push(word[word.length-1-i])
    }
    return reverse_word.join('')
}

// reverse_word = reverseString("hello");
// console.log(reverse_word);

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 
evenArray = (input_array) => {
    even_array = []
    for(i=0;i<input_array.length;i++){
        if (input_array[i]%2==0) {
            even_array.push(input_array[i])
        }
    }
    return even_array
}

// var numbers = [0,1,2,3,4,5,6,7,8,9,10];
// console.log(evenArray(numbers))

// Write a JavaScript program to calculate the factorial of a given number. 
function factorial(number) {
    // result = 1
    // for (i=1;i<=number;i++){
    //     result *= i
    // }
    // return result

    if ((number == 0) || (number ==1)) {
        return 1
    }
    else {
        return number*factorial(number-1)
    }
}

// console.log(factorial(9))

// 7. Write a JavaScript function to check if a given number is prime. 
prime = (number) => {
    is_prime = true
    for(i=2;i<Math.sqrt(number);i++){
        if (number % i == 0){
            is_prime = false
            break
        }
    }
    return is_prime
}

// console.log(prime(89))

// Write a JavaScript program to find the largest element in a nested array. 

maxNestedArray = (nestArray) => {
    max = -1000
    for(i=0;i<nestArray.length;i++){
        for (j=0;j<nestArray[0].length;j++){
            if(nestArray[i][j]>max){
                max = nestArray[i][j]
            }
        }
    }
    return max
}

// var nestedArray = new Array();
// nestedArray = [[0,1,2],[3,4,5],[6,7,-8]];
// console.log(maxNestedArray(nestedArray));

// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
//  1 1 2 3 5 8 13 21 34 55
function fibonacci(number) {
    prev = 1;
    curr = 1;
    seq = [1,1];
    
    if (number == 0){
        return [];
    }
    else if (number == 1){
        return 1;
    }
    else if (number == 2){
        return [1,1];
    }
    else {
        while (number > seq.length){
            update = curr+prev;
            seq.push(update);
            prev = curr;
            curr = update;
        }
        return seq
    }   
}

// console.log(fibonacci(0))

// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 
function titleCase(input_string){
    string_array = input_string.split('');
    for(i=0;i<string_array.length;i++){
        if (i == 0){
            string_array[i] = string_array[i].toUpperCase()
        }
        else if (string_array[i-1] == " "){
            string_array[i] = string_array[i].toUpperCase()
        }
    }
    return string_array
}

console.log(titleCase("hello World"))