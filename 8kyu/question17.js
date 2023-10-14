// Simple multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.



Solution

function simpleMultiplication(number) {
    let n = number;
      if(n % 2 === 0) {
      n *= 8;
    }else{ 
     n *= 9;
    }
  return n;
  }



