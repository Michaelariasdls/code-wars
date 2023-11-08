// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"




function reverseWords(str) {                            //this is the split
    let splitString = str.split(" ");   //[a, p, p, l, e],> EMPTY SPACE <[s, a, u, c, e]
    let reversedWords = splitString.map(wordFlip => {
    return wordFlip.split("").reverse().join("")
  });
   
    return reversedWords.join(" "); 
  }
  reverseWords("tom has alot of apples")
  
       //first split the input string into an array of words
          //the space in between the words is where the split is
  
       //then split each charecter 
       //reverse the characters 
       //finally join them back together.
       //After reversing all the words, we join them back with spaces to get the desired output.
  
  
  
  //first attempt
  // function reverseWords(str) {                            //this is the split
  //   let splitString = str.split(" ");   //[a, p, p, l, e],> EMPTY SPACE <[s, a, u, c, e]
    
  //   let wordFlip = splitString.map
    
  //   let reverseArray = splitString.reverse();     //[e, l, p, p, a]
  //   let joinArray = reverseArray.join("");       //"elppa"
  //   return joinArray
  // }
  // reverseWords("tom has alot of apples")
  
  // im trying to replicate the example
  // "This is an example!" ==> "sihT si na !elpmaxe"