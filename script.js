"use strict";

function curry(a) {
  return function(b) {
    return a * b; 
  };
}

const result = curry(5)(2); 
console.log(result); 





