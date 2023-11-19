const numbers = [12,13,1,2,3,4,5,6,7,8,9,10,11, 14];

// Using the @@iterator object ES2015
console.log("**************************************");
console.log("numbers array:");
console.log(numbers.join(', '));

console.log("Using the @@iterator object, ES2015:");
// Symbol.iterator property of the array
let iterator = numbers[Symbol.iterator]();
console.log("iterator.next().value");
console.log(iterator.next().value);
console.log(iterator.next().value);

console.log("use for of numbers[Symbol.iterator]()");
for (const num of numbers[Symbol.iterator]()) {
    //console.log(num);
}

// Array entries, keys, and values
// three ways of retrieving iterators from an array
console.log("**************************************");
//console.log("Array entries, keys, and values:");
console.log("Array entries method returns @@iterator, which contains key/value pairs:");

console.log("let aEntries = numbers.entries();");
console.log("console.log(aEntries.next().value);");
let aEntries = numbers.entries(); // retrieve iterator of key/value
console.log(aEntries.next().value); // [0, 1] - position 0, value 1
console.log(aEntries.next().value); // [1, 2] - position 1, value 2
console.log(aEntries.next().value);
// for (const n of aEntries) console.log(n);

console.log("Array keys:"); // retrieve iterator of keys
console.log("const aKeys = numbers.keys();");
const aKeys = numbers.keys();
console.log("aKeys.next()");
console.log(aKeys.next()); // {value: 0, done: false }
console.log(aKeys.next()); // {value: 1, done: false }
console.log(aKeys.next());

console.log("Array values: retrieve iterator of values."); // retrieve iterator of values
console.log("const aValues = numbers.values();");
const aValues = numbers.values();
console.log("aValues.next()");
console.log(aValues.next()); // {value: 0, done: false }
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next());


// Using the from method
console.log("**************************************");
console.log("Using the from method: creates a new array from an existing one");
console.log("let evens = Array.from(numbers, x => (x % 2 == 0));");

let evens = Array.from(numbers, x => (x % 2 == 0));
console.log(evens.join(', '));














