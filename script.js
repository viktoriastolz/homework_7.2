"use strict";

function curry(c) { 
  return function(a) {
    return function(b) {
      return c(a, b);
    };
  };
}

function multiply(a, b) {
  return a * b;
}

let curriedMultiply = curry(multiply);

alert(curriedMultiply(5)(2)); // 10




