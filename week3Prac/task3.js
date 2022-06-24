// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/date
const now = new Date(Date.now());
console.log('the current time is');
console.log(now.toDateString());

// const today = new Date();

// // DISCOURAGED: may not work in all runtimes
// const birthday = new Date('December 17, 1995 03:24:00');

// // This is ISO8601-compliant and will work reliably
// const birthday = new Date('1995-12-17T03:24:00');

// const birthday = new Date(1995, 11, 17); // the month is 0-indexed
// const birthday = new Date(1995, 11, 17, 3, 24, 0);
// const birthday = new Date(628021800000); // passing epoch timestamp

// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getMonth()); // please notice the month is 0-indexed
// console.log(now.getFullYear());

// now.setFullYear(2020);
// console.log(now.getFullYear());

// now.setDate(10);
// console.log(now.getDate());
// let newDate = new Date();
// setTimeout(() => {
//   newDate = Date.now();
//   console.log(newDate - now);
// }, 1000);
