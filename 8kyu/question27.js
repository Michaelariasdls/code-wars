// Third Angle of a Triangle


// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle



// Parameters: What are the parameters of the function?
// (a,b)


// Return: What will the function return?
// The fuction will return 0

// Examples: Understanding the expected return 


// Pseudocode: Steps to code 
// Use the two known angles to find the third angle,
// use the formula below

// All you have to do is add up the measurements 
// of the sides you know (30° + 90° = 120°) and subtract
// that number from 180°. So, 180° - 120° = 60°.
// The measurement of that third angle is 60°.

function otherAngle(a, b) {
    let c = 180 - (a + b)
    return c;
 }