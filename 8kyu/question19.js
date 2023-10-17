// Reversed Strings
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

Solution


function solution(str){
let original = str;
let reversed = original.split('').reverse().join('');
return reversed;
}