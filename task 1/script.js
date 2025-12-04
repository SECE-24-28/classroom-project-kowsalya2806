/*/named function-funtion declaration
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

//function expression-un named function
var sub = function (a, b) {
  return a - b;
};

console.log(sub(12, 2));

//ECMAScript 6
var div = (a, b) => {
  return a / b;
};

console.log(div(20, 2));

//if it contains one return statememt

var div = (a, b) => a / b;

console.log(div(20, 2));

//if it contain one argument

var mul = (a) => a * 10;

console.log(mul(10)); 

for (let i = 2; i <= 20; i += 2) {
  console.log("Number:", i);
}

let j = 2;
while (j <= 20) {
  console.log(j);
  j += 2;
} 

var arr = [1, 2, 3, 45, 67, 9];
console.log(arr[4]);

var newARR = new Array(1, 2, 3, 4, 5);
console.log(arr[3]);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i <= 10; i++) {
  console.log(arr);
}

let arr = ["a", "b", "c"];
arr.push("d");
console.log(arr);

arr.unshift("z");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr); 

//higher-order function
//a func which takes another function as an arg
//callback functio
//a fucn which is passed as an arg to another func

function a(arg1, arg2, arg3) {
  console.log("Inside function a", arg2);
  if (arg3 > 10) {
    arg1(arg3);
  }
}

function b(arg) {
  console.log("Inside function b", arg);
}

a(b, 10, 20);

function multiplyby(factor) {  
  return function (number) {
    return number * factor;
  };
}

const mulby2 = multiplyby(2);
const mulby4 = multiplyby(4);

console.log(mulby2(10));
console.log(mulby4(20));

//higher-ord
//functions accepts another func as aarg
//function return another func

//to run a function for every element inside an array.
const arr = [1, 2, 3, 4, 5];
arr.forEach((el) => {
  console.log("el=>", el);
}); */

const arr = [1, 2, 3, 4, 5];
//const newArr = new Array();
//arr.forEach((el) => {
//newArr.push(el * 2);
//});
//console.log(newArr);

//arr.map is also a foreach func
//map will  create the array default
//map willl return an array with length eqaul to original array
//map is used to transform array elements

const res = arr.map((el) => {
  return el * 3;
});
console.log(res);
