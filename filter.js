const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 34, 44];
const newArray = array.filter(number => number % 2 !== 0);
console.log(newArray)

const newArray1 = ['reya', 'sadid', 'ibrar', 'nubaied'];
const found = newArray1.filter(name => name.length % 2 !== 0);
console.log(found);
console.log(...found);