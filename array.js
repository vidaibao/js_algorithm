const numbers = [12,13,1,2,3,6,7,4,5,8,9,10,11,14];

// Using the @@iterator object ES2015
console.log("**************************************");
console.log("numbers array:", numbers.join(', '));
//console.log(numbers.join(', '));

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
console.log(aValues.next()); // {value: 12, done: false }
console.log(aValues.next()); // {value: 13, done: false }
console.log(aValues.next()); // {value: 1, done: false }


// Using the from method
console.log("**************************************");
console.log("Using the from method: creates a new array from an existing one");
console.log("let evens = Array.from(numbers, x => (x % 2 == 0));");

let evens = Array.from(numbers, x => (x % 2 == 0));
console.log(evens.join(', '));

// Using the Array.of method
// The spread operator (...) will spread each of the values of the numbers array into arguments
let numbersCopy = Array.of(...numbers); // the same as using Array.from(numbers).
console.log("let numbersCopy = Array.of(...numbers);");
console.log(`let numbersCopy = ${numbersCopy.toString()}`);

// Using the fill method
console.log("**************************************");
console.log("Using the fill method: fills the array with a value");
numbersCopy.fill(0);
console.log(`numbersCopy.fill(0) = ${numbersCopy.toString()}`);
numbersCopy.fill(2, 1);
console.log(`numbersCopy.fill(2, 1) = ${numbersCopy.toString()}`);
numbersCopy.fill(1, 3, 5);
console.log(`numbersCopy.fill(1, 3, 5) = ${numbersCopy.toString()}`);

// Using the copyWithin method
console.log("**************************************");
console.log("the copyWithin method: copies a sequence of values of the array into the position of a start index.");
let copyArray = [1, 2, 3, 4, 5, 6];
console.log("copyArray", copyArray);
console.log("copyArray.copyWithin(0, 3);", copyArray.copyWithin(0, 3));
console.log("copy the elements starting in position 3 and ending in position 5 (not inclusive) to the position 1 of the array");
console.log("copyArray.copyWithin(1, 3, 5);", copyArray.copyWithin(1, 3, 5));

// Sorting elements
console.log("***************** Sorting elements *********************");
console.log("numbers.sort():", numbers.sort());

console.log("numbers.reverse():", numbers.reverse());

function compare (a, b) {
    if (a === b) return 0;
    return a < b ? -1 : 1;
}
console.log("numbers.sort(compare):", numbers.sort(compare));

// Custom sorting
console.log("**************************************");
console.log("Custom sorting friends list");

const friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 20 },
    { name: 'Chris', age: 25 }, // trailing comma ES2017
];
friends.forEach( x => console.log(x.name, x.age) );
function comparePerson (a, b) {
    if (a.age === b.age) return a.name < b.name ? -1 : 1;
    return a.age < b.age ? -1 : 1; 
}
console.log("friends.sort(comparePerson)", friends.sort(comparePerson));


// Sorting strings
console.log("**************************************");
console.log("Sorting strings names list");
let names = ['Ana', 'ana', 'john', 'John'];
console.log("names", names);
/* JavaScript compares each character according to its ASCII value. For
example, A, J, a, and j have the decimal ASCII values of A: 65, J: 74, a: 97, and j: 106.*/
console.log("names.sort()", names.sort());

names = ['Ana', 'ana', 'john', 'John'];
console.log("names.sort( (a, b.toLowerCase())" );
console.log(names.sort( (a, b) => {
    if (a.toLowerCase() == b.toLowerCase()) return 0;
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
} )); // ['Ana', 'ana', 'john', 'John']

console.log("names.sort( (a, b) => a.localeCompare(b) )", 
            names.sort( (a, b) => a.localeCompare(b) ));
        // ['ana', 'Ana', 'john', 'John']

// Searching
console.log("**************************************");
console.log("Searching");

console.log("numbers.toString()", numbers.toString());
console.log("numbers.indexOf(10)", numbers.indexOf(10));
console.log("numbers.indexOf(100)", numbers.indexOf(100));

numbers.push(10);
console.log("numbers.push(10):", numbers.toString());
console.log("numbers.lastIndexOf(10)", numbers.lastIndexOf(10));
console.log("numbers.lastIndexOf(100)", numbers.lastIndexOf(100));

// ECMAScript 2015 - the find and findIndex methods
console.log("**************************************");
console.log("ECMAScript 2015 - the find and findIndex methods");
console.log("numbers:", numbers.toString());

console.log("multipleOf13 = val => val % 13 == 0"); 
function multipleOf13 (value, index, array) {
    return value % 13 == 0;
}
console.log("numbers.find(multipleOf13):", numbers.find(multipleOf13 = val => val % 13 == 0));
console.log("numbers.findIndex(multipleOf13):", numbers.findIndex(multipleOf13));

// ECMAScript 2016 - using the includes method
console.log("**************************************");
console.log("ECMAScript 2016 - using the includes method");
console.log("numbers:", numbers.toString());

console.log("numbers.includes(15)", numbers.includes(15));
console.log("numbers.includes(20)", numbers.includes(20));
// false because the element 12 does not exist after position 13
console.log("numbers.includes(12, 13)", numbers.includes(12, 13));

































/**

1. **プログラミング言語:**
   - 主要なプログラミング言語（例: Java、Python、JavaScript）において、実務経験があります。
   - オブジェクト指向プログラミング（OOP）の理解と適用ができます。
   - バックエンド開発（Spring Bootなど）およびフロントエンド開発（Reactなど）の経験があります。

2. **データベース:**
   - SQLを使用してリレーショナルデータベース（MySQL、PostgreSQL）を設計および操作できます。
   - NoSQLデータベース（MongoDB）の経験があります。
   - データモデリングとデータベース最適化に関する知識があります。

3. **ウェブ開発:**
   - モダンなウェブ開発フレームワーク（Django、Flask、Express）を使用した経験があります。
   - RESTful APIの設計と実装ができます。
   - フロントエンドの開発において、HTML、CSS、JavaScript（React、Vueなど）を活用できます。

4. **クラウドプラットフォーム:**
   - AWS、Azure、またはGoogle Cloud Platformなどのクラウドプラットフォームでの実務経験があります。
   - インフラストラクチャのコード化（Terraformなど）ができます。

5. **バージョン管理:**
   - Gitを使用してソースコードのバージョン管理を行えます。
   - チームと協力して複数のブランチでの作業経験があります。

6. **セキュリティ:**
   - ウェブアプリケーションセキュリティの基本原則に精通しています。
   - OWASPガイドラインに基づいたセキュリティ対策ができます。

7. **問題解決力とコミュニケーション:**
   - 複雑な技術的課題に対して問題解決のスキルがあります。
   - チームとの効果的なコミュニケーションが可能です。

これらのポイントはあくまで一例であり、あなたの経験やスキルに合わせて適切に修正してください。また、具体的なプロジェクトや実績を挙げることで、より具体的で印象的な履歴書に仕上げることができます。
 */










