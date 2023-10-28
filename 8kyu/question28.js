// P.R.E.P Outloud

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.



// Cleaner Solution
// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//   }

Solution
function isPalindrome(x) {
    // your code here
    x = x.toLowerCase();
    x = x.replace(/\s/g,'');
    
    return x === x.split('').reverse().join('');
    
  }