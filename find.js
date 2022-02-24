const newArray = ['reya', 'sadid', 'ibrar', 'nubaied'];
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16, 34, 44];

const found = newArray.find(name => name.length % 2 == 0);
console.log(found);

const found1 = array.find(num => num > 10);
console.log(found1);
