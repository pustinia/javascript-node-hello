// ES5
var a = 3;
console.log(a);
console.log(typeof a); // number type

// ES6
const b = 4.12;
console.log(b);
console.log(typeof b); // number type

const c = 'hello';
console.log(c);
console.log(typeof c); // string type

// backtick in ES6
const d = `new backtick values are ${a}, ${c}`;
console.log(d);

// boolean type
const e = false;
console.log(e);
console.log(typeof e); // boolean type

// test boolean, 0 = false
if(0){
    console.log('not printed');
}else{
    console.log('0 = false .');
}

let f; // undefined  = false
if(f){
    console.log('not printed');
}else{
    console.log('what is f ?',f); // undefined = false
}

// compare undefined
if(f === undefined){
    console.log('f === undefined');
}
if(f == undefined){
    console.log('f == undefined');
}

// object type
const myObj = {};
myObj.first = 1;
myObj.second = 'this is string.';
console.log(myObj.first);
console.log(myObj.second);

const result = 3**4;
console.log(result); // square operator


