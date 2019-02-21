// style at ES5
function myFunc(a,b) {
    return a+b;
}
const result = myFunc(1,2);
console.log(result);    // plus result
console.log(myFunc());   // NaN , Not a number

// set function with variable
const myFunction_0 = function (a,b) {
    return a + b;
};
console.log(myFunction_0(2,3));

// set function with variable a,b,c
const myFunction_1 = function (a,b,c) {
  return c(a,b);
};
const result2 = myFunction_1(3,4,myFunction_0);
console.log(result2);

// set function with default variable
const defFunction = function (a=0, b=0) {
    return a + b;
};
console.log(defFunction());

// set function style at ES6
// using fat arrow  =>
const fooNew = (x,y)=> x + y;
console.log(fooNew(5,5));