// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

// find method
console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));

// findIndex method
// -1 means not found
console.log(fruits.findIndex((fruit) => fruit === 'Apple'));
console.log((firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1')));

// push method
// push adds an element to the end of the array
// push return a new length of the array
console.log(fruits.push('Kiwi'));
console.log(fruits);

// pop method
// pop removes the last element of the array
// pop returns the removed element
console.log(fruits.pop());
console.log(fruits);

let numbers = [3, 2, 5, 4, 7];
// we can use sort method to sort the array
console.log(numbers.sort());

// slice method
// slice is to cut out a part of the array
console.log(fruits.slice(1, 3));

// if we only give 1 parameter, it will cut out the rest of the array
console.log(fruits.slice(1));
console.log(fruits.slice(-1));

// we can use foreach to iterate through the array
fruits.forEach((fruit) => console.log(fruit));

// more information please check the mdn web docs
